import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isSupportedLanguage, DEFAULT_LANGUAGE, SupportedLanguage } from "@/lib/i18n-config";

const LANGUAGE_STORAGE_KEY = "preferred-language";

// Detect browser language preference
const detectBrowserLanguage = (): SupportedLanguage => {
  const browserLang = navigator.language?.split("-")[0]?.toLowerCase();
  if (browserLang && isSupportedLanguage(browserLang)) {
    return browserLang;
  }
  return DEFAULT_LANGUAGE;
};

// Get stored language preference
const getStoredLanguage = (): SupportedLanguage | null => {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && isSupportedLanguage(stored)) {
      return stored;
    }
  } catch {
    // localStorage might not be available
  }
  return null;
};

const LanguageRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const firstPart = pathParts[0];

    // If already on a language route, do nothing
    if (firstPart && isSupportedLanguage(firstPart)) {
      return;
    }

    // Determine target language
    const storedLang = getStoredLanguage();
    const targetLang = storedLang || detectBrowserLanguage();

    // Build new path with language prefix
    const newPath = `/${targetLang}${location.pathname === "/" ? "" : location.pathname}${location.search}${location.hash}`;
    
    // Use replace to avoid adding to history
    navigate(newPath, { replace: true });
  }, [location.pathname, location.search, location.hash, navigate]);

  return null;
};

export default LanguageRedirect;
