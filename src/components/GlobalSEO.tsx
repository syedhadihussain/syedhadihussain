import { Helmet } from "react-helmet-async";
import { BASE_URL, SUPPORTED_LANGUAGES, HREFLANG_CODES } from "@/lib/i18n-config";

/**
 * GlobalSEO component - Provides site-wide SEO defaults
 * This should be placed once at the root of the application
 */
const GlobalSEO = () => {
  return (
    <Helmet>
      {/* Default character set and viewport */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Theme and mobile app meta */}
      <meta name="theme-color" content="#4F46E5" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Site verification tags - Add your verification codes */}
      {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon links */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Default meta for social sharing */}
      <meta property="og:site_name" content="Syed Hadi Hussain - SEO & Digital Marketing" />
      <meta name="twitter:site" content="@syedhadihussain" />
      <meta name="twitter:creator" content="@syedhadihussain" />
      
      {/* Geographic targeting */}
      <meta name="geo.region" content="AE" />
      <meta name="geo.placename" content="Dubai" />
      
      {/* Content language declaration */}
      <meta httpEquiv="content-language" content={SUPPORTED_LANGUAGES.join(", ")} />
      
      {/* Author information */}
      <meta name="author" content="Syed Hadi Hussain" />
      <link rel="author" href={BASE_URL} />
      
      {/* Prevent phone number detection on iOS */}
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};

export default GlobalSEO;
