import { useState, useEffect } from 'react';
import { MessageCircle, Mail, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setMounted(true);
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

  const whatsappUrl = `https://wa.me/+971523695036?text=${whatsappMessage}`;

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
  const emailUrl = `mailto:contact.syedhadihussain@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="fixed right-[22px] bottom-6 z-40 flex flex-col gap-2">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] hover:scale-110 animate-[whatsapp-pulse_2s_ease-in-out_infinite] ${
          mounted ? 'animate-[bounce-in_0.6s_ease-out_0.2s_both,whatsapp-pulse_2s_ease-in-out_infinite_0.8s]' : 'opacity-0'
        }`}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
        <span className="absolute right-16 bg-foreground/90 backdrop-blur-sm text-background text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
          WhatsApp
        </span>
      </a>

      {/* Email Button */}
      <a
        href={emailUrl}
        className={`group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0_6px_20px_hsl(var(--primary)/0.5)] hover:scale-110 animate-[email-pulse_2s_ease-in-out_infinite] ${
          mounted ? 'animate-[bounce-in_0.6s_ease-out_0.4s_both,email-pulse_2s_ease-in-out_infinite_1s]' : 'opacity-0'
        }`}
        aria-label="Contact via Email"
      >
        <Mail className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute right-16 bg-foreground/90 backdrop-blur-sm text-background text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
          Email
        </span>
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-muted to-muted/80 text-foreground rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:scale-110 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
        <span className="absolute right-16 bg-foreground/90 backdrop-blur-sm text-background text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
          {language === 'ar' ? 'أعلى الصفحة' : 'Back to top'}
        </span>
      </button>

      <style>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            transform: scale(1.05) translateY(-5px);
          }
          70% {
            transform: scale(0.95) translateY(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes whatsapp-pulse {
          0%, 100% {
            box-shadow: 0 4px 14px rgba(0,0,0,0.25), 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 14px rgba(0,0,0,0.25), 0 0 20px 4px rgba(37, 211, 102, 0.3);
          }
        }
        @keyframes email-pulse {
          0%, 100% {
            box-shadow: 0 4px 14px rgba(0,0,0,0.25), 0 0 0 0 hsl(var(--primary) / 0.4);
          }
          50% {
            box-shadow: 0 4px 14px rgba(0,0,0,0.25), 0 0 20px 4px hsl(var(--primary) / 0.3);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingActions;
