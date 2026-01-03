import { Lock, FileCheck } from "lucide-react";

interface AgreementLockedBannerProps {
  signedAt: string | null;
}

export const AgreementLockedBanner = ({ signedAt }: AgreementLockedBannerProps) => {
  return (
    <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Lock className="h-6 w-6 text-primary" />
        <FileCheck className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-primary">
        This Agreement Has Been Signed and Locked
      </h3>
      <p className="text-muted-foreground mt-2 max-w-md mx-auto">
        No further changes are allowed. If modifications are required, a new agreement must be created.
      </p>
    </div>
  );
};

export default AgreementLockedBanner;
