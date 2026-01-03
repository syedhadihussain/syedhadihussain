import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Hash PIN the same way as generation
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

    const { user_id, pin, pin_type } = await req.json();

    if (!user_id || !pin || !pin_type) {
      return new Response(
        JSON.stringify({ error: "user_id, pin, and pin_type are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const pinHash = await hashPin(pin);

    // Find valid PIN
    const { data: pinRecord, error: fetchError } = await supabase
      .from("secure_pins")
      .select("*")
      .eq("user_id", user_id)
      .eq("pin_type", pin_type)
      .eq("pin_hash", pinHash)
      .eq("is_used", false)
      .gt("expires_at", new Date().toISOString())
      .maybeSingle();

    if (fetchError) {
      console.error("Error fetching PIN:", fetchError);
      return new Response(
        JSON.stringify({ error: "Failed to verify PIN" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!pinRecord) {
      console.log(`Invalid or expired PIN for user ${user_id}`);
      return new Response(
        JSON.stringify({ success: false, error: "Invalid or expired PIN" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Mark PIN as used
    const { error: updateError } = await supabase
      .from("secure_pins")
      .update({ is_used: true, used_at: new Date().toISOString() })
      .eq("id", pinRecord.id);

    if (updateError) {
      console.error("Error marking PIN as used:", updateError);
    }

    // If onboarding PIN, update client profile
    if (pin_type === "onboarding") {
      await supabase
        .from("client_profiles")
        .update({
          onboarding_step: "profile_setup",
          onboarding_completed: false,
        })
        .eq("user_id", user_id);
    }

    console.log(`PIN verified successfully for user ${user_id}, type: ${pin_type}`);

    return new Response(
      JSON.stringify({ success: true, pin_id: pinRecord.id }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in verify-pin:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
