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
  // First, strip markdown code blocks
  let cleaned = str
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  // Find the first { and last } to extract just the JSON object
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.substring(firstBrace, lastBrace + 1);
  }
  
  return cleaned;
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
        JSON.stringify({ error: "targetLanguage and non-empty texts[] are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    // Deduplicate, keep stable order - reduce batch size to avoid long responses
    const uniqueTexts = Array.from(new Set(texts)).slice(0, 40);

    const systemPrompt = `You are a professional UI translator. Translate each input string into ${targetLanguage}.
Rules:
- Preserve brand names and proper nouns when appropriate.
- Preserve URLs, emails, phone numbers, currency symbols, and numbers.
- Keep the meaning and tone.
- Return ONLY valid JSON object with no additional text: {"translations": {"<input>": "<translation>", ...}}
- Do NOT add any explanation or text before or after the JSON.`;

    const userPrompt = `Translate the following strings (JSON array):\n${JSON.stringify(uniqueTexts)}`;

    console.log(`Translating ${uniqueTexts.length} strings to ${targetLanguage}`);

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        temperature: 0.1,
        max_tokens: 4000,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!aiRes.ok) {
      const errorText = await aiRes.text();
      console.error("AI gateway error:", aiRes.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI translation failed" }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const aiJson = await aiRes.json();
    const content = aiJson?.choices?.[0]?.message?.content;

    if (!content || typeof content !== "string") {
      console.error("Invalid AI response:", JSON.stringify(aiJson).slice(0, 500));
      throw new Error("Invalid AI response format");
    }

    console.log("Raw AI response length:", content.length);

    // Extract JSON from the response
    const cleaned = extractJSON(content);
    
    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch (parseError) {
      console.error("JSON parse error. Cleaned content:", cleaned.slice(0, 500));
      throw new Error("Failed to parse AI response as JSON");
    }
    
    const translations = parsed?.translations;

    if (!translations || typeof translations !== "object") {
      console.error("Missing translations in parsed response:", JSON.stringify(parsed).slice(0, 500));
      throw new Error("AI response missing translations object");
    }

    console.log(`Successfully translated ${Object.keys(translations).length} strings`);

    return new Response(JSON.stringify({ translations }), {
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