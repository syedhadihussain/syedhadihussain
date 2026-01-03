import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { FileText, CheckCircle } from "lucide-react";

interface TermsConditionsSectionProps {
  termsAndConditions: string;
  onTermsChange?: (terms: string) => void;
  hasAgreed: boolean;
  onAgreeChange?: (agreed: boolean) => void;
  isEditable: boolean;
  isLocked: boolean;
  isClient: boolean;
}

export const TermsConditionsSection = ({
  termsAndConditions,
  onTermsChange,
  hasAgreed,
  onAgreeChange,
  isEditable,
  isLocked,
  isClient
}: TermsConditionsSectionProps) => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const canEditTerms = isEditable && !isLocked && !isClient;
  const canAgree = !isLocked && isClient && hasScrolledToBottom;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const isAtBottom = Math.abs(target.scrollHeight - target.scrollTop - target.clientHeight) < 10;
    if (isAtBottom) {
      setHasScrolledToBottom(true);
    }
  };

  useEffect(() => {
    if (termsAndConditions.length < 500) {
      setHasScrolledToBottom(true);
    }
  }, [termsAndConditions]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Terms & Conditions
        </CardTitle>
        <CardDescription>
          {isClient 
            ? "Please read the entire terms and conditions before agreeing" 
            : "Legal terms governing this agreement"
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {canEditTerms ? (
          <div>
            <Label>Edit Terms & Conditions</Label>
            <Textarea
              className="mt-1.5 min-h-[300px] font-mono text-sm"
              placeholder="Enter the full terms and conditions..."
              value={termsAndConditions}
              onChange={(e) => onTermsChange?.(e.target.value)}
            />
          </div>
        ) : (
          <>
            <ScrollArea 
              className="h-64 border rounded-lg p-4 bg-muted/30"
              onScrollCapture={handleScroll}
            >
              <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                {termsAndConditions || "No terms and conditions specified."}
              </div>
            </ScrollArea>
            
            {isClient && !isLocked && (
              <div className="space-y-3">
                {!hasScrolledToBottom && (
                  <p className="text-sm text-amber-600 dark:text-amber-400 flex items-center gap-2">
                    ⚠️ Please scroll through and read the entire terms and conditions
                  </p>
                )}
                
                <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <Checkbox
                    id="agree-terms"
                    checked={hasAgreed}
                    onCheckedChange={(checked) => onAgreeChange?.(checked === true)}
                    disabled={!canAgree}
                  />
                  <div className="space-y-1">
                    <Label 
                      htmlFor="agree-terms" 
                      className={`cursor-pointer ${!canAgree ? 'opacity-50' : ''}`}
                    >
                      I have read and agree to the Terms & Conditions
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      This checkbox must be checked before you can sign the agreement
                    </p>
                  </div>
                </div>
              </div>
            )}

            {isLocked && hasAgreed && (
              <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-green-700 dark:text-green-400">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Terms & Conditions accepted</span>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TermsConditionsSection;
