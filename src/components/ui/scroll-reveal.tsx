import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { ReactNode, forwardRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
  duration?: number;
}

const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  (
    {
      children,
      className,
      animation = "fade-up",
      delay = 0,
      duration = 600,
    },
    forwardedRef
  ) => {
    const { ref: scrollRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const animationStyles = {
      "fade-up": {
        initial: "opacity-0 translate-y-8",
        animate: "opacity-100 translate-y-0",
      },
      "fade-left": {
        initial: "opacity-0 -translate-x-8",
        animate: "opacity-100 translate-x-0",
      },
      "fade-right": {
        initial: "opacity-0 translate-x-8",
        animate: "opacity-100 translate-x-0",
      },
      scale: {
        initial: "opacity-0 scale-95",
        animate: "opacity-100 scale-100",
      },
      fade: {
        initial: "opacity-0",
        animate: "opacity-100",
      },
    };

    const { initial, animate } = animationStyles[animation];

    // Combine forwarded ref with scroll ref
    const setRefs = (node: HTMLDivElement | null) => {
      // Set internal scroll ref
      (scrollRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      // Forward ref if provided
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    };

    return (
      <div
        ref={setRefs}
        className={cn(
          "transition-all ease-out",
          isVisible ? animate : initial,
          className
        )}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }
);

ScrollReveal.displayName = "ScrollReveal";

export { ScrollReveal };
