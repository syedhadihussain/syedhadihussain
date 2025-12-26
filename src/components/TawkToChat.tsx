import { useEffect } from 'react';

const TAWK_PROPERTY_ID = '694e35f09053fb197ca43dcf';
const TAWK_WIDGET_ID = '1jdco5dj6';

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

const TawkToChat = () => {
  useEffect(() => {
    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Position widget above floating buttons with matching alignment
    window.Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: 'br',
          xOffset: 18,
          yOffset: 215 // Above the 3 floating buttons (each ~56px + 12px gaps)
        },
        mobile: {
          position: 'br',
          xOffset: 18,
          yOffset: 215
        }
      }
    };

    // Add pulsing animation CSS for Tawk.to widget
    const style = document.createElement('style');
    style.id = 'tawk-pulse-style';
    style.textContent = `
      @keyframes tawk-pulse {
        0%, 100% {
          box-shadow: 0 4px 14px rgba(0,0,0,0.25), 0 0 0 0 hsl(var(--primary) / 0.4);
        }
        50% {
          box-shadow: 0 4px 14px rgba(0,0,0,0.25), 0 0 20px 4px hsl(var(--primary) / 0.3);
        }
      }
      .tawk-min-container .tawk-button,
      iframe[title*="chat widget"] {
        animation: tawk-pulse 2s ease-in-out infinite !important;
      }
    `;
    document.head.appendChild(style);

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    return () => {
      // Cleanup on unmount
      const tawkScript = document.querySelector(`script[src*="embed.tawk.to"]`);
      if (tawkScript) {
        tawkScript.remove();
      }
      // Remove pulse style
      const pulseStyle = document.getElementById('tawk-pulse-style');
      if (pulseStyle) {
        pulseStyle.remove();
      }
      // Remove Tawk.to widget elements
      const tawkElements = document.querySelectorAll('[class*="tawk"]');
      tawkElements.forEach(el => el.remove());
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TawkToChat;
