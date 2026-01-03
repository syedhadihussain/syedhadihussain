import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export type PinType = "onboarding" | "team_invite" | "sensitive_action" | "recovery";

export const usePinVerification = () => {
  const [loading, setLoading] = useState(false);

  const generatePin = useCallback(async (
    userId: string,
    pinType: PinType,
    expiresInHours: number = 24,
    createdBy?: string,
    metadata?: Record<string, unknown>
  ) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-pin", {
        body: {
          user_id: userId,
          pin_type: pinType,
          expires_in_hours: expiresInHours,
          created_by: createdBy,
          metadata: metadata || {},
        },
      });

      if (error) throw error;

      if (data.success) {
        toast.success("PIN generated successfully");
        return {
          success: true,
          pin: data.pin,
          pinId: data.pin_id,
          expiresAt: data.expires_at,
        };
      } else {
        throw new Error(data.error || "Failed to generate PIN");
      }
    } catch (error) {
      console.error("Error generating PIN:", error);
      toast.error("Failed to generate PIN");
      return { success: false, pin: null, pinId: null, expiresAt: null };
    } finally {
      setLoading(false);
    }
  }, []);

  const verifyPin = useCallback(async (
    userId: string,
    pin: string,
    pinType: PinType
  ) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("verify-pin", {
        body: {
          user_id: userId,
          pin,
          pin_type: pinType,
        },
      });

      if (error) throw error;

      if (data.success) {
        toast.success("PIN verified successfully");
        return { success: true, pinId: data.pin_id };
      } else {
        toast.error(data.error || "Invalid PIN");
        return { success: false, pinId: null };
      }
    } catch (error) {
      console.error("Error verifying PIN:", error);
      toast.error("Failed to verify PIN");
      return { success: false, pinId: null };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    generatePin,
    verifyPin,
  };
};
