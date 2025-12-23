import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Language = "en" | "ar" | "es";

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
    es: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.about": { en: "About", ar: "حول", es: "Acerca de" },
  "nav.services": { en: "Services", ar: "الخدمات", es: "Servicios" },
  "nav.caseStudies": { en: "Case Studies", ar: "دراسات الحالة", es: "Casos de Estudio" },
  "nav.testimonials": { en: "Testimonials", ar: "الشهادات", es: "Testimonios" },
  "nav.faq": { en: "FAQ", ar: "الأسئلة الشائعة", es: "Preguntas Frecuentes" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا", es: "Contacto" },
  "nav.blog": { en: "Blog", ar: "المدونة", es: "Blog" },
  "nav.bookCall": { en: "Book a Call", ar: "احجز مكالمة", es: "Reservar Llamada" },

  // Hero
  "hero.available": { en: "Available for new projects", ar: "متاح لمشاريع جديدة", es: "Disponible para nuevos proyectos" },
  "hero.greeting": { en: "Hi, I'm Syed Hadi", ar: "مرحباً، أنا سيد هادي", es: "Hola, soy Syed Hadi" },
  "hero.title": { en: "Your Full Stack Local SEO Specialist", ar: "متخصص SEO المحلي الشامل", es: "Tu Especialista en SEO Local Completo" },
  "hero.description": { en: "I help local and service-based businesses move from low visibility to top Google rankings, converting searches into consistent leads and long-term growth.", ar: "أساعد الشركات المحلية والخدمية على الانتقال من الظهور المنخفض إلى أعلى تصنيفات Google، وتحويل عمليات البحث إلى عملاء محتملين ونمو طويل الأمد.", es: "Ayudo a empresas locales y basadas en servicios a pasar de baja visibilidad a los primeros puestos en Google, convirtiendo búsquedas en clientes potenciales y crecimiento a largo plazo." },
  "hero.location": { en: "Helping businesses worldwide across diverse industries and regions grow online", ar: "مساعدة الشركات في جميع أنحاء العالم عبر صناعات ومناطق متنوعة للنمو عبر الإنترنت", es: "Ayudando a empresas de todo el mundo en diversas industrias y regiones a crecer en línea" },
  "hero.bookAudit": { en: "Book Free SEO Audit", ar: "احجز تدقيق SEO مجاني", es: "Reservar Auditoría SEO Gratis" },
  "hero.whatsapp": { en: "WhatsApp Me", ar: "راسلني على واتساب", es: "WhatsApp" },
  "hero.years": { en: "Years Experience", ar: "سنوات الخبرة", es: "Años de Experiencia" },
  "hero.clients": { en: "Clients Served", ar: "عملاء تم خدمتهم", es: "Clientes Atendidos" },
  "hero.traffic": { en: "Avg. Traffic Increase", ar: "متوسط زيادة الزيارات", es: "Aumento Promedio de Tráfico" },

  // Contact Form
  "contact.title": { en: "Ready to Dominate Google?", ar: "هل أنت مستعد للسيطرة على Google؟", es: "¿Listo para Dominar Google?" },
  "contact.subtitle": { en: "Let's Work Together", ar: "لنعمل معاً", es: "Trabajemos Juntos" },
  "contact.description": { en: "Book a free Local SEO audit and discover how to outrank your competitors and generate more leads from Google.", ar: "احجز تدقيق SEO محلي مجاني واكتشف كيف تتفوق على منافسيك وتولد المزيد من العملاء المحتملين من Google.", es: "Reserve una auditoría SEO local gratuita y descubra cómo superar a sus competidores y generar más clientes potenciales desde Google." },
  "contact.name": { en: "Full Name", ar: "الاسم الكامل", es: "Nombre Completo" },
  "contact.email": { en: "Email Address", ar: "البريد الإلكتروني", es: "Correo Electrónico" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف", es: "Número de Teléfono" },
  "contact.company": { en: "Company Name", ar: "اسم الشركة", es: "Nombre de la Empresa" },
  "contact.service": { en: "Service Interested In", ar: "الخدمة المطلوبة", es: "Servicio de Interés" },
  "contact.message": { en: "Your Message", ar: "رسالتك", es: "Tu Mensaje" },
  "contact.submit": { en: "Send Message", ar: "إرسال الرسالة", es: "Enviar Mensaje" },
  "contact.sending": { en: "Sending...", ar: "جاري الإرسال...", es: "Enviando..." },
  "contact.success": { en: "Message sent successfully! I'll get back to you soon.", ar: "تم إرسال الرسالة بنجاح! سأرد عليك قريباً.", es: "¡Mensaje enviado con éxito! Te responderé pronto." },
  "contact.error": { en: "Failed to send message. Please try again.", ar: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.", es: "Error al enviar el mensaje. Por favor, inténtelo de nuevo." },

  // Services
  "services.title": { en: "Local SEO Services That Drive Results", ar: "خدمات SEO المحلية التي تحقق النتائج", es: "Servicios de SEO Local que Generan Resultados" },
  "services.subtitle": { en: "Comprehensive strategies to boost your local visibility", ar: "استراتيجيات شاملة لتعزيز ظهورك المحلي", es: "Estrategias integrales para impulsar tu visibilidad local" },

  // About
  "about.title": { en: "About Me", ar: "عني", es: "Sobre Mí" },
  "about.subtitle": { en: "Your Partner in Local Search Success", ar: "شريكك في نجاح البحث المحلي", es: "Tu Socio en el Éxito de la Búsqueda Local" },

  // Testimonials
  "testimonials.title": { en: "What Clients Say", ar: "ماذا يقول العملاء", es: "Lo que Dicen los Clientes" },
  "testimonials.subtitle": { en: "Real results from real businesses", ar: "نتائج حقيقية من شركات حقيقية", es: "Resultados reales de negocios reales" },

  // FAQ
  "faq.title": { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة", es: "Preguntas Frecuentes" },
  "faq.subtitle": { en: "Everything you need to know about Local SEO", ar: "كل ما تحتاج معرفته عن SEO المحلي", es: "Todo lo que necesitas saber sobre SEO Local" },

  // Footer
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة.", es: "Todos los derechos reservados." },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية", es: "Política de Privacidad" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة", es: "Términos de Servicio" },

  // Common
  "common.learnMore": { en: "Learn More", ar: "اعرف المزيد", es: "Más Información" },
  "common.viewAll": { en: "View All", ar: "عرض الكل", es: "Ver Todo" },
  "common.readMore": { en: "Read More", ar: "اقرأ المزيد", es: "Leer Más" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language") as Language;
      if (stored && ["en", "ar", "es"].includes(stored)) return stored;
      
      // Detect browser language
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "ar") return "ar";
      if (browserLang === "es") return "es";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language] || translation.en || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
