import { memo, useEffect, useRef, useCallback } from 'react';

/**
 * Skip to main content link for keyboard users
 * WCAG 2.1 Level A - Bypass Blocks (2.4.1)
 */
export const SkipToContent = memo(() => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      onClick={(e) => {
        e.preventDefault();
        const main = document.getElementById('main-content');
        if (main) {
          main.tabIndex = -1;
          main.focus();
          main.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Skip to main content
    </a>
  );
});

SkipToContent.displayName = 'SkipToContent';

/**
 * Screen reader only announcements for dynamic content
 * WCAG 2.1 Level A - Status Messages (4.1.3)
 */
interface LiveRegionProps {
  message: string;
  politeness?: 'polite' | 'assertive';
}

export const LiveRegion = memo(({ message, politeness = 'polite' }: LiveRegionProps) => {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
});

LiveRegion.displayName = 'LiveRegion';

/**
 * Focus trap for modals and dialogs
 * WCAG 2.1 Level A - Focus Order (2.4.3)
 */
interface FocusTrapProps {
  children: React.ReactNode;
  isActive: boolean;
}

export const FocusTrap = memo(({ children, isActive }: FocusTrapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isActive || e.key !== 'Tab') return;

      const container = containerRef.current;
      if (!container) return;

      const focusableElements = container.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    },
    [isActive]
  );

  useEffect(() => {
    if (isActive) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isActive, handleKeyDown]);

  return <div ref={containerRef}>{children}</div>;
});

FocusTrap.displayName = 'FocusTrap';

/**
 * Accessible loading indicator
 * WCAG 2.1 Level A - Status Messages (4.1.3)
 */
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export const LoadingSpinner = memo(({ size = 'md', label = 'Loading...' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div role="status" aria-label={label} className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-primary/20 border-t-primary rounded-full animate-spin`}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

/**
 * Visually hidden text for screen readers
 * WCAG 2.1 Level A - Name, Role, Value (4.1.2)
 */
interface VisuallyHiddenProps {
  children: React.ReactNode;
}

export const VisuallyHidden = memo(({ children }: VisuallyHiddenProps) => {
  return <span className="sr-only">{children}</span>;
});

VisuallyHidden.displayName = 'VisuallyHidden';

/**
 * Hook for managing focus on route changes
 * WCAG 2.1 Level A - Focus Order (2.4.3)
 */
export const useFocusOnRouteChange = () => {
  useEffect(() => {
    // Focus main content on route change for screen readers
    const main = document.getElementById('main-content');
    if (main) {
      main.tabIndex = -1;
      main.focus({ preventScroll: true });
    }
  }, []);
};

/**
 * Announcer hook for dynamic content updates
 * WCAG 2.1 Level AA - Status Messages (4.1.3)
 */
export const useAnnouncer = () => {
  const announce = useCallback((message: string, politeness: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.getElementById('a11y-announcer');
    if (announcer) {
      announcer.setAttribute('aria-live', politeness);
      announcer.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        announcer.textContent = '';
      }, 1000);
    }
  }, []);

  return { announce };
};
