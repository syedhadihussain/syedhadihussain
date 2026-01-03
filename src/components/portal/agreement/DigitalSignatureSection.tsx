import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import SignaturePad from "@/components/portal/SignaturePad";
import { PenTool, CheckCircle, Clock, Lock, AlertTriangle } from "lucide-react";
import { format } from "date-fns";

interface DigitalSignatureSectionProps {
  clientFullName: string;
  signatureData: string | null;
  signedAt: string | null;
  signerIp: string | null;
  isLocked: boolean;
  hasAgreedToTerms: boolean;
  allRequiredFieldsComplete: boolean;
  onSign: (signatureData: string) => void;
}

export const DigitalSignatureSection = ({
  clientFullName,
  signatureData,
  signedAt,
  signerIp,
  isLocked,
  hasAgreedToTerms,
  allRequiredFieldsComplete,
  onSign
}: DigitalSignatureSectionProps) => {
  const [signatureMode, setSignatureMode] = useState<"draw" | "type">("draw");
  const [typedSignature, setTypedSignature] = useState("");

  const isSigned = signatureData !== null;
  const canSign = !isLocked && !isSigned && hasAgreedToTerms && allRequiredFieldsComplete;

  const handleTypedSign = () => {
    if (!typedSignature.trim()) return;
    
    // Create a canvas with the typed signature
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#1a1a2e";
    ctx.font = "italic 32px 'Dancing Script', cursive, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(typedSignature, canvas.width / 2, canvas.height / 2);

    const dataUrl = canvas.toDataURL("image/png");
    onSign(dataUrl);
  };

  if (isSigned) {
    return (
      <Card className="border-green-200 dark:border-green-900/50">
        <CardHeader className="bg-green-50 dark:bg-green-900/20 rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <CheckCircle className="h-5 w-5" />
            Agreement Signed & Locked
          </CardTitle>
          <CardDescription className="text-green-600 dark:text-green-500">
            This agreement has been signed and is now read-only
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-900/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-muted-foreground">Signed By</p>
                <p className="font-medium mt-1">{clientFullName}</p>
              </div>
              <div>
                <p className="font-medium text-muted-foreground">Signed At</p>
                <p className="mt-1">
                  {signedAt ? format(new Date(signedAt), "MMMM d, yyyy 'at' h:mm:ss a") : "—"}
                </p>
              </div>
              {signerIp && (
                <div>
                  <p className="font-medium text-muted-foreground">IP Address</p>
                  <p className="font-mono text-xs mt-1">{signerIp}</p>
                </div>
              )}
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-background">
            <p className="text-sm font-medium text-muted-foreground mb-2">Digital Signature</p>
            <img
              src={signatureData}
              alt="Digital signature"
              className="max-w-full h-auto max-h-32 mx-auto"
            />
          </div>

          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <Lock className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              This agreement has been signed and locked. No further changes are allowed.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PenTool className="h-5 w-5" />
          Digital Signature
        </CardTitle>
        <CardDescription>
          Provide your signature to finalize this agreement
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!canSign && (
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-900/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium text-amber-700 dark:text-amber-400">Cannot sign yet</p>
                <ul className="text-sm text-amber-600 dark:text-amber-500 space-y-1">
                  {!hasAgreedToTerms && <li>• You must agree to the Terms & Conditions</li>}
                  {!allRequiredFieldsComplete && <li>• All required fields must be completed</li>}
                  {isLocked && <li>• This agreement is locked</li>}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div>
          <Label>Full Name (as it will appear on the agreement)</Label>
          <Input
            value={clientFullName}
            disabled
            className="mt-1.5 bg-muted"
          />
        </div>

        {canSign && (
          <>
            <div className="flex gap-2">
              <Button
                variant={signatureMode === "draw" ? "default" : "outline"}
                size="sm"
                onClick={() => setSignatureMode("draw")}
              >
                Draw Signature
              </Button>
              <Button
                variant={signatureMode === "type" ? "default" : "outline"}
                size="sm"
                onClick={() => setSignatureMode("type")}
              >
                Type Signature
              </Button>
            </div>

            {signatureMode === "draw" ? (
              <SignaturePad onSave={onSign} />
            ) : (
              <div className="space-y-3">
                <div>
                  <Label>Type your signature</Label>
                  <Input
                    placeholder="Type your full name..."
                    value={typedSignature}
                    onChange={(e) => setTypedSignature(e.target.value)}
                    className="mt-1.5 italic text-xl font-serif"
                  />
                </div>
                <div className="border-2 border-dashed rounded-lg p-6 bg-muted/30 text-center">
                  <p className="italic text-2xl font-serif">{typedSignature || "Your signature preview"}</p>
                </div>
                <Button 
                  onClick={handleTypedSign} 
                  disabled={!typedSignature.trim()}
                  className="w-full"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Sign Agreement
                </Button>
              </div>
            )}
          </>
        )}

        <div className="text-xs text-muted-foreground space-y-1">
          <p>• Your IP address and timestamp will be recorded</p>
          <p>• Once signed, this agreement cannot be modified</p>
          <p>• A copy will be sent to your email</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DigitalSignatureSection;
