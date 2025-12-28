import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface TranslateRequest {
  targetLanguage: string;
  texts: string[];
}

// Extract JSON object from a string that may contain extra text
function extractJSON(str: string): string {
  let cleaned = str
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.substring(firstBrace, lastBrace + 1);
  }

  return cleaned;
}

async function translateChunk(args: {
  targetLanguage: string;
  texts: string[];
}): Promise<Record<string, string>> {
  const { targetLanguage, texts } = args;

  const systemPrompt = `You are a professional UI translator. Translate each input string into ${targetLanguage}.
Rules:
- Preserve brand names and proper nouns when appropriate.
- Preserve URLs, emails, phone numbers, currency symbols, and numbers.
- Keep the meaning and tone.`;

  const userPrompt = `Translate the following strings (JSON array):\n${JSON.stringify(texts)}`;

  const body: any = {
    model: "google/gemini-2.5-flash",
    temperature: 0,
    max_tokens: 4000,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    // Use tool-calling to get reliable structured output
    tools: [
      {
        type: "function",
        function: {
          name: "return_translations",
          description: "Return translations for the provided strings.",
          parameters: {
            type: "object",
            properties: {
              translations: {
                type: "object",
                additionalProperties: { type: "string" },
              },
            },
            required: ["translations"],
            additionalProperties: false,
          },
        },
      },
    ],
    tool_choice: { type: "function", function: { name: "return_translations" } },
  };

  const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!aiRes.ok) {
    const errorText = await aiRes.text();
    console.error("AI gateway error:", aiRes.status, errorText);
    if (aiRes.status === 429) throw new Error("Rate limit exceeded (429)");
    if (aiRes.status === 402) throw new Error("Credits required (402)");
    throw new Error("AI translation failed");
  }

  const aiJson = await aiRes.json();

  // Preferred: tool call arguments
  const toolArgsStr =
    aiJson?.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments;
  if (toolArgsStr && typeof toolArgsStr === "string") {
    try {
      const parsedArgs = JSON.parse(toolArgsStr);
      const translations = parsedArgs?.translations;
      if (translations && typeof translations === "object") {
        return translations as Record<string, string>;
      }
    } catch (e) {
      console.error("Tool args JSON parse error:", String(e));
      // fall through to content parsing
    }
  }

  // Fallback: plain content (less reliable)
  const content = aiJson?.choices?.[0]?.message?.content;
  if (!content || typeof content !== "string") {
    console.error("Invalid AI response:", JSON.stringify(aiJson).slice(0, 700));
    throw new Error("Invalid AI response format");
  }

  const cleaned = extractJSON(content);

  let parsed: any;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    console.error("JSON parse error. Cleaned content:", cleaned.slice(0, 900));
    throw new Error("Failed to parse AI response as JSON");
  }

  const translations = parsed?.translations;
  if (!translations || typeof translations !== "object") {
    console.error(
      "Missing translations in parsed response:",
      JSON.stringify(parsed).slice(0, 500),
    );
    throw new Error("AI response missing translations object");
  }

  return translations as Record<string, string>;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!LOVABLE_API_KEY) {
      throw new Error("Missing LOVABLE_API_KEY");
    }

    const { targetLanguage, texts }: TranslateRequest = await req.json();

    if (!targetLanguage || !Array.isArray(texts) || texts.length === 0) {
      return new Response(
        JSON.stringify({
          error: "targetLanguage and non-empty texts[] are required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        },
      );
    }

    // Deduplicate, keep stable order; cap total to prevent runaway usage
    const uniqueTexts = Array.from(new Set(texts)).slice(0, 200);

    const CHUNK_SIZE = 25;
    const allTranslations: Record<string, string> = {};

    console.log(
      `Translating ${uniqueTexts.length} strings to ${targetLanguage} in chunks of ${CHUNK_SIZE}`,
    );

    for (let i = 0; i < uniqueTexts.length; i += CHUNK_SIZE) {
      const chunk = uniqueTexts.slice(i, i + CHUNK_SIZE);
      console.log(
        `Chunk ${Math.floor(i / CHUNK_SIZE) + 1}/${Math.ceil(uniqueTexts.length / CHUNK_SIZE)}: ${chunk.length} strings`,
      );

      const chunkTranslations = await translateChunk({
        targetLanguage,
        texts: chunk,
      });

      Object.assign(allTranslations, chunkTranslations);
    }

    console.log(`Successfully translated ${Object.keys(allTranslations).length} strings`);

    return new Response(JSON.stringify({ translations: allTranslations }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in translate function:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
