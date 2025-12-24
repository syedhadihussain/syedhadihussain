import { useDiscountTimer } from "@/hooks/useDiscountTimer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Sparkles } from "lucide-react";

interface DiscountCountdownProps {
  className?: string;
}

const DiscountCountdown = ({ className = "" }: DiscountCountdownProps) => {
  const { days, hours, minutes, seconds, expired } = useDiscountTimer();
  const { t } = useLanguage();

  if (expired) {
    return null;
  }

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex items-center gap-2 text-primary font-medium">
        <Clock className="w-4 h-4 animate-pulse" />
        <span className="text-sm">{t("discount.offerExpires")}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center bg-primary/10 rounded-lg px-3 py-2 min-w-[60px]">
          <span className="font-display text-2xl font-bold text-primary">{days}</span>
          <span className="text-xs text-muted-foreground">{t("discount.days")}</span>
        </div>
        <span className="text-2xl font-bold text-primary">:</span>
        <div className="flex flex-col items-center bg-primary/10 rounded-lg px-3 py-2 min-w-[60px]">
          <span className="font-display text-2xl font-bold text-primary">{String(hours).padStart(2, '0')}</span>
          <span className="text-xs text-muted-foreground">{t("discount.hours")}</span>
        </div>
        <span className="text-2xl font-bold text-primary">:</span>
        <div className="flex flex-col items-center bg-primary/10 rounded-lg px-3 py-2 min-w-[60px]">
          <span className="font-display text-2xl font-bold text-primary">{String(minutes).padStart(2, '0')}</span>
          <span className="text-xs text-muted-foreground">{t("discount.min")}</span>
        </div>
        <span className="text-2xl font-bold text-primary">:</span>
        <div className="flex flex-col items-center bg-primary/10 rounded-lg px-3 py-2 min-w-[60px]">
          <span className="font-display text-2xl font-bold text-primary">{String(seconds).padStart(2, '0')}</span>
          <span className="text-xs text-muted-foreground">{t("discount.sec")}</span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <Sparkles className="w-3 h-3 text-primary" />
        <span>{t("discount.lockIn")}</span>
      </div>
    </div>
  );
};

export default DiscountCountdown;
