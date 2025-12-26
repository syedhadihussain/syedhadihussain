import { useEffect } from 'react';

// Replace these with your actual Tawk.to credentials from https://dashboard.tawk.to
const TAWK_PROPERTY_ID = 'YOUR_PROPERTY_ID'; // e.g., '6849xxxxxxxxxxxx'
const TAWK_WIDGET_ID = 'YOUR_WIDGET_ID'; // e.g., '1ioxxxxxxxx'

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

const TawkToChat = () => {
  useEffect(() => {
    // Don't load if placeholder IDs are still in place
    if (TAWK_PROPERTY_ID === 'YOUR_PROPERTY_ID' || TAWK_WIDGET_ID === 'YOUR_WIDGET_ID') {
      console.warn('Tawk.to: Please replace YOUR_PROPERTY_ID and YOUR_WIDGET_ID with your actual Tawk.to credentials');
      return;
    }

    // Initialize Tawk.to
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

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
