import { useState } from 'react';
import { MessageCircle, Mail, X, Send, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FloatingContactPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();

  const getWhatsAppMessage = () => {
    const messages: Record<string, string> = {
      ar: 'مرحباً! أنا مهتم بخدمات SEO المحلي الخاصة بك وأريد تحسين ظهور عملي على Google. هل يمكنك مساعدتي؟',
      es: '¡Hola! Estoy interesado en sus servicios de SEO local y quiero mejorar la visibilidad de mi negocio en Google. ¿Puede ayudarme?',
      pt: 'Olá! Estou interessado em seus serviços de SEO local e quero melhorar a visibilidade do meu negócio no Google. Pode me ajudar?',
      fr: 'Bonjour! Je suis intéressé par vos services de SEO local et je souhaite améliorer la visibilité de mon entreprise sur Google. Pouvez-vous m\'aider?',
      it: 'Ciao! Sono interessato ai vostri servizi SEO locale e voglio migliorare la visibilità della mia attività su Google. Potete aiutarmi?',
      de: 'Hallo! Ich interessiere mich für Ihre lokalen SEO-Dienste und möchte die Sichtbarkeit meines Unternehmens bei Google verbessern. Können Sie mir helfen?',
      en: 'Hi! I\'m interested in your Local SEO services and want to improve my business visibility on Google. Can you help me?'
    };
    return encodeURIComponent(messages[language] || messages.en);
  };

  const getEmailSubject = () => {
    const subjects: Record<string, string> = {
      ar: 'استفسار عن خدمات SEO المحلي',
      es: 'Consulta sobre servicios de SEO Local',
      pt: 'Consulta sobre serviços de SEO Local',
      fr: 'Demande concernant les services SEO Local',
      it: 'Richiesta sui servizi SEO Locale',
      de: 'Anfrage zu lokalen SEO-Diensten',
      en: 'Inquiry about Local SEO Services'
    };
    return encodeURIComponent(subjects[language] || subjects.en);
  };

  const getEmailBody = () => {
    const bodies: Record<string, string> = {
      ar: `مرحباً سيد هادي،

أتواصل معك لأنني مهتم بخدمات SEO المحلي الخاصة بك.

تفاصيل عملي:
- اسم العمل: 
- الموقع: 
- الخدمة المطلوبة: 

أريد تحسين ظهور عملي على Google وجذب المزيد من العملاء المحليين.

شكراً لك!`,
      es: `Hola Syed Hadi,

Me pongo en contacto porque estoy interesado en sus servicios de SEO local.

Detalles de mi negocio:
- Nombre del negocio: 
- Ubicación: 
- Servicio requerido: 

Quiero mejorar la visibilidad de mi negocio en Google y atraer más clientes locales.

¡Gracias!`,
      pt: `Olá Syed Hadi,

Entro em contato porque estou interessado em seus serviços de SEO local.

Detalhes do meu negócio:
- Nome da empresa: 
- Localização: 
- Serviço necessário: 

Quero melhorar a visibilidade do meu negócio no Google e atrair mais clientes locais.

Obrigado!`,
      fr: `Bonjour Syed Hadi,

Je vous contacte car je suis intéressé par vos services de SEO local.

Détails de mon entreprise:
- Nom de l'entreprise: 
- Emplacement: 
- Service requis: 

Je souhaite améliorer la visibilité de mon entreprise sur Google et attirer plus de clients locaux.

Merci!`,
      it: `Ciao Syed Hadi,

Ti contatto perché sono interessato ai tuoi servizi SEO locale.

Dettagli della mia attività:
- Nome azienda: 
- Posizione: 
- Servizio richiesto: 

Voglio migliorare la visibilità della mia attività su Google e attirare più clienti locali.

Grazie!`,
      de: `Hallo Syed Hadi,

ich kontaktiere Sie, weil ich an Ihren lokalen SEO-Diensten interessiert bin.

Details zu meinem Unternehmen:
- Firmenname: 
- Standort: 
- Benötigter Service: 

Ich möchte die Sichtbarkeit meines Unternehmens bei Google verbessern und mehr lokale Kunden gewinnen.

Danke!`,
      en: `Hello Syed Hadi,

I'm reaching out because I'm interested in your Local SEO services.

My business details:
- Business name: 
- Location: 
- Service needed: 

I want to improve my business visibility on Google and attract more local customers.

Thank you!`
    };
    return encodeURIComponent(bodies[language] || bodies.en);
  };

  const whatsappUrl = `https://wa.me/971523695036?text=${getWhatsAppMessage()}`;
  const emailUrl = `mailto:contact.syedhadihussain@gmail.com?subject=${getEmailSubject()}&body=${getEmailBody()}`;

  const labels = {
    needHelp: {
      en: 'Need Help?',
      ar: 'تحتاج مساعدة؟',
      es: '¿Necesitas ayuda?',
      pt: 'Precisa de ajuda?',
      fr: 'Besoin d\'aide?',
      it: 'Hai bisogno di aiuto?',
      de: 'Brauchen Sie Hilfe?'
    },
    quickContact: {
      en: 'Quick Contact',
      ar: 'اتصال سريع',
      es: 'Contacto rápido',
      pt: 'Contato rápido',
      fr: 'Contact rapide',
      it: 'Contatto rapido',
      de: 'Schnellkontakt'
    },
    whatsappChat: {
      en: 'Chat on WhatsApp',
      ar: 'تحدث عبر واتساب',
      es: 'Chatear en WhatsApp',
      pt: 'Conversar no WhatsApp',
      fr: 'Discuter sur WhatsApp',
      it: 'Chatta su WhatsApp',
      de: 'Auf WhatsApp chatten'
    },
    whatsappDesc: {
      en: 'Get instant response',
      ar: 'احصل على رد فوري',
      es: 'Obtén respuesta instantánea',
      pt: 'Obtenha resposta instantânea',
      fr: 'Obtenez une réponse instantanée',
      it: 'Ottieni risposta istantanea',
      de: 'Sofortige Antwort erhalten'
    },
    emailUs: {
      en: 'Send Email',
      ar: 'أرسل بريداً',
      es: 'Enviar correo',
      pt: 'Enviar email',
      fr: 'Envoyer un email',
      it: 'Invia email',
      de: 'E-Mail senden'
    },
    emailDesc: {
      en: 'Detailed inquiry',
      ar: 'استفسار تفصيلي',
      es: 'Consulta detallada',
      pt: 'Consulta detalhada',
      fr: 'Demande détaillée',
      it: 'Richiesta dettagliata',
      de: 'Detaillierte Anfrage'
    },
    callNow: {
      en: 'Call Now',
      ar: 'اتصل الآن',
      es: 'Llamar ahora',
      pt: 'Ligar agora',
      fr: 'Appeler maintenant',
      it: 'Chiama ora',
      de: 'Jetzt anrufen'
    },
    callDesc: {
      en: 'Speak directly',
      ar: 'تحدث مباشرة',
      es: 'Hablar directamente',
      pt: 'Falar diretamente',
      fr: 'Parler directement',
      it: 'Parla direttamente',
      de: 'Direkt sprechen'
    }
  };

  const getLabel = (key: keyof typeof labels) => labels[key][language as keyof typeof labels.needHelp] || labels[key].en;

  return (
    <>
      {/* Contact Panel */}
      <div
        className={cn(
          "fixed bottom-24 z-50 transition-all duration-300 ease-out",
          language === 'ar' ? "left-4 sm:left-6" : "right-4 sm:right-6",
          isOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-4 sm:p-5 w-[280px] sm:w-[320px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{getLabel('quickContact')}</h3>
                <p className="text-xs text-muted-foreground">{getLabel('needHelp')}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-muted transition-colors"
              aria-label="Close contact panel"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <div className="space-y-2">
            {/* WhatsApp Option */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{getLabel('whatsappChat')}</p>
                <p className="text-xs text-muted-foreground">{getLabel('whatsappDesc')}</p>
              </div>
              <Send className="w-4 h-4 text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Email Option */}
            <a
              href={emailUrl}
              className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{getLabel('emailUs')}</p>
                <p className="text-xs text-muted-foreground">{getLabel('emailDesc')}</p>
              </div>
              <Send className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Call Option */}
            <a
              href="tel:+971523695036"
              className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-muted/80 border border-border transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-background" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{getLabel('callNow')}</p>
                <p className="text-xs text-muted-foreground">{getLabel('callDesc')}</p>
              </div>
              <Send className="w-4 h-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-border">
            <p className="text-xs text-center text-muted-foreground">
              {language === 'ar' 
                ? 'رد خلال 24 ساعة مضمون' 
                : language === 'es' 
                ? 'Respuesta en 24 horas garantizada'
                : language === 'pt'
                ? 'Resposta em 24 horas garantida'
                : language === 'fr'
                ? 'Réponse sous 24h garantie'
                : language === 'it'
                ? 'Risposta entro 24 ore garantita'
                : language === 'de'
                ? 'Antwort innerhalb von 24 Stunden garantiert'
                : '24-hour response guaranteed'}
            </p>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center",
          language === 'ar' ? "left-4 sm:left-6" : "right-4 sm:right-6",
          isOpen 
            ? "bg-foreground text-background rotate-0" 
            : "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground animate-pulse"
        )}
        aria-label={isOpen ? "Close contact panel" : "Open contact panel"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        {!isOpen && (
          <>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
          </>
        )}
      </button>
    </>
  );
};

export default FloatingContactPanel;
