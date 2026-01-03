import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Generate a 6-digit PIN
function generatePin(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Simple hash function for PIN (in production, use bcrypt)
async function hashPin(pin: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(pin + Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"));
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { user_id, pin_type, expires_in_hours = 24, created_by, metadata = {} } = await req.json();

    if (!user_id || !pin_type) {
      return new Response(
        JSON.stringify({ error: "user_id and pin_type are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate PIN and hash it
    const pin = generatePin();
    const pinHash = await hashPin(pin);
    const expiresAt = new Date(Date.now() + expires_in_hours * 60 * 60 * 1000);

    // Invalidate any existing unused PINs of same type for this user
    await supabase
      .from("secure_pins")
      .update({ is_used: true, used_at: new Date().toISOString() })
      .eq("user_id", user_id)
      .eq("pin_type", pin_type)
      .eq("is_used", false);

    // Insert new PIN
    const { data, error } = await supabase
      .from("secure_pins")
      .insert({
        user_id,
        pin_hash: pinHash,
        pin_type,
        expires_at: expiresAt.toISOString(),
        created_by: created_by || null,
        metadata,
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating PIN:", error);
      return new Response(
        JSON.stringify({ error: "Failed to create PIN" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`PIN generated for user ${user_id}, type: ${pin_type}, expires: ${expiresAt}`);

    return new Response(
      JSON.stringify({
        success: true,
        pin, // Return plain PIN only once (for display/email)
        pin_id: data.id,
        expires_at: expiresAt.toISOString(),
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in generate-pin:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
