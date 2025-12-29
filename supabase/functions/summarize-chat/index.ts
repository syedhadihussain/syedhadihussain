import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SummarizeRequest {
  messages: { role: string; content: string; sender_name?: string; created_at?: string }[];
  conversationId: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, conversationId }: SummarizeRequest = await req.json();

    if (!messages || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "No messages to summarize" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Format messages for the AI
    const formattedMessages = messages
      .map((m) => `[${m.sender_name || m.role}]: ${m.content}`)
      .join("\n");

    const systemPrompt = `You are an AI assistant that summarizes conversations. Analyze the following conversation and provide:
1. A brief summary (2-3 sentences)
2. Key points discussed (bullet points, max 5)
3. Action items if any (bullet points)
4. Overall sentiment (positive, neutral, negative, mixed)

Respond in JSON format:
{
  "summary": "...",
  "key_points": ["point 1", "point 2"],
  "action_items": ["action 1", "action 2"],
  "sentiment": "positive|neutral|negative|mixed"
}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Please summarize this conversation:\n\n${formattedMessages}` },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const aiData = await response.json();
    const content = aiData.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No response from AI");
    }

    // Parse the JSON response
    let parsed;
    try {
      // Extract JSON from the response (in case it's wrapped in markdown)
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        parsed = JSON.parse(content);
      }
    } catch (e) {
      console.error("Failed to parse AI response:", content);
      parsed = {
        summary: content,
        key_points: [],
        action_items: [],
        sentiment: "neutral",
      };
    }

    return new Response(
      JSON.stringify({
        conversationId,
        summary: parsed.summary,
        key_points: parsed.key_points || [],
        action_items: parsed.action_items || [],
        sentiment: parsed.sentiment || "neutral",
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error in summarize-chat function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});