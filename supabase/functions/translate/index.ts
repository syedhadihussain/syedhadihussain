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

    // Deduplicate, keep stable order
    const uniqueTexts = Array.from(new Set(texts)).slice(0, 60);

    const systemPrompt = `You are a professional UI translator. Translate each input string into ${targetLanguage}.
Rules:
- Preserve brand names and proper nouns when appropriate.
- Preserve URLs, emails, phone numbers, currency symbols, and numbers.
- Keep the meaning and tone.
- Return ONLY valid JSON: {"translations": {"<input>": "<translation>", ...}}`;

    const userPrompt = `Translate the following strings (JSON array):\n${JSON.stringify(uniqueTexts)}`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        temperature: 0.2,
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
      throw new Error("Invalid AI response format");
    }

    // Gemini sometimes wraps JSON in markdown fences; strip them.
    const cleaned = content
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```\s*$/i, "")
      .trim();

    const parsed = JSON.parse(cleaned);
    const translations = parsed?.translations;

    if (!translations || typeof translations !== "object") {
      throw new Error("AI response missing translations object");
    }

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
