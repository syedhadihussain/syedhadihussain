import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign } from "lucide-react";

interface PricingData {
  monthlyFee: number | null;
  setupFee: number | null;
  contractLength: string;
  currency: string;
  billingCycle: string;
  paymentDueDate: string;
  paymentMethods: string[];
}

interface PricingSectionProps {
  pricing: PricingData;
  onPricingChange?: (pricing: PricingData) => void;
  isEditable: boolean;
  isLocked: boolean;
}

export const PricingSection = ({
  pricing,
  onPricingChange,
  isEditable,
  isLocked
}: PricingSectionProps) => {
  const updateField = (field: keyof PricingData, value: any) => {
    if (!onPricingChange) return;
    onPricingChange({ ...pricing, [field]: value });
  };

  const canEdit = isEditable && !isLocked;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Pricing & Payment Terms
        </CardTitle>
        <CardDescription>
          Payment details and billing information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Label>Monthly Fee</Label>
            <div className="relative mt-1.5">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                type="number"
                placeholder="0.00"
                className="pl-7"
                value={pricing.monthlyFee || ""}
                onChange={(e) => updateField("monthlyFee", parseFloat(e.target.value) || null)}
                disabled={!canEdit}
              />
            </div>
          </div>

          <div>
            <Label>Setup Fee (if any)</Label>
            <div className="relative mt-1.5">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                type="number"
                placeholder="0.00"
                className="pl-7"
                value={pricing.setupFee || ""}
                onChange={(e) => updateField("setupFee", parseFloat(e.target.value) || null)}
                disabled={!canEdit}
              />
            </div>
          </div>

          <div>
            <Label>Currency</Label>
            <Select
              value={pricing.currency}
              onValueChange={(v) => updateField("currency", v)}
              disabled={!canEdit}
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD - US Dollar</SelectItem>
                <SelectItem value="EUR">EUR - Euro</SelectItem>
                <SelectItem value="GBP">GBP - British Pound</SelectItem>
                <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                <SelectItem value="AED">AED - UAE Dirham</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Contract Length</Label>
            <Select
              value={pricing.contractLength}
              onValueChange={(v) => updateField("contractLength", v)}
              disabled={!canEdit}
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1 month">1 Month</SelectItem>
                <SelectItem value="3 months">3 Months</SelectItem>
                <SelectItem value="6 months">6 Months</SelectItem>
                <SelectItem value="12 months">12 Months</SelectItem>
                <SelectItem value="24 months">24 Months</SelectItem>
                <SelectItem value="ongoing">Ongoing (Month-to-Month)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Billing Cycle</Label>
            <Select
              value={pricing.billingCycle}
              onValueChange={(v) => updateField("billingCycle", v)}
              disabled={!canEdit}
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select cycle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="semi-annually">Semi-Annually</SelectItem>
                <SelectItem value="annually">Annually</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Payment Due Date</Label>
            <Select
              value={pricing.paymentDueDate}
              onValueChange={(v) => updateField("paymentDueDate", v)}
              disabled={!canEdit}
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue placeholder="Select due date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1st of month">1st of Month</SelectItem>
                <SelectItem value="15th of month">15th of Month</SelectItem>
                <SelectItem value="last day of month">Last Day of Month</SelectItem>
                <SelectItem value="upon receipt">Upon Receipt</SelectItem>
                <SelectItem value="net 7">Net 7 Days</SelectItem>
                <SelectItem value="net 15">Net 15 Days</SelectItem>
                <SelectItem value="net 30">Net 30 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label>Accepted Payment Methods</Label>
          <Input
            placeholder="e.g., Bank Transfer, Credit Card, PayPal"
            className="mt-1.5"
            value={pricing.paymentMethods.join(", ")}
            onChange={(e) => updateField("paymentMethods", e.target.value.split(",").map(s => s.trim()))}
            disabled={!canEdit}
          />
          <p className="text-xs text-muted-foreground mt-1">Separate methods with commas</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingSection;
