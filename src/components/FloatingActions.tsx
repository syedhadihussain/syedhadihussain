import { useState, useEffect } from 'react';
import { MessageCircle, Mail, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    language === 'ar' 
      ? 'مرحباً! أنا مهتم بخدمات SEO الخاصة بك. هل يمكنني معرفة المزيد؟'
      : language === 'es'
      ? '¡Hola! Estoy interesado en sus servicios de SEO. ¿Puedo saber más?'
      : language === 'pt'
      ? 'Olá! Estou interessado nos seus serviços de SEO. Posso saber mais?'
      : language === 'fr'
      ? 'Bonjour! Je suis intéressé par vos services SEO. Puis-je en savoir plus?'
      : language === 'it'
      ? 'Ciao! Sono interessato ai vostri servizi SEO. Posso saperne di più?'
      : language === 'de'
      ? 'Hallo! Ich interessiere mich für Ihre SEO-Dienste. Kann ich mehr erfahren?'
      : 'Hi! I\'m interested in your SEO services. Can I know more?'
  );

  const whatsappNumber = '923001234567'; // Replace with actual number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent(
    language === 'ar' ? 'استفسار عن خدمات SEO' : 'SEO Services Inquiry'
  );
  const emailBody = encodeURIComponent(
    language === 'ar'
      ? 'مرحباً،\n\nأنا مهتم بخدمات SEO الخاصة بك وأود معرفة المزيد عن كيفية مساعدتي في تحسين ظهور عملي على الإنترنت.\n\nشكراً لك!'
      : language === 'es'
      ? 'Hola,\n\nEstoy interesado en sus servicios de SEO y me gustaría saber más sobre cómo pueden ayudar a mejorar la visibilidad de mi negocio en línea.\n\n¡Gracias!'
      : language === 'pt'
      ? 'Olá,\n\nEstou interessado nos seus serviços de SEO e gostaria de saber mais sobre como podem ajudar a melhorar a visibilidade do meu negócio online.\n\nObrigado!'
      : language === 'fr'
      ? 'Bonjour,\n\nJe suis intéressé par vos services SEO et j\'aimerais en savoir plus sur la façon dont vous pouvez aider à améliorer la visibilité de mon entreprise en ligne.\n\nMerci!'
      : language === 'it'
      ? 'Ciao,\n\nSono interessato ai vostri servizi SEO e vorrei saperne di più su come potete aiutare a migliorare la visibilità del mio business online.\n\nGrazie!'
      : language === 'de'
      ? 'Hallo,\n\nIch interessiere mich für Ihre SEO-Dienste und würde gerne mehr darüber erfahren, wie Sie helfen können, die Online-Sichtbarkeit meines Unternehmens zu verbessern.\n\nDanke!'
      : 'Hello,\n\nI\'m interested in your SEO services and would like to know more about how you can help improve my business visibility online.\n\nThank you!'
  );
  const emailUrl = `mailto:contact@hadiseo.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-14 bg-foreground text-background text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </a>

      {/* Email Button */}
      <a
        href={emailUrl}
        className="group flex items-center justify-center w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact via Email"
      >
        <Mail className="w-6 h-6" />
        <span className="absolute right-14 bg-foreground text-background text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Email
        </span>
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`group flex items-center justify-center w-12 h-12 bg-muted hover:bg-muted/80 text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
        <span className="absolute right-14 bg-foreground text-background text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {language === 'ar' ? 'أعلى الصفحة' : 'Back to top'}
        </span>
      </button>
    </div>
  );
};

export default FloatingActions;
