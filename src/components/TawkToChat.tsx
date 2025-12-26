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
          xOffset: 15,
          yOffset: 80 // Just above the floating buttons stack
        },
        mobile: {
          position: 'br',
          xOffset: 15,
          yOffset: 80
        }
      }
    };

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
      // Remove Tawk.to widget elements
      const tawkElements = document.querySelectorAll('[class*="tawk"]');
      tawkElements.forEach(el => el.remove());
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TawkToChat;
