import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertTriangle } from "lucide-react";

interface PaymentRulesProps {
  latePaymentGrace: string;
  lateFeePercentage: string;
  suspensionConditions: string;
  reactivationFee: string;
  noRefundsClause: string;
  onRulesChange?: (rules: {
    latePaymentGrace: string;
    lateFeePercentage: string;
    suspensionConditions: string;
    reactivationFee: string;
    noRefundsClause: string;
  }) => void;
  isEditable: boolean;
  isLocked: boolean;
}

export const PaymentRulesSection = ({
  latePaymentGrace,
  lateFeePercentage,
  suspensionConditions,
  reactivationFee,
  noRefundsClause,
  onRulesChange,
  isEditable,
  isLocked
}: PaymentRulesProps) => {
  const canEdit = isEditable && !isLocked;

  const updateField = (field: string, value: string) => {
    if (!onRulesChange) return;
    onRulesChange({
      latePaymentGrace,
      lateFeePercentage,
      suspensionConditions,
      reactivationFee,
      noRefundsClause,
      [field]: value
    });
  };

  return (
    <Card className="border-amber-200 dark:border-amber-900/50">
      <CardHeader className="bg-amber-50 dark:bg-amber-900/20 rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
          <AlertTriangle className="h-5 w-5" />
          Payment Rules & Penalties
        </CardTitle>
        <CardDescription className="text-amber-600 dark:text-amber-500">
          Important payment policies and penalty conditions
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Late Payment Grace Period</Label>
            <Textarea
              placeholder="e.g., 3-7 days after due date"
              className="mt-1.5 min-h-[80px]"
              value={latePaymentGrace}
              onChange={(e) => updateField("latePaymentGrace", e.target.value)}
              disabled={!canEdit}
            />
          </div>

          <div>
            <Label>Late Fee Percentage</Label>
            <Textarea
              placeholder="e.g., 5% of outstanding balance per week"
              className="mt-1.5 min-h-[80px]"
              value={lateFeePercentage}
              onChange={(e) => updateField("lateFeePercentage", e.target.value)}
              disabled={!canEdit}
            />
          </div>

          <div>
            <Label>Service Suspension Conditions</Label>
            <Textarea
              placeholder="e.g., Services suspended after 14 days of non-payment..."
              className="mt-1.5 min-h-[80px]"
              value={suspensionConditions}
              onChange={(e) => updateField("suspensionConditions", e.target.value)}
              disabled={!canEdit}
            />
          </div>

          <div>
            <Label>Reactivation Fee (if applicable)</Label>
            <Textarea
              placeholder="e.g., $50 reactivation fee after suspension..."
              className="mt-1.5 min-h-[80px]"
              value={reactivationFee}
              onChange={(e) => updateField("reactivationFee", e.target.value)}
              disabled={!canEdit}
            />
          </div>
        </div>

        <div>
          <Label>No Refunds Clause (if applicable)</Label>
          <Textarea
            placeholder="e.g., All payments are non-refundable once services have commenced..."
            className="mt-1.5 min-h-[100px]"
            value={noRefundsClause}
            onChange={(e) => updateField("noRefundsClause", e.target.value)}
            disabled={!canEdit}
          />
        </div>

        {!canEdit && (
          <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-sm text-amber-700 dark:text-amber-400">
            <strong>Note:</strong> These payment rules are fixed and cannot be modified by the client.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentRulesSection;
