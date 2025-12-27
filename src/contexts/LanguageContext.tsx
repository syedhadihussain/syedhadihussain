import { createContext, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { isSupportedLanguage, SupportedLanguage, SUPPORTED_LANGUAGES } from "@/lib/i18n-config";

export type Language = SupportedLanguage;

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
    es: string;
    pt: string;
    fr: string;
    it: string;
    de: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.about": { en: "About", ar: "حول", es: "Acerca de", pt: "Sobre", fr: "À propos", it: "Chi siamo", de: "Über" },
  "nav.services": { en: "Services", ar: "الخدمات", es: "Servicios", pt: "Serviços", fr: "Services", it: "Servizi", de: "Dienstleistungen" },
  "nav.pricing": { en: "Pricing", ar: "الأسعار", es: "Precios", pt: "Preços", fr: "Tarifs", it: "Prezzi", de: "Preise" },
  "nav.caseStudies": { en: "Case Studies", ar: "دراسات الحالة", es: "Casos de Estudio", pt: "Estudos de Caso", fr: "Études de cas", it: "Casi di studio", de: "Fallstudien" },
  "nav.portfolio": { en: "Portfolio", ar: "المحفظة", es: "Portafolio", pt: "Portfólio", fr: "Portfolio", it: "Portfolio", de: "Portfolio" },
  "nav.testimonials": { en: "Testimonials", ar: "الشهادات", es: "Testimonios", pt: "Depoimentos", fr: "Témoignages", it: "Testimonianze", de: "Referenzen" },
  "nav.faq": { en: "FAQ", ar: "الأسئلة الشائعة", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes", fr: "FAQ", it: "FAQ", de: "FAQ" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا", es: "Contacto", pt: "Contato", fr: "Contact", it: "Contatto", de: "Kontakt" },
  "nav.blog": { en: "Blog", ar: "المدونة", es: "Blog", pt: "Blog", fr: "Blog", it: "Blog", de: "Blog" },
  "nav.bookCall": { en: "Book a Call", ar: "احجز مكالمة", es: "Reservar Llamada", pt: "Agendar Chamada", fr: "Réserver un appel", it: "Prenota una chiamata", de: "Anruf buchen" },
  "nav.localServiceAds": { en: "Local Service Ads", ar: "إعلانات الخدمات المحلية", es: "Anuncios de Servicios Locales", pt: "Anúncios de Serviços Locais", fr: "Annonces de services locaux", it: "Annunci di servizi locali", de: "Lokale Serviceanzeigen" },
  "nav.projectManagement": { en: "Project Management", ar: "إدارة المشاريع", es: "Gestión de Proyectos", pt: "Gerenciamento de Projetos", fr: "Gestion de projet", it: "Gestione progetti", de: "Projektmanagement" },
  "nav.localSeo": { en: "Local SEO", ar: "SEO المحلي", es: "SEO Local", pt: "SEO Local", fr: "SEO local", it: "SEO locale", de: "Lokales SEO" },

  // Hero
  "hero.available": { en: "Available for new projects", ar: "متاح لمشاريع جديدة", es: "Disponible para nuevos proyectos", pt: "Disponível para novos projetos", fr: "Disponible pour de nouveaux projets", it: "Disponibile per nuovi progetti", de: "Verfügbar für neue Projekte" },
  "hero.greeting": { en: "Hi, I'm Syed Hadi", ar: "مرحباً، أنا سيد هادي", es: "Hola, soy Syed Hadi", pt: "Olá, sou Syed Hadi", fr: "Bonjour, je suis Syed Hadi", it: "Ciao, sono Syed Hadi", de: "Hallo, ich bin Syed Hadi" },
  "hero.title": { en: "Your Full Stack Local SEO Specialist", ar: "متخصص SEO المحلي الشامل", es: "Tu Especialista en SEO Local Completo", pt: "Seu Especialista em SEO Local Completo", fr: "Votre Spécialiste SEO Local Complet", it: "Il Tuo Specialista SEO Locale Completo", de: "Ihr Full-Stack Local SEO Spezialist" },
  "hero.description": { en: "I help local and service-based businesses move from low visibility to top Google rankings, converting searches into consistent leads and long-term growth.", ar: "أساعد الشركات المحلية والخدمية على الانتقال من الظهور المنخفض إلى أعلى تصنيفات Google، وتحويل عمليات البحث إلى عملاء محتملين ونمو طويل الأمد.", es: "Ayudo a empresas locales y basadas en servicios a pasar de baja visibilidad a los primeros puestos en Google, convirtiendo búsquedas en clientes potenciales y crecimiento a largo plazo.", pt: "Ajudo empresas locais e baseadas em serviços a sair da baixa visibilidade para os primeiros lugares no Google, convertendo pesquisas em leads consistentes e crescimento a longo prazo.", fr: "J'aide les entreprises locales à passer d'une faible visibilité aux premiers rangs de Google, convertissant les recherches en leads constants et en croissance à long terme.", it: "Aiuto le aziende locali a passare da bassa visibilità ai primi posti su Google, convertendo le ricerche in lead costanti e crescita a lungo termine.", de: "Ich helfe lokalen Unternehmen, von geringer Sichtbarkeit zu Top-Google-Rankings zu gelangen und Suchen in beständige Leads umzuwandeln." },
  "hero.location": { en: "Helping businesses worldwide across diverse industries and regions grow online", ar: "مساعدة الشركات في جميع أنحاء العالم عبر صناعات ومناطق متنوعة للنمو عبر الإنترنت", es: "Ayudando a empresas de todo el mundo en diversas industrias y regiones a crecer en línea", pt: "Ajudando empresas em todo o mundo em diversas indústrias e regiões a crescer online", fr: "Aider les entreprises du monde entier à se développer en ligne", it: "Aiutando le aziende di tutto il mondo a crescere online", de: "Ich helfe Unternehmen weltweit beim Online-Wachstum" },
  "hero.bookAudit": { en: "Get SEO Audit — $50", ar: "احصل على تدقيق SEO — 50$", es: "Obtener Auditoría SEO — $50", pt: "Obter Auditoria SEO — $50", fr: "Obtenir un audit SEO — 50$", it: "Ottieni Audit SEO — $50", de: "SEO-Audit erhalten — 50$" },
  "hero.auditDiscount": { en: "50% OFF — Book in 24hrs!", ar: "خصم 50% — احجز خلال 24 ساعة!", es: "50% DESCUENTO — ¡Reserva en 24hrs!", pt: "50% DESCONTO — Reserve em 24hrs!", fr: "50% RÉDUCTION — Réservez en 24h!", it: "50% SCONTO — Prenota in 24 ore!", de: "50% RABATT — Buchen Sie in 24 Std!" },
  "hero.whatsapp": { en: "WhatsApp Me", ar: "راسلني على واتساب", es: "WhatsApp", pt: "WhatsApp", fr: "WhatsApp", it: "WhatsApp", de: "WhatsApp" },
  "hero.bookConsultation": { en: "Book Consultation", ar: "احجز استشارة", es: "Reservar Consulta", pt: "Agendar Consulta", fr: "Réserver une consultation", it: "Prenota Consulenza", de: "Beratung buchen" },
  "hero.viewProjects": { en: "View Projects", ar: "عرض المشاريع", es: "Ver Proyectos", pt: "Ver Projetos", fr: "Voir les projets", it: "Vedi Progetti", de: "Projekte ansehen" },
  "hero.years": { en: "Years Experience", ar: "سنوات الخبرة", es: "Años de Experiencia", pt: "Anos de Experiência", fr: "Années d'expérience", it: "Anni di esperienza", de: "Jahre Erfahrung" },
  "hero.clients": { en: "Clients Served", ar: "عملاء تم خدمتهم", es: "Clientes Atendidos", pt: "Clientes Atendidos", fr: "Clients servis", it: "Clienti serviti", de: "Betreute Kunden" },
  "hero.traffic": { en: "Avg. Traffic Increase", ar: "متوسط زيادة الزيارات", es: "Aumento Promedio de Tráfico", pt: "Aumento Médio de Tráfego", fr: "Augmentation moyenne du trafic", it: "Aumento medio del traffico", de: "Durchschn. Traffic-Steigerung" },
  "hero.googleCertified": { en: "Google Certified", ar: "معتمد من Google", es: "Certificado por Google", pt: "Certificado pelo Google", fr: "Certifié Google", it: "Certificato Google", de: "Google-zertifiziert" },
  "hero.analyticsConsole": { en: "Analytics & Search Console", ar: "التحليلات وSearch Console", es: "Analytics y Search Console", pt: "Analytics e Search Console", fr: "Analytics et Search Console", it: "Analytics e Search Console", de: "Analytics & Search Console" },

  // Contact Form
  "contact.title": { en: "Ready to Dominate Google?", ar: "هل أنت مستعد للسيطرة على Google؟", es: "¿Listo para Dominar Google?", pt: "Pronto para Dominar o Google?", fr: "Prêt à dominer Google?", it: "Pronto a dominare Google?", de: "Bereit, Google zu dominieren?" },
  "contact.subtitle": { en: "Let's Work Together", ar: "لنعمل معاً", es: "Trabajemos Juntos", pt: "Vamos Trabalhar Juntos", fr: "Travaillons ensemble", it: "Lavoriamo insieme", de: "Lassen Sie uns zusammenarbeiten" },
  "contact.description": { en: "Get a professional SEO audit for just $100 (50% OFF if you book within 24 hours!) and discover how to outrank your competitors.", ar: "احصل على تدقيق SEO احترافي مقابل 100$ فقط (خصم 50% إذا حجزت خلال 24 ساعة!) واكتشف كيف تتفوق على منافسيك.", es: "Obtenga una auditoría SEO profesional por solo $100 (¡50% DE DESCUENTO si reserva en 24 horas!) y descubra cómo superar a sus competidores.", pt: "Obtenha uma auditoria SEO profissional por apenas $100 (50% DE DESCONTO se reservar em 24 horas!) e descubra como superar seus concorrentes.", fr: "Obtenez un audit SEO professionnel pour seulement 100$ (50% de réduction si vous réservez dans les 24 heures!) et découvrez comment surpasser vos concurrents.", it: "Ottieni un audit SEO professionale per soli $100 (50% DI SCONTO se prenoti entro 24 ore!) e scopri come superare i tuoi concorrenti.", de: "Erhalten Sie ein professionelles SEO-Audit für nur 100$ (50% RABATT bei Buchung innerhalb von 24 Stunden!) und erfahren Sie, wie Sie Ihre Konkurrenten übertreffen." },

  // Contact Page
  "contactPage.title": { en: "Let's Start a Conversation", ar: "لنبدأ محادثة", es: "Comencemos una Conversación", pt: "Vamos Iniciar uma Conversa", fr: "Commençons une conversation", it: "Iniziamo una conversazione", de: "Lassen Sie uns ein Gespräch beginnen" },
  "contactPage.description": { en: "Ready to dominate local search? Get in touch and let's discuss how I can help your business grow.", ar: "هل أنت مستعد للسيطرة على البحث المحلي؟ تواصل معنا ودعنا نناقش كيف يمكنني مساعدة عملك على النمو.", es: "¿Listo para dominar la búsqueda local? Ponte en contacto y discutamos cómo puedo ayudar a crecer tu negocio.", pt: "Pronto para dominar a busca local? Entre em contato e vamos discutir como posso ajudar seu negócio a crescer.", fr: "Prêt à dominer la recherche locale? Contactez-moi et discutons de la façon dont je peux aider votre entreprise à se développer.", it: "Pronto a dominare la ricerca locale? Mettiti in contatto e discutiamo come posso aiutare la tua attività a crescere.", de: "Bereit, die lokale Suche zu dominieren? Kontaktieren Sie mich und lassen Sie uns besprechen, wie ich Ihrem Unternehmen beim Wachstum helfen kann." },
  "contactPage.quickContact": { en: "Quick Contact", ar: "اتصال سريع", es: "Contacto Rápido", pt: "Contato Rápido", fr: "Contact rapide", it: "Contatto rapido", de: "Schnellkontakt" },
  "contactPage.serviceAreas": { en: "Service Areas", ar: "مناطق الخدمة", es: "Áreas de Servicio", pt: "Áreas de Serviço", fr: "Zones de service", it: "Aree di servizio", de: "Servicegebiete" },
  "contactPage.responseTime": { en: "Response Time", ar: "وقت الاستجابة", es: "Tiempo de Respuesta", pt: "Tempo de Resposta", fr: "Temps de réponse", it: "Tempo di risposta", de: "Antwortzeit" },
  "contactPage.within24h": { en: "Within 24 hours", ar: "خلال 24 ساعة", es: "Dentro de 24 horas", pt: "Dentro de 24 horas", fr: "Dans les 24 heures", it: "Entro 24 ore", de: "Innerhalb von 24 Stunden" },
  "contactPage.bookConsultation": { en: "Book a Free Consultation", ar: "احجز استشارة مجانية", es: "Reserve una Consulta Gratis", pt: "Agende uma Consulta Gratuita", fr: "Réservez une consultation gratuite", it: "Prenota una consulenza gratuita", de: "Buchen Sie eine kostenlose Beratung" },
  "contactPage.consultationDesc": { en: "Schedule a 30-minute call to discuss your Local SEO needs and get actionable insights.", ar: "حدد موعداً لمكالمة مدتها 30 دقيقة لمناقشة احتياجات SEO المحلي الخاصة بك والحصول على رؤى قابلة للتنفيذ.", es: "Programe una llamada de 30 minutos para discutir sus necesidades de SEO local y obtener información práctica.", pt: "Agende uma ligação de 30 minutos para discutir suas necessidades de SEO local e obter insights acionáveis.", fr: "Planifiez un appel de 30 minutes pour discuter de vos besoins en SEO local et obtenir des informations exploitables.", it: "Pianifica una chiamata di 30 minuti per discutere le tue esigenze SEO locale e ottenere approfondimenti utili.", de: "Planen Sie einen 30-minütigen Anruf, um Ihre lokalen SEO-Anforderungen zu besprechen und umsetzbare Erkenntnisse zu erhalten." },
  "contactPage.scheduleCall": { en: "Schedule Call", ar: "جدولة مكالمة", es: "Programar Llamada", pt: "Agendar Ligação", fr: "Planifier un appel", it: "Pianifica chiamata", de: "Anruf planen" },
  "contactPage.sendMessage": { en: "Send a Message", ar: "أرسل رسالة", es: "Enviar un Mensaje", pt: "Enviar uma Mensagem", fr: "Envoyer un message", it: "Invia un messaggio", de: "Nachricht senden" },
  "contactPage.formDescription": { en: "Fill out the form below and I'll get back to you within 24 hours.", ar: "املأ النموذج أدناه وسأرد عليك خلال 24 ساعة.", es: "Complete el formulario a continuación y le responderé dentro de 24 horas.", pt: "Preencha o formulário abaixo e entrarei em contato em 24 horas.", fr: "Remplissez le formulaire ci-dessous et je vous répondrai dans les 24 heures.", it: "Compila il modulo qui sotto e ti risponderò entro 24 ore.", de: "Füllen Sie das Formular aus und ich melde mich innerhalb von 24 Stunden bei Ihnen." },
  "contact.name": { en: "Full Name", ar: "الاسم الكامل", es: "Nombre Completo", pt: "Nome Completo", fr: "Nom complet", it: "Nome completo", de: "Vollständiger Name" },
  "contact.email": { en: "Email Address", ar: "البريد الإلكتروني", es: "Correo Electrónico", pt: "Endereço de E-mail", fr: "Adresse e-mail", it: "Indirizzo email", de: "E-Mail-Adresse" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف", es: "Número de Teléfono", pt: "Número de Telefone", fr: "Numéro de téléphone", it: "Numero di telefono", de: "Telefonnummer" },
  "contact.company": { en: "Company Name", ar: "اسم الشركة", es: "Nombre de la Empresa", pt: "Nome da Empresa", fr: "Nom de l'entreprise", it: "Nome dell'azienda", de: "Firmenname" },
  "contact.service": { en: "Service Interested In", ar: "الخدمة المطلوبة", es: "Servicio de Interés", pt: "Serviço de Interesse", fr: "Service intéressé", it: "Servizio di interesse", de: "Interessierter Service" },
  "contact.message": { en: "Your Message", ar: "رسالتك", es: "Tu Mensaje", pt: "Sua Mensagem", fr: "Votre message", it: "Il tuo messaggio", de: "Ihre Nachricht" },
  "contact.submit": { en: "Send Message", ar: "إرسال الرسالة", es: "Enviar Mensaje", pt: "Enviar Mensagem", fr: "Envoyer le message", it: "Invia messaggio", de: "Nachricht senden" },
  "contact.sending": { en: "Sending...", ar: "جاري الإرسال...", es: "Enviando...", pt: "Enviando...", fr: "Envoi en cours...", it: "Invio in corso...", de: "Wird gesendet..." },
  "contact.success": { en: "Message sent successfully! I'll get back to you soon.", ar: "تم إرسال الرسالة بنجاح! سأرد عليك قريباً.", es: "¡Mensaje enviado con éxito! Te responderé pronto.", pt: "Mensagem enviada com sucesso! Entrarei em contato em breve.", fr: "Message envoyé avec succès! Je vous répondrai bientôt.", it: "Messaggio inviato con successo! Ti risponderò presto.", de: "Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen." },
  "contact.error": { en: "Failed to send message. Please try again.", ar: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.", es: "Error al enviar el mensaje. Por favor, inténtelo de nuevo.", pt: "Falha ao enviar mensagem. Por favor, tente novamente.", fr: "Échec de l'envoi du message. Veuillez réessayer.", it: "Impossibile inviare il messaggio. Si prega di riprovare.", de: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut." },
  "contact.clientName": { en: "Client Name", ar: "اسم العميل", es: "Nombre del Cliente", pt: "Nome do Cliente", fr: "Nom du client", it: "Nome del cliente", de: "Kundenname" },
  "contact.businessName": { en: "Business Name", ar: "اسم العمل", es: "Nombre del Negocio", pt: "Nome da Empresa", fr: "Nom de l'entreprise", it: "Nome dell'azienda", de: "Firmenname" },
  "contact.businessAddress": { en: "Business Address", ar: "عنوان العمل", es: "Dirección del Negocio", pt: "Endereço da Empresa", fr: "Adresse de l'entreprise", it: "Indirizzo dell'azienda", de: "Geschäftsadresse" },
  "contact.city": { en: "City", ar: "المدينة", es: "Ciudad", pt: "Cidade", fr: "Ville", it: "Città", de: "Stadt" },
  "contact.state": { en: "State/Province", ar: "الولاية/المقاطعة", es: "Estado/Provincia", pt: "Estado/Província", fr: "État/Province", it: "Stato/Provincia", de: "Bundesland" },
  "contact.zipcode": { en: "Zipcode", ar: "الرمز البريدي", es: "Código Postal", pt: "CEP", fr: "Code postal", it: "CAP", de: "Postleitzahl" },
  "contact.country": { en: "Country", ar: "البلد", es: "País", pt: "País", fr: "Pays", it: "Paese", de: "Land" },
  "contact.selectService": { en: "Select a service", ar: "اختر خدمة", es: "Seleccione un servicio", pt: "Selecione um serviço", fr: "Sélectionnez un service", it: "Seleziona un servizio", de: "Service auswählen" },
  "contact.gbpLink": { en: "GBP/Map Link", ar: "رابط خرائط جوجل", es: "Enlace de GBP/Mapa", pt: "Link do GBP/Mapa", fr: "Lien GBP/Carte", it: "Link GBP/Mappa", de: "GBP/Karten-Link" },
  "contact.gbpLinkHint": { en: "Paste your Google Business Profile or Google Maps link", ar: "الصق رابط ملف Google التجاري أو خرائط Google", es: "Pegue su enlace de Google Business Profile o Google Maps", pt: "Cole seu link do Google Business Profile ou Google Maps", fr: "Collez votre lien Google Business Profile ou Google Maps", it: "Incolla il tuo link Google Business Profile o Google Maps", de: "Fügen Sie Ihren Google Business Profile- oder Google Maps-Link ein" },
  "contact.competitor": { en: "Competitor (Optional)", ar: "المنافس (اختياري)", es: "Competidor (Opcional)", pt: "Concorrente (Opcional)", fr: "Concurrent (Optionnel)", it: "Concorrente (Opzionale)", de: "Wettbewerber (Optional)" },
  "contact.customService": { en: "Describe Your Custom Service", ar: "صف خدمتك المخصصة", es: "Describe Tu Servicio Personalizado", pt: "Descreva Seu Serviço Personalizado", fr: "Décrivez votre service personnalisé", it: "Descrivi il tuo servizio personalizzato", de: "Beschreiben Sie Ihren benutzerdefinierten Service" },
  "contact.formGuide": { en: "Need help? Read the form guide", ar: "تحتاج مساعدة؟ اقرأ دليل النموذج", es: "¿Necesita ayuda? Lea la guía del formulario", pt: "Precisa de ajuda? Leia a guia do formulário", fr: "Besoin d'aide? Lisez le guide du formulaire", it: "Hai bisogno di aiuto? Leggi la guida al modulo", de: "Brauchen Sie Hilfe? Lesen Sie die Formularanleitung" },
  "contact.bookCall": { en: "Book a Call", ar: "احجز مكالمة", es: "Reservar Llamada", pt: "Agendar Chamada", fr: "Réserver un appel", it: "Prenota una chiamata", de: "Anruf buchen" },
  "contact.scheduleMeeting": { en: "Schedule a meeting", ar: "جدولة اجتماع", es: "Programar una reunión", pt: "Agendar reunião", fr: "Planifier une réunion", it: "Pianifica un incontro", de: "Meeting planen" },
  "contact.whatsapp": { en: "WhatsApp", ar: "واتساب", es: "WhatsApp", pt: "WhatsApp", fr: "WhatsApp", it: "WhatsApp", de: "WhatsApp" },
  "contact.quickChat": { en: "Quick chat", ar: "محادثة سريعة", es: "Chat rápido", pt: "Chat rápido", fr: "Chat rapide", it: "Chat veloce", de: "Schneller Chat" },
  "contact.worldwide": { en: "Worldwide", ar: "حول العالم", es: "Mundial", pt: "Mundial", fr: "Mondial", it: "Mondiale", de: "Weltweit" },
  "contact.sendInquiry": { en: "Send a Detailed Inquiry", ar: "أرسل استفساراً مفصلاً", es: "Enviar una Consulta Detallada", pt: "Enviar uma Consulta Detalhada", fr: "Envoyer une demande détaillée", it: "Invia una richiesta dettagliata", de: "Detaillierte Anfrage senden" },
  "contact.customServiceHint": { en: "Please describe the specific service you're looking for", ar: "يرجى وصف الخدمة المحددة التي تبحث عنها", es: "Por favor describa el servicio específico que está buscando", pt: "Por favor, descreva o serviço específico que você está procurando", fr: "Veuillez décrire le service spécifique que vous recherchez", it: "Si prega di descrivere il servizio specifico che stai cercando", de: "Bitte beschreiben Sie den spezifischen Service, den Sie suchen" },

  // Multi-location & Promo Code
  "contact.multiLocation.question": { en: "Do you have multiple business locations?", ar: "هل لديك مواقع عمل متعددة؟", es: "¿Tiene múltiples ubicaciones comerciales?", pt: "Você tem múltiplas localizações comerciais?", fr: "Avez-vous plusieurs emplacements commerciaux?", it: "Hai più sedi aziendali?", de: "Haben Sie mehrere Geschäftsstandorte?" },
  "contact.multiLocation.hint": { en: "Add all your locations for a custom multi-location quote", ar: "أضف جميع مواقعك للحصول على عرض أسعار مخصص متعدد المواقع", es: "Agregue todas sus ubicaciones para una cotización personalizada de múltiples ubicaciones", pt: "Adicione todas as suas localizações para um orçamento personalizado de múltiplas localizações", fr: "Ajoutez tous vos emplacements pour un devis personnalisé multi-sites", it: "Aggiungi tutte le tue sedi per un preventivo personalizzato multi-sede", de: "Fügen Sie alle Ihre Standorte hinzu für ein individuelles Multi-Standort-Angebot" },
  "contact.multiLocation.yes": { en: "Yes", ar: "نعم", es: "Sí", pt: "Sim", fr: "Oui", it: "Sì", de: "Ja" },
  "contact.multiLocation.no": { en: "No", ar: "لا", es: "No", pt: "Não", fr: "Non", it: "No", de: "Nein" },
  "contact.multiLocation.yourLocations": { en: "Your Business Locations", ar: "مواقع عملك", es: "Sus Ubicaciones Comerciales", pt: "Suas Localizações Comerciais", fr: "Vos Emplacements Commerciaux", it: "Le Tue Sedi Aziendali", de: "Ihre Geschäftsstandorte" },
  "contact.multiLocation.discountApplies": { en: "Multi-location discount applies!", ar: "ينطبق خصم المواقع المتعددة!", es: "¡Aplica descuento por múltiples ubicaciones!", pt: "Desconto para múltiplas localizações se aplica!", fr: "La remise multi-sites s'applique!", it: "Si applica lo sconto multi-sede!", de: "Rabatt für mehrere Standorte gilt!" },
  "contact.multiLocation.location": { en: "Location", ar: "الموقع", es: "Ubicación", pt: "Localização", fr: "Emplacement", it: "Sede", de: "Standort" },
  "contact.multiLocation.addAnother": { en: "Add Another Location", ar: "أضف موقعاً آخر", es: "Agregar Otra Ubicación", pt: "Adicionar Outra Localização", fr: "Ajouter un autre emplacement", it: "Aggiungi un'altra sede", de: "Weiteren Standort hinzufügen" },
  "contact.promoCode": { en: "Promo Code (Optional)", ar: "رمز الخصم (اختياري)", es: "Código Promocional (Opcional)", pt: "Código Promocional (Opcional)", fr: "Code Promo (Optionnel)", it: "Codice Promozionale (Opzionale)", de: "Promo-Code (Optional)" },
  "contact.promoCodeHint": { en: "Have a promo code? Enter it here for special discounts on multi-location or bundled services.", ar: "هل لديك رمز خصم؟ أدخله هنا للحصول على خصومات خاصة على الخدمات متعددة المواقع أو المجمعة.", es: "¿Tiene un código promocional? Ingréselo aquí para descuentos especiales en servicios de múltiples ubicaciones o paquetes.", pt: "Tem um código promocional? Digite aqui para descontos especiais em serviços de múltiplas localizações ou pacotes.", fr: "Vous avez un code promo? Entrez-le ici pour des réductions spéciales sur les services multi-sites ou groupés.", it: "Hai un codice promozionale? Inseriscilo qui per sconti speciali su servizi multi-sede o pacchetti.", de: "Haben Sie einen Promo-Code? Geben Sie ihn hier ein für Sonderrabatte auf Multi-Standort- oder gebündelte Dienste." },
  "contact.promoCodePlaceholder": { en: "E.g., MULTI-DISCOUNT", ar: "مثال: MULTI-DISCOUNT", es: "Ej., MULTI-DISCOUNT", pt: "Ex., MULTI-DISCOUNT", fr: "Ex., MULTI-DISCOUNT", it: "Es., MULTI-DISCOUNT", de: "Z.B., MULTI-DISCOUNT" },
  "contact.whichServices": { en: "Which services do you need?", ar: "ما هي الخدمات التي تحتاجها؟", es: "¿Qué servicios necesita?", pt: "Quais serviços você precisa?", fr: "Quels services avez-vous besoin?", it: "Quali servizi hai bisogno?", de: "Welche Dienste benötigen Sie?" },
  "contact.bundleServicesPlaceholder": { en: "E.g., Local SEO + Web Development + Social Media Marketing...", ar: "مثال: SEO المحلي + تطوير المواقع + التسويق عبر وسائل التواصل الاجتماعي...", es: "Ej., SEO Local + Desarrollo Web + Marketing en Redes Sociales...", pt: "Ex., SEO Local + Desenvolvimento Web + Marketing de Mídias Sociais...", fr: "Ex., SEO Local + Développement Web + Marketing sur les Réseaux Sociaux...", it: "Es., SEO Locale + Sviluppo Web + Social Media Marketing...", de: "Z.B., Lokales SEO + Webentwicklung + Social Media Marketing..." },
  "contact.bundleServicesHint": { en: "List all the services you're interested in bundling together", ar: "اذكر جميع الخدمات التي ترغب في تجميعها معاً", es: "Liste todos los servicios que le interesa agrupar", pt: "Liste todos os serviços que você está interessado em agrupar", fr: "Listez tous les services que vous souhaitez regrouper", it: "Elenca tutti i servizi che sei interessato a raggruppare", de: "Listen Sie alle Dienste auf, die Sie bündeln möchten" },
  "contact.discountEligible": { en: "Special Discount Eligible!", ar: "مؤهل لخصم خاص!", es: "¡Elegible para Descuento Especial!", pt: "Elegível para Desconto Especial!", fr: "Éligible à une Réduction Spéciale!", it: "Idoneo per Sconto Speciale!", de: "Berechtigt für Sonderrabatt!" },
  "contact.locationDiscount": { en: "You're adding {count} locations — you qualify for up to 30% volume discount!", ar: "أنت تضيف {count} مواقع — أنت مؤهل للحصول على خصم يصل إلى 30%!", es: "Está agregando {count} ubicaciones — ¡califica para hasta 30% de descuento por volumen!", pt: "Você está adicionando {count} localizações — você se qualifica para até 30% de desconto por volume!", fr: "Vous ajoutez {count} emplacements — vous êtes éligible à une réduction de volume jusqu'à 30%!", it: "Stai aggiungendo {count} sedi — hai diritto a uno sconto volume fino al 30%!", de: "Sie fügen {count} Standorte hinzu — Sie qualifizieren sich für bis zu 30% Mengenrabatt!" },
  "contact.bundleDiscount": { en: "Bundling multiple services qualifies you for up to 25% discount!", ar: "تجميع خدمات متعددة يؤهلك للحصول على خصم يصل إلى 25%!", es: "¡Agrupar múltiples servicios le califica para hasta 25% de descuento!", pt: "Agrupar múltiplos serviços qualifica você para até 25% de desconto!", fr: "Regrouper plusieurs services vous donne droit à une réduction jusqu'à 25%!", it: "Raggruppare più servizi ti qualifica per uno sconto fino al 25%!", de: "Das Bündeln mehrerer Dienste qualifiziert Sie für bis zu 25% Rabatt!" },

  // Contact Form - UI strings (placeholders + toast titles)
  "contact.toast.successTitle": { en: "Success!", ar: "تم بنجاح!", es: "¡Éxito!", pt: "Sucesso!", fr: "Succès !", it: "Successo!", de: "Erfolg!" },
  "contact.toast.errorTitle": { en: "Error", ar: "خطأ", es: "Error", pt: "Erro", fr: "Erreur", it: "Errore", de: "Fehler" },
  "contact.toast.validationTitle": { en: "Validation Error", ar: "خطأ في التحقق", es: "Error de validación", pt: "Erro de validação", fr: "Erreur de validation", it: "Errore di validazione", de: "Validierungsfehler" },

  "contact.placeholder.fullName": { en: "e.g., John Doe", ar: "مثال: محمد أحمد", es: "p. ej., Juan Pérez", pt: "ex.: João Silva", fr: "ex. : Jean Dupont", it: "es.: Mario Rossi", de: "z. B. Max Mustermann" },
  "contact.placeholder.email": { en: "e.g., john@example.com", ar: "مثال: name@example.com", es: "p. ej., juan@ejemplo.com", pt: "ex.: joao@exemplo.com", fr: "ex. : jean@exemple.com", it: "es.: mario@esempio.com", de: "z. B. max@beispiel.de" },
  "contact.placeholder.phone": { en: "e.g., +1 234 567 8900", ar: "مثال: ‎+971 52 369 5036", es: "p. ej., +34 600 000 000", pt: "ex.: +351 900 000 000", fr: "ex. : +33 6 00 00 00 00", it: "es.: +39 300 000 0000", de: "z. B. +49 170 0000000" },
  "contact.placeholder.businessName": { en: "e.g., ABC Services LLC", ar: "مثال: شركة ABC للخدمات", es: "p. ej., ABC Servicios", pt: "ex.: ABC Serviços", fr: "ex. : ABC Services", it: "es.: ABC Servizi", de: "z. B. ABC Dienstleistungen" },
  "contact.placeholder.businessAddress": { en: "e.g., 123 Main Street, Suite 100", ar: "مثال: شارع رئيسي 123، مكتب 100", es: "p. ej., Calle Principal 123, Oficina 100", pt: "ex.: Rua Principal 123, Sala 100", fr: "ex. : 123 rue Principale, Bureau 100", it: "es.: Via Principale 123, Ufficio 100", de: "z. B. Hauptstraße 123, Büro 100" },
  "contact.placeholder.city": { en: "e.g., New York", ar: "مثال: دبي", es: "p. ej., Madrid", pt: "ex.: Lisboa", fr: "ex. : Paris", it: "es.: Milano", de: "z. B. Berlin" },
  "contact.placeholder.state": { en: "e.g., NY", ar: "مثال: دبي", es: "p. ej., CA", pt: "ex.: SP", fr: "ex. : IDF", it: "es.: MI", de: "z. B. BY" },
  "contact.placeholder.zipcode": { en: "e.g., 10001", ar: "مثال: 10001", es: "p. ej., 28001", pt: "ex.: 1000-001", fr: "ex. : 75001", it: "es.: 20121", de: "z. B. 10115" },
  "contact.placeholder.country": { en: "e.g., United States", ar: "مثال: الإمارات العربية المتحدة", es: "p. ej., España", pt: "ex.: Portugal", fr: "ex. : France", it: "es.: Italia", de: "z. B. Deutschland" },
  "contact.placeholder.gbpLink": { en: "e.g., https://maps.google.com/...", ar: "مثال: https://maps.google.com/...", es: "p. ej., https://maps.google.com/...", pt: "ex.: https://maps.google.com/...", fr: "ex. : https://maps.google.com/...", it: "es.: https://maps.google.com/...", de: "z. B. https://maps.google.com/..." },
  "contact.placeholder.competitor": { en: "Competitor name or website", ar: "اسم المنافس أو موقعه", es: "Nombre o sitio web del competidor", pt: "Nome ou site do concorrente", fr: "Nom ou site du concurrent", it: "Nome o sito del concorrente", de: "Name oder Website des Wettbewerbers" },
  "contact.placeholder.message": { en: "Tell me about your goals and challenges…", ar: "أخبرني عن أهدافك وتحدياتك…", es: "Cuéntame tus objetivos y desafíos…", pt: "Conte-me seus objetivos e desafios…", fr: "Parlez-moi de vos objectifs et défis…", it: "Parlami dei tuoi obiettivi e sfide…", de: "Erzählen Sie mir von Ihren Zielen und Herausforderungen…" },

  // Contact Form - validation messages
  "contact.validation.nameMin": { en: "Name must be at least 2 characters", ar: "يجب أن يكون الاسم مكوناً من حرفين على الأقل", es: "El nombre debe tener al menos 2 caracteres", pt: "O nome deve ter pelo menos 2 caracteres", fr: "Le nom doit contenir au moins 2 caractères", it: "Il nome deve contenere almeno 2 caratteri", de: "Der Name muss mindestens 2 Zeichen lang sein" },
  "contact.validation.emailInvalid": { en: "Please enter a valid email address", ar: "يرجى إدخال بريد إلكتروني صالح", es: "Por favor, ingrese un correo electrónico válido", pt: "Por favor, insira um e-mail válido", fr: "Veuillez saisir une adresse e-mail valide", it: "Inserisci un indirizzo email valido", de: "Bitte geben Sie eine gültige E-Mail-Adresse ein" },
  "contact.validation.phoneRequired": { en: "Phone number is required", ar: "رقم الهاتف مطلوب", es: "El número de teléfono es obligatorio", pt: "O número de telefone é obrigatório", fr: "Le numéro de téléphone est requis", it: "Il numero di telefono è obbligatorio", de: "Telefonnummer ist erforderlich" },
  "contact.validation.businessNameRequired": { en: "Business name is required", ar: "اسم العمل مطلوب", es: "El nombre del negocio es obligatorio", pt: "O nome da empresa é obrigatório", fr: "Le nom de l'entreprise est requis", it: "Il nome dell'azienda è obbligatorio", de: "Firmenname ist erforderlich" },
  "contact.validation.cityRequired": { en: "City is required", ar: "المدينة مطلوبة", es: "La ciudad es obligatoria", pt: "A cidade é obrigatória", fr: "La ville est requise", it: "La città è obbligatoria", de: "Stadt ist erforderlich" },
  "contact.validation.zipcodeRequired": { en: "Zipcode is required", ar: "الرمز البريدي مطلوب", es: "El código postal es obligatorio", pt: "O CEP é obrigatório", fr: "Le code postal est requis", it: "Il CAP è obbligatorio", de: "Postleitzahl ist erforderlich" },
  "contact.validation.countryRequired": { en: "Country is required", ar: "البلد مطلوب", es: "El país es obligatorio", pt: "O país é obrigatório", fr: "Le pays est requis", it: "Il paese è obbligatorio", de: "Land ist erforderlich" },
  "contact.validation.serviceRequired": { en: "Please select a service", ar: "يرجى اختيار خدمة", es: "Por favor, seleccione un servicio", pt: "Por favor, selecione um serviço", fr: "Veuillez sélectionner un service", it: "Seleziona un servizio", de: "Bitte wählen Sie einen Service" },
  "contact.validation.gbpRequired": { en: "GBP/Map link is required", ar: "رابط خرائط Google مطلوب", es: "El enlace de GBP/Mapa es obligatorio", pt: "O link do GBP/Mapa é obrigatório", fr: "Le lien GBP/Carte est requis", it: "Il link GBP/Mappa è obbligatorio", de: "GBP/Karten-Link ist erforderlich" },
  "contact.validation.messageMin": { en: "Message must be at least 10 characters", ar: "يجب أن تكون الرسالة مكونة من 10 أحرف على الأقل", es: "El mensaje debe tener al menos 10 caracteres", pt: "A mensagem deve ter pelo menos 10 caracteres", fr: "Le message doit contenir au moins 10 caractères", it: "Il messaggio deve contenere almeno 10 caratteri", de: "Die Nachricht muss mindestens 10 Zeichen lang sein" },

  // Contact Form - service options
  "contact.serviceOption.fullStackLocalSeo": { en: "Full Stack Local SEO", ar: "SEO محلي شامل", es: "SEO Local Full Stack", pt: "SEO Local Full Stack", fr: "SEO local full stack", it: "SEO locale full stack", de: "Full-Stack Lokales SEO" },
  "contact.serviceOption.gbpManagement": { en: "GBP Management", ar: "إدارة ملف Google التجاري", es: "Gestión de GBP", pt: "Gestão de GBP", fr: "Gestion GBP", it: "Gestione GBP", de: "GBP-Verwaltung" },
  "contact.serviceOption.gbpAudit": { en: "GBP Audit", ar: "تدقيق ملف Google التجاري", es: "Auditoría de GBP", pt: "Auditoria de GBP", fr: "Audit GBP", it: "Audit GBP", de: "GBP-Audit" },
  "contact.serviceOption.websiteAudit": { en: "Website Audit", ar: "تدقيق الموقع", es: "Auditoría del sitio web", pt: "Auditoria do site", fr: "Audit du site", it: "Audit del sito", de: "Website-Audit" },
  "contact.serviceOption.completeBusinessAudit": { en: "Complete Business Audit", ar: "تدقيق شامل للأعمال", es: "Auditoría completa del negocio", pt: "Auditoria completa do negócio", fr: "Audit complet de l'entreprise", it: "Audit completo dell'attività", de: "Komplettes Business-Audit" },
  "contact.serviceOption.businessConsultation": { en: "Business Consultation", ar: "استشارة أعمال", es: "Consultoría de negocios", pt: "Consultoria de negócios", fr: "Conseil business", it: "Consulenza business", de: "Business-Beratung" },
  "contact.serviceOption.completeProjectManagement": { en: "Complete Project Management", ar: "إدارة مشروع كاملة", es: "Gestión completa de proyectos", pt: "Gestão completa de projetos", fr: "Gestion de projet complète", it: "Gestione completa del progetto", de: "Komplettes Projektmanagement" },
  "contact.serviceOption.websiteDevelopment": { en: "Website Development", ar: "تطوير المواقع", es: "Desarrollo web", pt: "Desenvolvimento de site", fr: "Développement web", it: "Sviluppo sito web", de: "Webentwicklung" },
  "contact.serviceOption.localServiceAds": { en: "Local Service Ads", ar: "إعلانات الخدمات المحلية", es: "Anuncios de servicios locales", pt: "Anúncios de serviços locais", fr: "Annonces de services locaux", it: "Annunci di servizi locali", de: "Lokale Serviceanzeigen" },
  "contact.serviceOption.citations": { en: "Citations", ar: "إدارة الاستشهادات", es: "Citaciones", pt: "Citações", fr: "Citations", it: "Citazioni", de: "Zitate" },
  "contact.serviceOption.linkBuilding": { en: "Link Building", ar: "بناء الروابط", es: "Construcción de enlaces", pt: "Link building", fr: "Netlinking", it: "Link building", de: "Linkaufbau" },
  "contact.serviceOption.websiteSeo": { en: "Website SEO", ar: "SEO الموقع", es: "SEO del sitio web", pt: "SEO do site", fr: "SEO du site", it: "SEO del sito", de: "Website-SEO" },
  "contact.serviceOption.contentWriting": { en: "Content Writing", ar: "كتابة المحتوى", es: "Redacción de contenido", pt: "Redação de conteúdo", fr: "Rédaction de contenu", it: "Scrittura contenuti", de: "Content-Erstellung" },
  "contact.serviceOption.graphicDesign": { en: "Graphic Design", ar: "تصميم جرافيك", es: "Diseño gráfico", pt: "Design gráfico", fr: "Design graphique", it: "Graphic design", de: "Grafikdesign" },
  "contact.serviceOption.socialMediaMarketing": { en: "Social Media Marketing", ar: "التسويق عبر وسائل التواصل الاجتماعي", es: "Marketing en redes sociales", pt: "Marketing de mídias sociais", fr: "Marketing sur les réseaux sociaux", it: "Social media marketing", de: "Social Media Marketing" },
  "contact.serviceOption.multipleServicesBundle": { en: "Multiple Services Bundle", ar: "باقة خدمات متعددة", es: "Paquete de múltiples servicios", pt: "Pacote de múltiplos serviços", fr: "Pack de services", it: "Pacchetto multi-servizi", de: "Mehrere Services (Paket)" },
  "contact.serviceOption.otherCustom": { en: "Other (Custom Service)", ar: "أخرى (خدمة مخصصة)", es: "Otro (servicio personalizado)", pt: "Outro (serviço personalizado)", fr: "Autre (service personnalisé)", it: "Altro (servizio personalizzato)", de: "Sonstiges (Individueller Service)" },

  // Services
  "services.title": { en: "Local SEO Services That Drive Results", ar: "خدمات SEO المحلية التي تحقق النتائج", es: "Servicios de SEO Local que Generan Resultados", pt: "Serviços de SEO Local que Geram Resultados", fr: "Services SEO locaux qui génèrent des résultats", it: "Servizi SEO locali che generano risultati", de: "Lokale SEO-Dienste, die Ergebnisse liefern" },
  "services.subtitle": { en: "Comprehensive strategies to boost your local visibility", ar: "استراتيجيات شاملة لتعزيز ظهورك المحلي", es: "Estrategias integrales para impulsar tu visibilidad local", pt: "Estratégias abrangentes para aumentar sua visibilidade local", fr: "Stratégies complètes pour booster votre visibilité locale", it: "Strategie complete per aumentare la tua visibilità locale", de: "Umfassende Strategien zur Steigerung Ihrer lokalen Sichtbarkeit" },
  "services.badge": { en: "Services", ar: "الخدمات", es: "Servicios", pt: "Serviços", fr: "Services", it: "Servizi", de: "Dienstleistungen" },
  "services.heading": { en: "My Services Designed to Boost Business Growth", ar: "خدماتي المصممة لتعزيز نمو الأعمال", es: "Mis Servicios Diseñados para Impulsar el Crecimiento Empresarial", pt: "Meus Serviços Projetados para Impulsionar o Crescimento dos Negócios", fr: "Mes services conçus pour stimuler la croissance des entreprises", it: "I miei servizi progettati per aumentare la crescita aziendale", de: "Meine Dienstleistungen für Ihr Unternehmenswachstum" },
  "services.description": { en: "I provide full-stack SEO and local growth services, designed for businesses that want measurable results, AI-ready strategies, and top local map visibility.", ar: "أقدم خدمات SEO شاملة ونمو محلي، مصممة للشركات التي تريد نتائج قابلة للقياس واستراتيجيات جاهزة للذكاء الاصطناعي وأعلى ظهور على الخرائط المحلية.", es: "Proporciono servicios SEO completos y crecimiento local, diseñados para empresas que quieren resultados medibles, estrategias listas para IA y máxima visibilidad en mapas locales.", pt: "Forneço serviços completos de SEO e crescimento local, projetados para empresas que desejam resultados mensuráveis, estratégias prontas para IA e máxima visibilidade em mapas locais.", fr: "Je fournis des services SEO complets et de croissance locale, conçus pour les entreprises qui veulent des résultats mesurables, des stratégies prêtes pour l'IA et une visibilité maximale sur les cartes locales.", it: "Fornisco servizi SEO completi e crescita locale, progettati per le aziende che vogliono risultati misurabili, strategie pronte per l'IA e massima visibilità sulle mappe locali.", de: "Ich biete Full-Stack-SEO- und lokale Wachstumsdienste für Unternehmen, die messbare Ergebnisse, KI-bereite Strategien und Top-Sichtbarkeit auf lokalen Karten wollen." },

  // Service items
  "services.localSeo": { en: "Local SEO Optimization", ar: "تحسين SEO المحلي", es: "Optimización SEO Local", pt: "Otimização SEO Local", fr: "Optimisation SEO local", it: "Ottimizzazione SEO locale", de: "Lokale SEO-Optimierung" },
  "services.localSeoDesc": { en: "I boost your visibility on Google Search with local SEO strategies that attract high-intent customers in your local area.", ar: "أعزز ظهورك على بحث Google باستراتيجيات SEO محلية تجذب العملاء ذوي النية العالية في منطقتك المحلية.", es: "Impulso tu visibilidad en Google Search con estrategias SEO locales que atraen clientes de alta intención en tu área local.", pt: "Aumento sua visibilidade no Google Search com estratégias de SEO local que atraem clientes de alta intenção em sua área local.", fr: "Je booste votre visibilité sur Google Search avec des stratégies SEO locales qui attirent des clients à forte intention dans votre zone locale.", it: "Aumento la tua visibilità su Google Search con strategie SEO locali che attraggono clienti ad alta intenzione nella tua zona.", de: "Ich steigere Ihre Sichtbarkeit in der Google-Suche mit lokalen SEO-Strategien, die kaufwillige Kunden in Ihrer Region anziehen." },
  "services.gbp": { en: "Google Business Profile Management", ar: "إدارة ملف Google التجاري", es: "Gestión de Google Business Profile", pt: "Gerenciamento do Google Business Profile", fr: "Gestion de Google Business Profile", it: "Gestione Google Business Profile", de: "Google Business Profile Verwaltung" },
  "services.gbpDesc": { en: "I handle the complete setup, optimization, and management of your Google Business Profile to maximize visibility in search, maps, and AI-powered listings.", ar: "أتولى الإعداد الكامل والتحسين وإدارة ملف Google التجاري الخاص بك لتعظيم الظهور في البحث والخرائط والقوائم المدعومة بالذكاء الاصطناعي.", es: "Manejo la configuración completa, optimización y gestión de tu Google Business Profile para maximizar la visibilidad en búsqueda, mapas y listados potenciados por IA.", pt: "Cuido da configuração completa, otimização e gerenciamento do seu Google Business Profile para maximizar a visibilidade em pesquisa, mapas e listagens com IA.", fr: "Je gère la configuration complète, l'optimisation et la gestion de votre Google Business Profile pour maximiser la visibilité dans la recherche, les cartes et les listes alimentées par l'IA.", it: "Gestisco la configurazione completa, l'ottimizzazione e la gestione del tuo Google Business Profile per massimizzare la visibilità nella ricerca, mappe e elenchi alimentati dall'IA.", de: "Ich übernehme die komplette Einrichtung, Optimierung und Verwaltung Ihres Google Business Profiles für maximale Sichtbarkeit in Suche, Karten und KI-gestützten Listen." },
  "services.mapSeo": { en: "Map SEO – Google, Apple, Bing", ar: "SEO الخرائط – Google، Apple، Bing", es: "SEO de Mapas – Google, Apple, Bing", pt: "SEO de Mapas – Google, Apple, Bing", fr: "SEO Maps – Google, Apple, Bing", it: "SEO Mappe – Google, Apple, Bing", de: "Karten-SEO – Google, Apple, Bing" },
  "services.mapSeoDesc": { en: "I optimize your presence on Google Maps, Apple Maps, Bing Maps, and other location-based platforms to effectively capture local searches.", ar: "أحسن تواجدك على خرائط Google وApple وBing ومنصات أخرى قائمة على الموقع لجذب عمليات البحث المحلية بفعالية.", es: "Optimizo tu presencia en Google Maps, Apple Maps, Bing Maps y otras plataformas basadas en ubicación para capturar efectivamente búsquedas locales.", pt: "Otimizo sua presença no Google Maps, Apple Maps, Bing Maps e outras plataformas baseadas em localização para capturar efetivamente pesquisas locais.", fr: "J'optimise votre présence sur Google Maps, Apple Maps, Bing Maps et d'autres plateformes basées sur la localisation pour capturer efficacement les recherches locales.", it: "Ottimizzo la tua presenza su Google Maps, Apple Maps, Bing Maps e altre piattaforme basate sulla posizione per catturare efficacemente le ricerche locali.", de: "Ich optimiere Ihre Präsenz auf Google Maps, Apple Maps, Bing Maps und anderen standortbasierten Plattformen für effektive lokale Suchen." },
  "services.keywordResearch": { en: "Keyword Research & Semantic SEO", ar: "بحث الكلمات المفتاحية وSEO الدلالي", es: "Investigación de Palabras Clave y SEO Semántico", pt: "Pesquisa de Palavras-chave e SEO Semântico", fr: "Recherche de mots-clés et SEO sémantique", it: "Ricerca parole chiave e SEO semantico", de: "Keyword-Recherche & Semantisches SEO" },
  "services.keywordResearchDesc": { en: "I identify the best keywords for your business, including voice search and AI-generated queries, to drive relevant traffic that converts.", ar: "أحدد أفضل الكلمات المفتاحية لعملك، بما في ذلك البحث الصوتي واستعلامات الذكاء الاصطناعي، لجلب حركة مرور ذات صلة تتحول إلى عملاء.", es: "Identifico las mejores palabras clave para tu negocio, incluyendo búsqueda por voz y consultas generadas por IA, para atraer tráfico relevante que convierte.", pt: "Identifico as melhores palavras-chave para seu negócio, incluindo pesquisa por voz e consultas geradas por IA, para direcionar tráfego relevante que converte.", fr: "J'identifie les meilleurs mots-clés pour votre entreprise, y compris la recherche vocale et les requêtes générées par l'IA, pour générer un trafic pertinent qui convertit.", it: "Identifico le migliori parole chiave per la tua attività, inclusa la ricerca vocale e le query generate dall'IA, per generare traffico rilevante che converte.", de: "Ich identifiziere die besten Keywords für Ihr Unternehmen, einschließlich Sprachsuche und KI-generierte Anfragen, um relevanten Traffic zu generieren, der konvertiert." },
  "services.onPage": { en: "On-Page SEO", ar: "SEO على الصفحة", es: "SEO On-Page", pt: "SEO On-Page", fr: "SEO On-Page", it: "SEO On-Page", de: "On-Page SEO" },
  "services.onPageDesc": { en: "I optimize website pages with meta tags, headings, structured data, and semantic markup to improve rankings and relevance for search engines and AI assistants.", ar: "أحسن صفحات الموقع بالعلامات الوصفية والعناوين والبيانات المهيكلة والترميز الدلالي لتحسين الترتيب والملاءمة لمحركات البحث ومساعدي الذكاء الاصطناعي.", es: "Optimizo páginas web con meta etiquetas, encabezados, datos estructurados y marcado semántico para mejorar rankings y relevancia para motores de búsqueda y asistentes IA.", pt: "Otimizo páginas de sites com meta tags, títulos, dados estruturados e marcação semântica para melhorar rankings e relevância para mecanismos de busca e assistentes de IA.", fr: "J'optimise les pages web avec des balises meta, des en-têtes, des données structurées et un balisage sémantique pour améliorer les classements et la pertinence pour les moteurs de recherche et les assistants IA.", it: "Ottimizzo le pagine web con meta tag, intestazioni, dati strutturati e markup semantico per migliorare i ranking e la rilevanza per i motori di ricerca e gli assistenti IA.", de: "Ich optimiere Website-Seiten mit Meta-Tags, Überschriften, strukturierten Daten und semantischem Markup für bessere Rankings und Relevanz bei Suchmaschinen und KI-Assistenten." },
  "services.technical": { en: "Technical SEO", ar: "SEO التقني", es: "SEO Técnico", pt: "SEO Técnico", fr: "SEO Technique", it: "SEO Tecnico", de: "Technisches SEO" },
  "services.technicalDesc": { en: "I fix site performance, speed, mobile-friendliness, indexing, and crawl issues so your website works flawlessly for both Google and AI-powered search engines.", ar: "أصلح أداء الموقع والسرعة والتوافق مع الجوال والفهرسة ومشاكل الزحف ليعمل موقعك بشكل مثالي لـ Google ومحركات البحث المدعومة بالذكاء الاصطناعي.", es: "Soluciono rendimiento del sitio, velocidad, compatibilidad móvil, indexación y problemas de rastreo para que tu sitio funcione perfectamente para Google y motores de búsqueda con IA.", pt: "Corrijo desempenho do site, velocidade, compatibilidade móvel, indexação e problemas de rastreamento para que seu site funcione perfeitamente para Google e mecanismos de busca com IA.", fr: "Je corrige les performances du site, la vitesse, la compatibilité mobile, l'indexation et les problèmes d'exploration pour que votre site fonctionne parfaitement pour Google et les moteurs de recherche alimentés par l'IA.", it: "Risolvo prestazioni del sito, velocità, compatibilità mobile, indicizzazione e problemi di scansione affinché il tuo sito funzioni perfettamente per Google e i motori di ricerca alimentati dall'IA.", de: "Ich behebe Website-Performance, Geschwindigkeit, Mobile-Freundlichkeit, Indexierung und Crawl-Probleme, damit Ihre Website perfekt für Google und KI-gestützte Suchmaschinen funktioniert." },
  "services.content": { en: "Content Strategy & AI-Optimized Content", ar: "استراتيجية المحتوى والمحتوى المحسن للذكاء الاصطناعي", es: "Estrategia de Contenido y Contenido Optimizado para IA", pt: "Estratégia de Conteúdo e Conteúdo Otimizado para IA", fr: "Stratégie de contenu et contenu optimisé pour l'IA", it: "Strategia di contenuti e contenuti ottimizzati per l'IA", de: "Content-Strategie & KI-optimierte Inhalte" },
  "services.contentDesc": { en: "I create high-quality, AI-ready content for service pages, blogs, FAQs, and landing pages to rank on search engines, maps, and generative platforms.", ar: "أنشئ محتوى عالي الجودة جاهزاً للذكاء الاصطناعي لصفحات الخدمات والمدونات والأسئلة الشائعة وصفحات الهبوط للترتيب في محركات البحث والخرائط والمنصات التوليدية.", es: "Creo contenido de alta calidad listo para IA para páginas de servicios, blogs, FAQs y landing pages para posicionar en motores de búsqueda, mapas y plataformas generativas.", pt: "Crio conteúdo de alta qualidade pronto para IA para páginas de serviços, blogs, FAQs e landing pages para ranquear em mecanismos de busca, mapas e plataformas generativas.", fr: "Je crée du contenu de haute qualité prêt pour l'IA pour les pages de services, blogs, FAQ et pages d'atterrissage pour se classer sur les moteurs de recherche, cartes et plateformes génératives.", it: "Creo contenuti di alta qualità pronti per l'IA per pagine di servizi, blog, FAQ e landing page per posizionarsi sui motori di ricerca, mappe e piattaforme generative.", de: "Ich erstelle hochwertige, KI-bereite Inhalte für Service-Seiten, Blogs, FAQs und Landing Pages für Rankings in Suchmaschinen, Karten und generativen Plattformen." },
  "services.linkBuilding": { en: "Link Building & Local Citations", ar: "بناء الروابط والاستشهادات المحلية", es: "Link Building y Citaciones Locales", pt: "Link Building e Citações Locais", fr: "Link Building et Citations Locales", it: "Link Building e Citazioni Locali", de: "Linkaufbau & Lokale Zitierungen" },
  "services.linkBuildingDesc": { en: "I build high-authority links and local citations to boost trust signals and improve visibility across search engines, maps, and AI-driven platforms.", ar: "أبني روابط عالية السلطة واستشهادات محلية لتعزيز إشارات الثقة وتحسين الظهور عبر محركات البحث والخرائط والمنصات المدفوعة بالذكاء الاصطناعي.", es: "Construyo enlaces de alta autoridad y citaciones locales para impulsar señales de confianza y mejorar la visibilidad en motores de búsqueda, mapas y plataformas impulsadas por IA.", pt: "Construo links de alta autoridade e citações locais para aumentar sinais de confiança e melhorar a visibilidade em mecanismos de busca, mapas e plataformas impulsionadas por IA.", fr: "Je construis des liens de haute autorité et des citations locales pour renforcer les signaux de confiance et améliorer la visibilité sur les moteurs de recherche, cartes et plateformes alimentées par l'IA.", it: "Costruisco link ad alta autorità e citazioni locali per aumentare i segnali di fiducia e migliorare la visibilità sui motori di ricerca, mappe e piattaforme alimentate dall'IA.", de: "Ich baue hochwertige Links und lokale Zitierungen auf, um Vertrauenssignale zu stärken und die Sichtbarkeit in Suchmaschinen, Karten und KI-gesteuerten Plattformen zu verbessern." },
  "services.analytics": { en: "Conversion Tracking & Analytics", ar: "تتبع التحويلات والتحليلات", es: "Seguimiento de Conversiones y Analytics", pt: "Rastreamento de Conversões e Analytics", fr: "Suivi des conversions et Analytics", it: "Tracciamento conversioni e Analytics", de: "Conversion-Tracking & Analytics" },
  "services.analyticsDesc": { en: "I set up GA4, GTM, UTM tracking, and advanced analytics to track traffic, calls, map clicks, and conversions with actionable insights.", ar: "أقوم بإعداد GA4 وGTM وتتبع UTM والتحليلات المتقدمة لتتبع حركة المرور والمكالمات ونقرات الخرائط والتحويلات مع رؤى قابلة للتنفيذ.", es: "Configuro GA4, GTM, seguimiento UTM y analytics avanzados para rastrear tráfico, llamadas, clics en mapas y conversiones con insights accionables.", pt: "Configuro GA4, GTM, rastreamento UTM e analytics avançados para rastrear tráfego, chamadas, cliques em mapas e conversões com insights acionáveis.", fr: "Je configure GA4, GTM, le suivi UTM et des analyses avancées pour suivre le trafic, les appels, les clics sur les cartes et les conversions avec des insights exploitables.", it: "Configuro GA4, GTM, tracciamento UTM e analytics avanzati per tracciare traffico, chiamate, clic sulle mappe e conversioni con insights azionabili.", de: "Ich richte GA4, GTM, UTM-Tracking und erweiterte Analytics ein, um Traffic, Anrufe, Kartenklicks und Conversions mit umsetzbaren Erkenntnissen zu verfolgen." },
  "services.projectMgmt": { en: "Full-Stack Project Management", ar: "إدارة المشاريع الشاملة", es: "Gestión de Proyectos Full-Stack", pt: "Gerenciamento de Projetos Full-Stack", fr: "Gestion de projet Full-Stack", it: "Gestione progetti Full-Stack", de: "Full-Stack Projektmanagement" },
  "services.projectMgmtDesc": { en: "I manage all SEO, AI, and map optimization projects end-to-end, ensuring timely execution, performance tracking, and alignment with business goals.", ar: "أدير جميع مشاريع SEO والذكاء الاصطناعي وتحسين الخرائط من البداية للنهاية، مع ضمان التنفيذ في الوقت المناسب وتتبع الأداء والتوافق مع أهداف العمل.", es: "Gestiono todos los proyectos de SEO, IA y optimización de mapas de principio a fin, asegurando ejecución oportuna, seguimiento de rendimiento y alineación con objetivos comerciales.", pt: "Gerencio todos os projetos de SEO, IA e otimização de mapas de ponta a ponta, garantindo execução oportuna, rastreamento de desempenho e alinhamento com objetivos de negócios.", fr: "Je gère tous les projets SEO, IA et optimisation de cartes de bout en bout, assurant une exécution rapide, un suivi des performances et un alignement avec les objectifs commerciaux.", it: "Gestisco tutti i progetti SEO, IA e ottimizzazione mappe end-to-end, garantendo esecuzione tempestiva, tracciamento delle prestazioni e allineamento con gli obiettivi aziendali.", de: "Ich manage alle SEO-, KI- und Kartenoptimierungsprojekte End-to-End mit zeitnaher Ausführung, Performance-Tracking und Ausrichtung an Geschäftszielen." },
  "services.clientComm": { en: "Client Communication & Reporting", ar: "التواصل مع العملاء والتقارير", es: "Comunicación con Clientes y Reportes", pt: "Comunicação com Clientes e Relatórios", fr: "Communication client et rapports", it: "Comunicazione clienti e reportistica", de: "Kundenkommunikation & Reporting" },
  "services.clientCommDesc": { en: "I provide transparent, regular updates with insights on search performance, map visibility, AI ranking signals, and lead generation.", ar: "أقدم تحديثات شفافة ومنتظمة مع رؤى حول أداء البحث وظهور الخرائط وإشارات ترتيب الذكاء الاصطناعي وتوليد العملاء المحتملين.", es: "Proporciono actualizaciones transparentes y regulares con insights sobre rendimiento de búsqueda, visibilidad en mapas, señales de ranking IA y generación de leads.", pt: "Forneço atualizações transparentes e regulares com insights sobre desempenho de busca, visibilidade em mapas, sinais de ranking de IA e geração de leads.", fr: "Je fournis des mises à jour transparentes et régulières avec des insights sur les performances de recherche, la visibilité des cartes, les signaux de classement IA et la génération de leads.", it: "Fornisco aggiornamenti trasparenti e regolari con insights sulle prestazioni di ricerca, visibilità delle mappe, segnali di ranking IA e generazione di lead.", de: "Ich liefere transparente, regelmäßige Updates mit Einblicken in Suchperformance, Kartensichtbarkeit, KI-Ranking-Signale und Lead-Generierung." },
  "services.aiSeo": { en: "Advanced AI & Generative SEO", ar: "SEO المتقدم والتوليدي بالذكاء الاصطناعي", es: "SEO Avanzado de IA y Generativo", pt: "SEO Avançado de IA e Generativo", fr: "SEO avancé IA et génératif", it: "SEO avanzato IA e generativo", de: "Fortgeschrittenes KI & Generatives SEO" },
  "services.aiSeoDesc": { en: "I implement strategies to get your business cited by ChatGPT, Perplexity, Bing AI, You.com, and other generative engines for future-ready SEO.", ar: "أنفذ استراتيجيات لجعل عملك مذكوراً من قبل ChatGPT وPerplexity وBing AI وYou.com ومحركات توليدية أخرى لـ SEO جاهز للمستقبل.", es: "Implemento estrategias para que tu negocio sea citado por ChatGPT, Perplexity, Bing AI, You.com y otros motores generativos para SEO preparado para el futuro.", pt: "Implemento estratégias para que seu negócio seja citado pelo ChatGPT, Perplexity, Bing AI, You.com e outros mecanismos generativos para SEO pronto para o futuro.", fr: "J'implémente des stratégies pour que votre entreprise soit citée par ChatGPT, Perplexity, Bing AI, You.com et d'autres moteurs génératifs pour un SEO prêt pour l'avenir.", it: "Implemento strategie per far citare la tua attività da ChatGPT, Perplexity, Bing AI, You.com e altri motori generativi per un SEO pronto per il futuro.", de: "Ich implementiere Strategien, damit Ihr Unternehmen von ChatGPT, Perplexity, Bing AI, You.com und anderen generativen Engines zitiert wird für zukunftssicheres SEO." },

  // About
  "about.title": { en: "About Me", ar: "عني", es: "Sobre Mí", pt: "Sobre Mim", fr: "À propos de moi", it: "Chi sono", de: "Über mich" },
  "about.subtitle": { en: "Your Partner in Local Search Success", ar: "شريكك في نجاح البحث المحلي", es: "Tu Socio en el Éxito de la Búsqueda Local", pt: "Seu Parceiro no Sucesso de Busca Local", fr: "Votre partenaire pour le succès de la recherche locale", it: "Il tuo partner per il successo nella ricerca locale", de: "Ihr Partner für lokalen Sucherfolg" },
  "about.description": { en: "I'm Syed Hadi Hussain, a full-stack local SEO specialist who helps local and service-based businesses get more visibility on Google and turn searches into real leads.", ar: "أنا سيد هادي حسين، متخصص SEO محلي شامل أساعد الشركات المحلية والخدمية على الحصول على مزيد من الظهور على Google وتحويل عمليات البحث إلى عملاء حقيقيين.", es: "Soy Syed Hadi Hussain, un especialista en SEO local completo que ayuda a empresas locales a obtener más visibilidad en Google y convertir búsquedas en clientes reales.", pt: "Sou Syed Hadi Hussain, um especialista em SEO local completo que ajuda empresas locais a obter mais visibilidade no Google e converter pesquisas em leads reais.", fr: "Je suis Syed Hadi Hussain, un spécialiste SEO local complet qui aide les entreprises locales à obtenir plus de visibilité sur Google et à convertir les recherches en leads réels.", it: "Sono Syed Hadi Hussain, uno specialista SEO locale completo che aiuta le aziende locali a ottenere più visibilità su Google e a convertire le ricerche in lead reali.", de: "Ich bin Syed Hadi Hussain, ein Full-Stack Local SEO Spezialist, der lokalen Unternehmen hilft, mehr Sichtbarkeit bei Google zu erlangen und Suchen in echte Leads umzuwandeln." },
  "about.heading": { en: "Full-Stack Local SEO Specialist", ar: "متخصص SEO محلي شامل", es: "Especialista en SEO Local Full-Stack", pt: "Especialista em SEO Local Full-Stack", fr: "Spécialiste SEO local Full-Stack", it: "Specialista SEO locale Full-Stack", de: "Full-Stack Local SEO Spezialist" },
  "about.para1": { en: "I'm Syed Hadi Hussain, a full-stack local SEO specialist who helps local and service-based businesses get more visibility on Google and turn searches into real leads.", ar: "أنا سيد هادي حسين، متخصص SEO محلي شامل أساعد الشركات المحلية والخدمية على الحصول على مزيد من الظهور على Google وتحويل عمليات البحث إلى عملاء حقيقيين.", es: "Soy Syed Hadi Hussain, un especialista en SEO local completo que ayuda a empresas locales a obtener más visibilidad en Google y convertir búsquedas en clientes reales.", pt: "Sou Syed Hadi Hussain, um especialista em SEO local completo que ajuda empresas locais a obter mais visibilidade no Google e converter pesquisas em leads reais.", fr: "Je suis Syed Hadi Hussain, un spécialiste SEO local complet qui aide les entreprises locales à obtenir plus de visibilité sur Google et à convertir les recherches en leads réels.", it: "Sono Syed Hadi Hussain, uno specialista SEO locale completo che aiuta le aziende locali a ottenere più visibilità su Google e a convertire le ricerche in lead reali.", de: "Ich bin Syed Hadi Hussain, ein Full-Stack Local SEO Spezialist, der lokalen Unternehmen hilft, mehr Sichtbarkeit bei Google zu erlangen und Suchen in echte Leads umzuwandeln." },
  "about.para2": { en: "I don't just focus on rankings. I focus on what actually matters to your business, calls, inquiries, and customers. I manage the complete SEO process from strategy to execution, so you don't have to deal with multiple people or confusion.", ar: "لا أركز فقط على التصنيفات. أركز على ما يهم عملك حقاً: المكالمات والاستفسارات والعملاء. أدير عملية SEO الكاملة من الاستراتيجية إلى التنفيذ، لذلك لا تحتاج للتعامل مع أشخاص متعددين أو الارتباك.", es: "No solo me enfoco en los rankings. Me enfoco en lo que realmente importa para tu negocio: llamadas, consultas y clientes. Gestiono el proceso SEO completo desde la estrategia hasta la ejecución, para que no tengas que tratar con múltiples personas o confusión.", pt: "Não me concentro apenas em rankings. Concentro-me no que realmente importa para seu negócio: chamadas, consultas e clientes. Gerencio o processo completo de SEO da estratégia à execução, para que você não precise lidar com múltiplas pessoas ou confusão.", fr: "Je ne me concentre pas seulement sur les classements. Je me concentre sur ce qui compte vraiment pour votre entreprise : les appels, les demandes et les clients. Je gère le processus SEO complet de la stratégie à l'exécution, pour que vous n'ayez pas à gérer plusieurs personnes ou la confusion.", it: "Non mi concentro solo sui ranking. Mi concentro su ciò che conta davvero per la tua attività: chiamate, richieste e clienti. Gestisco l'intero processo SEO dalla strategia all'esecuzione, così non devi avere a che fare con più persone o confusione.", de: "Ich konzentriere mich nicht nur auf Rankings. Ich konzentriere mich auf das, was für Ihr Unternehmen wirklich zählt: Anrufe, Anfragen und Kunden. Ich manage den kompletten SEO-Prozess von der Strategie bis zur Umsetzung, damit Sie nicht mit mehreren Personen oder Verwirrung umgehen müssen." },
  "about.para3": { en: "With 7+ years of experience and 100+ clients served, I help businesses grow through clear, proven, and result-focused local SEO.", ar: "مع أكثر من 7 سنوات من الخبرة وخدمة أكثر من 100 عميل، أساعد الشركات على النمو من خلال SEO محلي واضح ومثبت ومركز على النتائج.", es: "Con más de 7 años de experiencia y más de 100 clientes atendidos, ayudo a las empresas a crecer a través de SEO local claro, probado y enfocado en resultados.", pt: "Com mais de 7 anos de experiência e mais de 100 clientes atendidos, ajudo empresas a crescer através de SEO local claro, comprovado e focado em resultados.", fr: "Avec plus de 7 ans d'expérience et plus de 100 clients servis, j'aide les entreprises à se développer grâce à un SEO local clair, éprouvé et axé sur les résultats.", it: "Con oltre 7 anni di esperienza e oltre 100 clienti serviti, aiuto le aziende a crescere attraverso un SEO locale chiaro, comprovato e focalizzato sui risultati.", de: "Mit über 7 Jahren Erfahrung und über 100 betreuten Kunden helfe ich Unternehmen durch klares, bewährtes und ergebnisorientiertes lokales SEO zu wachsen." },
  "about.yearsExp": { en: "Years Experience", ar: "سنوات الخبرة", es: "Años de Experiencia", pt: "Anos de Experiência", fr: "Années d'expérience", it: "Anni di esperienza", de: "Jahre Erfahrung" },
  "about.clientsServed": { en: "Clients Served", ar: "عملاء تم خدمتهم", es: "Clientes Atendidos", pt: "Clientes Atendidos", fr: "Clients servis", it: "Clienti serviti", de: "Betreute Kunden" },
  "about.getInTouch": { en: "Get in Touch", ar: "تواصل معنا", es: "Contáctanos", pt: "Entre em Contato", fr: "Contactez-nous", it: "Contattaci", de: "Kontaktieren Sie uns" },
  "about.connectWithMe": { en: "Connect with Me", ar: "تواصل معي", es: "Conéctate Conmigo", pt: "Conecte-se Comigo", fr: "Connectez-vous avec moi", it: "Connettiti con me", de: "Verbinden Sie sich mit mir" },
  "about.certifications": { en: "Certifications", ar: "الشهادات", es: "Certificaciones", pt: "Certificações", fr: "Certifications", it: "Certificazioni", de: "Zertifizierungen" },
  "about.keySkills": { en: "Key Skills & Expertise", ar: "المهارات والخبرات الرئيسية", es: "Habilidades y Experiencia Clave", pt: "Habilidades e Expertise Principais", fr: "Compétences et expertise clés", it: "Competenze e competenze chiave", de: "Kernkompetenzen & Expertise" },
  "about.scheduleMeeting": { en: "Schedule a Meeting", ar: "جدولة اجتماع", es: "Programar una Reunión", pt: "Agendar Reunião", fr: "Planifier une réunion", it: "Pianifica un incontro", de: "Meeting planen" },
  "about.bookOnCalendly": { en: "Book on Calendly", ar: "احجز على Calendly", es: "Reservar en Calendly", pt: "Agendar no Calendly", fr: "Réserver sur Calendly", it: "Prenota su Calendly", de: "Auf Calendly buchen" },

  // Testimonials
  "testimonials.title": { en: "What Clients Say", ar: "ماذا يقول العملاء", es: "Lo que Dicen los Clientes", pt: "O que os Clientes Dizem", fr: "Ce que disent les clients", it: "Cosa dicono i clienti", de: "Was Kunden sagen" },
  "testimonials.subtitle": { en: "Real results from real businesses", ar: "نتائج حقيقية من شركات حقيقية", es: "Resultados reales de negocios reales", pt: "Resultados reais de negócios reais", fr: "Résultats réels d'entreprises réelles", it: "Risultati reali da aziende reali", de: "Echte Ergebnisse von echten Unternehmen" },

  // FAQ
  "faq.title": { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes", fr: "Questions fréquemment posées", it: "Domande frequenti", de: "Häufig gestellte Fragen" },
  "faq.subtitle": { en: "Everything you need to know about Local SEO", ar: "كل ما تحتاج معرفته عن SEO المحلي", es: "Todo lo que necesitas saber sobre SEO Local", pt: "Tudo o que você precisa saber sobre SEO Local", fr: "Tout ce que vous devez savoir sur le SEO local", it: "Tutto quello che devi sapere sul SEO locale", de: "Alles, was Sie über Local SEO wissen müssen" },
  "faq.description": { en: "Get answers to common questions about my SEO services and how I can help your business grow.", ar: "احصل على إجابات للأسئلة الشائعة حول خدمات SEO الخاصة بي وكيف يمكنني مساعدة عملك على النمو.", es: "Obtén respuestas a preguntas comunes sobre mis servicios SEO y cómo puedo ayudar a tu negocio a crecer.", pt: "Obtenha respostas para perguntas comuns sobre meus serviços de SEO e como posso ajudar seu negócio a crescer.", fr: "Obtenez des réponses aux questions courantes sur mes services SEO et comment je peux aider votre entreprise à se développer.", it: "Ottieni risposte alle domande comuni sui miei servizi SEO e su come posso aiutare la tua attività a crescere.", de: "Erhalten Sie Antworten auf häufige Fragen zu meinen SEO-Diensten und wie ich Ihrem Unternehmen beim Wachstum helfen kann." },

  // FAQ Questions
  "faq.q1": { en: "What exactly is Local SEO and Map SEO?", ar: "ما هو بالضبط SEO المحلي وSEO الخرائط؟", es: "¿Qué es exactamente SEO Local y SEO de Mapas?", pt: "O que exatamente é SEO Local e SEO de Mapas?", fr: "Qu'est-ce que le SEO local et le SEO Maps exactement?", it: "Cos'è esattamente il SEO locale e il SEO Mappe?", de: "Was genau ist Local SEO und Maps SEO?" },
  "faq.a1": { en: "Local SEO and Map SEO help your business appear on Google Maps, Apple Maps, Bing Maps, and local searches, making it easy for nearby customers to find you and contact you.", ar: "يساعد SEO المحلي وSEO الخرائط عملك على الظهور على خرائط Google وApple وBing والبحث المحلي، مما يسهل على العملاء القريبين العثور عليك والاتصال بك.", es: "El SEO Local y SEO de Mapas ayudan a tu negocio a aparecer en Google Maps, Apple Maps, Bing Maps y búsquedas locales, facilitando que los clientes cercanos te encuentren y contacten.", pt: "SEO Local e SEO de Mapas ajudam seu negócio a aparecer no Google Maps, Apple Maps, Bing Maps e pesquisas locais, facilitando que clientes próximos encontrem e entrem em contato com você.", fr: "Le SEO local et le SEO Maps aident votre entreprise à apparaître sur Google Maps, Apple Maps, Bing Maps et les recherches locales, facilitant la recherche et le contact par les clients proches.", it: "Il SEO locale e il SEO Mappe aiutano la tua attività ad apparire su Google Maps, Apple Maps, Bing Maps e ricerche locali, facilitando ai clienti vicini di trovarti e contattarti.", de: "Local SEO und Maps SEO helfen Ihrem Unternehmen, auf Google Maps, Apple Maps, Bing Maps und in lokalen Suchen zu erscheinen, damit Kunden in der Nähe Sie leicht finden und kontaktieren können." },
  "faq.q2": { en: "What is Google Business Profile Management?", ar: "ما هي إدارة ملف Google التجاري؟", es: "¿Qué es la Gestión de Google Business Profile?", pt: "O que é Gerenciamento de Google Business Profile?", fr: "Qu'est-ce que la gestion de Google Business Profile?", it: "Cos'è la gestione di Google Business Profile?", de: "Was ist Google Business Profile Management?" },
  "faq.a2": { en: "I optimize your Google Business Profile to ensure your business ranks higher in search, maps, and AI-powered platforms, showing accurate info to potential customers.", ar: "أقوم بتحسين ملف Google التجاري الخاص بك لضمان ترتيب أعلى لعملك في البحث والخرائط والمنصات المدعومة بالذكاء الاصطناعي، مع عرض معلومات دقيقة للعملاء المحتملين.", es: "Optimizo tu Google Business Profile para asegurar que tu negocio tenga un ranking más alto en búsqueda, mapas y plataformas con IA, mostrando información precisa a clientes potenciales.", pt: "Otimizo seu Google Business Profile para garantir que seu negócio tenha um ranking mais alto em pesquisa, mapas e plataformas com IA, mostrando informações precisas para clientes potenciais.", fr: "J'optimise votre Google Business Profile pour assurer que votre entreprise soit mieux classée dans la recherche, les cartes et les plateformes alimentées par l'IA, affichant des informations précises aux clients potentiels.", it: "Ottimizzo il tuo Google Business Profile per assicurare che la tua attività si posizioni più in alto nella ricerca, mappe e piattaforme alimentate dall'IA, mostrando informazioni accurate ai potenziali clienti.", de: "Ich optimiere Ihr Google Business Profile, damit Ihr Unternehmen in Suche, Karten und KI-gestützten Plattformen höher rankt und potenziellen Kunden genaue Informationen zeigt." },
  "faq.q3": { en: "How does Keyword Research & Semantic SEO help my business?", ar: "كيف يساعد بحث الكلمات المفتاحية وSEO الدلالي عملي؟", es: "¿Cómo ayuda la Investigación de Palabras Clave y SEO Semántico a mi negocio?", pt: "Como a Pesquisa de Palavras-chave e SEO Semântico ajudam meu negócio?", fr: "Comment la recherche de mots-clés et le SEO sémantique aident-ils mon entreprise?", it: "Come la ricerca di parole chiave e il SEO semantico aiutano la mia attività?", de: "Wie hilft Keyword-Recherche und semantisches SEO meinem Unternehmen?" },
  "faq.a3": { en: "I find the right keywords your customers are searching for—including voice, AI, and generative search queries—so your business gets visible traffic that converts into leads.", ar: "أجد الكلمات المفتاحية الصحيحة التي يبحث عنها عملاؤك—بما في ذلك البحث الصوتي والذكاء الاصطناعي واستعلامات البحث التوليدية—ليحصل عملك على حركة مرور مرئية تتحول إلى عملاء محتملين.", es: "Encuentro las palabras clave correctas que tus clientes buscan—incluyendo voz, IA y consultas de búsqueda generativa—para que tu negocio obtenga tráfico visible que se convierte en leads.", pt: "Encontro as palavras-chave certas que seus clientes estão pesquisando—incluindo voz, IA e consultas de pesquisa generativa—para que seu negócio obtenha tráfego visível que se converte em leads.", fr: "Je trouve les bons mots-clés que vos clients recherchent—y compris les recherches vocales, IA et génératives—pour que votre entreprise obtienne un trafic visible qui se convertit en leads.", it: "Trovo le parole chiave giuste che i tuoi clienti stanno cercando—incluse ricerche vocali, IA e query di ricerca generative—affinché la tua attività ottenga traffico visibile che si converte in lead.", de: "Ich finde die richtigen Keywords, nach denen Ihre Kunden suchen—einschließlich Sprach-, KI- und generative Suchanfragen—damit Ihr Unternehmen sichtbaren Traffic erhält, der in Leads umgewandelt wird." },
  "faq.q4": { en: "What is AI-Optimized Content & Generative SEO?", ar: "ما هو المحتوى المحسن للذكاء الاصطناعي وSEO التوليدي؟", es: "¿Qué es el Contenido Optimizado para IA y SEO Generativo?", pt: "O que é Conteúdo Otimizado para IA e SEO Generativo?", fr: "Qu'est-ce que le contenu optimisé pour l'IA et le SEO génératif?", it: "Cos'è il contenuto ottimizzato per l'IA e il SEO generativo?", de: "Was ist KI-optimierter Inhalt und generatives SEO?" },
  "faq.a4": { en: "I create content optimized for search engines, AI assistants, and generative platforms like ChatGPT and Perplexity, helping your business stay ahead of future search trends.", ar: "أنشئ محتوى محسناً لمحركات البحث ومساعدي الذكاء الاصطناعي والمنصات التوليدية مثل ChatGPT وPerplexity، مما يساعد عملك على البقاء في صدارة اتجاهات البحث المستقبلية.", es: "Creo contenido optimizado para motores de búsqueda, asistentes de IA y plataformas generativas como ChatGPT y Perplexity, ayudando a tu negocio a mantenerse adelante de las tendencias de búsqueda futuras.", pt: "Crio conteúdo otimizado para mecanismos de busca, assistentes de IA e plataformas generativas como ChatGPT e Perplexity, ajudando seu negócio a ficar à frente das tendências de busca futuras.", fr: "Je crée du contenu optimisé pour les moteurs de recherche, les assistants IA et les plateformes génératives comme ChatGPT et Perplexity, aidant votre entreprise à rester en avance sur les tendances de recherche futures.", it: "Creo contenuti ottimizzati per motori di ricerca, assistenti IA e piattaforme generative come ChatGPT e Perplexity, aiutando la tua attività a restare avanti rispetto alle tendenze di ricerca future.", de: "Ich erstelle Inhalte, die für Suchmaschinen, KI-Assistenten und generative Plattformen wie ChatGPT und Perplexity optimiert sind, damit Ihr Unternehmen zukünftigen Suchtrends voraus bleibt." },
  "faq.q5": { en: "Can you manage my entire digital marketing?", ar: "هل يمكنك إدارة التسويق الرقمي بالكامل؟", es: "¿Puedes gestionar todo mi marketing digital?", pt: "Você pode gerenciar todo meu marketing digital?", fr: "Pouvez-vous gérer tout mon marketing numérique?", it: "Puoi gestire tutto il mio marketing digitale?", de: "Können Sie mein gesamtes digitales Marketing verwalten?" },
  "faq.a5": { en: "Yes! I handle website design, campaigns, social media, ads, AI assistants, chatbots, and project management so you can focus on running your business while I grow it online.", ar: "نعم! أتولى تصميم المواقع والحملات ووسائل التواصل الاجتماعي والإعلانات ومساعدي الذكاء الاصطناعي والروبوتات وإدارة المشاريع حتى تتمكن من التركيز على إدارة عملك بينما أنميه عبر الإنترنت.", es: "¡Sí! Manejo diseño web, campañas, redes sociales, anuncios, asistentes de IA, chatbots y gestión de proyectos para que puedas enfocarte en tu negocio mientras yo lo hago crecer en línea.", pt: "Sim! Cuido de design de sites, campanhas, mídias sociais, anúncios, assistentes de IA, chatbots e gerenciamento de projetos para que você possa se concentrar em administrar seu negócio enquanto eu o faço crescer online.", fr: "Oui! Je gère la conception de sites web, les campagnes, les médias sociaux, les publicités, les assistants IA, les chatbots et la gestion de projet pour que vous puissiez vous concentrer sur votre entreprise pendant que je la fais croître en ligne.", it: "Sì! Gestisco design di siti web, campagne, social media, annunci, assistenti IA, chatbot e gestione progetti così puoi concentrarti sulla tua attività mentre io la faccio crescere online.", de: "Ja! Ich übernehme Website-Design, Kampagnen, Social Media, Anzeigen, KI-Assistenten, Chatbots und Projektmanagement, damit Sie sich auf Ihr Geschäft konzentrieren können, während ich es online wachsen lasse." },
  "faq.q6": { en: "How do I start?", ar: "كيف أبدأ؟", es: "¿Cómo empiezo?", pt: "Como começo?", fr: "Comment puis-je commencer?", it: "Come inizio?", de: "Wie fange ich an?" },
  "faq.a6": { en: "Just share your business goals, and we'll schedule a strategy call to create a custom plan for your growth. Every step is transparent, measurable, and designed to increase leads and revenue.", ar: "فقط شارك أهداف عملك، وسنحدد موعداً لمكالمة استراتيجية لإنشاء خطة مخصصة لنموك. كل خطوة شفافة وقابلة للقياس ومصممة لزيادة العملاء المحتملين والإيرادات.", es: "Solo comparte tus objetivos comerciales, y programaremos una llamada estratégica para crear un plan personalizado para tu crecimiento. Cada paso es transparente, medible y diseñado para aumentar leads e ingresos.", pt: "Apenas compartilhe seus objetivos de negócios, e agendaremos uma chamada estratégica para criar um plano personalizado para seu crescimento. Cada passo é transparente, mensurável e projetado para aumentar leads e receita.", fr: "Partagez simplement vos objectifs commerciaux, et nous programmerons un appel stratégique pour créer un plan personnalisé pour votre croissance. Chaque étape est transparente, mesurable et conçue pour augmenter les leads et les revenus.", it: "Basta condividere i tuoi obiettivi aziendali, e programmeremo una chiamata strategica per creare un piano personalizzato per la tua crescita. Ogni passo è trasparente, misurabile e progettato per aumentare lead e ricavi.", de: "Teilen Sie einfach Ihre Geschäftsziele mit, und wir vereinbaren einen Strategieanruf, um einen maßgeschneiderten Plan für Ihr Wachstum zu erstellen. Jeder Schritt ist transparent, messbar und darauf ausgelegt, Leads und Umsatz zu steigern." },

  // Footer
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة.", es: "Todos los derechos reservados.", pt: "Todos os direitos reservados.", fr: "Tous droits réservés.", it: "Tutti i diritti riservati.", de: "Alle Rechte vorbehalten." },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية", es: "Política de Privacidad", pt: "Política de Privacidade", fr: "Politique de confidentialité", it: "Informativa sulla privacy", de: "Datenschutzrichtlinie" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة", es: "Términos de Servicio", pt: "Termos de Serviço", fr: "Conditions d'utilisation", it: "Termini di servizio", de: "Nutzungsbedingungen" },
  "footer.tagline": { en: "Trusted by 100+ businesses worldwide for proven SEO results.", ar: "موثوق به من قبل أكثر من 100 شركة حول العالم لنتائج SEO مثبتة.", es: "Confiado por más de 100 empresas en todo el mundo para resultados SEO comprobados.", pt: "Confiado por mais de 100 empresas em todo o mundo para resultados SEO comprovados.", fr: "Approuvé par plus de 100 entreprises dans le monde pour des résultats SEO prouvés.", it: "Affidabile da oltre 100 aziende in tutto il mondo per risultati SEO comprovati.", de: "Von über 100 Unternehmen weltweit für bewiesene SEO-Ergebnisse vertraut." },
  "footer.payments": { en: "Accepted Payments", ar: "طرق الدفع المقبولة", es: "Pagos Aceptados", pt: "Pagamentos Aceitos", fr: "Paiements acceptés", it: "Pagamenti accettati", de: "Akzeptierte Zahlungen" },
  "footer.description": { en: "Helping local businesses dominate Google Search and Maps with proven SEO strategies that deliver real results.", ar: "مساعدة الشركات المحلية على السيطرة على بحث Google والخرائط باستراتيجيات SEO مثبتة تحقق نتائج حقيقية.", es: "Ayudando a negocios locales a dominar Google Search y Maps con estrategias SEO probadas que entregan resultados reales.", pt: "Ajudando empresas locais a dominar o Google Search e Maps com estratégias de SEO comprovadas que entregam resultados reais.", fr: "Aider les entreprises locales à dominer Google Search et Maps avec des stratégies SEO éprouvées qui livrent de vrais résultats.", it: "Aiutando le aziende locali a dominare Google Search e Maps con strategie SEO comprovate che forniscono risultati reali.", de: "Ich helfe lokalen Unternehmen, Google Search und Maps mit bewährten SEO-Strategien zu dominieren, die echte Ergebnisse liefern." },
  "footer.trustBadge": { en: "100+ Clients Worldwide", ar: "أكثر من 100 عميل حول العالم", es: "100+ Clientes en Todo el Mundo", pt: "100+ Clientes no Mundo Todo", fr: "100+ Clients dans le monde", it: "100+ Clienti nel mondo", de: "100+ Kunden weltweit" },
  "footer.servingWorldwide": { en: "Serving Clients Worldwide", ar: "خدمة العملاء حول العالم", es: "Atendiendo Clientes en Todo el Mundo", pt: "Atendendo Clientes no Mundo Todo", fr: "Au service des clients du monde entier", it: "Al servizio di clienti in tutto il mondo", de: "Kunden weltweit bedienen" },
  "footer.followTips": { en: "Follow me for tips and updates on local SEO strategies.", ar: "تابعني للحصول على نصائح وتحديثات حول استراتيجيات SEO المحلية.", es: "Sígueme para consejos y actualizaciones sobre estrategias de SEO local.", pt: "Siga-me para dicas e atualizações sobre estratégias de SEO local.", fr: "Suivez-moi pour des conseils et mises à jour sur les stratégies SEO locales.", it: "Seguimi per consigli e aggiornamenti sulle strategie SEO locali.", de: "Folgen Sie mir für Tipps und Updates zu lokalen SEO-Strategien." },
  "footer.connect": { en: "Connect", ar: "تواصل", es: "Conectar", pt: "Conectar", fr: "Se connecter", it: "Connetti", de: "Verbinden" },

  // Footer - Services list
  "footer.service.localServiceAds": { en: "Local Service Ads", ar: "إعلانات الخدمات المحلية", es: "Anuncios de Servicios Locales", pt: "Anúncios de Serviços Locais", fr: "Annonces de services locaux", it: "Annunci di servizi locali", de: "Lokale Serviceanzeigen" },
  "footer.service.webDevelopment": { en: "Web Development", ar: "تطوير المواقع", es: "Desarrollo Web", pt: "Desenvolvimento Web", fr: "Développement Web", it: "Sviluppo Web", de: "Webentwicklung" },
  "footer.service.contentWriting": { en: "Content Writing", ar: "كتابة المحتوى", es: "Redacción de Contenido", pt: "Redação de Conteúdo", fr: "Rédaction de contenu", it: "Scrittura contenuti", de: "Content-Erstellung" },
  "footer.service.graphicDesign": { en: "Graphic Design", ar: "تصميم جرافيك", es: "Diseño Gráfico", pt: "Design Gráfico", fr: "Design graphique", it: "Graphic design", de: "Grafikdesign" },
  "footer.service.socialMedia": { en: "Social Media Marketing", ar: "التسويق عبر وسائل التواصل", es: "Marketing en Redes Sociales", pt: "Marketing de Mídias Sociais", fr: "Marketing sur les réseaux sociaux", it: "Social media marketing", de: "Social Media Marketing" },

  // Footer - Payment methods
  "footer.payment.payoneer": { en: "Payoneer", ar: "بايونير", es: "Payoneer", pt: "Payoneer", fr: "Payoneer", it: "Payoneer", de: "Payoneer" },
  "footer.payment.wise": { en: "Wise", ar: "وايز", es: "Wise", pt: "Wise", fr: "Wise", it: "Wise", de: "Wise" },
  "footer.payment.paypal": { en: "PayPal", ar: "باي بال", es: "PayPal", pt: "PayPal", fr: "PayPal", it: "PayPal", de: "PayPal" },
  "footer.payment.bankTransfer": { en: "Bank Transfer", ar: "تحويل بنكي", es: "Transferencia Bancaria", pt: "Transferência Bancária", fr: "Virement bancaire", it: "Bonifico bancario", de: "Banküberweisung" },
  "footer.payment.usdt": { en: "USDT", ar: "USDT", es: "USDT", pt: "USDT", fr: "USDT", it: "USDT", de: "USDT" },

  // Portfolio
  "portfolio.title": { en: "Our Portfolio", ar: "محفظتنا", es: "Nuestro Portafolio", pt: "Nosso Portfólio", fr: "Notre Portfolio", it: "Il nostro Portfolio", de: "Unser Portfolio" },
  "portfolio.webDev": { en: "Web Development", ar: "تطوير المواقع", es: "Desarrollo Web", pt: "Desenvolvimento Web", fr: "Développement Web", it: "Sviluppo Web", de: "Webentwicklung" },
  "portfolio.seo": { en: "SEO Results", ar: "نتائج SEO", es: "Resultados SEO", pt: "Resultados SEO", fr: "Résultats SEO", it: "Risultati SEO", de: "SEO-Ergebnisse" },

  // CTA
  "cta.beyondSeo": { en: "Beyond SEO", ar: "ما وراء SEO", es: "Más Allá del SEO", pt: "Além do SEO", fr: "Au-delà du SEO", it: "Oltre il SEO", de: "Über SEO hinaus" },
  "cta.title": { en: "Grow Your Business Online – From SEO to Full Digital Solutions", ar: "نمِّ عملك عبر الإنترنت - من SEO إلى حلول رقمية كاملة", es: "Haga Crecer Su Negocio en Línea – Desde SEO hasta Soluciones Digitales Completas", pt: "Cresça Seu Negócio Online – De SEO a Soluções Digitais Completas", fr: "Développez votre entreprise en ligne – Du SEO aux solutions numériques complètes", it: "Fai crescere la tua attività online – Dal SEO alle soluzioni digitali complete", de: "Wachsen Sie online – Von SEO bis zu kompletten digitalen Lösungen" },
  "cta.description": { en: "As a Local SEO specialist, I help businesses get more visibility, leads, and sales online. Beyond that, you can also hire me as your full-stack project manager to manage everything, so your business grows smoothly without juggling multiple vendors.", ar: "بصفتي متخصصًا في SEO المحلي، أساعد الشركات على الحصول على مزيد من الظهور والعملاء والمبيعات عبر الإنترنت. بالإضافة إلى ذلك، يمكنك توظيفي كمدير مشروع شامل لإدارة كل شيء.", es: "Como especialista en SEO local, ayudo a las empresas a obtener más visibilidad, clientes potenciales y ventas en línea. Además, también puedes contratarme como tu gerente de proyectos completo.", pt: "Como especialista em SEO local, ajudo empresas a obter mais visibilidade, leads e vendas online. Além disso, você também pode me contratar como seu gerente de projetos completo.", fr: "En tant que spécialiste du SEO local, j'aide les entreprises à obtenir plus de visibilité, de leads et de ventes en ligne. De plus, vous pouvez également m'engager comme votre chef de projet complet.", it: "Come specialista SEO locale, aiuto le aziende a ottenere più visibilità, lead e vendite online. Inoltre, puoi anche assumermi come tuo project manager completo.", de: "Als Local SEO Spezialist helfe ich Unternehmen, mehr Sichtbarkeit, Leads und Verkäufe online zu erzielen. Darüber hinaus können Sie mich auch als Ihren Full-Stack-Projektmanager engagieren." },
  "cta.bookStrategy": { en: "Book a Strategy Call", ar: "احجز مكالمة استراتيجية", es: "Reserve una Llamada Estratégica", pt: "Agende uma Chamada Estratégica", fr: "Réservez un appel stratégique", it: "Prenota una chiamata strategica", de: "Strategiegespräch buchen" },
  "cta.shareGoals": { en: "Share Your Goals", ar: "شارك أهدافك", es: "Comparte Tus Objetivos", pt: "Compartilhe Seus Objetivos", fr: "Partagez vos objectifs", it: "Condividi i tuoi obiettivi", de: "Teilen Sie Ihre Ziele" },
  "cta.viewProjects": { en: "View Successful Projects", ar: "عرض المشاريع الناجحة", es: "Ver Proyectos Exitosos", pt: "Ver Projetos de Sucesso", fr: "Voir les projets réussis", it: "Vedi progetti di successo", de: "Erfolgreiche Projekte ansehen" },
  "cta.goal": { en: "My goal is simple: deliver more leads, more sales, and better online visibility with a clear, custom strategy.", ar: "هدفي بسيط: تقديم المزيد من العملاء المحتملين والمبيعات ورؤية أفضل عبر الإنترنت مع استراتيجية واضحة ومخصصة.", es: "Mi objetivo es simple: entregar más leads, más ventas y mejor visibilidad en línea con una estrategia clara y personalizada.", pt: "Meu objetivo é simples: entregar mais leads, mais vendas e melhor visibilidade online com uma estratégia clara e personalizada.", fr: "Mon objectif est simple: fournir plus de leads, plus de ventes et une meilleure visibilité en ligne avec une stratégie claire et personnalisée.", it: "Il mio obiettivo è semplice: fornire più lead, più vendite e una migliore visibilità online con una strategia chiara e personalizzata.", de: "Mein Ziel ist einfach: mehr Leads, mehr Verkäufe und bessere Online-Sichtbarkeit mit einer klaren, maßgeschneiderten Strategie." },

  // Common
  "common.learnMore": { en: "Learn More", ar: "اعرف المزيد", es: "Más Información", pt: "Saiba Mais", fr: "En savoir plus", it: "Scopri di più", de: "Mehr erfahren" },
  "common.viewAll": { en: "View All", ar: "عرض الكل", es: "Ver Todo", pt: "Ver Tudo", fr: "Voir tout", it: "Vedi tutto", de: "Alle ansehen" },
  "common.readMore": { en: "Read More", ar: "اقرأ المزيد", es: "Leer Más", pt: "Leia Mais", fr: "Lire la suite", it: "Leggi di più", de: "Mehr lesen" },
  "common.getAudit": { en: "Get SEO Audit", ar: "احصل على تدقيق SEO", es: "Obtener Auditoría SEO", pt: "Obter Auditoria SEO", fr: "Obtenir un audit SEO", it: "Ottieni Audit SEO", de: "SEO-Audit erhalten" },

  // Pricing
  "pricing.title": { en: "Transparent Pricing for Every Business", ar: "أسعار شفافة لكل عمل", es: "Precios Transparentes para Cada Negocio", pt: "Preços Transparentes para Cada Negócio", fr: "Tarification transparente pour chaque entreprise", it: "Prezzi trasparenti per ogni azienda", de: "Transparente Preise für jedes Unternehmen" },
  "pricing.subtitle": { en: "Choose Your Plan", ar: "اختر خطتك", es: "Elige Tu Plan", pt: "Escolha Seu Plano", fr: "Choisissez votre plan", it: "Scegli il tuo piano", de: "Wählen Sie Ihren Plan" },
  "pricing.description": { en: "Affordable SEO solutions with proven results. No hidden fees, no long-term contracts.", ar: "حلول SEO بأسعار معقولة مع نتائج مثبتة. لا رسوم خفية، لا عقود طويلة الأجل.", es: "Soluciones SEO asequibles con resultados comprobados. Sin tarifas ocultas, sin contratos a largo plazo.", pt: "Soluções de SEO acessíveis com resultados comprovados. Sem taxas ocultas, sem contratos de longo prazo.", fr: "Solutions SEO abordables avec des résultats prouvés. Pas de frais cachés, pas de contrats à long terme.", it: "Soluzioni SEO accessibili con risultati comprovati. Nessun costo nascosto, nessun contratto a lungo termine.", de: "Erschwingliche SEO-Lösungen mit nachgewiesenen Ergebnissen. Keine versteckten Gebühren, keine langfristigen Verträge." },
  "pricing.limitedTime": { en: "Limited Time", ar: "وقت محدود", es: "Tiempo Limitado", pt: "Tempo Limitado", fr: "Temps limité", it: "Tempo limitato", de: "Begrenzte Zeit" },
  "pricing.offAll": { en: "25% OFF All Packages!", ar: "خصم 25% على جميع الباقات!", es: "¡25% DESCUENTO en Todos los Paquetes!", pt: "25% DESCONTO em Todos os Pacotes!", fr: "25% DE RÉDUCTION sur tous les forfaits!", it: "25% DI SCONTO su tutti i pacchetti!", de: "25% RABATT auf alle Pakete!" },
  "pricing.signUpIn3Days": { en: "Sign up within 3 days and save big on any service package", ar: "سجل خلال 3 أيام ووفر الكثير على أي باقة خدمات", es: "Regístrate en 3 días y ahorra mucho en cualquier paquete de servicios", pt: "Inscreva-se em 3 dias e economize muito em qualquer pacote de serviços", fr: "Inscrivez-vous dans les 3 jours et économisez gros sur n'importe quel forfait", it: "Iscriviti entro 3 giorni e risparmia molto su qualsiasi pacchetto di servizi", de: "Melden Sie sich innerhalb von 3 Tagen an und sparen Sie viel bei jedem Servicepaket" },
  "pricing.claimDiscount": { en: "Claim Your 25% Discount", ar: "احصل على خصم 25%", es: "Reclama Tu 25% de Descuento", pt: "Reivindique Seu 25% de Desconto", fr: "Réclamez votre réduction de 25%", it: "Richiedi il tuo sconto del 25%", de: "Fordern Sie Ihren 25% Rabatt an" },
  "pricing.mostPopular": { en: "Most Popular", ar: "الأكثر شعبية", es: "Más Popular", pt: "Mais Popular", fr: "Le plus populaire", it: "Più popolare", de: "Am beliebtesten" },
  "pricing.guarantees": { en: "Our Guarantees", ar: "ضماناتنا", es: "Nuestras Garantías", pt: "Nossas Garantias", fr: "Nos garanties", it: "Le nostre garanzie", de: "Unsere Garantien" },
  "pricing.resultsGuaranteed": { en: "Results Guaranteed", ar: "نتائج مضمونة", es: "Resultados Garantizados", pt: "Resultados Garantidos", fr: "Résultats garantis", it: "Risultati garantiti", de: "Ergebnisse garantiert" },
  "pricing.resultsGuaranteedDesc": { en: "If you don't see improvement in 90 days, we'll work for free until you do.", ar: "إذا لم تر تحسناً في 90 يوماً، سنعمل مجاناً حتى ترى التحسن.", es: "Si no ves mejoras en 90 días, trabajaremos gratis hasta que las veas.", pt: "Se você não ver melhoria em 90 dias, trabalharemos de graça até você ver.", fr: "Si vous ne voyez pas d'amélioration en 90 jours, nous travaillerons gratuitement jusqu'à ce que vous en voyiez.", it: "Se non vedi miglioramenti in 90 giorni, lavoreremo gratis finché non li vedrai.", de: "Wenn Sie in 90 Tagen keine Verbesserung sehen, arbeiten wir kostenlos, bis Sie es tun." },
  "pricing.quickTurnaround": { en: "Quick Turnaround", ar: "تسليم سريع", es: "Entrega Rápida", pt: "Entrega Rápida", fr: "Délai rapide", it: "Consegna rapida", de: "Schnelle Bearbeitung" },
  "pricing.quickTurnaroundDesc": { en: "Audit reports delivered within 48-72 hours. No long waits.", ar: "تسليم تقارير التدقيق خلال 48-72 ساعة. لا انتظار طويل.", es: "Informes de auditoría entregados en 48-72 horas. Sin largas esperas.", pt: "Relatórios de auditoria entregues em 48-72 horas. Sem longas esperas.", fr: "Rapports d'audit livrés en 48-72 heures. Pas de longues attentes.", it: "Report di audit consegnati in 48-72 ore. Nessuna lunga attesa.", de: "Audit-Berichte werden innerhalb von 48-72 Stunden geliefert. Keine langen Wartezeiten." },
  "pricing.provenTrack": { en: "Proven Track Record", ar: "سجل حافل مثبت", es: "Historial Probado", pt: "Histórico Comprovado", fr: "Bilan éprouvé", it: "Track record comprovato", de: "Nachgewiesene Erfolgsbilanz" },
  "pricing.provenTrackDesc": { en: "100+ businesses helped with an average 150% traffic increase.", ar: "مساعدة أكثر من 100 شركة بمتوسط زيادة في الزيارات 150%.", es: "100+ negocios ayudados con un aumento promedio del 150% en tráfico.", pt: "100+ empresas ajudadas com um aumento médio de 150% no tráfego.", fr: "100+ entreprises aidées avec une augmentation moyenne de 150% du trafic.", it: "100+ aziende aiutate con un aumento medio del traffico del 150%.", de: "100+ Unternehmen geholfen mit durchschnittlich 150% Traffic-Steigerung." },
  "pricing.haveQuestions": { en: "Have Questions?", ar: "لديك أسئلة؟", es: "¿Tienes Preguntas?", pt: "Tem Perguntas?", fr: "Vous avez des questions?", it: "Hai domande?", de: "Haben Sie Fragen?" },
  "pricing.checkFaq": { en: "Check our FAQ or get in touch for custom solutions tailored to your needs.", ar: "تحقق من الأسئلة الشائعة أو تواصل معنا للحصول على حلول مخصصة تناسب احتياجاتك.", es: "Consulta nuestras FAQ o contáctanos para soluciones personalizadas a tu medida.", pt: "Confira nosso FAQ ou entre em contato para soluções personalizadas às suas necessidades.", fr: "Consultez notre FAQ ou contactez-nous pour des solutions personnalisées adaptées à vos besoins.", it: "Controlla le nostre FAQ o contattaci per soluzioni personalizzate su misura per le tue esigenze.", de: "Schauen Sie sich unsere FAQ an oder kontaktieren Sie uns für maßgeschneiderte Lösungen." },
  "pricing.viewFaq": { en: "View FAQ", ar: "عرض الأسئلة الشائعة", es: "Ver FAQ", pt: "Ver FAQ", fr: "Voir FAQ", it: "Vedi FAQ", de: "FAQ ansehen" },
  "pricing.viewCaseStudies": { en: "View Case Studies", ar: "عرض دراسات الحالة", es: "Ver Casos de Estudio", pt: "Ver Estudos de Caso", fr: "Voir les études de cas", it: "Vedi casi di studio", de: "Fallstudien ansehen" },
  "pricing.contactUs": { en: "Contact Us", ar: "اتصل بنا", es: "Contáctanos", pt: "Contate-nos", fr: "Contactez-nous", it: "Contattaci", de: "Kontaktieren Sie uns" },

  // Discount countdown
  "discount.days": { en: "Days", ar: "أيام", es: "Días", pt: "Dias", fr: "Jours", it: "Giorni", de: "Tage" },
  "discount.hours": { en: "Hours", ar: "ساعات", es: "Horas", pt: "Horas", fr: "Heures", it: "Ore", de: "Stunden" },
  "discount.minutes": { en: "Minutes", ar: "دقائق", es: "Minutos", pt: "Minutos", fr: "Minutes", it: "Minuti", de: "Minuten" },
  "discount.seconds": { en: "Seconds", ar: "ثواني", es: "Segundos", pt: "Segundos", fr: "Secondes", it: "Secondi", de: "Sekunden" },
  "discount.min": { en: "Min", ar: "دق", es: "Min", pt: "Min", fr: "Min", it: "Min", de: "Min" },
  "discount.sec": { en: "Sec", ar: "ث", es: "Seg", pt: "Seg", fr: "Sec", it: "Sec", de: "Sek" },
  "discount.offerExpires": { en: "Offer expires in:", ar: "ينتهي العرض في:", es: "La oferta expira en:", pt: "A oferta expira em:", fr: "L'offre expire dans:", it: "L'offerta scade tra:", de: "Angebot läuft ab in:" },
  "discount.lockIn": { en: "Lock in 25% OFF before time runs out!", ar: "احصل على خصم 25% قبل انتهاء الوقت!", es: "¡Asegura tu 25% de descuento antes de que se acabe el tiempo!", pt: "Garanta seu 25% de desconto antes que o tempo acabe!", fr: "Obtenez 25% de réduction avant la fin du temps!", it: "Blocca il 25% di sconto prima che scada il tempo!", de: "Sichern Sie sich 25% Rabatt bevor die Zeit abläuft!" },

  // Case Studies
  "caseStudies.badge": { en: "Case Studies", ar: "دراسات الحالة", es: "Casos de Estudio", pt: "Estudos de Caso", fr: "Études de cas", it: "Casi di studio", de: "Fallstudien" },
  "caseStudies.title": { en: "Real Results for Real Businesses", ar: "نتائج حقيقية لأعمال حقيقية", es: "Resultados Reales para Negocios Reales", pt: "Resultados Reais para Negócios Reais", fr: "Des résultats réels pour de vraies entreprises", it: "Risultati reali per aziende reali", de: "Echte Ergebnisse für echte Unternehmen" },
  "caseStudies.subtitle": { en: "See how I've helped service businesses dominate their local markets and increase revenue through proven Local SEO strategies.", ar: "شاهد كيف ساعدت الشركات الخدمية على السيطرة على أسواقها المحلية وزيادة الإيرادات من خلال استراتيجيات SEO المحلية المثبتة.", es: "Vea cómo he ayudado a negocios de servicios a dominar sus mercados locales y aumentar ingresos a través de estrategias de SEO local comprobadas.", pt: "Veja como ajudei empresas de serviços a dominar seus mercados locais e aumentar a receita através de estratégias de SEO local comprovadas.", fr: "Découvrez comment j'ai aidé les entreprises de services à dominer leurs marchés locaux et à augmenter leurs revenus grâce à des stratégies de SEO local éprouvées.", it: "Scopri come ho aiutato le aziende di servizi a dominare i loro mercati locali e aumentare i ricavi attraverso strategie SEO locali comprovate.", de: "Sehen Sie, wie ich Service-Unternehmen geholfen habe, ihre lokalen Märkte zu dominieren und den Umsatz durch bewährte Local SEO Strategien zu steigern." },
  "caseStudies.challenge": { en: "Challenge", ar: "التحدي", es: "Desafío", pt: "Desafio", fr: "Défi", it: "Sfida", de: "Herausforderung" },
  "caseStudies.solution": { en: "Solution", ar: "الحل", es: "Solución", pt: "Solução", fr: "Solution", it: "Soluzione", de: "Lösung" },
  "caseStudies.results": { en: "Results", ar: "النتائج", es: "Resultados", pt: "Resultados", fr: "Résultats", it: "Risultati", de: "Ergebnisse" },
  "caseStudies.wantResults": { en: "Want Similar Results?", ar: "هل تريد نتائج مماثلة؟", es: "¿Quieres Resultados Similares?", pt: "Quer Resultados Semelhantes?", fr: "Vous voulez des résultats similaires?", it: "Vuoi risultati simili?", de: "Möchten Sie ähnliche Ergebnisse?" },
  "caseStudies.fullStack": { en: "Full-Stack Project", ar: "مشروع شامل", es: "Proyecto Full-Stack", pt: "Projeto Full-Stack", fr: "Projet Full-Stack", it: "Progetto Full-Stack", de: "Full-Stack Projekt" },

  // Certifications
  "cert.localSeo": { en: "Local SEO Certified", ar: "معتمد في SEO المحلي", es: "Certificado en SEO Local", pt: "Certificado em SEO Local", fr: "Certifié SEO local", it: "Certificato SEO locale", de: "Local SEO Zertifiziert" },
  "cert.hubspot": { en: "HubSpot SEO Certification", ar: "شهادة HubSpot SEO", es: "Certificación SEO de HubSpot", pt: "Certificação SEO da HubSpot", fr: "Certification SEO HubSpot", it: "Certificazione SEO HubSpot", de: "HubSpot SEO Zertifizierung" },
  "cert.projectMgmt": { en: "Project Management Certification", ar: "شهادة إدارة المشاريع", es: "Certificación en Gestión de Proyectos", pt: "Certificação em Gerenciamento de Projetos", fr: "Certification en gestion de projet", it: "Certificazione Project Management", de: "Projektmanagement Zertifizierung" },
  "cert.googleAnalytics": { en: "Google Analytics Certified", ar: "معتمد من Google Analytics", es: "Certificado de Google Analytics", pt: "Certificado do Google Analytics", fr: "Certifié Google Analytics", it: "Certificato Google Analytics", de: "Google Analytics Zertifiziert" },
  "cert.searchConsole": { en: "Google Search Console Certified", ar: "معتمد من Google Search Console", es: "Certificado de Google Search Console", pt: "Certificado do Google Search Console", fr: "Certifié Google Search Console", it: "Certificato Google Search Console", de: "Google Search Console Zertifiziert" },
  "cert.googleAds": { en: "Google Ads Search Certified", ar: "معتمد في إعلانات Google", es: "Certificado en Google Ads", pt: "Certificado em Google Ads", fr: "Certifié Google Ads", it: "Certificato Google Ads", de: "Google Ads Zertifiziert" },

  // Skills
  "skill.localSeo": { en: "Local SEO", ar: "SEO المحلي", es: "SEO Local", pt: "SEO Local", fr: "SEO local", it: "SEO locale", de: "Lokales SEO" },
  "skill.gbp": { en: "Google Business Profile", ar: "ملف Google التجاري", es: "Google Business Profile", pt: "Google Business Profile", fr: "Google Business Profile", it: "Google Business Profile", de: "Google Business Profile" },
  "skill.keywordResearch": { en: "Keyword Research", ar: "بحث الكلمات المفتاحية", es: "Investigación de Palabras Clave", pt: "Pesquisa de Palavras-chave", fr: "Recherche de mots-clés", it: "Ricerca parole chiave", de: "Keyword-Recherche" },
  "skill.onPage": { en: "On-Page SEO", ar: "SEO على الصفحة", es: "SEO On-Page", pt: "SEO On-Page", fr: "SEO On-Page", it: "SEO On-Page", de: "On-Page SEO" },
  "skill.technical": { en: "Technical SEO", ar: "SEO التقني", es: "SEO Técnico", pt: "SEO Técnico", fr: "SEO technique", it: "SEO tecnico", de: "Technisches SEO" },
  "skill.content": { en: "Content Strategy", ar: "استراتيجية المحتوى", es: "Estrategia de Contenido", pt: "Estratégia de Conteúdo", fr: "Stratégie de contenu", it: "Strategia di contenuto", de: "Content-Strategie" },
  "skill.linkBuilding": { en: "Link Building", ar: "بناء الروابط", es: "Link Building", pt: "Link Building", fr: "Link Building", it: "Link Building", de: "Linkaufbau" },
  "skill.citation": { en: "Citation Management", ar: "إدارة الاستشهادات", es: "Gestión de Citaciones", pt: "Gerenciamento de Citações", fr: "Gestion des citations", it: "Gestione citazioni", de: "Zitatverwaltung" },
  "skill.conversion": { en: "Conversion Optimization", ar: "تحسين التحويل", es: "Optimización de Conversión", pt: "Otimização de Conversão", fr: "Optimisation de conversion", it: "Ottimizzazione conversione", de: "Conversion-Optimierung" },
  "skill.analytics": { en: "Analytics & Reporting", ar: "التحليلات والتقارير", es: "Analytics y Reportes", pt: "Analytics e Relatórios", fr: "Analytics et rapports", it: "Analytics e reportistica", de: "Analytics & Reporting" },
  "skill.projectMgmt": { en: "Project Management", ar: "إدارة المشاريع", es: "Gestión de Proyectos", pt: "Gerenciamento de Projetos", fr: "Gestion de projet", it: "Gestione progetti", de: "Projektmanagement" },
  "skill.clientComm": { en: "Client Communication", ar: "التواصل مع العملاء", es: "Comunicación con Clientes", pt: "Comunicação com Clientes", fr: "Communication client", it: "Comunicazione clienti", de: "Kundenkommunikation" },
  "skill.teamCollab": { en: "Team Collaboration", ar: "التعاون الجماعي", es: "Colaboración en Equipo", pt: "Colaboração em Equipe", fr: "Collaboration d'équipe", it: "Collaborazione di squadra", de: "Teamzusammenarbeit" },
  "skill.strategic": { en: "Strategic Planning", ar: "التخطيط الاستراتيجي", es: "Planificación Estratégica", pt: "Planejamento Estratégico", fr: "Planification stratégique", it: "Pianificazione strategica", de: "Strategische Planung" },
  "skill.performance": { en: "Performance Tracking", ar: "تتبع الأداء", es: "Seguimiento de Rendimiento", pt: "Rastreamento de Desempenho", fr: "Suivi des performances", it: "Tracciamento prestazioni", de: "Performance-Tracking" },

  // Contact labels
  "contact.email.label": { en: "Email", ar: "البريد الإلكتروني", es: "Correo", pt: "E-mail", fr: "E-mail", it: "Email", de: "E-Mail" },
  "contact.whatsapp.label": { en: "WhatsApp", ar: "واتساب", es: "WhatsApp", pt: "WhatsApp", fr: "WhatsApp", it: "WhatsApp", de: "WhatsApp" },

  // Case Studies - Client 1: Jewelry Repair of Atlanta
  "caseStudies.client1.name": { en: "Jewelry Repair of Atlanta", ar: "إصلاح المجوهرات في أتلانتا", es: "Reparación de Joyas de Atlanta", pt: "Conserto de Joias de Atlanta", fr: "Réparation de Bijoux d'Atlanta", it: "Riparazione Gioielli di Atlanta", de: "Schmuckreparatur Atlanta" },
  "caseStudies.client1.industry": { en: "Jewelry Repair Services", ar: "خدمات إصلاح المجوهرات", es: "Servicios de Reparación de Joyas", pt: "Serviços de Conserto de Joias", fr: "Services de Réparation de Bijoux", it: "Servizi di Riparazione Gioielli", de: "Schmuckreparatur-Dienste" },
  "caseStudies.client1.location": { en: "Atlanta, GA", ar: "أتلانتا، جورجيا", es: "Atlanta, GA", pt: "Atlanta, GA", fr: "Atlanta, GA", it: "Atlanta, GA", de: "Atlanta, GA" },
  "caseStudies.client1.challenge": { en: "Low visibility for 'jewelry repair near me' searches", ar: "ضعف الظهور في عمليات البحث عن 'إصلاح المجوهرات بالقرب مني'", es: "Baja visibilidad para búsquedas de 'reparación de joyas cerca de mí'", pt: "Baixa visibilidade para pesquisas de 'conserto de joias perto de mim'", fr: "Faible visibilité pour les recherches 'réparation bijoux près de moi'", it: "Bassa visibilità per ricerche 'riparazione gioielli vicino a me'", de: "Geringe Sichtbarkeit für 'Schmuckreparatur in meiner Nähe' Suchen" },
  "caseStudies.client1.solution": { en: "Optimized Google Business Profile, service pages, and local keywords", ar: "تحسين ملف Google التجاري وصفحات الخدمات والكلمات المفتاحية المحلية", es: "Optimización del perfil de Google Business, páginas de servicios y palabras clave locales", pt: "Otimização do Perfil do Google Business, páginas de serviços e palavras-chave locais", fr: "Optimisation du profil Google Business, pages de services et mots-clés locaux", it: "Ottimizzazione del profilo Google Business, pagine dei servizi e parole chiave locali", de: "Google Business Profil, Serviceseiten und lokale Keywords optimiert" },
  "caseStudies.client1.metric1": { en: "150%", ar: "150%", es: "150%", pt: "150%", fr: "150%", it: "150%", de: "150%" },
  "caseStudies.client1.label1": { en: "Increase in Local Impressions", ar: "زيادة في الظهور المحلي", es: "Aumento en Impresiones Locales", pt: "Aumento em Impressões Locais", fr: "Augmentation des impressions locales", it: "Aumento delle impressioni locali", de: "Steigerung lokaler Impressionen" },
  "caseStudies.client1.metric2": { en: "Top 3", ar: "أعلى 3", es: "Top 3", pt: "Top 3", fr: "Top 3", it: "Top 3", de: "Top 3" },
  "caseStudies.client1.label2": { en: "'Near Me' Rankings", ar: "تصنيفات 'بالقرب مني'", es: "Rankings 'Cerca de Mí'", pt: "Rankings 'Perto de Mim'", fr: "Classements 'Près de moi'", it: "Classifiche 'Vicino a me'", de: "'In meiner Nähe' Rankings" },
  "caseStudies.client1.metric3": { en: "Daily", ar: "يومياً", es: "Diario", pt: "Diário", fr: "Quotidien", it: "Giornaliero", de: "Täglich" },
  "caseStudies.client1.label3": { en: "Inbound Calls from Maps", ar: "مكالمات واردة من الخرائط", es: "Llamadas Entrantes desde Mapas", pt: "Chamadas Recebidas do Maps", fr: "Appels entrants depuis Maps", it: "Chiamate in entrata da Maps", de: "Eingehende Anrufe von Maps" },

  // Case Studies - Client 2: Watkins Bail Bonds Vista
  "caseStudies.client2.name": { en: "Watkins Bail Bonds Vista", ar: "واتكينز لخدمات الكفالة - فيستا", es: "Watkins Fianzas Vista", pt: "Watkins Fianças Vista", fr: "Watkins Cautions Vista", it: "Watkins Cauzioni Vista", de: "Watkins Kautionen Vista" },
  "caseStudies.client2.industry": { en: "Bail Bonds Services", ar: "خدمات الكفالة", es: "Servicios de Fianzas", pt: "Serviços de Fiança", fr: "Services de Caution", it: "Servizi di Cauzione", de: "Kautionsdienste" },
  "caseStudies.client2.location": { en: "Vista, CA", ar: "فيستا، كاليفورنيا", es: "Vista, CA", pt: "Vista, CA", fr: "Vista, CA", it: "Vista, CA", de: "Vista, CA" },
  "caseStudies.client2.challenge": { en: "Low ranking for bail bond services in Vista, CA", ar: "ترتيب منخفض لخدمات الكفالة في فيستا، كاليفورنيا", es: "Bajo ranking para servicios de fianzas en Vista, CA", pt: "Baixo ranking para serviços de fiança em Vista, CA", fr: "Faible classement pour les services de caution à Vista, CA", it: "Basso ranking per servizi di cauzione a Vista, CA", de: "Niedriges Ranking für Kautionsdienste in Vista, CA" },
  "caseStudies.client2.solution": { en: "Optimized GBP, local citations, and targeted local keywords", ar: "تحسين GBP والاستشهادات المحلية والكلمات المفتاحية المحلية المستهدفة", es: "GBP optimizado, citaciones locales y palabras clave locales específicas", pt: "GBP otimizado, citações locais e palavras-chave locais direcionadas", fr: "GBP optimisé, citations locales et mots-clés locaux ciblés", it: "GBP ottimizzato, citazioni locali e parole chiave locali mirate", de: "GBP, lokale Zitate und gezielte lokale Keywords optimiert" },
  "caseStudies.client2.metric1": { en: "180%", ar: "180%", es: "180%", pt: "180%", fr: "180%", it: "180%", de: "180%" },
  "caseStudies.client2.label1": { en: "Increase in Local Searches", ar: "زيادة في البحث المحلي", es: "Aumento en Búsquedas Locales", pt: "Aumento em Pesquisas Locais", fr: "Augmentation des recherches locales", it: "Aumento delle ricerche locali", de: "Steigerung lokaler Suchen" },
  "caseStudies.client2.metric2": { en: "Top 3", ar: "أعلى 3", es: "Top 3", pt: "Top 3", fr: "Top 3", it: "Top 3", de: "Top 3" },
  "caseStudies.client2.label2": { en: "'Bail Bonds Near Me' Queries", ar: "استفسارات 'الكفالة بالقرب مني'", es: "Consultas 'Fianzas Cerca de Mí'", pt: "Consultas 'Fiança Perto de Mim'", fr: "Requêtes 'Caution près de moi'", it: "Query 'Cauzione vicino a me'", de: "'Kaution in meiner Nähe' Anfragen" },
  "caseStudies.client2.metric3": { en: "Immediate", ar: "فورية", es: "Inmediato", pt: "Imediato", fr: "Immédiat", it: "Immediato", de: "Sofort" },
  "caseStudies.client2.label3": { en: "Inquiries Through Maps", ar: "استفسارات عبر الخرائط", es: "Consultas a través de Mapas", pt: "Consultas através do Maps", fr: "Demandes via Maps", it: "Richieste tramite Maps", de: "Anfragen über Maps" },

  // Case Studies - Client 3: Moe's iRepair Texas
  "caseStudies.client3.name": { en: "Moe's iRepair Texas", ar: "موز آي ريبير تكساس", es: "Moe's iRepair Texas", pt: "Moe's iRepair Texas", fr: "Moe's iRepair Texas", it: "Moe's iRepair Texas", de: "Moe's iRepair Texas" },
  "caseStudies.client3.industry": { en: "Device Repair (Multi-Location)", ar: "إصلاح الأجهزة (مواقع متعددة)", es: "Reparación de Dispositivos (Múltiples Ubicaciones)", pt: "Reparo de Dispositivos (Múltiplas Localizações)", fr: "Réparation d'appareils (Multi-sites)", it: "Riparazione Dispositivi (Multi-sede)", de: "Gerätereparatur (Mehrere Standorte)" },
  "caseStudies.client3.location": { en: "Texas", ar: "تكساس", es: "Texas", pt: "Texas", fr: "Texas", it: "Texas", de: "Texas" },
  "caseStudies.client3.challenge": { en: "Four locations across Texas with scattered online presence", ar: "أربعة مواقع في تكساس مع تواجد متفرق عبر الإنترنت", es: "Cuatro ubicaciones en Texas con presencia online dispersa", pt: "Quatro localizações no Texas com presença online dispersa", fr: "Quatre sites au Texas avec une présence en ligne dispersée", it: "Quattro sedi in Texas con presenza online frammentata", de: "Vier Standorte in Texas mit verstreuter Online-Präsenz" },
  "caseStudies.client3.solution": { en: "Unified local SEO strategy, optimized each GBP, local content, and map listings", ar: "استراتيجية SEO محلية موحدة، تحسين كل GBP والمحتوى المحلي وقوائم الخرائط", es: "Estrategia SEO local unificada, optimización de cada GBP, contenido local y listados de mapas", pt: "Estratégia de SEO local unificada, otimização de cada GBP, conteúdo local e listagens de mapas", fr: "Stratégie SEO locale unifiée, optimisation de chaque GBP, contenu local et listes de cartes", it: "Strategia SEO locale unificata, ottimizzazione di ogni GBP, contenuto locale e inserzioni mappe", de: "Einheitliche lokale SEO-Strategie, jedes GBP optimiert, lokaler Content und Karteneinträge" },
  "caseStudies.client3.metric1": { en: "200%", ar: "200%", es: "200%", pt: "200%", fr: "200%", it: "200%", de: "200%" },
  "caseStudies.client3.label1": { en: "Increase in Local Visibility", ar: "زيادة في الظهور المحلي", es: "Aumento en Visibilidad Local", pt: "Aumento na Visibilidade Local", fr: "Augmentation de la visibilité locale", it: "Aumento della visibilità locale", de: "Steigerung der lokalen Sichtbarkeit" },
  "caseStudies.client3.metric2": { en: "Top 5", ar: "أعلى 5", es: "Top 5", pt: "Top 5", fr: "Top 5", it: "Top 5", de: "Top 5" },
  "caseStudies.client3.label2": { en: "Rankings Across All Locations", ar: "التصنيفات عبر جميع المواقع", es: "Rankings en Todas las Ubicaciones", pt: "Rankings em Todas as Localizações", fr: "Classements sur tous les sites", it: "Classifiche in tutte le sedi", de: "Rankings an allen Standorten" },
  "caseStudies.client3.metric3": { en: "Daily", ar: "يومياً", es: "Diario", pt: "Diário", fr: "Quotidien", it: "Giornaliero", de: "Täglich" },
  "caseStudies.client3.label3": { en: "Calls and Walk-ins from Maps", ar: "مكالمات وزيارات من الخرائط", es: "Llamadas y Visitas desde Mapas", pt: "Chamadas e Visitas do Maps", fr: "Appels et visites depuis Maps", it: "Chiamate e visite da Maps", de: "Anrufe und Besuche von Maps" },

  // Case Studies - Client 4: Tribeca Salon
  "caseStudies.client4.name": { en: "Tribeca Salon", ar: "صالون تريبيكا", es: "Salón Tribeca", pt: "Salão Tribeca", fr: "Salon Tribeca", it: "Salone Tribeca", de: "Tribeca Salon" },
  "caseStudies.client4.industry": { en: "Salon & Beauty", ar: "صالون وتجميل", es: "Salón y Belleza", pt: "Salão e Beleza", fr: "Salon et Beauté", it: "Salone e Bellezza", de: "Salon & Beauty" },
  "caseStudies.client4.location": { en: "South Tampa, FL", ar: "جنوب تامبا، فلوريدا", es: "South Tampa, FL", pt: "South Tampa, FL", fr: "South Tampa, FL", it: "South Tampa, FL", de: "South Tampa, FL" },
  "caseStudies.client4.challenge": { en: "Low bookings from local searches", ar: "حجوزات منخفضة من البحث المحلي", es: "Pocas reservas de búsquedas locales", pt: "Poucas reservas de pesquisas locais", fr: "Faibles réservations issues des recherches locales", it: "Poche prenotazioni dalle ricerche locali", de: "Wenige Buchungen aus lokalen Suchen" },
  "caseStudies.client4.solution": { en: "Optimized Google Business Profile, service listings, and location keywords", ar: "تحسين ملف Google التجاري وقوائم الخدمات والكلمات المفتاحية للموقع", es: "Optimización del perfil de Google Business, listados de servicios y palabras clave de ubicación", pt: "Otimização do Perfil do Google Business, listagens de serviços e palavras-chave de localização", fr: "Optimisation du profil Google Business, listes de services et mots-clés de localisation", it: "Ottimizzazione del profilo Google Business, elenchi servizi e parole chiave di posizione", de: "Google Business Profil, Dienstleistungslisten und Standort-Keywords optimiert" },
  "caseStudies.client4.metric1": { en: "160%", ar: "160%", es: "160%", pt: "160%", fr: "160%", it: "160%", de: "160%" },
  "caseStudies.client4.label1": { en: "Increase in Map Impressions", ar: "زيادة في ظهور الخرائط", es: "Aumento en Impresiones de Mapas", pt: "Aumento em Impressões do Maps", fr: "Augmentation des impressions sur Maps", it: "Aumento delle impressioni su Maps", de: "Steigerung der Maps-Impressionen" },
  "caseStudies.client4.metric2": { en: "Top 3", ar: "أعلى 3", es: "Top 3", pt: "Top 3", fr: "Top 3", it: "Top 3", de: "Top 3" },
  "caseStudies.client4.label2": { en: "Local Rankings", ar: "التصنيفات المحلية", es: "Rankings Locales", pt: "Rankings Locais", fr: "Classements locaux", it: "Classifiche locali", de: "Lokale Rankings" },
  "caseStudies.client4.metric3": { en: "Surge", ar: "ارتفاع", es: "Aumento", pt: "Aumento", fr: "Augmentation", it: "Aumento", de: "Anstieg" },
  "caseStudies.client4.label3": { en: "In Daily Appointments", ar: "في المواعيد اليومية", es: "En Citas Diarias", pt: "Em Agendamentos Diários", fr: "Dans les rendez-vous quotidiens", it: "Negli appuntamenti giornalieri", de: "Bei täglichen Terminen" },

  // Case Studies - Client 5: Artful Orthodontics
  "caseStudies.client5.name": { en: "Artful Orthodontics", ar: "آرتفول لتقويم الأسنان", es: "Artful Ortodoncia", pt: "Artful Ortodontia", fr: "Artful Orthodontie", it: "Artful Ortodonzia", de: "Artful Kieferorthopädie" },
  "caseStudies.client5.industry": { en: "Orthodontic Services", ar: "خدمات تقويم الأسنان", es: "Servicios de Ortodoncia", pt: "Serviços de Ortodontia", fr: "Services d'orthodontie", it: "Servizi di Ortodonzia", de: "Kieferorthopädische Dienste" },
  "caseStudies.client5.location": { en: "Winter Garden, FL", ar: "وينتر غاردن، فلوريدا", es: "Winter Garden, FL", pt: "Winter Garden, FL", fr: "Winter Garden, FL", it: "Winter Garden, FL", de: "Winter Garden, FL" },
  "caseStudies.client5.challenge": { en: "Low visibility for orthodontic services in Winter Garden, FL", ar: "ضعف الظهور لخدمات تقويم الأسنان في وينتر غاردن، فلوريدا", es: "Baja visibilidad para servicios de ortodoncia en Winter Garden, FL", pt: "Baixa visibilidade para serviços de ortodontia em Winter Garden, FL", fr: "Faible visibilité pour les services d'orthodontie à Winter Garden, FL", it: "Bassa visibilità per servizi di ortodonzia a Winter Garden, FL", de: "Geringe Sichtbarkeit für kieferorthopädische Dienste in Winter Garden, FL" },
  "caseStudies.client5.solution": { en: "Optimized service pages, GBP, and local keywords", ar: "تحسين صفحات الخدمات وGBP والكلمات المفتاحية المحلية", es: "Optimización de páginas de servicios, GBP y palabras clave locales", pt: "Otimização de páginas de serviços, GBP e palavras-chave locais", fr: "Optimisation des pages de services, GBP et mots-clés locaux", it: "Ottimizzazione delle pagine servizi, GBP e parole chiave locali", de: "Serviceseiten, GBP und lokale Keywords optimiert" },
  "caseStudies.client5.metric1": { en: "150%", ar: "150%", es: "150%", pt: "150%", fr: "150%", it: "150%", de: "150%" },
  "caseStudies.client5.label1": { en: "Increase in Local Impressions", ar: "زيادة في الظهور المحلي", es: "Aumento en Impresiones Locales", pt: "Aumento em Impressões Locais", fr: "Augmentation des impressions locales", it: "Aumento delle impressioni locali", de: "Steigerung lokaler Impressionen" },
  "caseStudies.client5.metric2": { en: "Top 3", ar: "أعلى 3", es: "Top 3", pt: "Top 3", fr: "Top 3", it: "Top 3", de: "Top 3" },
  "caseStudies.client5.label2": { en: "'Near Me' Rankings", ar: "تصنيفات 'بالقرب مني'", es: "Rankings 'Cerca de Mí'", pt: "Rankings 'Perto de Mim'", fr: "Classements 'Près de moi'", it: "Classifiche 'Vicino a me'", de: "'In meiner Nähe' Rankings" },
  "caseStudies.client5.metric3": { en: "Consistent", ar: "مستمر", es: "Constante", pt: "Consistente", fr: "Constant", it: "Costante", de: "Konstant" },
  "caseStudies.client5.label3": { en: "Inbound Patient Inquiries", ar: "استفسارات المرضى الواردة", es: "Consultas de Pacientes Entrantes", pt: "Consultas de Pacientes Recebidas", fr: "Demandes de patients entrantes", it: "Richieste pazienti in entrata", de: "Eingehende Patientenanfragen" },

  // Case Studies - Client 6: Pickup Truck Rental UAE (Featured)
  "caseStudies.client6.name": { en: "Pickup Truck Rental UAE", ar: "تأجير شاحنات بيك أب الإمارات", es: "Alquiler de Camionetas UAE", pt: "Aluguel de Caminhonetes UAE", fr: "Location de Pickup UAE", it: "Noleggio Pickup UAE", de: "Pickup Truck Vermietung UAE" },
  "caseStudies.client6.industry": { en: "Vehicle Rental (Full-Stack)", ar: "تأجير المركبات (شامل)", es: "Alquiler de Vehículos (Full-Stack)", pt: "Aluguel de Veículos (Full-Stack)", fr: "Location de véhicules (Full-Stack)", it: "Noleggio Veicoli (Full-Stack)", de: "Fahrzeugvermietung (Full-Stack)" },
  "caseStudies.client6.location": { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة", es: "Emiratos Árabes Unidos", pt: "Emirados Árabes Unidos", fr: "Émirats Arabes Unis", it: "Emirati Arabi Uniti", de: "Vereinigte Arabische Emirate" },
  "caseStudies.client6.challenge": { en: "Low online visibility and scattered lead sources", ar: "ضعف الظهور عبر الإنترنت ومصادر العملاء المتفرقة", es: "Baja visibilidad online y fuentes de leads dispersas", pt: "Baixa visibilidade online e fontes de leads dispersas", fr: "Faible visibilité en ligne et sources de leads dispersées", it: "Bassa visibilità online e fonti di lead frammentate", de: "Geringe Online-Sichtbarkeit und verstreute Lead-Quellen" },
  "caseStudies.client6.solution": { en: "Managed website design, SEO, Google Local Service Ads, Meta ads, social media campaigns, and AI-assisted chatbots", ar: "إدارة تصميم الموقع وSEO وإعلانات Google المحلية وإعلانات Meta وحملات التواصل الاجتماعي وروبوتات الدردشة بالذكاء الاصطناعي", es: "Gestión de diseño web, SEO, Google Local Service Ads, anuncios de Meta, campañas de redes sociales y chatbots asistidos por IA", pt: "Gerenciamento de design de site, SEO, Google Local Service Ads, anúncios Meta, campanhas de mídia social e chatbots com IA", fr: "Gestion de la conception de site web, SEO, Google Local Service Ads, publicités Meta, campagnes sur les réseaux sociaux et chatbots IA", it: "Gestione design sito web, SEO, Google Local Service Ads, annunci Meta, campagne social media e chatbot IA", de: "Verwaltetes Webdesign, SEO, Google Local Service Ads, Meta-Werbung, Social Media Kampagnen und KI-gestützte Chatbots" },
  "caseStudies.client6.metric1": { en: "250%", ar: "250%", es: "250%", pt: "250%", fr: "250%", it: "250%", de: "250%" },
  "caseStudies.client6.label1": { en: "Increase in Leads", ar: "زيادة في العملاء المحتملين", es: "Aumento en Leads", pt: "Aumento em Leads", fr: "Augmentation des leads", it: "Aumento dei lead", de: "Steigerung der Leads" },
  "caseStudies.client6.metric2": { en: "Top 3", ar: "أعلى 3", es: "Top 3", pt: "Top 3", fr: "Top 3", it: "Top 3", de: "Top 3" },
  "caseStudies.client6.label2": { en: "Local & Service Rankings", ar: "التصنيفات المحلية والخدمية", es: "Rankings Locales y de Servicios", pt: "Rankings Locais e de Serviços", fr: "Classements locaux et de services", it: "Classifiche locali e servizi", de: "Lokale & Service Rankings" },
  "caseStudies.client6.metric3": { en: "Automated", ar: "آلي", es: "Automatizado", pt: "Automatizado", fr: "Automatisé", it: "Automatizzato", de: "Automatisiert" },
  "caseStudies.client6.label3": { en: "Daily Booking Conversions", ar: "تحويلات الحجز اليومية", es: "Conversiones de Reservas Diarias", pt: "Conversões de Reservas Diárias", fr: "Conversions de réservations quotidiennes", it: "Conversioni prenotazioni giornaliere", de: "Tägliche Buchungskonversionen" },

  // Individual Testimonials

  // Testimonial 1
  "testimonials.t1.quote": { en: "Hadi transformed our Google Business Profile and now we receive daily calls from Google Maps. His local SEO knowledge is exceptional.", ar: "غيّر هادي ملف Google Business الخاص بنا والآن نتلقى مكالمات يومية من خرائط Google. معرفته بـ SEO المحلي استثنائية.", es: "Hadi transformó nuestro perfil de Google Business y ahora recibimos llamadas diarias desde Google Maps. Su conocimiento de SEO local es excepcional.", pt: "Hadi transformou nosso perfil do Google Business e agora recebemos chamadas diárias do Google Maps. Seu conhecimento de SEO local é excepcional.", fr: "Hadi a transformé notre profil Google Business et maintenant nous recevons des appels quotidiens depuis Google Maps. Sa connaissance du SEO local est exceptionnelle.", it: "Hadi ha trasformato il nostro profilo Google Business e ora riceviamo chiamate giornaliere da Google Maps. La sua conoscenza del SEO locale è eccezionale.", de: "Hadi hat unser Google Business Profil transformiert und jetzt erhalten wir täglich Anrufe von Google Maps. Sein Wissen über lokales SEO ist außergewöhnlich." },
  "testimonials.t1.author": { en: "Ahmed R.", ar: "أحمد ر.", es: "Ahmed R.", pt: "Ahmed R.", fr: "Ahmed R.", it: "Ahmed R.", de: "Ahmed R." },
  "testimonials.t1.role": { en: "Service Business Owner", ar: "صاحب عمل خدمي", es: "Propietario de Negocio de Servicios", pt: "Proprietário de Empresa de Serviços", fr: "Propriétaire d'entreprise de services", it: "Proprietario di attività di servizi", de: "Dienstleistungsunternehmer" },
  "testimonials.t1.location": { en: "Dubai, UAE", ar: "دبي، الإمارات", es: "Dubai, EAU", pt: "Dubai, EAU", fr: "Dubaï, EAU", it: "Dubai, EAU", de: "Dubai, VAE" },

  // Testimonial 2
  "testimonials.t2.quote": { en: "Clear communication, real results, and honest reporting. Our rankings and leads improved within the first month.", ar: "تواصل واضح ونتائج حقيقية وتقارير صادقة. تحسنت تصنيفاتنا والعملاء المحتملين خلال الشهر الأول.", es: "Comunicación clara, resultados reales e informes honestos. Nuestros rankings y leads mejoraron en el primer mes.", pt: "Comunicação clara, resultados reais e relatórios honestos. Nossos rankings e leads melhoraram no primeiro mês.", fr: "Communication claire, résultats réels et rapports honnêtes. Nos classements et leads se sont améliorés dès le premier mois.", it: "Comunicazione chiara, risultati reali e reportistica onesta. I nostri ranking e lead sono migliorati nel primo mese.", de: "Klare Kommunikation, echte Ergebnisse und ehrliche Berichterstattung. Unsere Rankings und Leads verbesserten sich im ersten Monat." },
  "testimonials.t2.author": { en: "Sarah M.", ar: "سارة م.", es: "Sarah M.", pt: "Sarah M.", fr: "Sarah M.", it: "Sarah M.", de: "Sarah M." },
  "testimonials.t2.role": { en: "Repair Shop Owner", ar: "صاحب ورشة إصلاح", es: "Propietario de Taller de Reparación", pt: "Proprietário de Oficina de Reparo", fr: "Propriétaire d'atelier de réparation", it: "Proprietario di officina riparazioni", de: "Reparaturwerkstatt-Inhaber" },
  "testimonials.t2.location": { en: "Texas, USA", ar: "تكساس، الولايات المتحدة", es: "Texas, EE.UU.", pt: "Texas, EUA", fr: "Texas, États-Unis", it: "Texas, USA", de: "Texas, USA" },

  // Testimonial 3
  "testimonials.t3.quote": { en: "Hadi understands competitive local SEO better than anyone we've worked with. Highly recommended.", ar: "هادي يفهم SEO المحلي التنافسي أفضل من أي شخص عملنا معه. موصى به بشدة.", es: "Hadi entiende el SEO local competitivo mejor que nadie con quien hayamos trabajado. Muy recomendado.", pt: "Hadi entende SEO local competitivo melhor do que qualquer pessoa com quem trabalhamos. Altamente recomendado.", fr: "Hadi comprend le SEO local compétitif mieux que quiconque avec qui nous avons travaillé. Hautement recommandé.", it: "Hadi capisce la SEO locale competitiva meglio di chiunque altro con cui abbiamo lavorato. Altamente raccomandato.", de: "Hadi versteht wettbewerbsfähiges lokales SEO besser als jeder, mit dem wir gearbeitet haben. Sehr empfehlenswert." },
  "testimonials.t3.author": { en: "James T.", ar: "جيمس ت.", es: "James T.", pt: "James T.", fr: "James T.", it: "James T.", de: "James T." },
  "testimonials.t3.role": { en: "Bail Bonds Agency", ar: "وكالة الكفالة", es: "Agencia de Fianzas", pt: "Agência de Fiança", fr: "Agence de caution", it: "Agenzia cauzioni", de: "Kautionsagentur" },
  "testimonials.t3.location": { en: "California, USA", ar: "كاليفورنيا، الولايات المتحدة", es: "California, EE.UU.", pt: "Califórnia, EUA", fr: "Californie, États-Unis", it: "California, USA", de: "Kalifornien, USA" },

  // Testimonial 4
  "testimonials.t4.quote": { en: "Our restaurant went from page 3 to the top 3 map pack results. We've seen a 200% increase in reservations from Google.", ar: "انتقل مطعمنا من الصفحة 3 إلى أعلى 3 نتائج في الخريطة. شهدنا زيادة بنسبة 200% في الحجوزات من Google.", es: "Nuestro restaurante pasó de la página 3 a los 3 primeros resultados del mapa. Hemos visto un aumento del 200% en reservas desde Google.", pt: "Nosso restaurante passou da página 3 para os 3 primeiros resultados do mapa. Vimos um aumento de 200% nas reservas do Google.", fr: "Notre restaurant est passé de la page 3 aux 3 premiers résultats de la carte. Nous avons vu une augmentation de 200% des réservations depuis Google.", it: "Il nostro ristorante è passato dalla pagina 3 ai primi 3 risultati della mappa. Abbiamo visto un aumento del 200% nelle prenotazioni da Google.", de: "Unser Restaurant stieg von Seite 3 auf die Top 3 der Kartenergebnisse. Wir haben einen 200%igen Anstieg der Reservierungen über Google verzeichnet." },
  "testimonials.t4.author": { en: "Marco P.", ar: "ماركو ب.", es: "Marco P.", pt: "Marco P.", fr: "Marco P.", it: "Marco P.", de: "Marco P." },
  "testimonials.t4.role": { en: "Restaurant Owner", ar: "صاحب مطعم", es: "Propietario de Restaurante", pt: "Proprietário de Restaurante", fr: "Propriétaire de restaurant", it: "Proprietario di ristorante", de: "Restaurantbesitzer" },
  "testimonials.t4.location": { en: "New York, USA", ar: "نيويورك، الولايات المتحدة", es: "Nueva York, EE.UU.", pt: "Nova York, EUA", fr: "New York, États-Unis", it: "New York, USA", de: "New York, USA" },

  // Testimonial 5
  "testimonials.t5.quote": { en: "Professional, responsive, and delivers exactly what he promises. Our law firm now dominates local search in our area.", ar: "محترف ومتجاوب ويقدم بالضبط ما يعد به. مكتب المحاماة الخاص بنا يسيطر الآن على البحث المحلي في منطقتنا.", es: "Profesional, receptivo y cumple exactamente lo que promete. Nuestro bufete de abogados ahora domina la búsqueda local en nuestra área.", pt: "Profissional, responsivo e entrega exatamente o que promete. Nosso escritório de advocacia agora domina a busca local em nossa área.", fr: "Professionnel, réactif et livre exactement ce qu'il promet. Notre cabinet d'avocats domine maintenant la recherche locale dans notre région.", it: "Professionale, reattivo e consegna esattamente ciò che promette. Il nostro studio legale ora domina la ricerca locale nella nostra zona.", de: "Professionell, reaktionsschnell und liefert genau das, was er verspricht. Unsere Anwaltskanzlei dominiert jetzt die lokale Suche in unserer Region." },
  "testimonials.t5.author": { en: "Jennifer K.", ar: "جينيفر ك.", es: "Jennifer K.", pt: "Jennifer K.", fr: "Jennifer K.", it: "Jennifer K.", de: "Jennifer K." },
  "testimonials.t5.role": { en: "Law Firm Partner", ar: "شريك في مكتب محاماة", es: "Socio de Bufete de Abogados", pt: "Sócio de Escritório de Advocacia", fr: "Associé de cabinet d'avocats", it: "Partner di studio legale", de: "Anwaltskanzlei-Partner" },
  "testimonials.t5.location": { en: "London, UK", ar: "لندن، المملكة المتحدة", es: "Londres, Reino Unido", pt: "Londres, Reino Unido", fr: "Londres, Royaume-Uni", it: "Londra, Regno Unito", de: "London, UK" },

  // Testimonial 6
  "testimonials.t6.quote": { en: "Hadi's SEO strategy helped us expand to 3 new locations. Each one ranks in the top positions within months.", ar: "ساعدتنا استراتيجية SEO الخاصة بهادي على التوسع إلى 3 مواقع جديدة. كل موقع يحتل المراتب الأولى خلال أشهر.", es: "La estrategia SEO de Hadi nos ayudó a expandirnos a 3 nuevas ubicaciones. Cada una se posiciona en los primeros puestos en meses.", pt: "A estratégia de SEO do Hadi nos ajudou a expandir para 3 novas localizações. Cada uma classifica nas primeiras posições em meses.", fr: "La stratégie SEO de Hadi nous a aidés à nous développer sur 3 nouveaux sites. Chacun se classe dans les premières positions en quelques mois.", it: "La strategia SEO di Hadi ci ha aiutato a espanderci in 3 nuove sedi. Ognuna si classifica nelle prime posizioni entro mesi.", de: "Hadis SEO-Strategie half uns, auf 3 neue Standorte zu expandieren. Jeder erreichte innerhalb von Monaten Top-Positionen." },
  "testimonials.t6.author": { en: "David L.", ar: "ديفيد ل.", es: "David L.", pt: "David L.", fr: "David L.", it: "David L.", de: "David L." },
  "testimonials.t6.role": { en: "HVAC Business Owner", ar: "صاحب شركة تكييف", es: "Propietario de Negocio HVAC", pt: "Proprietário de Empresa HVAC", fr: "Propriétaire d'entreprise HVAC", it: "Proprietario di azienda HVAC", de: "HVAC-Unternehmer" },
  "testimonials.t6.location": { en: "Sydney, Australia", ar: "سيدني، أستراليا", es: "Sídney, Australia", pt: "Sydney, Austrália", fr: "Sydney, Australie", it: "Sydney, Australia", de: "Sydney, Australien" },

  // Testimonial 7
  "testimonials.t7.quote": { en: "The best investment we made for our dental practice. Patient inquiries have tripled since working with Hadi.", ar: "أفضل استثمار قمنا به لعيادتنا للأسنان. تضاعفت استفسارات المرضى ثلاث مرات منذ العمل مع هادي.", es: "La mejor inversión que hicimos para nuestra clínica dental. Las consultas de pacientes se han triplicado desde que trabajamos con Hadi.", pt: "O melhor investimento que fizemos para nossa clínica odontológica. As consultas de pacientes triplicaram desde que trabalhamos com Hadi.", fr: "Le meilleur investissement que nous avons fait pour notre cabinet dentaire. Les demandes de patients ont triplé depuis que nous travaillons avec Hadi.", it: "Il miglior investimento che abbiamo fatto per il nostro studio dentistico. Le richieste dei pazienti sono triplicate da quando lavoriamo con Hadi.", de: "Die beste Investition für unsere Zahnarztpraxis. Patientenanfragen haben sich verdreifacht, seit wir mit Hadi arbeiten." },
  "testimonials.t7.author": { en: "Dr. Fatima A.", ar: "د. فاطمة أ.", es: "Dra. Fatima A.", pt: "Dra. Fatima A.", fr: "Dr. Fatima A.", it: "Dr.ssa Fatima A.", de: "Dr. Fatima A." },
  "testimonials.t7.role": { en: "Dental Clinic Owner", ar: "صاحب عيادة أسنان", es: "Propietario de Clínica Dental", pt: "Proprietário de Clínica Odontológica", fr: "Propriétaire de clinique dentaire", it: "Proprietario di clinica dentale", de: "Zahnarztpraxis-Inhaber" },
  "testimonials.t7.location": { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات", es: "Abu Dhabi, EAU", pt: "Abu Dhabi, EAU", fr: "Abu Dhabi, EAU", it: "Abu Dhabi, EAU", de: "Abu Dhabi, VAE" },

  // Testimonial 8
  "testimonials.t8.quote": { en: "Hadi doesn't just do SEO, he educates you on the process. His transparency and expertise are unmatched.", ar: "هادي لا يقوم بـ SEO فقط، بل يعلمك العملية. شفافيته وخبرته لا مثيل لها.", es: "Hadi no solo hace SEO, te educa sobre el proceso. Su transparencia y experiencia son inigualables.", pt: "Hadi não apenas faz SEO, ele te educa sobre o processo. Sua transparência e expertise são incomparáveis.", fr: "Hadi ne fait pas que du SEO, il vous éduque sur le processus. Sa transparence et son expertise sont inégalées.", it: "Hadi non fa solo SEO, ti educa sul processo. La sua trasparenza e competenza sono impareggiabili.", de: "Hadi macht nicht nur SEO, er bildet Sie über den Prozess aus. Seine Transparenz und Expertise sind unübertroffen." },
  "testimonials.t8.author": { en: "Robert C.", ar: "روبرت س.", es: "Robert C.", pt: "Robert C.", fr: "Robert C.", it: "Robert C.", de: "Robert C." },
  "testimonials.t8.role": { en: "Auto Repair Shop Owner", ar: "صاحب ورشة إصلاح سيارات", es: "Propietario de Taller de Autos", pt: "Proprietário de Oficina de Carros", fr: "Propriétaire d'atelier automobile", it: "Proprietario di officina auto", de: "Autowerkstatt-Inhaber" },
  "testimonials.t8.location": { en: "Florida, USA", ar: "فلوريدا، الولايات المتحدة", es: "Florida, EE.UU.", pt: "Flórida, EUA", fr: "Floride, États-Unis", it: "Florida, USA", de: "Florida, USA" },

  // Testimonial 9
  "testimonials.t9.quote": { en: "We went from 0 to 50+ monthly calls from Google Maps. The ROI on Hadi's services is incredible.", ar: "انتقلنا من 0 إلى أكثر من 50 مكالمة شهرية من خرائط Google. العائد على خدمات هادي مذهل.", es: "Pasamos de 0 a más de 50 llamadas mensuales desde Google Maps. El ROI de los servicios de Hadi es increíble.", pt: "Passamos de 0 para mais de 50 chamadas mensais do Google Maps. O ROI dos serviços do Hadi é incrível.", fr: "Nous sommes passés de 0 à plus de 50 appels mensuels depuis Google Maps. Le ROI des services de Hadi est incroyable.", it: "Siamo passati da 0 a oltre 50 chiamate mensili da Google Maps. Il ROI dei servizi di Hadi è incredibile.", de: "Wir gingen von 0 auf über 50 monatliche Anrufe über Google Maps. Der ROI von Hadis Diensten ist unglaublich." },
  "testimonials.t9.author": { en: "Maria G.", ar: "ماريا ج.", es: "María G.", pt: "Maria G.", fr: "Maria G.", it: "Maria G.", de: "Maria G." },
  "testimonials.t9.role": { en: "Beauty Salon Owner", ar: "صاحبة صالون تجميل", es: "Propietaria de Salón de Belleza", pt: "Proprietária de Salão de Beleza", fr: "Propriétaire de salon de beauté", it: "Proprietaria di salone di bellezza", de: "Schönheitssalon-Inhaberin" },
  "testimonials.t9.location": { en: "Madrid, Spain", ar: "مدريد، إسبانيا", es: "Madrid, España", pt: "Madrid, Espanha", fr: "Madrid, Espagne", it: "Madrid, Spagna", de: "Madrid, Spanien" },

  // Testimonial 10
  "testimonials.t10.quote": { en: "Our real estate agency now appears for every major local search term. Hadi's strategy was game-changing.", ar: "وكالتنا العقارية تظهر الآن لكل مصطلح بحث محلي رئيسي. استراتيجية هادي غيرت قواعد اللعبة.", es: "Nuestra agencia inmobiliaria ahora aparece para cada término de búsqueda local importante. La estrategia de Hadi fue revolucionaria.", pt: "Nossa agência imobiliária agora aparece para cada termo de busca local importante. A estratégia do Hadi foi revolucionária.", fr: "Notre agence immobilière apparaît maintenant pour chaque terme de recherche local majeur. La stratégie de Hadi a tout changé.", it: "La nostra agenzia immobiliare ora appare per ogni termine di ricerca locale importante. La strategia di Hadi è stata rivoluzionaria.", de: "Unsere Immobilienagentur erscheint jetzt für jeden wichtigen lokalen Suchbegriff. Hadis Strategie war bahnbrechend." },
  "testimonials.t10.author": { en: "Michael B.", ar: "مايكل ب.", es: "Michael B.", pt: "Michael B.", fr: "Michael B.", it: "Michael B.", de: "Michael B." },
  "testimonials.t10.role": { en: "Real Estate Broker", ar: "وسيط عقاري", es: "Corredor de Bienes Raíces", pt: "Corretor Imobiliário", fr: "Courtier immobilier", it: "Agente immobiliare", de: "Immobilienmakler" },
  "testimonials.t10.location": { en: "Toronto, Canada", ar: "تورنتو، كندا", es: "Toronto, Canadá", pt: "Toronto, Canadá", fr: "Toronto, Canada", it: "Toronto, Canada", de: "Toronto, Kanada" },

  // Testimonial 11
  "testimonials.t11.quote": { en: "The citation building and review management alone paid for the entire SEO package. Exceptional work!", ar: "بناء الاستشهادات وإدارة المراجعات وحدها دفعت ثمن باقة SEO بالكامل. عمل استثنائي!", es: "Solo la creación de citaciones y la gestión de reseñas pagaron todo el paquete SEO. ¡Trabajo excepcional!", pt: "Apenas a construção de citações e gerenciamento de avaliações pagou todo o pacote SEO. Trabalho excepcional!", fr: "La création de citations et la gestion des avis seuls ont payé tout le forfait SEO. Travail exceptionnel!", it: "Solo la costruzione di citazioni e la gestione delle recensioni ha pagato l'intero pacchetto SEO. Lavoro eccezionale!", de: "Allein der Zitationsaufbau und das Bewertungsmanagement haben das gesamte SEO-Paket bezahlt. Außergewöhnliche Arbeit!" },
  "testimonials.t11.author": { en: "Lisa W.", ar: "ليزا و.", es: "Lisa W.", pt: "Lisa W.", fr: "Lisa W.", it: "Lisa W.", de: "Lisa W." },
  "testimonials.t11.role": { en: "Pet Grooming Business", ar: "شركة العناية بالحيوانات الأليفة", es: "Negocio de Peluquería de Mascotas", pt: "Negócio de Pet Grooming", fr: "Entreprise de toilettage pour animaux", it: "Attività di toelettatura animali", de: "Tierpflege-Geschäft" },
  "testimonials.t11.location": { en: "Manchester, UK", ar: "مانشستر، المملكة المتحدة", es: "Manchester, Reino Unido", pt: "Manchester, Reino Unido", fr: "Manchester, Royaume-Uni", it: "Manchester, Regno Unito", de: "Manchester, UK" },

  // Testimonial 12
  "testimonials.t12.quote": { en: "Hadi helped us recover from a Google penalty and now we rank higher than ever. True expert in local SEO.", ar: "ساعدنا هادي على التعافي من عقوبة Google والآن نحتل مرتبة أعلى من أي وقت مضى. خبير حقيقي في SEO المحلي.", es: "Hadi nos ayudó a recuperarnos de una penalización de Google y ahora clasificamos más alto que nunca. Verdadero experto en SEO local.", pt: "Hadi nos ajudou a nos recuperar de uma penalidade do Google e agora classificamos mais alto do que nunca. Verdadeiro especialista em SEO local.", fr: "Hadi nous a aidés à nous remettre d'une pénalité Google et maintenant nous classons mieux que jamais. Vrai expert en SEO local.", it: "Hadi ci ha aiutato a riprenderci da una penalità di Google e ora ci classifichiamo più in alto che mai. Vero esperto di SEO locale.", de: "Hadi hat uns geholfen, uns von einer Google-Strafe zu erholen, und jetzt ranken wir höher als je zuvor. Echter Experte für lokales SEO." },
  "testimonials.t12.author": { en: "Hassan M.", ar: "حسن م.", es: "Hassan M.", pt: "Hassan M.", fr: "Hassan M.", it: "Hassan M.", de: "Hassan M." },
  "testimonials.t12.role": { en: "Construction Company Owner", ar: "صاحب شركة بناء", es: "Propietario de Empresa de Construcción", pt: "Proprietário de Empresa de Construção", fr: "Propriétaire d'entreprise de construction", it: "Proprietario di impresa edile", de: "Bauunternehmer" },
  "testimonials.t12.location": { en: "Riyadh, KSA", ar: "الرياض، السعودية", es: "Riad, Arabia Saudita", pt: "Riad, Arábia Saudita", fr: "Riyad, Arabie Saoudite", it: "Riyadh, Arabia Saudita", de: "Riad, Saudi-Arabien" },

  // Testimonial 13
  "testimonials.t13.quote": { en: "Our plumbing business now gets 80% of leads from organic search. Hadi's work has been transformative.", ar: "شركة السباكة الخاصة بنا تحصل الآن على 80% من العملاء المحتملين من البحث العضوي. عمل هادي كان تحويلياً.", es: "Nuestro negocio de plomería ahora obtiene el 80% de leads de búsqueda orgánica. El trabajo de Hadi ha sido transformador.", pt: "Nosso negócio de encanamento agora recebe 80% dos leads de busca orgânica. O trabalho do Hadi foi transformador.", fr: "Notre entreprise de plomberie obtient maintenant 80% des leads de la recherche organique. Le travail de Hadi a été transformateur.", it: "La nostra attività di idraulica ora ottiene l'80% dei lead dalla ricerca organica. Il lavoro di Hadi è stato trasformativo.", de: "Unser Klempnergeschäft erhält jetzt 80% der Leads aus der organischen Suche. Hadis Arbeit war transformativ." },
  "testimonials.t13.author": { en: "Steve J.", ar: "ستيف ج.", es: "Steve J.", pt: "Steve J.", fr: "Steve J.", it: "Steve J.", de: "Steve J." },
  "testimonials.t13.role": { en: "Plumbing Company Owner", ar: "صاحب شركة سباكة", es: "Propietario de Empresa de Plomería", pt: "Proprietário de Empresa de Encanamento", fr: "Propriétaire d'entreprise de plomberie", it: "Proprietario di azienda idraulica", de: "Klempnerunternehmer" },
  "testimonials.t13.location": { en: "Chicago, USA", ar: "شيكاغو، الولايات المتحدة", es: "Chicago, EE.UU.", pt: "Chicago, EUA", fr: "Chicago, États-Unis", it: "Chicago, USA", de: "Chicago, USA" },

  // Testimonial 14
  "testimonials.t14.quote": { en: "Within 3 months, our phone repair shop became the go-to place in Duncanville. Over 1,300 reviews and counting!", ar: "خلال 3 أشهر، أصبح متجر إصلاح الهواتف الخاص بنا الوجهة المفضلة في دانكانفيل. أكثر من 1,300 مراجعة والعدد في ازدياد!", es: "En 3 meses, nuestra tienda de reparación de teléfonos se convirtió en el lugar preferido en Duncanville. ¡Más de 1,300 reseñas y aumentando!", pt: "Em 3 meses, nossa loja de reparo de celulares se tornou o lugar preferido em Duncanville. Mais de 1.300 avaliações e contando!", fr: "En 3 mois, notre boutique de réparation de téléphones est devenue la référence à Duncanville. Plus de 1 300 avis et ça continue!", it: "In 3 mesi, il nostro negozio di riparazione telefoni è diventato il punto di riferimento a Duncanville. Oltre 1.300 recensioni e in aumento!", de: "Innerhalb von 3 Monaten wurde unser Handy-Reparaturladen zur ersten Anlaufstelle in Duncanville. Über 1.300 Bewertungen und es werden mehr!" },
  "testimonials.t14.author": { en: "Moe K.", ar: "مو ك.", es: "Moe K.", pt: "Moe K.", fr: "Moe K.", it: "Moe K.", de: "Moe K." },
  "testimonials.t14.role": { en: "Phone Repair Shop Owner", ar: "صاحب متجر إصلاح الهواتف", es: "Propietario de Tienda de Reparación de Teléfonos", pt: "Proprietário de Loja de Reparo de Celulares", fr: "Propriétaire de boutique de réparation de téléphones", it: "Proprietario di negozio riparazione telefoni", de: "Handy-Reparaturladen-Inhaber" },
  "testimonials.t14.location": { en: "Texas, USA", ar: "تكساس، الولايات المتحدة", es: "Texas, EE.UU.", pt: "Texas, EUA", fr: "Texas, États-Unis", it: "Texas, USA", de: "Texas, USA" },

  // Testimonial 15
  "testimonials.t15.quote": { en: "Hadi's attention to detail is impressive. Every aspect of our GBP was optimized for maximum visibility.", ar: "اهتمام هادي بالتفاصيل مثير للإعجاب. كل جانب من جوانب GBP الخاص بنا تم تحسينه لأقصى قدر من الظهور.", es: "La atención al detalle de Hadi es impresionante. Cada aspecto de nuestro GBP fue optimizado para máxima visibilidad.", pt: "A atenção aos detalhes do Hadi é impressionante. Cada aspecto do nosso GBP foi otimizado para máxima visibilidade.", fr: "L'attention aux détails de Hadi est impressionnante. Chaque aspect de notre GBP a été optimisé pour une visibilité maximale.", it: "L'attenzione ai dettagli di Hadi è impressionante. Ogni aspetto del nostro GBP è stato ottimizzato per la massima visibilità.", de: "Hadis Liebe zum Detail ist beeindruckend. Jeder Aspekt unseres GBP wurde für maximale Sichtbarkeit optimiert." },
  "testimonials.t15.author": { en: "Patricia S.", ar: "باتريشيا س.", es: "Patricia S.", pt: "Patricia S.", fr: "Patricia S.", it: "Patricia S.", de: "Patricia S." },
  "testimonials.t15.role": { en: "Medical Spa Owner", ar: "صاحبة سبا طبي", es: "Propietaria de Spa Médico", pt: "Proprietária de Spa Médico", fr: "Propriétaire de spa médical", it: "Proprietaria di spa medico", de: "Medical Spa Inhaberin" },
  "testimonials.t15.location": { en: "Miami, USA", ar: "ميامي، الولايات المتحدة", es: "Miami, EE.UU.", pt: "Miami, EUA", fr: "Miami, États-Unis", it: "Miami, USA", de: "Miami, USA" },

  // Testimonial 16
  "testimonials.t16.quote": { en: "Our locksmith business now ranks #1 for emergency searches. Response time and professionalism are top-notch.", ar: "شركة الأقفال الخاصة بنا تحتل الآن المرتبة الأولى في عمليات البحث الطارئة. وقت الاستجابة والاحترافية من الدرجة الأولى.", es: "Nuestro negocio de cerrajería ahora clasifica #1 para búsquedas de emergencia. El tiempo de respuesta y profesionalismo son de primera.", pt: "Nosso negócio de chaveiro agora classifica em #1 para buscas de emergência. Tempo de resposta e profissionalismo são de primeira.", fr: "Notre entreprise de serrurerie est maintenant classée #1 pour les recherches d'urgence. Temps de réponse et professionnalisme sont au top.", it: "La nostra attività di fabbro ora è al #1 per le ricerche di emergenza. Tempi di risposta e professionalità sono al top.", de: "Unser Schlüsseldienst ist jetzt #1 für Notfallsuchen. Reaktionszeit und Professionalität sind erstklassig." },
  "testimonials.t16.author": { en: "Kevin D.", ar: "كيفن د.", es: "Kevin D.", pt: "Kevin D.", fr: "Kevin D.", it: "Kevin D.", de: "Kevin D." },
  "testimonials.t16.role": { en: "Locksmith Business Owner", ar: "صاحب شركة أقفال", es: "Propietario de Negocio de Cerrajería", pt: "Proprietário de Negócio de Chaveiro", fr: "Propriétaire d'entreprise de serrurerie", it: "Proprietario di attività di fabbro", de: "Schlüsseldienst-Inhaber" },
  "testimonials.t16.location": { en: "Seattle, USA", ar: "سياتل، الولايات المتحدة", es: "Seattle, EE.UU.", pt: "Seattle, EUA", fr: "Seattle, États-Unis", it: "Seattle, USA", de: "Seattle, USA" },

  // Testimonial 17
  "testimonials.t17.quote": { en: "The local SEO strategy Hadi implemented helped us beat competitors who have been in business for decades.", ar: "استراتيجية SEO المحلية التي نفذها هادي ساعدتنا على التفوق على منافسين يعملون منذ عقود.", es: "La estrategia de SEO local que Hadi implementó nos ayudó a superar a competidores que llevan décadas en el negocio.", pt: "A estratégia de SEO local que Hadi implementou nos ajudou a vencer concorrentes que estão no negócio há décadas.", fr: "La stratégie SEO locale mise en œuvre par Hadi nous a aidés à battre des concurrents en activité depuis des décennies.", it: "La strategia SEO locale implementata da Hadi ci ha aiutato a battere concorrenti in attività da decenni.", de: "Die lokale SEO-Strategie, die Hadi implementiert hat, half uns, Wettbewerber zu schlagen, die seit Jahrzehnten im Geschäft sind." },
  "testimonials.t17.author": { en: "Amanda R.", ar: "أماندا ر.", es: "Amanda R.", pt: "Amanda R.", fr: "Amanda R.", it: "Amanda R.", de: "Amanda R." },
  "testimonials.t17.role": { en: "Fitness Studio Owner", ar: "صاحبة استوديو لياقة", es: "Propietaria de Estudio de Fitness", pt: "Proprietária de Estúdio de Fitness", fr: "Propriétaire de studio de fitness", it: "Proprietaria di studio fitness", de: "Fitness-Studio Inhaberin" },
  "testimonials.t17.location": { en: "Denver, USA", ar: "دنفر، الولايات المتحدة", es: "Denver, EE.UU.", pt: "Denver, EUA", fr: "Denver, États-Unis", it: "Denver, USA", de: "Denver, USA" },

  // Testimonial 18
  "testimonials.t18.quote": { en: "Excellent communication throughout the project. Hadi explains everything clearly and delivers results.", ar: "تواصل ممتاز طوال المشروع. هادي يشرح كل شيء بوضوح ويحقق النتائج.", es: "Excelente comunicación durante todo el proyecto. Hadi explica todo claramente y entrega resultados.", pt: "Excelente comunicação durante todo o projeto. Hadi explica tudo claramente e entrega resultados.", fr: "Excellente communication tout au long du projet. Hadi explique tout clairement et livre des résultats.", it: "Eccellente comunicazione durante tutto il progetto. Hadi spiega tutto chiaramente e consegna risultati.", de: "Ausgezeichnete Kommunikation während des gesamten Projekts. Hadi erklärt alles klar und liefert Ergebnisse." },
  "testimonials.t18.author": { en: "Thomas H.", ar: "توماس هـ.", es: "Thomas H.", pt: "Thomas H.", fr: "Thomas H.", it: "Thomas H.", de: "Thomas H." },
  "testimonials.t18.role": { en: "Insurance Agency Owner", ar: "صاحب وكالة تأمين", es: "Propietario de Agencia de Seguros", pt: "Proprietário de Agência de Seguros", fr: "Propriétaire d'agence d'assurance", it: "Proprietario di agenzia assicurativa", de: "Versicherungsagentur-Inhaber" },
  "testimonials.t18.location": { en: "Berlin, Germany", ar: "برلين، ألمانيا", es: "Berlín, Alemania", pt: "Berlim, Alemanha", fr: "Berlin, Allemagne", it: "Berlino, Germania", de: "Berlin, Deutschland" },

  // Testimonial 19
  "testimonials.t19.quote": { en: "Our clinic's online appointment bookings increased by 400%. Best SEO investment we've ever made.", ar: "زادت حجوزات المواعيد عبر الإنترنت في عيادتنا بنسبة 400%. أفضل استثمار SEO قمنا به على الإطلاق.", es: "Las reservas de citas en línea de nuestra clínica aumentaron un 400%. La mejor inversión en SEO que hemos hecho.", pt: "As reservas de consultas online da nossa clínica aumentaram 400%. O melhor investimento em SEO que já fizemos.", fr: "Les réservations de rendez-vous en ligne de notre clinique ont augmenté de 400%. Le meilleur investissement SEO que nous ayons jamais fait.", it: "Le prenotazioni online della nostra clinica sono aumentate del 400%. Il miglior investimento SEO che abbiamo mai fatto.", de: "Die Online-Terminbuchungen unserer Klinik sind um 400% gestiegen. Die beste SEO-Investition, die wir je gemacht haben." },
  "testimonials.t19.author": { en: "Dr. Chen L.", ar: "د. تشين ل.", es: "Dr. Chen L.", pt: "Dr. Chen L.", fr: "Dr. Chen L.", it: "Dr. Chen L.", de: "Dr. Chen L." },
  "testimonials.t19.role": { en: "Chiropractic Clinic Owner", ar: "صاحب عيادة العلاج بتقويم العمود الفقري", es: "Propietario de Clínica Quiropráctica", pt: "Proprietário de Clínica de Quiropraxia", fr: "Propriétaire de clinique chiropratique", it: "Proprietario di clinica chiropratica", de: "Chiropraktik-Klinik Inhaber" },
  "testimonials.t19.location": { en: "Vancouver, Canada", ar: "فانكوفر، كندا", es: "Vancouver, Canadá", pt: "Vancouver, Canadá", fr: "Vancouver, Canada", it: "Vancouver, Canada", de: "Vancouver, Kanada" },

  // Testimonial 20
  "testimonials.t20.quote": { en: "Hadi's strategies are future-proof. He prepared us for AI search engines while dominating Google today.", ar: "استراتيجيات هادي مقاومة للمستقبل. أعدنا لمحركات البحث بالذكاء الاصطناعي مع السيطرة على Google اليوم.", es: "Las estrategias de Hadi están preparadas para el futuro. Nos preparó para los motores de búsqueda de IA mientras dominamos Google hoy.", pt: "As estratégias do Hadi são à prova de futuro. Ele nos preparou para mecanismos de busca de IA enquanto dominamos o Google hoje.", fr: "Les stratégies de Hadi sont pérennes. Il nous a préparés aux moteurs de recherche IA tout en dominant Google aujourd'hui.", it: "Le strategie di Hadi sono a prova di futuro. Ci ha preparato per i motori di ricerca IA dominando Google oggi.", de: "Hadis Strategien sind zukunftssicher. Er hat uns auf KI-Suchmaschinen vorbereitet, während wir heute Google dominieren." },
  "testimonials.t20.author": { en: "Richard M.", ar: "ريتشارد م.", es: "Richard M.", pt: "Richard M.", fr: "Richard M.", it: "Richard M.", de: "Richard M." },
  "testimonials.t20.role": { en: "Tech Startup Founder", ar: "مؤسس شركة تقنية ناشئة", es: "Fundador de Startup Tecnológica", pt: "Fundador de Startup de Tecnologia", fr: "Fondateur de startup tech", it: "Fondatore di startup tech", de: "Tech Startup Gründer" },
  "testimonials.t20.location": { en: "San Francisco, USA", ar: "سان فرانسيسكو، الولايات المتحدة", es: "San Francisco, EE.UU.", pt: "São Francisco, EUA", fr: "San Francisco, États-Unis", it: "San Francisco, USA", de: "San Francisco, USA" },

  // Testimonial 21
  "testimonials.t21.quote": { en: "From zero presence to dominating our local market. Hadi's SEO expertise is second to none.", ar: "من عدم التواجد إلى السيطرة على سوقنا المحلي. خبرة هادي في SEO لا مثيل لها.", es: "De cero presencia a dominar nuestro mercado local. La experiencia SEO de Hadi es insuperable.", pt: "De presença zero a dominar nosso mercado local. A expertise SEO do Hadi é incomparável.", fr: "De zéro présence à dominer notre marché local. L'expertise SEO de Hadi est inégalée.", it: "Da zero presenza a dominare il nostro mercato locale. L'expertise SEO di Hadi è impareggiabile.", de: "Von null Präsenz zur Dominanz unseres lokalen Marktes. Hadis SEO-Expertise ist unübertroffen." },
  "testimonials.t21.author": { en: "Emily T.", ar: "إيميلي ت.", es: "Emily T.", pt: "Emily T.", fr: "Emily T.", it: "Emily T.", de: "Emily T." },
  "testimonials.t21.role": { en: "Boutique Hotel Owner", ar: "صاحبة فندق بوتيك", es: "Propietaria de Hotel Boutique", pt: "Proprietária de Hotel Boutique", fr: "Propriétaire d'hôtel boutique", it: "Proprietaria di hotel boutique", de: "Boutique Hotel Inhaberin" },
  "testimonials.t21.location": { en: "Paris, France", ar: "باريس، فرنسا", es: "París, Francia", pt: "Paris, França", fr: "Paris, France", it: "Parigi, Francia", de: "Paris, Frankreich" },

  // Testimonial 22
  "testimonials.t22.quote": { en: "Our moving company gets 90% of leads from Google now. Hadi's citation building strategy was key.", ar: "شركة النقل الخاصة بنا تحصل الآن على 90% من العملاء المحتملين من Google. استراتيجية بناء الاستشهادات لهادي كانت المفتاح.", es: "Nuestra empresa de mudanzas ahora obtiene el 90% de leads de Google. La estrategia de construcción de citaciones de Hadi fue clave.", pt: "Nossa empresa de mudanças agora recebe 90% dos leads do Google. A estratégia de construção de citações do Hadi foi fundamental.", fr: "Notre entreprise de déménagement obtient maintenant 90% des leads de Google. La stratégie de construction de citations de Hadi a été la clé.", it: "La nostra azienda di traslochi ora ottiene il 90% dei lead da Google. La strategia di costruzione citazioni di Hadi è stata fondamentale.", de: "Unser Umzugsunternehmen erhält jetzt 90% der Leads von Google. Hadis Zitationsaufbau-Strategie war entscheidend." },
  "testimonials.t22.author": { en: "Carlos V.", ar: "كارلوس ف.", es: "Carlos V.", pt: "Carlos V.", fr: "Carlos V.", it: "Carlos V.", de: "Carlos V." },
  "testimonials.t22.role": { en: "Moving Company Owner", ar: "صاحب شركة نقل", es: "Propietario de Empresa de Mudanzas", pt: "Proprietário de Empresa de Mudanças", fr: "Propriétaire d'entreprise de déménagement", it: "Proprietario di azienda traslochi", de: "Umzugsunternehmer" },
  "testimonials.t22.location": { en: "Phoenix, USA", ar: "فينيكس، الولايات المتحدة", es: "Phoenix, EE.UU.", pt: "Phoenix, EUA", fr: "Phoenix, États-Unis", it: "Phoenix, USA", de: "Phoenix, USA" },

  // Testimonial 23
  "testimonials.t23.quote": { en: "The review generation strategy alone was worth the investment. We went from 20 to 500+ reviews in months.", ar: "استراتيجية توليد المراجعات وحدها كانت تستحق الاستثمار. انتقلنا من 20 إلى أكثر من 500 مراجعة في أشهر.", es: "Solo la estrategia de generación de reseñas valió la inversión. Pasamos de 20 a más de 500 reseñas en meses.", pt: "Só a estratégia de geração de avaliações valeu o investimento. Passamos de 20 para mais de 500 avaliações em meses.", fr: "La stratégie de génération d'avis seule valait l'investissement. Nous sommes passés de 20 à plus de 500 avis en quelques mois.", it: "Solo la strategia di generazione recensioni valeva l'investimento. Siamo passati da 20 a oltre 500 recensioni in mesi.", de: "Allein die Strategie zur Bewertungsgenerierung war die Investition wert. Wir gingen von 20 auf über 500 Bewertungen in Monaten." },
  "testimonials.t23.author": { en: "Jessica N.", ar: "جيسيكا ن.", es: "Jessica N.", pt: "Jessica N.", fr: "Jessica N.", it: "Jessica N.", de: "Jessica N." },
  "testimonials.t23.role": { en: "Day Spa Owner", ar: "صاحبة سبا نهاري", es: "Propietaria de Day Spa", pt: "Proprietária de Day Spa", fr: "Propriétaire de day spa", it: "Proprietaria di day spa", de: "Day Spa Inhaberin" },
  "testimonials.t23.location": { en: "Atlanta, USA", ar: "أتلانتا، الولايات المتحدة", es: "Atlanta, EE.UU.", pt: "Atlanta, EUA", fr: "Atlanta, États-Unis", it: "Atlanta, USA", de: "Atlanta, USA" },

  // ============ ABOUT PAGE ============
  "about.description1": { en: "I am a results-driven Local SEO specialist with hands-on experience helping service businesses dominate Google Search and Google Business Profile rankings. I focus on practical SEO strategies that generate real calls, leads, and revenue—not just traffic.", ar: "أنا متخصص في SEO المحلي موجه بالنتائج مع خبرة عملية في مساعدة الشركات الخدمية على السيطرة على تصنيفات Google Search وGoogle Business Profile. أركز على استراتيجيات SEO العملية التي تولد مكالمات وعملاء محتملين وإيرادات حقيقية - وليس فقط حركة مرور.", es: "Soy un especialista en SEO Local orientado a resultados con experiencia práctica ayudando a empresas de servicios a dominar los rankings de Google Search y Google Business Profile. Me enfoco en estrategias SEO prácticas que generan llamadas, leads e ingresos reales, no solo tráfico.", pt: "Sou um especialista em SEO Local orientado a resultados com experiência prática ajudando empresas de serviços a dominar os rankings do Google Search e Google Business Profile. Foco em estratégias de SEO práticas que geram chamadas, leads e receita reais — não apenas tráfego.", fr: "Je suis un spécialiste SEO Local orienté résultats avec une expérience pratique pour aider les entreprises de services à dominer les classements Google Search et Google Business Profile. Je me concentre sur des stratégies SEO pratiques qui génèrent de vrais appels, leads et revenus — pas seulement du trafic.", it: "Sono uno specialista SEO Locale orientato ai risultati con esperienza pratica nell'aiutare le aziende di servizi a dominare i ranking di Google Search e Google Business Profile. Mi concentro su strategie SEO pratiche che generano chiamate, lead e ricavi reali — non solo traffico.", de: "Ich bin ein ergebnisorientierter Local SEO Spezialist mit praktischer Erfahrung, der Dienstleistungsunternehmen hilft, Google Search und Google Business Profile Rankings zu dominieren. Ich konzentriere mich auf praktische SEO-Strategien, die echte Anrufe, Leads und Umsatz generieren — nicht nur Traffic." },
  "about.description2": { en: "With 7+ years of professional SEO experience and 100+ clients served worldwide, I've developed proven methodologies that consistently deliver measurable results for local businesses.", ar: "مع أكثر من 7 سنوات من الخبرة المهنية في SEO وأكثر من 100 عميل تم خدمتهم حول العالم، طورت منهجيات مثبتة تقدم باستمرار نتائج قابلة للقياس للشركات المحلية.", es: "Con más de 7 años de experiencia profesional en SEO y más de 100 clientes atendidos en todo el mundo, he desarrollado metodologías probadas que ofrecen consistentemente resultados medibles para negocios locales.", pt: "Com mais de 7 anos de experiência profissional em SEO e mais de 100 clientes atendidos em todo o mundo, desenvolvi metodologias comprovadas que entregam consistentemente resultados mensuráveis para negócios locais.", fr: "Avec plus de 7 ans d'expérience professionnelle en SEO et plus de 100 clients servis dans le monde, j'ai développé des méthodologies éprouvées qui offrent systématiquement des résultats mesurables pour les entreprises locales.", it: "Con oltre 7 anni di esperienza professionale SEO e oltre 100 clienti serviti in tutto il mondo, ho sviluppato metodologie comprovate che offrono costantemente risultati misurabili per le attività locali.", de: "Mit über 7 Jahren professioneller SEO-Erfahrung und über 100 Kunden weltweit habe ich bewährte Methoden entwickelt, die konsistent messbare Ergebnisse für lokale Unternehmen liefern." },
  "about.viewCaseStudies": { en: "View Case Studies", ar: "عرض دراسات الحالة", es: "Ver Casos de Estudio", pt: "Ver Estudos de Caso", fr: "Voir les études de cas", it: "Vedi casi studio", de: "Fallstudien ansehen" },
  "about.exploreServices": { en: "Explore Services", ar: "استكشف الخدمات", es: "Explorar Servicios", pt: "Explorar Serviços", fr: "Explorer les services", it: "Esplora i servizi", de: "Dienstleistungen erkunden" },
  
  "about.certificationsTitle": { en: "Certifications & Training", ar: "الشهادات والتدريب", es: "Certificaciones y Capacitación", pt: "Certificações e Treinamento", fr: "Certifications et formations", it: "Certificazioni e formazione", de: "Zertifizierungen & Schulungen" },
  "about.coreExpertiseTitle": { en: "Core Expertise", ar: "الخبرة الأساسية", es: "Experiencia Principal", pt: "Expertise Principal", fr: "Expertise principale", it: "Competenza principale", de: "Kernkompetenz" },
  "about.coreExpertiseDesc": { en: "A comprehensive skill set covering all aspects of local SEO, digital marketing, and web development.", ar: "مجموعة مهارات شاملة تغطي جميع جوانب SEO المحلي والتسويق الرقمي وتطوير الويب.", es: "Un conjunto de habilidades completo que cubre todos los aspectos del SEO local, marketing digital y desarrollo web.", pt: "Um conjunto abrangente de habilidades cobrindo todos os aspectos de SEO local, marketing digital e desenvolvimento web.", fr: "Un ensemble complet de compétences couvrant tous les aspects du SEO local, du marketing digital et du développement web.", it: "Un set completo di competenze che copre tutti gli aspetti del SEO locale, marketing digitale e sviluppo web.", de: "Ein umfassendes Fähigkeitsset, das alle Aspekte von lokalem SEO, digitalem Marketing und Webentwicklung abdeckt." },
  "about.yearsExperience": { en: "Years Experience", ar: "سنوات الخبرة", es: "Años de Experiencia", pt: "Anos de Experiência", fr: "Années d'expérience", it: "Anni di esperienza", de: "Jahre Erfahrung" },
  "about.industries": { en: "Industries", ar: "الصناعات", es: "Industrias", pt: "Indústrias", fr: "Industries", it: "Settori", de: "Branchen" },
  "about.successRate": { en: "Success Rate", ar: "معدل النجاح", es: "Tasa de Éxito", pt: "Taxa de Sucesso", fr: "Taux de réussite", it: "Tasso di successo", de: "Erfolgsrate" },
  "about.cert.googleAnalytics": { en: "Google Analytics Certified", ar: "معتمد من Google Analytics", es: "Certificado en Google Analytics", pt: "Certificado em Google Analytics", fr: "Certifié Google Analytics", it: "Certificato Google Analytics", de: "Google Analytics Zertifiziert" },
  "about.cert.googleSearchConsole": { en: "Google Search Console Certified", ar: "معتمد من Google Search Console", es: "Certificado en Google Search Console", pt: "Certificado em Google Search Console", fr: "Certifié Google Search Console", it: "Certificato Google Search Console", de: "Google Search Console Zertifiziert" },
  "about.cert.semrush": { en: "SEMrush SEO Toolkit Certified", ar: "معتمد من SEMrush SEO Toolkit", es: "Certificado en SEMrush SEO Toolkit", pt: "Certificado em SEMrush SEO Toolkit", fr: "Certifié SEMrush SEO Toolkit", it: "Certificato SEMrush SEO Toolkit", de: "SEMrush SEO Toolkit Zertifiziert" },
  "about.cert.localSeo": { en: "Local SEO Training (Opti-Rank Technologies)", ar: "تدريب SEO المحلي (Opti-Rank Technologies)", es: "Capacitación en SEO Local (Opti-Rank Technologies)", pt: "Treinamento em SEO Local (Opti-Rank Technologies)", fr: "Formation SEO Local (Opti-Rank Technologies)", it: "Formazione SEO Locale (Opti-Rank Technologies)", de: "Lokales SEO Training (Opti-Rank Technologies)" },
  "about.cert.hubspot": { en: "HubSpot Content Marketing Certified", ar: "معتمد من HubSpot Content Marketing", es: "Certificado en HubSpot Content Marketing", pt: "Certificado em HubSpot Content Marketing", fr: "Certifié HubSpot Content Marketing", it: "Certificato HubSpot Content Marketing", de: "HubSpot Content Marketing Zertifiziert" },
  "about.cert.googleAds": { en: "Google Ads Certified", ar: "معتمد من Google Ads", es: "Certificado en Google Ads", pt: "Certificado em Google Ads", fr: "Certifié Google Ads", it: "Certificato Google Ads", de: "Google Ads Zertifiziert" },
  "about.skill.localSeoGbp": { en: "Local SEO & GBP", ar: "SEO المحلي وGBP", es: "SEO Local y GBP", pt: "SEO Local e GBP", fr: "SEO Local et GBP", it: "SEO Locale e GBP", de: "Lokales SEO & GBP" },
  "about.skill.localSeoGbpDesc": { en: "Google Business Profile optimization for maximum local visibility", ar: "تحسين Google Business Profile لأقصى قدر من الظهور المحلي", es: "Optimización de Google Business Profile para máxima visibilidad local", pt: "Otimização do Google Business Profile para máxima visibilidade local", fr: "Optimisation de Google Business Profile pour une visibilité locale maximale", it: "Ottimizzazione Google Business Profile per massima visibilità locale", de: "Google Business Profile Optimierung für maximale lokale Sichtbarkeit" },
  "about.skill.mapSeo": { en: "Map SEO Optimization", ar: "تحسين SEO الخرائط", es: "Optimización SEO de Mapas", pt: "Otimização SEO de Mapas", fr: "Optimisation SEO Maps", it: "Ottimizzazione SEO Mappe", de: "Karten-SEO-Optimierung" },
  "about.skill.mapSeoDesc": { en: "Dominate Google Maps, Apple Maps, and Bing Maps rankings", ar: "السيطرة على تصنيفات Google Maps وApple Maps وBing Maps", es: "Domina los rankings de Google Maps, Apple Maps y Bing Maps", pt: "Domine os rankings do Google Maps, Apple Maps e Bing Maps", fr: "Dominez les classements Google Maps, Apple Maps et Bing Maps", it: "Domina i ranking di Google Maps, Apple Maps e Bing Maps", de: "Dominieren Sie Google Maps, Apple Maps und Bing Maps Rankings" },
  "about.skill.technicalSeo": { en: "Technical SEO", ar: "SEO التقني", es: "SEO Técnico", pt: "SEO Técnico", fr: "SEO Technique", it: "SEO Tecnico", de: "Technisches SEO" },
  "about.skill.technicalSeoDesc": { en: "Site audits, speed optimization, and structured data implementation", ar: "تدقيقات الموقع وتحسين السرعة وتنفيذ البيانات المنظمة", es: "Auditorías del sitio, optimización de velocidad e implementación de datos estructurados", pt: "Auditorias do site, otimização de velocidade e implementação de dados estruturados", fr: "Audits de site, optimisation de la vitesse et implémentation des données structurées", it: "Audit del sito, ottimizzazione della velocità e implementazione dei dati strutturati", de: "Site-Audits, Geschwindigkeitsoptimierung und strukturierte Datenimplementierung" },
  "about.skill.citationBuilding": { en: "Citation Building", ar: "بناء الاستشهادات", es: "Construcción de Citaciones", pt: "Construção de Citações", fr: "Construction de citations", it: "Costruzione citazioni", de: "Zitationsaufbau" },
  "about.skill.citationBuildingDesc": { en: "NAP consistency across 100+ authoritative directories", ar: "اتساق NAP عبر أكثر من 100 دليل موثوق", es: "Consistencia NAP en más de 100 directorios autorizados", pt: "Consistência NAP em mais de 100 diretórios confiáveis", fr: "Cohérence NAP sur plus de 100 annuaires faisant autorité", it: "Coerenza NAP su oltre 100 directory autorevoli", de: "NAP-Konsistenz über 100+ autoritative Verzeichnisse" },
  "about.skill.reviewManagement": { en: "Review Management", ar: "إدارة المراجعات", es: "Gestión de Reseñas", pt: "Gestão de Avaliações", fr: "Gestion des avis", it: "Gestione recensioni", de: "Bewertungsmanagement" },
  "about.skill.reviewManagementDesc": { en: "Reputation building and review generation strategies", ar: "بناء السمعة واستراتيجيات توليد المراجعات", es: "Construcción de reputación y estrategias de generación de reseñas", pt: "Construção de reputação e estratégias de geração de avaliações", fr: "Construction de réputation et stratégies de génération d'avis", it: "Costruzione reputazione e strategie di generazione recensioni", de: "Reputationsaufbau und Bewertungsgenerierungsstrategien" },
  "about.skill.keywordResearch": { en: "Keyword Research", ar: "بحث الكلمات المفتاحية", es: "Investigación de Palabras Clave", pt: "Pesquisa de Palavras-chave", fr: "Recherche de mots-clés", it: "Ricerca parole chiave", de: "Keyword-Recherche" },
  "about.skill.keywordResearchDesc": { en: "Semantic SEO and voice search optimization", ar: "SEO الدلالي وتحسين البحث الصوتي", es: "SEO semántico y optimización de búsqueda por voz", pt: "SEO semântico e otimização de busca por voz", fr: "SEO sémantique et optimisation de la recherche vocale", it: "SEO semantico e ottimizzazione ricerca vocale", de: "Semantisches SEO und Sprachsuche-Optimierung" },
  "about.skill.seoConsultation": { en: "SEO Consultation", ar: "استشارة SEO", es: "Consultoría SEO", pt: "Consultoria SEO", fr: "Consultation SEO", it: "Consulenza SEO", de: "SEO-Beratung" },
  "about.skill.seoConsultationDesc": { en: "Strategic planning and ongoing SEO advisory services", ar: "التخطيط الاستراتيجي وخدمات استشارات SEO المستمرة", es: "Planificación estratégica y servicios de asesoría SEO continua", pt: "Planejamento estratégico e serviços de consultoria SEO contínua", fr: "Planification stratégique et services de conseil SEO continus", it: "Pianificazione strategica e servizi di consulenza SEO continui", de: "Strategische Planung und fortlaufende SEO-Beratungsdienstleistungen" },
  "about.skill.webDev": { en: "Web Development", ar: "تطوير الويب", es: "Desarrollo Web", pt: "Desenvolvimento Web", fr: "Développement web", it: "Sviluppo web", de: "Webentwicklung" },
  "about.skill.webDevDesc": { en: "SEO-optimized websites with modern technologies", ar: "مواقع محسنة لـ SEO بتقنيات حديثة", es: "Sitios web optimizados para SEO con tecnologías modernas", pt: "Sites otimizados para SEO com tecnologias modernas", fr: "Sites web optimisés pour le SEO avec des technologies modernes", it: "Siti web ottimizzati per SEO con tecnologie moderne", de: "SEO-optimierte Websites mit modernen Technologien" },
  "about.skill.aiChatbots": { en: "AI Assistants & Chatbots", ar: "مساعدات AI وروبوتات الدردشة", es: "Asistentes IA y Chatbots", pt: "Assistentes IA e Chatbots", fr: "Assistants IA et chatbots", it: "Assistenti IA e chatbot", de: "KI-Assistenten & Chatbots" },
  "about.skill.aiChatbotsDesc": { en: "AI-powered customer service solutions for businesses", ar: "حلول خدمة العملاء المدعومة بالذكاء الاصطناعي للشركات", es: "Soluciones de servicio al cliente impulsadas por IA para empresas", pt: "Soluções de atendimento ao cliente com IA para empresas", fr: "Solutions de service client alimentées par l'IA pour les entreprises", it: "Soluzioni di servizio clienti basate su IA per le aziende", de: "KI-gestützte Kundenservice-Lösungen für Unternehmen" },
  "about.skill.lsa": { en: "Google Local Service Ads", ar: "إعلانات Google للخدمات المحلية", es: "Google Local Service Ads", pt: "Google Local Service Ads", fr: "Google Local Service Ads", it: "Google Local Service Ads", de: "Google Local Service Ads" },
  "about.skill.lsaDesc": { en: "LSA setup, optimization, and management", ar: "إعداد وتحسين وإدارة LSA", es: "Configuración, optimización y gestión de LSA", pt: "Configuração, otimização e gerenciamento de LSA", fr: "Configuration, optimisation et gestion LSA", it: "Configurazione, ottimizzazione e gestione LSA", de: "LSA-Einrichtung, Optimierung und Verwaltung" },
  "about.skill.socialMedia": { en: "Social Media Marketing", ar: "التسويق عبر وسائل التواصل الاجتماعي", es: "Marketing en Redes Sociales", pt: "Marketing de Mídias Sociais", fr: "Marketing des réseaux sociaux", it: "Social Media Marketing", de: "Social Media Marketing" },
  "about.skill.socialMediaDesc": { en: "Social media management and growth strategies", ar: "إدارة وسائل التواصل الاجتماعي واستراتيجيات النمو", es: "Gestión de redes sociales y estrategias de crecimiento", pt: "Gestão de mídias sociais e estratégias de crescimento", fr: "Gestion des réseaux sociaux et stratégies de croissance", it: "Gestione social media e strategie di crescita", de: "Social Media Management und Wachstumsstrategien" },
  "about.skill.metaAds": { en: "Meta Ads & PPC", ar: "إعلانات Meta وPPC", es: "Meta Ads y PPC", pt: "Meta Ads e PPC", fr: "Meta Ads et PPC", it: "Meta Ads e PPC", de: "Meta Ads & PPC" },
  "about.skill.metaAdsDesc": { en: "Facebook, Instagram, and paid advertising campaigns", ar: "حملات Facebook وInstagram والإعلانات المدفوعة", es: "Campañas de Facebook, Instagram y publicidad pagada", pt: "Campanhas de Facebook, Instagram e publicidade paga", fr: "Campagnes Facebook, Instagram et publicité payante", it: "Campagne Facebook, Instagram e pubblicità a pagamento", de: "Facebook, Instagram und bezahlte Werbekampagnen" },
  "about.skill.projectManagement": { en: "Project Management", ar: "إدارة المشاريع", es: "Gestión de Proyectos", pt: "Gerenciamento de Projetos", fr: "Gestion de projet", it: "Gestione progetti", de: "Projektmanagement" },
  "about.skill.projectManagementDesc": { en: "End-to-end digital marketing project coordination", ar: "تنسيق مشاريع التسويق الرقمي من البداية إلى النهاية", es: "Coordinación de proyectos de marketing digital de principio a fin", pt: "Coordenação de projetos de marketing digital de ponta a ponta", fr: "Coordination de projet marketing digital de bout en bout", it: "Coordinamento progetti marketing digitale end-to-end", de: "End-to-End-Koordination von Digital-Marketing-Projekten" },
  "about.skill.analytics": { en: "Analytics & Tracking", ar: "التحليلات والتتبع", es: "Analytics y Seguimiento", pt: "Analytics e Rastreamento", fr: "Analytics et tracking", it: "Analytics e tracking", de: "Analytics & Tracking" },
  "about.skill.analyticsDesc": { en: "GA4, GTM, and conversion tracking setup", ar: "إعداد GA4 وGTM وتتبع التحويلات", es: "Configuración de GA4, GTM y seguimiento de conversiones", pt: "Configuração de GA4, GTM e rastreamento de conversões", fr: "Configuration GA4, GTM et suivi des conversions", it: "Configurazione GA4, GTM e tracking conversioni", de: "GA4, GTM und Conversion-Tracking-Einrichtung" },

  // ============ SERVICES PAGE ============
  "services.projectManagement": { en: "Project Management", ar: "إدارة المشاريع", es: "Gestión de Proyectos", pt: "Gerenciamento de Projetos", fr: "Gestion de projet", it: "Gestione progetti", de: "Projektmanagement" },
  "services.localServiceAds": { en: "Local Service Ads", ar: "إعلانات الخدمات المحلية", es: "Anuncios de Servicios Locales", pt: "Anúncios de Serviços Locais", fr: "Annonces de services locaux", it: "Annunci di servizi locali", de: "Lokale Serviceanzeigen" },
  "services.readyToDominate": { en: "Ready to Dominate Local Search?", ar: "هل أنت مستعد للسيطرة على البحث المحلي؟", es: "¿Listo para Dominar la Búsqueda Local?", pt: "Pronto para Dominar a Busca Local?", fr: "Prêt à dominer la recherche locale?", it: "Pronto a dominare la ricerca locale?", de: "Bereit, die lokale Suche zu dominieren?" },
  "services.ctaDescription": { en: "Get a professional SEO audit for just $50 (50% OFF — book within 24 hours!) and discover how these services can transform your local visibility.", ar: "احصل على تدقيق SEO احترافي مقابل 50$ فقط (خصم 50% — احجز خلال 24 ساعة!) واكتشف كيف يمكن لهذه الخدمات تحويل ظهورك المحلي.", es: "Obtenga una auditoría SEO profesional por solo $50 (50% DE DESCUENTO — ¡reserve en 24 horas!) y descubra cómo estos servicios pueden transformar su visibilidad local.", pt: "Obtenha uma auditoria SEO profissional por apenas $50 (50% DE DESCONTO — reserve em 24 horas!) e descubra como esses serviços podem transformar sua visibilidade local.", fr: "Obtenez un audit SEO professionnel pour seulement 50$ (50% de réduction — réservez dans les 24 heures!) et découvrez comment ces services peuvent transformer votre visibilité locale.", it: "Ottieni un audit SEO professionale per soli $50 (50% DI SCONTO — prenota entro 24 ore!) e scopri come questi servizi possono trasformare la tua visibilità locale.", de: "Erhalten Sie ein professionelles SEO-Audit für nur 50$ (50% RABATT — buchen Sie innerhalb von 24 Stunden!) und entdecken Sie, wie diese Dienstleistungen Ihre lokale Sichtbarkeit transformieren können." },
  "services.getSeoAudit": { en: "Get SEO Audit — $50", ar: "احصل على تدقيق SEO — 50$", es: "Obtener Auditoría SEO — $50", pt: "Obter Auditoria SEO — $50", fr: "Obtenir un audit SEO — 50$", it: "Ottieni Audit SEO — $50", de: "SEO-Audit erhalten — 50$" },
  "services.contactMe": { en: "Contact Me", ar: "تواصل معي", es: "Contáctame", pt: "Entre em Contato", fr: "Me contacter", it: "Contattami", de: "Kontaktieren Sie mich" },

  // ============ PRICING PAGE ============
  "pricing.seoAuditOffer": { en: "50% OFF SEO Audit!", ar: "خصم 50% على تدقيق SEO!", es: "¡50% DE DESCUENTO en Auditoría SEO!", pt: "50% DE DESCONTO na Auditoria SEO!", fr: "50% de réduction sur l'audit SEO!", it: "50% DI SCONTO sull'Audit SEO!", de: "50% RABATT auf SEO-Audit!" },
  "pricing.bookWithin3Days": { en: "Book within 3 days and get your audit for just $50", ar: "احجز خلال 3 أيام واحصل على تدقيقك مقابل 50$ فقط", es: "Reserve en 3 días y obtenga su auditoría por solo $50", pt: "Reserve em 3 dias e obtenha sua auditoria por apenas $50", fr: "Réservez dans les 3 jours et obtenez votre audit pour seulement 50$", it: "Prenota entro 3 giorni e ottieni il tuo audit per soli $50", de: "Buchen Sie innerhalb von 3 Tagen und erhalten Sie Ihr Audit für nur 50$" },
  "pricing.multiLocationNote": { en: "Multi-location or need more services?", ar: "مواقع متعددة أو تحتاج المزيد من الخدمات؟", es: "¿Múltiples ubicaciones o necesita más servicios?", pt: "Múltiplas localizações ou precisa de mais serviços?", fr: "Multi-sites ou besoin de plus de services?", it: "Multi-sede o hai bisogno di più servizi?", de: "Mehrere Standorte oder mehr Dienste benötigt?" },
  "pricing.useCode": { en: "Use code MULTI-DISCOUNT for special pricing!", ar: "استخدم الرمز MULTI-DISCOUNT للحصول على أسعار خاصة!", es: "¡Use el código MULTI-DISCOUNT para precios especiales!", pt: "Use o código MULTI-DISCOUNT para preços especiais!", fr: "Utilisez le code MULTI-DISCOUNT pour des prix spéciaux!", it: "Usa il codice MULTI-DISCOUNT per prezzi speciali!", de: "Verwenden Sie den Code MULTI-DISCOUNT für Sonderpreise!" },
  "pricing.specialMultiLocationDiscount": { en: "Special Multi-Location Discount", ar: "خصم خاص للمواقع المتعددة", es: "Descuento Especial Multi-Ubicación", pt: "Desconto Especial Multi-Localização", fr: "Réduction spéciale multi-sites", it: "Sconto speciale multi-sede", de: "Spezieller Multi-Standort-Rabatt" },
  "pricing.managingMultiple": { en: "Managing Multiple Locations or Need Multiple Services?", ar: "تدير مواقع متعددة أو تحتاج خدمات متعددة؟", es: "¿Gestiona Múltiples Ubicaciones o Necesita Múltiples Servicios?", pt: "Gerencia Múltiplas Localizações ou Precisa de Múltiplos Serviços?", fr: "Gérez plusieurs sites ou avez besoin de plusieurs services?", it: "Gestisci più sedi o hai bisogno di più servizi?", de: "Verwalten Sie mehrere Standorte oder benötigen Sie mehrere Dienste?" },
  "pricing.customQuoteDesc": { en: "Get a custom quote with exclusive discounts for businesses with multiple Google Business Profiles, franchise locations, or those needing a combination of SEO, web development, content, and marketing services.", ar: "احصل على عرض أسعار مخصص مع خصومات حصرية للشركات التي لديها ملفات Google Business متعددة أو مواقع امتياز أو تلك التي تحتاج مزيجاً من خدمات SEO وتطوير الويب والمحتوى والتسويق.", es: "Obtenga una cotización personalizada con descuentos exclusivos para empresas con múltiples perfiles de Google Business, ubicaciones de franquicia, o aquellas que necesitan una combinación de servicios de SEO, desarrollo web, contenido y marketing.", pt: "Obtenha um orçamento personalizado com descontos exclusivos para empresas com múltiplos perfis do Google Business, locais de franquia, ou aquelas que precisam de uma combinação de serviços de SEO, desenvolvimento web, conteúdo e marketing.", fr: "Obtenez un devis personnalisé avec des réductions exclusives pour les entreprises avec plusieurs profils Google Business, des emplacements de franchise, ou celles ayant besoin d'une combinaison de services SEO, développement web, contenu et marketing.", it: "Ottieni un preventivo personalizzato con sconti esclusivi per aziende con più profili Google Business, sedi in franchising, o quelle che necessitano di una combinazione di servizi SEO, sviluppo web, contenuti e marketing.", de: "Erhalten Sie ein individuelles Angebot mit exklusiven Rabatten für Unternehmen mit mehreren Google Business Profilen, Franchise-Standorten oder solchen, die eine Kombination aus SEO, Webentwicklung, Content und Marketing-Dienstleistungen benötigen." },
  "pricing.multiLocationSeo": { en: "Multi-Location SEO", ar: "SEO متعدد المواقع", es: "SEO Multi-Ubicación", pt: "SEO Multi-Localização", fr: "SEO multi-sites", it: "SEO multi-sede", de: "Multi-Standort-SEO" },
  "pricing.multiLocationSeoDesc": { en: "Managing 2+ GBP locations? Get volume discounts up to 30% off per location.", ar: "تدير أكثر من موقعين GBP؟ احصل على خصومات كمية تصل إلى 30% لكل موقع.", es: "¿Gestiona 2+ ubicaciones GBP? Obtenga descuentos por volumen hasta 30% por ubicación.", pt: "Gerencia 2+ locais GBP? Obtenha descontos por volume de até 30% por localização.", fr: "Gérez 2+ emplacements GBP? Obtenez des réductions de volume jusqu'à 30% par emplacement.", it: "Gestisci 2+ sedi GBP? Ottieni sconti volume fino al 30% per sede.", de: "Verwalten Sie 2+ GBP-Standorte? Erhalten Sie Mengenrabatte von bis zu 30% pro Standort." },
  "pricing.bundledServices": { en: "Bundled Services", ar: "خدمات مجمعة", es: "Servicios Combinados", pt: "Serviços Combinados", fr: "Services groupés", it: "Servizi in bundle", de: "Gebündelte Dienste" },
  "pricing.bundledServicesDesc": { en: "Combine SEO + Web Dev + Content + Social Media for up to 25% bundle discount.", ar: "اجمع بين SEO + تطوير الويب + المحتوى + وسائل التواصل الاجتماعي للحصول على خصم يصل إلى 25%.", es: "Combine SEO + Desarrollo Web + Contenido + Redes Sociales para hasta 25% de descuento.", pt: "Combine SEO + Desenvolvimento Web + Conteúdo + Mídias Sociais para até 25% de desconto.", fr: "Combinez SEO + Dev Web + Contenu + Réseaux sociaux pour jusqu'à 25% de réduction.", it: "Combina SEO + Sviluppo Web + Contenuti + Social Media per fino al 25% di sconto.", de: "Kombinieren Sie SEO + Webentwicklung + Content + Social Media für bis zu 25% Bündelrabatt." },
  "pricing.enterpriseSolutions": { en: "Enterprise Solutions", ar: "حلول المؤسسات", es: "Soluciones Empresariales", pt: "Soluções Empresariais", fr: "Solutions entreprise", it: "Soluzioni enterprise", de: "Enterprise-Lösungen" },
  "pricing.enterpriseSolutionsDesc": { en: "Franchise or agency? Custom pricing with dedicated account management.", ar: "امتياز أو وكالة؟ أسعار مخصصة مع إدارة حساب مخصصة.", es: "¿Franquicia o agencia? Precios personalizados con gestión de cuenta dedicada.", pt: "Franquia ou agência? Preços personalizados com gerenciamento de conta dedicado.", fr: "Franchise ou agence? Tarification personnalisée avec gestion de compte dédiée.", it: "Franchising o agenzia? Prezzi personalizzati con gestione account dedicata.", de: "Franchise oder Agentur? Individuelle Preise mit dediziertem Account Management." },
  "pricing.bookStrategyCall": { en: "Book a Strategy Call", ar: "احجز مكالمة استراتيجية", es: "Reservar Llamada Estratégica", pt: "Agendar Chamada Estratégica", fr: "Réserver un appel stratégique", it: "Prenota una chiamata strategica", de: "Strategiegespräch buchen" },
  "pricing.requestCustomQuote": { en: "Request Custom Quote", ar: "طلب عرض أسعار مخصص", es: "Solicitar Cotización Personalizada", pt: "Solicitar Orçamento Personalizado", fr: "Demander un devis personnalisé", it: "Richiedi preventivo personalizzato", de: "Individuelles Angebot anfordern" },
  "pricing.mentionCode": { en: "Mention \"MULTI-DISCOUNT\" when you reach out to unlock exclusive pricing", ar: "اذكر \"MULTI-DISCOUNT\" عند التواصل للحصول على أسعار حصرية", es: "Mencione \"MULTI-DISCOUNT\" cuando se comunique para desbloquear precios exclusivos", pt: "Mencione \"MULTI-DISCOUNT\" ao entrar em contato para desbloquear preços exclusivos", fr: "Mentionnez \"MULTI-DISCOUNT\" lorsque vous nous contactez pour débloquer des prix exclusifs", it: "Menziona \"MULTI-DISCOUNT\" quando ci contatti per sbloccare prezzi esclusivi", de: "Erwähnen Sie \"MULTI-DISCOUNT\" bei der Kontaktaufnahme, um exklusive Preise freizuschalten" },

  // ============ BLOG PAGE ============
  "blog.subtitle": { en: "Blog", ar: "المدونة", es: "Blog", pt: "Blog", fr: "Blog", it: "Blog", de: "Blog" },
  "blog.title": { en: "Local SEO Insights & Strategies", ar: "رؤى واستراتيجيات SEO المحلي", es: "Ideas y Estrategias de SEO Local", pt: "Insights e Estratégias de SEO Local", fr: "Insights et stratégies SEO local", it: "Approfondimenti e strategie SEO locale", de: "Lokale SEO-Einblicke & Strategien" },
  "blog.description": { en: "Actionable tips, industry trends, and proven strategies to help you dominate local search.", ar: "نصائح عملية واتجاهات الصناعة واستراتيجيات مثبتة لمساعدتك على السيطرة على البحث المحلي.", es: "Consejos prácticos, tendencias de la industria y estrategias probadas para ayudarte a dominar la búsqueda local.", pt: "Dicas práticas, tendências do setor e estratégias comprovadas para ajudá-lo a dominar a busca local.", fr: "Conseils pratiques, tendances de l'industrie et stratégies éprouvées pour vous aider à dominer la recherche locale.", it: "Consigli pratici, tendenze del settore e strategie comprovate per aiutarti a dominare la ricerca locale.", de: "Praktische Tipps, Branchentrends und bewährte Strategien, um die lokale Suche zu dominieren." },
  "blog.readMore": { en: "Read More", ar: "اقرأ المزيد", es: "Leer Más", pt: "Leia Mais", fr: "Lire la suite", it: "Leggi di più", de: "Weiterlesen" },
  "blog.newsletterTitle": { en: "Get Local SEO Tips in Your Inbox", ar: "احصل على نصائح SEO المحلي في بريدك الإلكتروني", es: "Recibe Consejos de SEO Local en Tu Correo", pt: "Receba Dicas de SEO Local no Seu Email", fr: "Recevez des conseils SEO local dans votre boîte mail", it: "Ricevi consigli SEO locale nella tua inbox", de: "Erhalten Sie lokale SEO-Tipps in Ihrem Posteingang" },
  "blog.newsletterDesc": { en: "Join hundreds of business owners receiving weekly insights on improving their local search presence.", ar: "انضم إلى مئات أصحاب الأعمال الذين يتلقون رؤى أسبوعية حول تحسين وجودهم في البحث المحلي.", es: "Únete a cientos de propietarios de negocios que reciben información semanal sobre cómo mejorar su presencia en búsqueda local.", pt: "Junte-se a centenas de proprietários de empresas que recebem insights semanais sobre como melhorar sua presença na busca local.", fr: "Rejoignez des centaines de propriétaires d'entreprises qui reçoivent des informations hebdomadaires sur l'amélioration de leur présence dans la recherche locale.", it: "Unisciti a centinaia di imprenditori che ricevono insight settimanali su come migliorare la loro presenza nella ricerca locale.", de: "Schließen Sie sich Hunderten von Geschäftsinhabern an, die wöchentliche Einblicke zur Verbesserung ihrer lokalen Suchpräsenz erhalten." },
  "blog.subscribeNewsletter": { en: "Subscribe to Newsletter", ar: "اشترك في النشرة الإخبارية", es: "Suscribirse al Boletín", pt: "Assinar Newsletter", fr: "S'abonner à la newsletter", it: "Iscriviti alla newsletter", de: "Newsletter abonnieren" },

  // ============ CASE STUDIES PAGE ============
  "caseStudiesPage.subtitle": { en: "Case Studies", ar: "دراسات الحالة", es: "Casos de Estudio", pt: "Estudos de Caso", fr: "Études de cas", it: "Casi studio", de: "Fallstudien" },
  "caseStudiesPage.title": { en: "Real Results for Real Businesses", ar: "نتائج حقيقية لأعمال حقيقية", es: "Resultados Reales para Negocios Reales", pt: "Resultados Reais para Negócios Reais", fr: "Des résultats réels pour de vraies entreprises", it: "Risultati reali per aziende reali", de: "Echte Ergebnisse für echte Unternehmen" },
  "caseStudiesPage.description": { en: "Discover how strategic Local SEO has transformed businesses across different industries and regions. Every case study shows real, measurable results.", ar: "اكتشف كيف حوّل SEO المحلي الاستراتيجي الأعمال عبر مختلف الصناعات والمناطق. كل دراسة حالة تُظهر نتائج حقيقية وقابلة للقياس.", es: "Descubre cómo el SEO Local estratégico ha transformado negocios en diferentes industrias y regiones. Cada caso de estudio muestra resultados reales y medibles.", pt: "Descubra como o SEO Local estratégico transformou negócios em diferentes indústrias e regiões. Cada estudo de caso mostra resultados reais e mensuráveis.", fr: "Découvrez comment le SEO local stratégique a transformé des entreprises dans différentes industries et régions. Chaque étude de cas montre des résultats réels et mesurables.", it: "Scopri come il SEO Locale strategico ha trasformato aziende in diversi settori e regioni. Ogni caso studio mostra risultati reali e misurabili.", de: "Entdecken Sie, wie strategisches lokales SEO Unternehmen in verschiedenen Branchen und Regionen transformiert hat. Jede Fallstudie zeigt echte, messbare Ergebnisse." },
  "caseStudiesPage.clientsServed": { en: "Clients Served", ar: "عملاء تم خدمتهم", es: "Clientes Atendidos", pt: "Clientes Atendidos", fr: "Clients servis", it: "Clienti serviti", de: "Betreute Kunden" },
  "caseStudiesPage.industries": { en: "Industries", ar: "الصناعات", es: "Industrias", pt: "Indústrias", fr: "Industries", it: "Settori", de: "Branchen" },
  "caseStudiesPage.successRate": { en: "Success Rate", ar: "معدل النجاح", es: "Tasa de Éxito", pt: "Taxa de Sucesso", fr: "Taux de réussite", it: "Tasso di successo", de: "Erfolgsrate" },
  "caseStudiesPage.challenge": { en: "Challenge", ar: "التحدي", es: "Desafío", pt: "Desafio", fr: "Défi", it: "Sfida", de: "Herausforderung" },
  "caseStudiesPage.solution": { en: "Solution", ar: "الحل", es: "Solución", pt: "Solução", fr: "Solution", it: "Soluzione", de: "Lösung" },
  "caseStudiesPage.wantResults": { en: "Want Results Like These?", ar: "تريد نتائج مثل هذه؟", es: "¿Quiere Resultados Como Estos?", pt: "Quer Resultados Como Esses?", fr: "Vous voulez des résultats comme ceux-ci?", it: "Vuoi risultati come questi?", de: "Wollen Sie solche Ergebnisse?" },
  "caseStudiesPage.ctaDesc": { en: "Let's discuss how we can achieve similar or better results for your business. Get a professional SEO audit for just $50 (50% OFF — book within 24 hours!)", ar: "دعنا نناقش كيف يمكننا تحقيق نتائج مماثلة أو أفضل لعملك. احصل على تدقيق SEO احترافي مقابل 50$ فقط (خصم 50% — احجز خلال 24 ساعة!)", es: "Discutamos cómo podemos lograr resultados similares o mejores para su negocio. Obtenga una auditoría SEO profesional por solo $50 (50% DE DESCUENTO — ¡reserve en 24 horas!)", pt: "Vamos discutir como podemos alcançar resultados semelhantes ou melhores para o seu negócio. Obtenha uma auditoria SEO profissional por apenas $50 (50% DE DESCONTO — reserve em 24 horas!)", fr: "Discutons de la façon dont nous pouvons obtenir des résultats similaires ou meilleurs pour votre entreprise. Obtenez un audit SEO professionnel pour seulement 50$ (50% de réduction — réservez dans les 24 heures!)", it: "Discutiamo come possiamo ottenere risultati simili o migliori per la tua attività. Ottieni un audit SEO professionale per soli $50 (50% DI SCONTO — prenota entro 24 ore!)", de: "Lassen Sie uns besprechen, wie wir ähnliche oder bessere Ergebnisse für Ihr Unternehmen erzielen können. Erhalten Sie ein professionelles SEO-Audit für nur 50$ (50% RABATT — buchen Sie innerhalb von 24 Stunden!)" },
  "caseStudiesPage.startYourSuccess": { en: "Start Your Success Story", ar: "ابدأ قصة نجاحك", es: "Comience Su Historia de Éxito", pt: "Comece Sua História de Sucesso", fr: "Commencez votre histoire de succès", it: "Inizia la tua storia di successo", de: "Starten Sie Ihre Erfolgsgeschichte" },

  // ============ NOT FOUND PAGE ============
  "notFound.title": { en: "404", ar: "404", es: "404", pt: "404", fr: "404", it: "404", de: "404" },
  "notFound.message": { en: "Oops! Page not found", ar: "عذراً! الصفحة غير موجودة", es: "¡Ups! Página no encontrada", pt: "Ops! Página não encontrada", fr: "Oups! Page non trouvée", it: "Ops! Pagina non trovata", de: "Hoppla! Seite nicht gefunden" },
  "notFound.returnHome": { en: "Return to Home", ar: "العودة إلى الصفحة الرئيسية", es: "Volver al Inicio", pt: "Voltar para o Início", fr: "Retour à l'accueil", it: "Torna alla home", de: "Zurück zur Startseite" },

  // ============ LOCAL SERVICE ADS PAGE ============
  "lsa.title": { en: "Google Local Service Ads", ar: "إعلانات Google للخدمات المحلية", es: "Google Local Service Ads", pt: "Google Local Service Ads", fr: "Google Local Service Ads", it: "Google Local Service Ads", de: "Google Local Service Ads" },
  "lsa.description": { en: "Get your business at the top of Google with the Google Guaranteed badge. Pay only for real leads, not clicks.", ar: "احصل على عملك في أعلى Google مع شارة Google Guaranteed. ادفع فقط مقابل العملاء المحتملين الحقيقيين، وليس النقرات.", es: "Coloque su negocio en la parte superior de Google con la insignia Google Guaranteed. Pague solo por leads reales, no clics.", pt: "Coloque seu negócio no topo do Google com o selo Google Guaranteed. Pague apenas por leads reais, não cliques.", fr: "Mettez votre entreprise en haut de Google avec le badge Google Guaranteed. Payez uniquement pour de vrais leads, pas des clics.", it: "Porta la tua attività in cima a Google con il badge Google Guaranteed. Paga solo per lead reali, non clic.", de: "Bringen Sie Ihr Unternehmen mit dem Google Guaranteed Badge an die Spitze von Google. Zahlen Sie nur für echte Leads, nicht für Klicks." },
  "lsa.startCampaign": { en: "Start LSA Campaign", ar: "ابدأ حملة LSA", es: "Iniciar Campaña LSA", pt: "Iniciar Campanha LSA", fr: "Démarrer une campagne LSA", it: "Avvia campagna LSA", de: "LSA-Kampagne starten" },
  "lsa.googleGuaranteed": { en: "Google Guaranteed Badge", ar: "شارة Google Guaranteed", es: "Insignia Google Guaranteed", pt: "Selo Google Guaranteed", fr: "Badge Google Guaranteed", it: "Badge Google Guaranteed", de: "Google Guaranteed Badge" },
  "lsa.googleGuaranteedDesc": { en: "Build trust with the Google Guaranteed badge on your ads", ar: "ابنِ الثقة مع شارة Google Guaranteed على إعلاناتك", es: "Genere confianza con la insignia Google Guaranteed en sus anuncios", pt: "Construa confiança com o selo Google Guaranteed em seus anúncios", fr: "Construisez la confiance avec le badge Google Guaranteed sur vos annonces", it: "Costruisci fiducia con il badge Google Guaranteed sui tuoi annunci", de: "Bauen Sie Vertrauen mit dem Google Guaranteed Badge in Ihren Anzeigen auf" },
  "lsa.payPerLead": { en: "Pay Per Lead", ar: "الدفع لكل عميل محتمل", es: "Pago Por Lead", pt: "Pagamento Por Lead", fr: "Paiement par lead", it: "Pagamento per lead", de: "Bezahlung pro Lead" },
  "lsa.payPerLeadDesc": { en: "Only pay when customers contact you directly", ar: "ادفع فقط عندما يتصل بك العملاء مباشرة", es: "Solo pague cuando los clientes lo contacten directamente", pt: "Pague apenas quando os clientes entrarem em contato diretamente", fr: "Payez uniquement lorsque les clients vous contactent directement", it: "Paga solo quando i clienti ti contattano direttamente", de: "Zahlen Sie nur, wenn Kunden Sie direkt kontaktieren" },
  "lsa.directCalls": { en: "Direct Calls", ar: "مكالمات مباشرة", es: "Llamadas Directas", pt: "Chamadas Diretas", fr: "Appels directs", it: "Chiamate dirette", de: "Direkte Anrufe" },
  "lsa.directCallsDesc": { en: "Receive calls directly from potential customers", ar: "تلقَّ مكالمات مباشرة من العملاء المحتملين", es: "Reciba llamadas directamente de clientes potenciales", pt: "Receba chamadas diretamente de clientes potenciais", fr: "Recevez des appels directement de clients potentiels", it: "Ricevi chiamate direttamente da potenziali clienti", de: "Erhalten Sie Anrufe direkt von potenziellen Kunden" },
  "lsa.reviewDisplay": { en: "Review Display", ar: "عرض المراجعات", es: "Visualización de Reseñas", pt: "Exibição de Avaliações", fr: "Affichage des avis", it: "Visualizzazione recensioni", de: "Bewertungsanzeige" },
  "lsa.reviewDisplayDesc": { en: "Showcase your ratings prominently in ads", ar: "اعرض تقييماتك بشكل بارز في الإعلانات", es: "Muestre sus calificaciones de forma destacada en los anuncios", pt: "Exiba suas avaliações de forma destacada nos anúncios", fr: "Affichez vos notes de manière proéminente dans les annonces", it: "Mostra le tue valutazioni in evidenza negli annunci", de: "Zeigen Sie Ihre Bewertungen prominent in Anzeigen" },
  "lsa.whatsIncluded": { en: "What's Included", ar: "ما هو مشمول", es: "Qué Está Incluido", pt: "O Que Está Incluído", fr: "Ce qui est inclus", it: "Cosa è incluso", de: "Was ist enthalten" },
  "lsa.successStories": { en: "LSA Success Stories", ar: "قصص نجاح LSA", es: "Historias de Éxito LSA", pt: "Histórias de Sucesso LSA", fr: "Histoires de succès LSA", it: "Storie di successo LSA", de: "LSA-Erfolgsgeschichten" },
  "lsa.readyForLeads": { en: "Ready to Get More Leads?", ar: "مستعد للحصول على المزيد من العملاء؟", es: "¿Listo para Obtener Más Leads?", pt: "Pronto para Obter Mais Leads?", fr: "Prêt à obtenir plus de leads?", it: "Pronto a ottenere più lead?", de: "Bereit für mehr Leads?" },
  "lsa.ctaDesc": { en: "Get started with Local Service Ads management for $50 consultation.", ar: "ابدأ مع إدارة إعلانات الخدمات المحلية باستشارة بقيمة 50$.", es: "Comience con la gestión de Local Service Ads por $50 de consulta.", pt: "Comece com o gerenciamento de Local Service Ads por $50 de consulta.", fr: "Commencez avec la gestion des Local Service Ads pour une consultation à 50$.", it: "Inizia con la gestione dei Local Service Ads per una consulenza da $50.", de: "Starten Sie mit dem Local Service Ads Management für 50$ Beratung." },
  "lsa.getStarted": { en: "Get Started — $50", ar: "ابدأ الآن — 50$", es: "Comenzar — $50", pt: "Começar — $50", fr: "Commencer — 50$", it: "Inizia — $50", de: "Jetzt starten — 50$" },

  // ============ PROJECT MANAGEMENT PAGE ============
  "projectMgmt.title": { en: "Complete Online Business Management", ar: "إدارة الأعمال الإلكترونية الشاملة", es: "Gestión Completa de Negocios en Línea", pt: "Gestão Completa de Negócios Online", fr: "Gestion complète des affaires en ligne", it: "Gestione completa del business online", de: "Komplettes Online-Business-Management" },
  "projectMgmt.description": { en: "Let me handle your entire online presence - from strategy to execution. One point of contact, all services managed professionally.", ar: "دعني أتعامل مع وجودك الكامل عبر الإنترنت - من الاستراتيجية إلى التنفيذ. نقطة اتصال واحدة، جميع الخدمات تُدار بشكل احترافي.", es: "Déjame manejar toda tu presencia en línea - desde la estrategia hasta la ejecución. Un punto de contacto, todos los servicios gestionados profesionalmente.", pt: "Deixe-me cuidar de toda a sua presença online - da estratégia à execução. Um ponto de contato, todos os serviços gerenciados profissionalmente.", fr: "Laissez-moi gérer toute votre présence en ligne - de la stratégie à l'exécution. Un seul point de contact, tous les services gérés professionnellement.", it: "Lascia che gestisca tutta la tua presenza online - dalla strategia all'esecuzione. Un unico punto di contatto, tutti i servizi gestiti professionalmente.", de: "Lassen Sie mich Ihre gesamte Online-Präsenz verwalten - von der Strategie bis zur Ausführung. Ein Ansprechpartner, alle Dienste professionell verwaltet." },
  "projectMgmt.bookConsultation": { en: "Book Consultation", ar: "احجز استشارة", es: "Reservar Consulta", pt: "Agendar Consulta", fr: "Réserver une consultation", it: "Prenota consulenza", de: "Beratung buchen" },
  "projectMgmt.servicesWeManage": { en: "Services We Manage", ar: "الخدمات التي نديرها", es: "Servicios Que Gestionamos", pt: "Serviços Que Gerenciamos", fr: "Services que nous gérons", it: "Servizi che gestiamo", de: "Dienste, die wir verwalten" },
  "projectMgmt.successStories": { en: "Project Success Stories", ar: "قصص نجاح المشاريع", es: "Historias de Éxito de Proyectos", pt: "Histórias de Sucesso de Projetos", fr: "Histoires de succès de projets", it: "Storie di successo dei progetti", de: "Projekterfolgsgeschichten" },
  "projectMgmt.readyToStreamline": { en: "Ready to Streamline Your Business?", ar: "مستعد لتبسيط عملك؟", es: "¿Listo para Optimizar Su Negocio?", pt: "Pronto para Otimizar Seu Negócio?", fr: "Prêt à rationaliser votre entreprise?", it: "Pronto a semplificare la tua attività?", de: "Bereit, Ihr Unternehmen zu optimieren?" },
  "projectMgmt.ctaDesc": { en: "Get a $50 consultation to discuss your project needs.", ar: "احصل على استشارة بقيمة 50$ لمناقشة احتياجات مشروعك.", es: "Obtenga una consulta de $50 para discutir las necesidades de su proyecto.", pt: "Obtenha uma consulta de $50 para discutir as necessidades do seu projeto.", fr: "Obtenez une consultation à 50$ pour discuter des besoins de votre projet.", it: "Ottieni una consulenza da $50 per discutere le esigenze del tuo progetto.", de: "Erhalten Sie eine 50$-Beratung, um Ihre Projektanforderungen zu besprechen." },

  // ============ WEB DEVELOPMENT PAGE ============
  "webDev.title": { en: "Web Development Services", ar: "خدمات تطوير الويب", es: "Servicios de Desarrollo Web", pt: "Serviços de Desenvolvimento Web", fr: "Services de développement web", it: "Servizi di sviluppo web", de: "Webentwicklungsdienste" },
  "webDev.description": { en: "Build a powerful online presence with fast, secure, and SEO-optimized websites that convert visitors into customers.", ar: "ابنِ حضوراً قوياً عبر الإنترنت مع مواقع سريعة وآمنة ومحسنة لـ SEO تحول الزوار إلى عملاء.", es: "Construya una poderosa presencia en línea con sitios web rápidos, seguros y optimizados para SEO que convierten visitantes en clientes.", pt: "Construa uma presença online poderosa com sites rápidos, seguros e otimizados para SEO que convertem visitantes em clientes.", fr: "Construisez une présence en ligne puissante avec des sites web rapides, sécurisés et optimisés pour le SEO qui convertissent les visiteurs en clients.", it: "Costruisci una potente presenza online con siti web veloci, sicuri e ottimizzati per SEO che convertono i visitatori in clienti.", de: "Bauen Sie eine starke Online-Präsenz mit schnellen, sicheren und SEO-optimierten Websites auf, die Besucher in Kunden verwandeln." },
  "webDev.discussProject": { en: "Discuss Your Project", ar: "ناقش مشروعك", es: "Discuta Su Proyecto", pt: "Discuta Seu Projeto", fr: "Discutez de votre projet", it: "Discuti il tuo progetto", de: "Besprechen Sie Ihr Projekt" },
  "webDev.whatsIncluded": { en: "What's Included", ar: "ما هو مشمول", es: "Qué Está Incluido", pt: "O Que Está Incluído", fr: "Ce qui est inclus", it: "Cosa è incluso", de: "Was ist enthalten" },
  "webDev.modernTechStack": { en: "Modern Tech Stack", ar: "تقنيات حديثة", es: "Stack Tecnológico Moderno", pt: "Stack Tecnológico Moderno", fr: "Stack technologique moderne", it: "Stack tecnologico moderno", de: "Moderner Tech-Stack" },
  "webDev.techStackDesc": { en: "Built with the latest technologies for performance, security, and scalability", ar: "مبني بأحدث التقنيات للأداء والأمان وقابلية التوسع", es: "Construido con las últimas tecnologías para rendimiento, seguridad y escalabilidad", pt: "Construído com as últimas tecnologias para desempenho, segurança e escalabilidade", fr: "Construit avec les dernières technologies pour la performance, la sécurité et la scalabilité", it: "Costruito con le ultime tecnologie per prestazioni, sicurezza e scalabilità", de: "Mit den neuesten Technologien für Leistung, Sicherheit und Skalierbarkeit gebaut" },
  "webDev.whyChoose": { en: "Why Choose My Web Development", ar: "لماذا تختار تطوير الويب الخاص بي", es: "Por Qué Elegir Mi Desarrollo Web", pt: "Por Que Escolher Meu Desenvolvimento Web", fr: "Pourquoi choisir mon développement web", it: "Perché scegliere il mio sviluppo web", de: "Warum meine Webentwicklung wählen" },
  "webDev.readyToBuild": { en: "Ready to Build Your Website?", ar: "مستعد لبناء موقعك؟", es: "¿Listo para Construir Su Sitio Web?", pt: "Pronto para Construir Seu Site?", fr: "Prêt à construire votre site web?", it: "Pronto a costruire il tuo sito web?", de: "Bereit, Ihre Website zu erstellen?" },
  "webDev.ctaDesc": { en: "Let's discuss your project and create a website that drives results. Get a free consultation today.", ar: "دعنا نناقش مشروعك ونصمم موقعاً يحقق النتائج. احصل على استشارة مجانية اليوم.", es: "Discutamos su proyecto y creemos un sitio web que genere resultados. Obtenga una consulta gratuita hoy.", pt: "Vamos discutir seu projeto e criar um site que gere resultados. Obtenha uma consulta gratuita hoje.", fr: "Discutons de votre projet et créons un site web qui génère des résultats. Obtenez une consultation gratuite aujourd'hui.", it: "Discutiamo il tuo progetto e creiamo un sito web che generi risultati. Ottieni una consulenza gratuita oggi.", de: "Lassen Sie uns Ihr Projekt besprechen und eine Website erstellen, die Ergebnisse liefert. Holen Sie sich heute eine kostenlose Beratung." },
  "webDev.getFreeConsultation": { en: "Get Free Consultation", ar: "احصل على استشارة مجانية", es: "Obtener Consulta Gratis", pt: "Obter Consulta Gratuita", fr: "Obtenir une consultation gratuite", it: "Ottieni consulenza gratuita", de: "Kostenlose Beratung erhalten" },

  // ============ SOCIAL MEDIA PAGE ============
  "socialMedia.title": { en: "Social Media Management & Marketing", ar: "إدارة وتسويق وسائل التواصل الاجتماعي", es: "Gestión y Marketing de Redes Sociales", pt: "Gestão e Marketing de Mídias Sociais", fr: "Gestion et marketing des réseaux sociaux", it: "Gestione e marketing social media", de: "Social Media Management & Marketing" },
  "socialMedia.description": { en: "Build a powerful social media presence that grows your audience, engages customers, and drives business results.", ar: "ابنِ حضوراً قوياً على وسائل التواصل الاجتماعي ينمي جمهورك ويشرك العملاء ويحقق نتائج الأعمال.", es: "Construya una poderosa presencia en redes sociales que haga crecer su audiencia, atraiga clientes y genere resultados comerciales.", pt: "Construa uma presença poderosa nas mídias sociais que faça crescer seu público, envolva clientes e gere resultados comerciais.", fr: "Construisez une présence puissante sur les réseaux sociaux qui développe votre audience, engage les clients et génère des résultats commerciaux.", it: "Costruisci una potente presenza sui social media che faccia crescere il tuo pubblico, coinvolga i clienti e generi risultati di business.", de: "Bauen Sie eine starke Social-Media-Präsenz auf, die Ihr Publikum wachsen lässt, Kunden einbindet und Geschäftsergebnisse liefert." },
  "socialMedia.getStrategy": { en: "Get Social Media Strategy", ar: "احصل على استراتيجية وسائل التواصل الاجتماعي", es: "Obtener Estrategia de Redes Sociales", pt: "Obter Estratégia de Mídias Sociais", fr: "Obtenir une stratégie réseaux sociaux", it: "Ottieni strategia social media", de: "Social-Media-Strategie erhalten" },
  "socialMedia.platformsWeManage": { en: "Platforms We Manage", ar: "المنصات التي نديرها", es: "Plataformas Que Gestionamos", pt: "Plataformas Que Gerenciamos", fr: "Plateformes que nous gérons", it: "Piattaforme che gestiamo", de: "Plattformen, die wir verwalten" },
  "socialMedia.contentWeCreate": { en: "Content We Create", ar: "المحتوى الذي ننشئه", es: "Contenido Que Creamos", pt: "Conteúdo Que Criamos", fr: "Contenu que nous créons", it: "Contenuti che creiamo", de: "Inhalte, die wir erstellen" },
  "socialMedia.fullServiceOfferings": { en: "Full Service Offerings", ar: "عروض الخدمات الكاملة", es: "Ofertas de Servicio Completo", pt: "Ofertas de Serviço Completo", fr: "Offres de services complets", it: "Offerte di servizi completi", de: "Vollständige Serviceangebote" },
  "socialMedia.whyInvest": { en: "Why Invest in Social Media", ar: "لماذا تستثمر في وسائل التواصل الاجتماعي", es: "Por Qué Invertir en Redes Sociales", pt: "Por Que Investir em Mídias Sociais", fr: "Pourquoi investir dans les réseaux sociaux", it: "Perché investire nei social media", de: "Warum in Social Media investieren" },
  "socialMedia.readyToGrow": { en: "Ready to Grow Your Social Presence?", ar: "مستعد لتنمية حضورك على وسائل التواصل الاجتماعي؟", es: "¿Listo para Hacer Crecer Su Presencia Social?", pt: "Pronto para Crescer Sua Presença Social?", fr: "Prêt à développer votre présence sociale?", it: "Pronto a far crescere la tua presenza social?", de: "Bereit, Ihre Social-Präsenz auszubauen?" },
  "socialMedia.ctaDesc": { en: "Let's create a social media strategy that builds your brand and drives real business results.", ar: "دعنا ننشئ استراتيجية وسائل تواصل اجتماعي تبني علامتك التجارية وتحقق نتائج أعمال حقيقية.", es: "Creemos una estrategia de redes sociales que construya su marca y genere resultados comerciales reales.", pt: "Vamos criar uma estratégia de mídias sociais que construa sua marca e gere resultados comerciais reais.", fr: "Créons une stratégie réseaux sociaux qui construit votre marque et génère de vrais résultats commerciaux.", it: "Creiamo una strategia social media che costruisca il tuo brand e generi risultati di business reali.", de: "Lassen Sie uns eine Social-Media-Strategie erstellen, die Ihre Marke aufbaut und echte Geschäftsergebnisse liefert." },
  "socialMedia.getFreeStrategyCall": { en: "Get Free Strategy Call", ar: "احصل على مكالمة استراتيجية مجانية", es: "Obtener Llamada Estratégica Gratis", pt: "Obter Chamada Estratégica Gratuita", fr: "Obtenir un appel stratégique gratuit", it: "Ottieni chiamata strategica gratuita", de: "Kostenloses Strategiegespräch erhalten" },

  // ============ CONTENT WRITING PAGE ============
  "contentWriting.title": { en: "Content Writing Services", ar: "خدمات كتابة المحتوى", es: "Servicios de Redacción de Contenido", pt: "Serviços de Redação de Conteúdo", fr: "Services de rédaction de contenu", it: "Servizi di scrittura contenuti", de: "Content-Writing-Dienste" },
  "contentWriting.description": { en: "Words that rank, engage, and convert. SEO-optimized content crafted for search engines, AI platforms, and your target audience.", ar: "كلمات تتصدر وتجذب وتحول. محتوى محسن لـ SEO مصمم لمحركات البحث ومنصات AI وجمهورك المستهدف.", es: "Palabras que clasifican, atraen y convierten. Contenido optimizado para SEO diseñado para motores de búsqueda, plataformas de IA y su público objetivo.", pt: "Palavras que classificam, engajam e convertem. Conteúdo otimizado para SEO criado para mecanismos de busca, plataformas de IA e seu público-alvo.", fr: "Des mots qui classent, engagent et convertissent. Contenu optimisé pour le SEO conçu pour les moteurs de recherche, les plateformes IA et votre public cible.", it: "Parole che classificano, coinvolgono e convertono. Contenuti ottimizzati per SEO creati per motori di ricerca, piattaforme IA e il tuo pubblico target.", de: "Worte, die ranken, engagieren und konvertieren. SEO-optimierte Inhalte für Suchmaschinen, KI-Plattformen und Ihre Zielgruppe." },
  "contentWriting.discussContentGoals": { en: "Discuss Content Goals", ar: "ناقش أهداف المحتوى", es: "Discutir Objetivos de Contenido", pt: "Discutir Metas de Conteúdo", fr: "Discuter des objectifs de contenu", it: "Discuti gli obiettivi dei contenuti", de: "Inhaltsziele besprechen" },
  "contentWriting.notAverage": { en: "Not Your Average Content Writer", ar: "لست كاتب محتوى عادي", es: "No Soy Un Escritor de Contenido Promedio", pt: "Não Sou Um Escritor de Conteúdo Comum", fr: "Pas un rédacteur de contenu ordinaire", it: "Non sono uno scrittore di contenuti qualsiasi", de: "Kein durchschnittlicher Content Writer" },
  "contentWriting.notAverageDesc": { en: "Unlike generic writers, I combine SEO expertise with conversion psychology to create content that actually delivers results.", ar: "على عكس الكتاب العاديين، أجمع بين خبرة SEO وعلم نفس التحويل لإنشاء محتوى يحقق النتائج فعلاً.", es: "A diferencia de los escritores genéricos, combino experiencia en SEO con psicología de conversión para crear contenido que realmente genera resultados.", pt: "Diferentemente de escritores genéricos, combino expertise em SEO com psicologia de conversão para criar conteúdo que realmente entrega resultados.", fr: "Contrairement aux rédacteurs génériques, je combine l'expertise SEO avec la psychologie de conversion pour créer du contenu qui livre vraiment des résultats.", it: "A differenza degli scrittori generici, combino competenza SEO con psicologia della conversione per creare contenuti che producono realmente risultati.", de: "Anders als generische Autoren kombiniere ich SEO-Expertise mit Conversion-Psychologie, um Inhalte zu erstellen, die tatsächlich Ergebnisse liefern." },
  "contentWriting.contentTypes": { en: "Content Types", ar: "أنواع المحتوى", es: "Tipos de Contenido", pt: "Tipos de Conteúdo", fr: "Types de contenu", it: "Tipi di contenuti", de: "Inhaltstypen" },
  "contentWriting.fullContentServices": { en: "Full Content Services", ar: "خدمات المحتوى الكاملة", es: "Servicios de Contenido Completo", pt: "Serviços de Conteúdo Completo", fr: "Services de contenu complets", it: "Servizi di contenuti completi", de: "Vollständige Content-Dienste" },
  "contentWriting.readyToCreate": { en: "Ready to Create Content That Converts?", ar: "مستعد لإنشاء محتوى يحول؟", es: "¿Listo para Crear Contenido Que Convierta?", pt: "Pronto para Criar Conteúdo Que Converte?", fr: "Prêt à créer du contenu qui convertit?", it: "Pronto a creare contenuti che convertono?", de: "Bereit, Inhalte zu erstellen, die konvertieren?" },
  "contentWriting.ctaDesc": { en: "Let's discuss your content goals and develop a strategy that drives traffic, engagement, and conversions.", ar: "دعنا نناقش أهداف المحتوى الخاصة بك ونطور استراتيجية تجلب الزيارات والتفاعل والتحويلات.", es: "Discutamos sus objetivos de contenido y desarrollemos una estrategia que genere tráfico, engagement y conversiones.", pt: "Vamos discutir seus objetivos de conteúdo e desenvolver uma estratégia que gere tráfego, engajamento e conversões.", fr: "Discutons de vos objectifs de contenu et développons une stratégie qui génère du trafic, de l'engagement et des conversions.", it: "Discutiamo i tuoi obiettivi di contenuto e sviluppiamo una strategia che generi traffico, engagement e conversioni.", de: "Lassen Sie uns Ihre Content-Ziele besprechen und eine Strategie entwickeln, die Traffic, Engagement und Conversions antreibt." },
  "contentWriting.discussContentStrategy": { en: "Discuss Content Strategy", ar: "ناقش استراتيجية المحتوى", es: "Discutir Estrategia de Contenido", pt: "Discutir Estratégia de Conteúdo", fr: "Discuter de la stratégie de contenu", it: "Discuti la strategia dei contenuti", de: "Content-Strategie besprechen" },

  // ============ GRAPHIC DESIGN PAGE ============
  "graphicDesign.title": { en: "Graphic Design Services", ar: "خدمات التصميم الجرافيكي", es: "Servicios de Diseño Gráfico", pt: "Serviços de Design Gráfico", fr: "Services de design graphique", it: "Servizi di design grafico", de: "Grafikdesign-Dienste" },
  "graphicDesign.description": { en: "Creative designs that capture attention, communicate your brand, and drive business results.", ar: "تصاميم إبداعية تجذب الانتباه وتنقل علامتك التجارية وتحقق نتائج الأعمال.", es: "Diseños creativos que capturan la atención, comunican su marca y generan resultados comerciales.", pt: "Designs criativos que capturam atenção, comunicam sua marca e geram resultados comerciais.", fr: "Des designs créatifs qui captent l'attention, communiquent votre marque et génèrent des résultats commerciaux.", it: "Design creativi che catturano l'attenzione, comunicano il tuo brand e generano risultati di business.", de: "Kreative Designs, die Aufmerksamkeit erregen, Ihre Marke kommunizieren und Geschäftsergebnisse liefern." },
  "graphicDesign.startProject": { en: "Start Your Design Project", ar: "ابدأ مشروع التصميم الخاص بك", es: "Inicie Su Proyecto de Diseño", pt: "Inicie Seu Projeto de Design", fr: "Commencez votre projet de design", it: "Inizia il tuo progetto di design", de: "Starten Sie Ihr Designprojekt" },
  "graphicDesign.designCategories": { en: "Design Categories", ar: "فئات التصميم", es: "Categorías de Diseño", pt: "Categorias de Design", fr: "Catégories de design", it: "Categorie di design", de: "Designkategorien" },
  "graphicDesign.allDesignServices": { en: "All Design Services", ar: "جميع خدمات التصميم", es: "Todos los Servicios de Diseño", pt: "Todos os Serviços de Design", fr: "Tous les services de design", it: "Tutti i servizi di design", de: "Alle Designdienste" },
  "graphicDesign.whyWorkWithMe": { en: "Why Work With Me", ar: "لماذا تعمل معي", es: "Por Qué Trabajar Conmigo", pt: "Por Que Trabalhar Comigo", fr: "Pourquoi travailler avec moi", it: "Perché lavorare con me", de: "Warum mit mir arbeiten" },
  "graphicDesign.readyToElevate": { en: "Ready to Elevate Your Brand?", ar: "مستعد لرفع مستوى علامتك التجارية؟", es: "¿Listo para Elevar Su Marca?", pt: "Pronto para Elevar Sua Marca?", fr: "Prêt à élever votre marque?", it: "Pronto a elevare il tuo brand?", de: "Bereit, Ihre Marke zu erheben?" },
  "graphicDesign.ctaDesc": { en: "Let's create stunning visuals that represent your brand and captivate your audience.", ar: "دعنا ننشئ صوراً مذهلة تمثل علامتك التجارية وتأسر جمهورك.", es: "Creemos visuales impresionantes que representen su marca y cautiven a su audiencia.", pt: "Vamos criar visuais impressionantes que representem sua marca e cativem seu público.", fr: "Créons des visuels époustouflants qui représentent votre marque et captivent votre audience.", it: "Creiamo visual straordinari che rappresentino il tuo brand e affascinino il tuo pubblico.", de: "Lassen Sie uns atemberaubende Visuals erstellen, die Ihre Marke repräsentieren und Ihr Publikum fesseln." },

  // ============ COUNTRY PAGES - UNIQUE SEO OPTIMIZED CONTENT ============
  "country.servingIn": { 
    en: "Trusted by businesses in", 
    ar: "موثوق به من قبل الشركات في", 
    es: "De confianza para negocios en", 
    pt: "Confiável para empresas em", 
    fr: "Fait confiance par les entreprises en", 
    it: "Affidato dalle aziende in", 
    de: "Vertraut von Unternehmen in" 
  },
  "country.heroTitle": { 
    en: "Grow Your Business with Local SEO in", 
    ar: "نمّي عملك مع SEO المحلي في", 
    es: "Haz Crecer Tu Negocio con SEO Local en", 
    pt: "Faça Seu Negócio Crescer com SEO Local em", 
    fr: "Développez Votre Entreprise avec le SEO Local en", 
    it: "Fai Crescere la Tua Attività con la SEO Locale in", 
    de: "Wachsen Sie mit Local SEO in" 
  },
  "country.heroDescription": { 
    en: "Want more phone calls, walk-ins, and online orders? I specialize in getting local businesses found on Google, Google Maps, and even AI search tools like ChatGPT. Simple strategies, real results.", 
    ar: "هل تريد المزيد من المكالمات والزيارات والطلبات عبر الإنترنت؟ أنا متخصص في جعل الشركات المحلية تظهر على Google وخرائط Google وحتى أدوات البحث بالذكاء الاصطناعي. استراتيجيات بسيطة ونتائج حقيقية.", 
    es: "¿Quieres más llamadas, visitas y pedidos online? Me especializo en hacer que los negocios locales aparezcan en Google, Google Maps e incluso herramientas de búsqueda con IA como ChatGPT. Estrategias simples, resultados reales.", 
    pt: "Quer mais ligações, visitas e pedidos online? Eu me especializo em fazer empresas locais aparecerem no Google, Google Maps e até ferramentas de busca com IA como ChatGPT. Estratégias simples, resultados reais.", 
    fr: "Vous voulez plus d'appels, de visites et de commandes en ligne? Je me spécialise dans la visibilité des entreprises locales sur Google, Google Maps et même les outils de recherche IA comme ChatGPT. Stratégies simples, résultats réels.", 
    it: "Vuoi più chiamate, visite e ordini online? Mi specializzo nel far trovare le attività locali su Google, Google Maps e persino strumenti di ricerca IA come ChatGPT. Strategie semplici, risultati reali.", 
    de: "Möchten Sie mehr Anrufe, Besuche und Online-Bestellungen? Ich bin darauf spezialisiert, lokale Unternehmen auf Google, Google Maps und sogar KI-Suchtools wie ChatGPT sichtbar zu machen. Einfache Strategien, echte Ergebnisse." 
  },
  "country.expertIn": { 
    en: "Helping service businesses grow in", 
    ar: "أساعد شركات الخدمات على النمو في", 
    es: "Ayudando a negocios de servicios a crecer en", 
    pt: "Ajudando empresas de serviços a crescer em", 
    fr: "Aidant les entreprises de services à se développer en", 
    it: "Aiutando le aziende di servizi a crescere in", 
    de: "Ich helfe Dienstleistungsunternehmen zu wachsen in" 
  },
  "country.aiReady": { 
    en: "Ready for Google, Maps & AI search.", 
    ar: "جاهز لـ Google والخرائط والبحث بالذكاء الاصطناعي.", 
    es: "Listo para Google, Mapas y búsqueda IA.", 
    pt: "Pronto para Google, Maps e busca IA.", 
    fr: "Prêt pour Google, Maps et recherche IA.", 
    it: "Pronto per Google, Maps e ricerca IA.", 
    de: "Bereit für Google, Maps & KI-Suche." 
  },
  "country.servingAllStates": { 
    en: "Working with businesses in all {count} states across", 
    ar: "نعمل مع الشركات في جميع الولايات الـ {count} عبر", 
    es: "Trabajando con negocios en los {count} estados de", 
    pt: "Trabalhando com empresas em todos os {count} estados de", 
    fr: "Travaillant avec des entreprises dans les {count} états de", 
    it: "Lavorando con aziende in tutti i {count} stati di", 
    de: "Zusammenarbeit mit Unternehmen in allen {count} Bundesstaaten von" 
  },
  "country.viewProjects": { 
    en: "See Client Results", 
    ar: "شاهد نتائج العملاء", 
    es: "Ver Resultados de Clientes", 
    pt: "Ver Resultados de Clientes", 
    fr: "Voir les résultats clients", 
    it: "Vedi risultati clienti", 
    de: "Kundenergebnisse ansehen" 
  },
  "country.getConsultation": { 
    en: "Free Strategy Call", 
    ar: "مكالمة استراتيجية مجانية", 
    es: "Llamada Estratégica Gratis", 
    pt: "Chamada Estratégica Gratuita", 
    fr: "Appel stratégique gratuit", 
    it: "Chiamata strategica gratuita", 
    de: "Kostenloses Strategiegespräch" 
  },
  "country.localExpert": { 
    en: "Your Local SEO Partner", 
    ar: "شريكك في SEO المحلي", 
    es: "Tu Socio de SEO Local", 
    pt: "Seu Parceiro de SEO Local", 
    fr: "Votre partenaire SEO local", 
    it: "Il tuo partner SEO locale", 
    de: "Ihr lokaler SEO-Partner" 
  },
  "country.specialist": { 
    en: "Expert", 
    ar: "خبير", 
    es: "Experto", 
    pt: "Especialista", 
    fr: "Expert", 
    it: "Esperto", 
    de: "Experte" 
  },
  "country.whyChooseUs": { 
    en: "What Makes Us Different", 
    ar: "ما الذي يميزنا", 
    es: "Qué Nos Hace Diferentes", 
    pt: "O Que Nos Torna Diferentes", 
    fr: "Ce qui nous différencie", 
    it: "Cosa ci rende diversi", 
    de: "Was uns unterscheidet" 
  },
  "country.authorityTitle": { 
    en: "Your Go-To Local SEO Partner in {country}", 
    ar: "شريكك الموثوق في SEO المحلي في {country}", 
    es: "Tu Socio de Confianza en SEO Local en {country}", 
    pt: "Seu Parceiro de Confiança em SEO Local em {country}", 
    fr: "Votre partenaire SEO local de confiance en {country}", 
    it: "Il tuo partner SEO locale di fiducia in {country}", 
    de: "Ihr vertrauenswürdiger lokaler SEO-Partner in {country}" 
  },
  "country.authoritySubtitle": { 
    en: "I work with restaurants, dentists, plumbers, lawyers, and other local businesses across {country} to bring in more customers through search.", 
    ar: "أعمل مع المطاعم وأطباء الأسنان والسباكين والمحامين والشركات المحلية الأخرى عبر {country} لجلب المزيد من العملاء من خلال البحث.", 
    es: "Trabajo con restaurantes, dentistas, plomeros, abogados y otros negocios locales en {country} para atraer más clientes a través de la búsqueda.", 
    pt: "Trabalho com restaurantes, dentistas, encanadores, advogados e outras empresas locais em {country} para trazer mais clientes através da busca.", 
    fr: "Je travaille avec des restaurants, dentistes, plombiers, avocats et autres entreprises locales en {country} pour attirer plus de clients via la recherche.", 
    it: "Lavoro con ristoranti, dentisti, idraulici, avvocati e altre attività locali in {country} per portare più clienti attraverso la ricerca.", 
    de: "Ich arbeite mit Restaurants, Zahnärzten, Klempnern, Anwälten und anderen lokalen Unternehmen in {country} zusammen, um mehr Kunden über die Suche zu gewinnen." 
  },
  "country.multiStateExpertise": { 
    en: "Coast-to-Coast Coverage", 
    ar: "تغطية من الساحل إلى الساحل", 
    es: "Cobertura de Costa a Costa", 
    pt: "Cobertura de Costa a Costa", 
    fr: "Couverture d'un bout à l'autre", 
    it: "Copertura da costa a costa", 
    de: "Küste-zu-Küste-Abdeckung" 
  },
  "country.multiStateDesc": { 
    en: "Whether you run a single location or have stores in {count} states, I know how to make each one rank locally in {country}.", 
    ar: "سواء كنت تدير موقعًا واحدًا أو لديك متاجر في {count} ولاية، أعرف كيف أجعل كل منها يتصدر محليًا في {country}.", 
    es: "Ya sea que tengas una ubicación o tiendas en {count} estados, sé cómo hacer que cada una se posicione localmente en {country}.", 
    pt: "Seja uma única localização ou lojas em {count} estados, sei como fazer cada uma ranquear localmente em {country}.", 
    fr: "Que vous ayez un seul emplacement ou des magasins dans {count} états, je sais comment faire classer chacun localement en {country}.", 
    it: "Che tu abbia una sede o negozi in {count} stati, so come far classificare ognuno localmente in {country}.", 
    de: "Ob Sie einen Standort oder Geschäfte in {count} Bundesstaaten haben, ich weiß, wie man jeden lokal in {country} ranken lässt." 
  },
  "country.mapOptimization": { 
    en: "Show Up on All Maps", 
    ar: "اظهر على جميع الخرائط", 
    es: "Aparece en Todos los Mapas", 
    pt: "Apareça em Todos os Mapas", 
    fr: "Apparaissez sur toutes les cartes", 
    it: "Appari su tutte le mappe", 
    de: "Erscheinen Sie auf allen Karten" 
  },
  "country.mapOptimizationDesc": { 
    en: "Get found on Google Maps, Apple Maps, and Bing Maps. Your customers search on all of them.", 
    ar: "كن موجودًا على خرائط Google وApple وBing. عملاؤك يبحثون على جميعها.", 
    es: "Aparece en Google Maps, Apple Maps y Bing Maps. Tus clientes buscan en todos.", 
    pt: "Seja encontrado no Google Maps, Apple Maps e Bing Maps. Seus clientes buscam em todos.", 
    fr: "Soyez trouvé sur Google Maps, Apple Maps et Bing Maps. Vos clients cherchent sur tous.", 
    it: "Fatti trovare su Google Maps, Apple Maps e Bing Maps. I tuoi clienti cercano su tutti.", 
    de: "Werden Sie auf Google Maps, Apple Maps und Bing Maps gefunden. Ihre Kunden suchen auf allen." 
  },
  "country.aiSearchReady": { 
    en: "Ready for AI Search", 
    ar: "جاهز للبحث بالذكاء الاصطناعي", 
    es: "Listo para Búsqueda IA", 
    pt: "Pronto para Busca IA", 
    fr: "Prêt pour la recherche IA", 
    it: "Pronto per la ricerca IA", 
    de: "Bereit für KI-Suche" 
  },
  "country.aiSearchReadyDesc": { 
    en: "People now ask ChatGPT and Google AI for recommendations. I make sure your business gets mentioned.", 
    ar: "الناس الآن يسألون ChatGPT و Google AI عن التوصيات. أتأكد من ذكر عملك.", 
    es: "La gente ahora pregunta a ChatGPT y Google AI por recomendaciones. Me aseguro de que tu negocio sea mencionado.", 
    pt: "As pessoas agora perguntam ao ChatGPT e Google AI por recomendações. Eu garanto que seu negócio seja mencionado.", 
    fr: "Les gens demandent maintenant des recommandations à ChatGPT et Google AI. Je m'assure que votre entreprise soit mentionnée.", 
    it: "Le persone ora chiedono raccomandazioni a ChatGPT e Google AI. Mi assicuro che la tua attività venga menzionata.", 
    de: "Menschen fragen jetzt ChatGPT und Google AI nach Empfehlungen. Ich sorge dafür, dass Ihr Unternehmen erwähnt wird." 
  },
  "country.localSearchDominance": { 
    en: "Beat Your Competitors", 
    ar: "تفوق على منافسيك", 
    es: "Supera a Tus Competidores", 
    pt: "Supere Seus Concorrentes", 
    fr: "Battez vos concurrents", 
    it: "Batti i tuoi concorrenti", 
    de: "Schlagen Sie Ihre Konkurrenten" 
  },
  "country.localSearchDominanceDesc": { 
    en: "When someone searches for your service in {country}, you should show up first. I make that happen.", 
    ar: "عندما يبحث شخص ما عن خدمتك في {country}، يجب أن تظهر أولاً. أنا أجعل ذلك يحدث.", 
    es: "Cuando alguien busca tu servicio en {country}, deberías aparecer primero. Yo hago que eso suceda.", 
    pt: "Quando alguém busca seu serviço em {country}, você deve aparecer primeiro. Eu faço isso acontecer.", 
    fr: "Quand quelqu'un cherche votre service en {country}, vous devriez apparaître en premier. Je fais en sorte que cela arrive.", 
    it: "Quando qualcuno cerca il tuo servizio in {country}, dovresti apparire per primo. Io faccio in modo che succeda.", 
    de: "Wenn jemand nach Ihrem Service in {country} sucht, sollten Sie zuerst erscheinen. Ich mache das möglich." 
  },
  "country.googlePartner": { 
    en: "Google Certified", 
    ar: "معتمد من Google", 
    es: "Certificado por Google", 
    pt: "Certificado pelo Google", 
    fr: "Certifié Google", 
    it: "Certificato Google", 
    de: "Google-zertifiziert" 
  },
  "country.provenResults": { 
    en: "Real Client Results", 
    ar: "نتائج عملاء حقيقية", 
    es: "Resultados Reales de Clientes", 
    pt: "Resultados Reais de Clientes", 
    fr: "Résultats clients réels", 
    it: "Risultati clienti reali", 
    de: "Echte Kundenergebnisse" 
  },
  "country.transparentReporting": { 
    en: "Clear Monthly Reports", 
    ar: "تقارير شهرية واضحة", 
    es: "Informes Mensuales Claros", 
    pt: "Relatórios Mensais Claros", 
    fr: "Rapports mensuels clairs", 
    it: "Report mensili chiari", 
    de: "Klare monatliche Berichte" 
  },
  "country.serviceArea": { 
    en: "Where I Work", 
    ar: "أين أعمل", 
    es: "Dónde Trabajo", 
    pt: "Onde Trabalho", 
    fr: "Où je travaille", 
    it: "Dove lavoro", 
    de: "Wo ich arbeite" 
  },
  "country.servingBusinesses": { 
    en: "Local SEO Across {country}", 
    ar: "SEO محلي عبر {country}", 
    es: "SEO Local en {country}", 
    pt: "SEO Local em {country}", 
    fr: "SEO Local en {country}", 
    it: "SEO Locale in {country}", 
    de: "Lokales SEO in {country}" 
  },
  "country.mapDescription": { 
    en: "No matter where your business is located, I can help you rank higher in local search. Click on any state to learn more about my services there.", 
    ar: "بغض النظر عن موقع عملك، يمكنني مساعدتك في التصدر في البحث المحلي. انقر على أي ولاية لمعرفة المزيد عن خدماتي هناك.", 
    es: "No importa dónde esté ubicado tu negocio, puedo ayudarte a posicionarte mejor en la búsqueda local. Haz clic en cualquier estado para saber más.", 
    pt: "Não importa onde seu negócio esteja localizado, posso ajudá-lo a rankear melhor na busca local. Clique em qualquer estado para saber mais.", 
    fr: "Peu importe où se trouve votre entreprise, je peux vous aider à mieux vous classer dans la recherche locale. Cliquez sur un état pour en savoir plus.", 
    it: "Non importa dove si trovi la tua attività, posso aiutarti a classificarti meglio nella ricerca locale. Clicca su uno stato per saperne di più.", 
    de: "Egal wo Ihr Unternehmen sich befindet, ich kann Ihnen helfen, in der lokalen Suche besser zu ranken. Klicken Sie auf einen Bundesstaat, um mehr zu erfahren." 
  },
  "country.statesServed": { 
    en: "States with Active Clients", 
    ar: "ولايات بها عملاء نشطون", 
    es: "Estados con Clientes Activos", 
    pt: "Estados com Clientes Ativos", 
    fr: "États avec clients actifs", 
    it: "Stati con clienti attivi", 
    de: "Bundesstaaten mit aktiven Kunden" 
  },
  "country.servingAllRegions": { 
    en: "Working with businesses everywhere in {country}", 
    ar: "نعمل مع الشركات في كل مكان في {country}", 
    es: "Trabajando con negocios en todas partes de {country}", 
    pt: "Trabalhando com empresas em todos os lugares de {country}", 
    fr: "Travaillant avec des entreprises partout en {country}", 
    it: "Lavorando con aziende ovunque in {country}", 
    de: "Zusammenarbeit mit Unternehmen überall in {country}" 
  },
  "country.allStatesHeading": { 
    en: "All States We Serve", 
    ar: "جميع الولايات التي نخدمها", 
    es: "Todos los Estados que Atendemos", 
    pt: "Todos os Estados que Atendemos", 
    fr: "Tous les états que nous desservons", 
    it: "Tutti gli stati che serviamo", 
    de: "Alle Bundesstaaten, die wir bedienen" 
  },
  "country.ourServices": { 
    en: "What I Do", 
    ar: "ما أقوم به", 
    es: "Lo Que Hago", 
    pt: "O Que Eu Faço", 
    fr: "Ce que je fais", 
    it: "Cosa faccio", 
    de: "Was ich tue" 
  },
  "country.servicesTitle": { 
    en: "Local SEO Services That Get Results in {country}", 
    ar: "خدمات SEO محلية تحقق نتائج في {country}", 
    es: "Servicios de SEO Local que Obtienen Resultados en {country}", 
    pt: "Serviços de SEO Local que Obtêm Resultados em {country}", 
    fr: "Services SEO Local qui obtiennent des résultats en {country}", 
    it: "Servizi SEO Locale che ottengono risultati in {country}", 
    de: "Lokale SEO-Dienste, die Ergebnisse in {country} erzielen" 
  },
  "country.servicesSubtitle": { 
    en: "From setting up your Google Business Profile to building citations and managing reviews, here is how I help businesses win in local search.", 
    ar: "من إعداد ملفك التجاري على Google إلى بناء الاستشهادات وإدارة التقييمات، هكذا أساعد الشركات على الفوز في البحث المحلي.", 
    es: "Desde configurar tu Perfil de Negocio de Google hasta construir citaciones y gestionar reseñas, así es como ayudo a los negocios a ganar en la búsqueda local.", 
    pt: "Desde configurar seu Perfil de Negócio do Google até construir citações e gerenciar avaliações, é assim que ajudo empresas a vencer na busca local.", 
    fr: "De la configuration de votre profil Google Business à la création de citations et la gestion des avis, voici comment j'aide les entreprises à gagner dans la recherche locale.", 
    it: "Dalla configurazione del tuo Profilo Business Google alla creazione di citazioni e gestione delle recensioni, ecco come aiuto le aziende a vincere nella ricerca locale.", 
    de: "Von der Einrichtung Ihres Google Business-Profils über den Aufbau von Zitationen bis zur Verwaltung von Bewertungen - so helfe ich Unternehmen, in der lokalen Suche zu gewinnen." 
  },
  "country.service.localSeo": { 
    en: "Local Search Optimization", 
    ar: "تحسين البحث المحلي", 
    es: "Optimización de Búsqueda Local", 
    pt: "Otimização de Busca Local", 
    fr: "Optimisation de recherche locale", 
    it: "Ottimizzazione ricerca locale", 
    de: "Lokale Suchoptimierung" 
  },
  "country.service.localSeoDesc": { 
    en: "Get your business to appear when people in {country} search for what you offer. More visibility means more customers.", 
    ar: "اجعل عملك يظهر عندما يبحث الناس في {country} عما تقدمه. المزيد من الظهور يعني المزيد من العملاء.", 
    es: "Haz que tu negocio aparezca cuando la gente en {country} busque lo que ofreces. Más visibilidad significa más clientes.", 
    pt: "Faça seu negócio aparecer quando as pessoas em {country} buscarem o que você oferece. Mais visibilidade significa mais clientes.", 
    fr: "Faites apparaître votre entreprise quand les gens en {country} cherchent ce que vous offrez. Plus de visibilité signifie plus de clients.", 
    it: "Fai apparire la tua attività quando le persone in {country} cercano ciò che offri. Più visibilità significa più clienti.", 
    de: "Lassen Sie Ihr Unternehmen erscheinen, wenn Menschen in {country} nach dem suchen, was Sie anbieten. Mehr Sichtbarkeit bedeutet mehr Kunden." 
  },
  "country.service.gbp": { 
    en: "Google Business Profile", 
    ar: "ملف Google التجاري", 
    es: "Perfil de Negocio de Google", 
    pt: "Perfil de Negócio do Google", 
    fr: "Profil Google Business", 
    it: "Profilo Google Business", 
    de: "Google Business Profil" 
  },
  "country.service.gbpDesc": { 
    en: "Your Google listing is often the first thing customers see. I make sure it stands out and converts in {country}.", 
    ar: "قائمتك على Google غالبًا ما تكون أول ما يراه العملاء. أتأكد من أنها تبرز وتحول في {country}.", 
    es: "Tu ficha de Google suele ser lo primero que ven los clientes. Me aseguro de que destaque y convierta en {country}.", 
    pt: "Sua listagem do Google geralmente é a primeira coisa que os clientes veem. Eu garanto que ela se destaque e converta em {country}.", 
    fr: "Votre fiche Google est souvent la première chose que les clients voient. Je m'assure qu'elle se démarque et convertisse en {country}.", 
    it: "La tua scheda Google è spesso la prima cosa che i clienti vedono. Mi assicuro che si distingua e converta in {country}.", 
    de: "Ihr Google-Eintrag ist oft das Erste, was Kunden sehen. Ich sorge dafür, dass er auffällt und in {country} konvertiert." 
  },
  "country.service.mapSeo": { 
    en: "Map Rankings", 
    ar: "تصنيفات الخرائط", 
    es: "Rankings en Mapas", 
    pt: "Rankings em Mapas", 
    fr: "Classements sur les cartes", 
    it: "Classifiche mappe", 
    de: "Karten-Rankings" 
  },
  "country.service.mapSeoDesc": { 
    en: "When someone opens Google Maps looking for a business like yours, you want to be in the top 3. That is my specialty.", 
    ar: "عندما يفتح شخص ما خرائط Google للبحث عن عمل مثل عملك، تريد أن تكون في أفضل 3. هذا تخصصي.", 
    es: "Cuando alguien abre Google Maps buscando un negocio como el tuyo, quieres estar en el top 3. Esa es mi especialidad.", 
    pt: "Quando alguém abre o Google Maps procurando um negócio como o seu, você quer estar no top 3. Essa é minha especialidade.", 
    fr: "Quand quelqu'un ouvre Google Maps pour chercher une entreprise comme la vôtre, vous voulez être dans le top 3. C'est ma spécialité.", 
    it: "Quando qualcuno apre Google Maps cercando un'attività come la tua, vuoi essere nei primi 3. Questa è la mia specialità.", 
    de: "Wenn jemand Google Maps öffnet und nach einem Unternehmen wie Ihrem sucht, wollen Sie in den Top 3 sein. Das ist meine Spezialität." 
  },
  "country.service.aiSeo": { 
    en: "AI Search Visibility", 
    ar: "الظهور في البحث بالذكاء الاصطناعي", 
    es: "Visibilidad en Búsqueda IA", 
    pt: "Visibilidade em Busca IA", 
    fr: "Visibilité dans la recherche IA", 
    it: "Visibilità nella ricerca IA", 
    de: "KI-Such-Sichtbarkeit" 
  },
  "country.service.aiSeoDesc": { 
    en: "More people are using ChatGPT and Google AI to find local businesses. I help you get recommended in these new search channels.", 
    ar: "المزيد من الناس يستخدمون ChatGPT و Google AI للعثور على الشركات المحلية. أساعدك على الحصول على توصيات في قنوات البحث الجديدة هذه.", 
    es: "Más personas usan ChatGPT y Google AI para encontrar negocios locales. Te ayudo a ser recomendado en estos nuevos canales de búsqueda.", 
    pt: "Mais pessoas estão usando ChatGPT e Google AI para encontrar empresas locais. Eu ajudo você a ser recomendado nesses novos canais de busca.", 
    fr: "De plus en plus de personnes utilisent ChatGPT et Google AI pour trouver des entreprises locales. Je vous aide à être recommandé dans ces nouveaux canaux de recherche.", 
    it: "Più persone usano ChatGPT e Google AI per trovare attività locali. Ti aiuto a essere raccomandato in questi nuovi canali di ricerca.", 
    de: "Immer mehr Menschen nutzen ChatGPT und Google AI, um lokale Unternehmen zu finden. Ich helfe Ihnen, in diesen neuen Suchkanälen empfohlen zu werden." 
  },
  "country.service.reputation": { 
    en: "Review Management", 
    ar: "إدارة التقييمات", 
    es: "Gestión de Reseñas", 
    pt: "Gestão de Avaliações", 
    fr: "Gestion des avis", 
    it: "Gestione recensioni", 
    de: "Bewertungsmanagement" 
  },
  "country.service.reputationDesc": { 
    en: "Good reviews build trust and improve rankings. I help you get more positive reviews and respond to feedback professionally.", 
    ar: "التقييمات الجيدة تبني الثقة وتحسن التصنيفات. أساعدك في الحصول على المزيد من التقييمات الإيجابية والرد على الملاحظات باحترافية.", 
    es: "Las buenas reseñas generan confianza y mejoran los rankings. Te ayudo a obtener más reseñas positivas y responder profesionalmente.", 
    pt: "Boas avaliações constroem confiança e melhoram os rankings. Eu ajudo você a obter mais avaliações positivas e responder profissionalmente.", 
    fr: "Les bons avis renforcent la confiance et améliorent les classements. Je vous aide à obtenir plus d'avis positifs et à répondre professionnellement.", 
    it: "Le buone recensioni costruiscono fiducia e migliorano le classifiche. Ti aiuto a ottenere più recensioni positive e a rispondere professionalmente.", 
    de: "Gute Bewertungen bauen Vertrauen auf und verbessern Rankings. Ich helfe Ihnen, mehr positive Bewertungen zu erhalten und professionell zu antworten." 
  },
  "country.service.localRankings": { 
    en: "Ranking Tracking", 
    ar: "تتبع التصنيفات", 
    es: "Seguimiento de Rankings", 
    pt: "Acompanhamento de Rankings", 
    fr: "Suivi des classements", 
    it: "Monitoraggio classifiche", 
    de: "Ranking-Tracking" 
  },
  "country.service.localRankingsDesc": { 
    en: "I track where you rank for the searches that matter most in {country} and show you exactly how we are improving.", 
    ar: "أتابع ترتيبك في عمليات البحث الأكثر أهمية في {country} وأريك بالضبط كيف نتحسن.", 
    es: "Rastro dónde rankeas para las búsquedas más importantes en {country} y te muestro exactamente cómo estamos mejorando.", 
    pt: "Acompanho onde você rankeia para as buscas mais importantes em {country} e mostro exatamente como estamos melhorando.", 
    fr: "Je suis où vous vous classez pour les recherches les plus importantes en {country} et vous montre exactement comment nous nous améliorons.", 
    it: "Monitoro dove ti classifichi per le ricerche più importanti in {country} e ti mostro esattamente come stiamo migliorando.", 
    de: "Ich verfolge, wo Sie für die wichtigsten Suchanfragen in {country} ranken und zeige Ihnen genau, wie wir uns verbessern." 
  },
  "country.service.localContent": { 
    en: "Local Content", 
    ar: "المحتوى المحلي", 
    es: "Contenido Local", 
    pt: "Conteúdo Local", 
    fr: "Contenu local", 
    it: "Contenuti locali", 
    de: "Lokaler Inhalt" 
  },
  "country.service.localContentDesc": { 
    en: "I create website pages and blog posts that speak to your local audience in {country} and help you rank for local searches.", 
    ar: "أنشئ صفحات موقع ومقالات مدونة تخاطب جمهورك المحلي في {country} وتساعدك على التصدر في عمليات البحث المحلية.", 
    es: "Creo páginas web y publicaciones de blog que hablan a tu audiencia local en {country} y te ayudan a posicionarte en búsquedas locales.", 
    pt: "Crio páginas de site e posts de blog que falam com seu público local em {country} e ajudam você a rankear em buscas locais.", 
    fr: "Je crée des pages web et des articles de blog qui parlent à votre public local en {country} et vous aident à vous classer pour les recherches locales.", 
    it: "Creo pagine web e post del blog che parlano al tuo pubblico locale in {country} e ti aiutano a classificarti per le ricerche locali.", 
    de: "Ich erstelle Website-Seiten und Blog-Posts, die Ihr lokales Publikum in {country} ansprechen und Ihnen helfen, für lokale Suchanfragen zu ranken." 
  },
  "country.service.analytics": { 
    en: "Performance Reports", 
    ar: "تقارير الأداء", 
    es: "Informes de Rendimiento", 
    pt: "Relatórios de Desempenho", 
    fr: "Rapports de performance", 
    it: "Report delle prestazioni", 
    de: "Leistungsberichte" 
  },
  "country.service.analyticsDesc": { 
    en: "Every month, you get a clear report showing calls, clicks, and rankings. No confusing jargon, just results you can understand.", 
    ar: "كل شهر، تحصل على تقرير واضح يظهر المكالمات والنقرات والتصنيفات. لا مصطلحات مربكة، فقط نتائج يمكنك فهمها.", 
    es: "Cada mes, recibes un informe claro mostrando llamadas, clics y rankings. Sin jerga confusa, solo resultados que puedes entender.", 
    pt: "Todo mês, você recebe um relatório claro mostrando ligações, cliques e rankings. Sem jargão confuso, apenas resultados que você pode entender.", 
    fr: "Chaque mois, vous recevez un rapport clair montrant les appels, les clics et les classements. Pas de jargon confus, juste des résultats compréhensibles.", 
    it: "Ogni mese, ricevi un report chiaro che mostra chiamate, clic e classifiche. Nessun gergo confuso, solo risultati che puoi capire.", 
    de: "Jeden Monat erhalten Sie einen klaren Bericht mit Anrufen, Klicks und Rankings. Kein verwirrendes Fachjargon, nur Ergebnisse, die Sie verstehen können." 
  },
  "country.cta.provenResults": { 
    en: "Client Success", 
    ar: "نجاح العملاء", 
    es: "Éxito de Clientes", 
    pt: "Sucesso de Clientes", 
    fr: "Succès clients", 
    it: "Successo clienti", 
    de: "Kundenerfolg" 
  },
  "country.cta.title": { 
    en: "Real Results from {country} Businesses", 
    ar: "نتائج حقيقية من شركات {country}", 
    es: "Resultados Reales de Negocios en {country}", 
    pt: "Resultados Reais de Empresas em {country}", 
    fr: "Résultats réels d'entreprises en {country}", 
    it: "Risultati reali da aziende in {country}", 
    de: "Echte Ergebnisse von Unternehmen in {country}" 
  },
  "country.cta.subtitle": { 
    en: "These are not made-up numbers. These are results from real local businesses that trusted me with their SEO.", 
    ar: "هذه ليست أرقامًا مختلقة. هذه نتائج من شركات محلية حقيقية وثقت بي في SEO الخاص بها.", 
    es: "Estos no son números inventados. Estos son resultados de negocios locales reales que confiaron en mí para su SEO.", 
    pt: "Esses não são números inventados. Esses são resultados de empresas locais reais que confiaram em mim para seu SEO.", 
    fr: "Ce ne sont pas des chiffres inventés. Ce sont des résultats d'entreprises locales réelles qui m'ont fait confiance pour leur SEO.", 
    it: "Questi non sono numeri inventati. Questi sono risultati da aziende locali reali che mi hanno affidato la loro SEO.", 
    de: "Das sind keine erfundenen Zahlen. Das sind Ergebnisse von echten lokalen Unternehmen, die mir ihre SEO anvertraut haben." 
  },
  "country.cta.trafficIncrease": { 
    en: "Avg. Traffic Growth", 
    ar: "متوسط نمو الزيارات", 
    es: "Crecimiento Promedio de Tráfico", 
    pt: "Crescimento Médio de Tráfego", 
    fr: "Croissance moyenne du trafic", 
    it: "Crescita media del traffico", 
    de: "Durchschn. Traffic-Wachstum" 
  },
  "country.cta.callsIncrease": { 
    en: "More Phone Calls", 
    ar: "مكالمات هاتفية أكثر", 
    es: "Más Llamadas Telefónicas", 
    pt: "Mais Ligações Telefônicas", 
    fr: "Plus d'appels téléphoniques", 
    it: "Più chiamate", 
    de: "Mehr Telefonanrufe" 
  },
  "country.cta.topRankings": { 
    en: "Map Pack Ranking", 
    ar: "ترتيب حزمة الخريطة", 
    es: "Ranking en Map Pack", 
    pt: "Ranking no Map Pack", 
    fr: "Classement Map Pack", 
    it: "Classifica Map Pack", 
    de: "Map Pack Ranking" 
  },
  "country.cta.realClients": { 
    en: "Verified Results", 
    ar: "نتائج موثقة", 
    es: "Resultados Verificados", 
    pt: "Resultados Verificados", 
    fr: "Résultats vérifiés", 
    it: "Risultati verificati", 
    de: "Verifizierte Ergebnisse" 
  },
  "country.cta.measurableResults": { 
    en: "ROI You Can See", 
    ar: "عائد استثمار يمكنك رؤيته", 
    es: "ROI que Puedes Ver", 
    pt: "ROI que Você Pode Ver", 
    fr: "ROI visible", 
    it: "ROI visibile", 
    de: "Sichtbarer ROI" 
  },
  "country.cta.transparentProcess": { 
    en: "No Hidden Fees", 
    ar: "لا رسوم مخفية", 
    es: "Sin Tarifas Ocultas", 
    pt: "Sem Taxas Ocultas", 
    fr: "Pas de frais cachés", 
    it: "Nessun costo nascosto", 
    de: "Keine versteckten Gebühren" 
  },
  "country.cta.viewCaseStudies": { 
    en: "See More {country} Success Stories", 
    ar: "شاهد المزيد من قصص النجاح في {country}", 
    es: "Ver Más Historias de Éxito de {country}", 
    pt: "Ver Mais Histórias de Sucesso de {country}", 
    fr: "Voir plus de réussites en {country}", 
    it: "Vedi più storie di successo di {country}", 
    de: "Mehr Erfolgsgeschichten aus {country} ansehen" 
  },
  "country.contact.getStarted": { 
    en: "Let's Talk", 
    ar: "لنتحدث", 
    es: "Hablemos", 
    pt: "Vamos Conversar", 
    fr: "Parlons-en", 
    it: "Parliamone", 
    de: "Lass uns reden" 
  },
  "country.contact.title": { 
    en: "Ready to Get More Customers in {country}?", 
    ar: "مستعد للحصول على المزيد من العملاء في {country}؟", 
    es: "¿Listo para Conseguir Más Clientes en {country}?", 
    pt: "Pronto para Conseguir Mais Clientes em {country}?", 
    fr: "Prêt à obtenir plus de clients en {country}?", 
    it: "Pronto a ottenere più clienti in {country}?", 
    de: "Bereit, mehr Kunden in {country} zu gewinnen?" 
  },
  "country.contact.subtitle": { 
    en: "Book a free call to discuss your business goals. No sales pitch, just honest advice on how to grow your local presence.", 
    ar: "احجز مكالمة مجانية لمناقشة أهداف عملك. لا عروض بيع، فقط نصيحة صادقة حول كيفية تنمية حضورك المحلي.", 
    es: "Reserva una llamada gratuita para discutir los objetivos de tu negocio. Sin discurso de ventas, solo consejos honestos sobre cómo hacer crecer tu presencia local.", 
    pt: "Agende uma chamada gratuita para discutir os objetivos do seu negócio. Sem discurso de vendas, apenas conselhos honestos sobre como crescer sua presença local.", 
    fr: "Réservez un appel gratuit pour discuter de vos objectifs commerciaux. Pas de discours de vente, juste des conseils honnêtes sur la façon de développer votre présence locale.", 
    it: "Prenota una chiamata gratuita per discutere i tuoi obiettivi aziendali. Nessun discorso di vendita, solo consigli onesti su come far crescere la tua presenza locale.", 
    de: "Buchen Sie ein kostenloses Gespräch, um Ihre Geschäftsziele zu besprechen. Kein Verkaufsgespräch, nur ehrliche Ratschläge, wie Sie Ihre lokale Präsenz ausbauen können." 
  },
  "country.contact.bookCall": { 
    en: "Book Free Call", 
    ar: "احجز مكالمة مجانية", 
    es: "Reservar Llamada Gratis", 
    pt: "Agendar Chamada Grátis", 
    fr: "Réserver un appel gratuit", 
    it: "Prenota chiamata gratuita", 
    de: "Kostenlosen Anruf buchen" 
  },
  "country.contact.bookCallDesc": { 
    en: "30-minute strategy session, completely free.", 
    ar: "جلسة استراتيجية مدتها 30 دقيقة، مجانية تمامًا.", 
    es: "Sesión estratégica de 30 minutos, completamente gratis.", 
    pt: "Sessão estratégica de 30 minutos, totalmente gratuita.", 
    fr: "Session stratégique de 30 minutes, entièrement gratuite.", 
    it: "Sessione strategica di 30 minuti, completamente gratuita.", 
    de: "30-minütige Strategiesitzung, völlig kostenlos." 
  },
  "country.contact.whatsappDesc": { 
    en: "Quick questions? Message me anytime.", 
    ar: "أسئلة سريعة؟ راسلني في أي وقت.", 
    es: "¿Preguntas rápidas? Escríbeme cuando quieras.", 
    pt: "Perguntas rápidas? Me mande mensagem a qualquer hora.", 
    fr: "Questions rapides? Envoyez-moi un message à tout moment.", 
    it: "Domande veloci? Scrivimi quando vuoi.", 
    de: "Schnelle Fragen? Schreiben Sie mir jederzeit." 
  },
  "country.contact.servingClients": { 
    en: "Currently Working With", 
    ar: "أعمل حاليًا مع", 
    es: "Actualmente Trabajando Con", 
    pt: "Atualmente Trabalhando Com", 
    fr: "Travaillant actuellement avec", 
    it: "Attualmente lavorando con", 
    de: "Derzeit zusammenarbeitend mit" 
  },
  "country.contact.allStates": { 
    en: "Clients in all {count} {country} states", 
    ar: "عملاء في جميع ولايات {country} الـ {count}", 
    es: "Clientes en los {count} estados de {country}", 
    pt: "Clientes em todos os {count} estados de {country}", 
    fr: "Clients dans les {count} états de {country}", 
    it: "Clienti in tutti i {count} stati di {country}", 
    de: "Kunden in allen {count} Bundesstaaten von {country}" 
  },
  "country.contact.sendMessage": { 
    en: "Send a Message", 
    ar: "أرسل رسالة", 
    es: "Envía un Mensaje", 
    pt: "Envie uma Mensagem", 
    fr: "Envoyez un message", 
    it: "Invia un messaggio", 
    de: "Nachricht senden" 
  },
  "country.seo.title": { 
    en: "{service} Services in {country} | Syed Hadi Hussain", 
    ar: "خدمات {service} في {country} | سيد هادي حسين", 
    es: "Servicios de {service} en {country} | Syed Hadi Hussain", 
    pt: "Serviços de {service} em {country} | Syed Hadi Hussain", 
    fr: "Services {service} en {country} | Syed Hadi Hussain", 
    it: "Servizi {service} in {country} | Syed Hadi Hussain", 
    de: "{service} Dienste in {country} | Syed Hadi Hussain" 
  },
  "country.seo.description": { 
    en: "Get more customers with Local SEO services across all {count} states. Dominate Google Maps, local search, and AI search engines. 7+ years experience.", 
    ar: "احصل على المزيد من العملاء مع خدمات SEO المحلية عبر جميع الولايات الـ {count}. تصدر خرائط Google والبحث المحلي ومحركات البحث AI. خبرة 7+ سنوات.", 
    es: "Consigue más clientes con servicios de SEO Local en los {count} estados. Domina Google Maps, búsqueda local y motores de búsqueda IA. 7+ años de experiencia.", 
    pt: "Consiga mais clientes com serviços de SEO Local em todos os {count} estados. Domine Google Maps, busca local e mecanismos de busca IA. 7+ anos de experiência.", 
    fr: "Obtenez plus de clients avec les services SEO Local dans les {count} états. Dominez Google Maps, la recherche locale et les moteurs IA. 7+ ans d'expérience.", 
    it: "Ottieni più clienti con i servizi SEO Locale in tutti i {count} stati. Domina Google Maps, ricerca locale e motori di ricerca IA. 7+ anni di esperienza.", 
    de: "Gewinnen Sie mehr Kunden mit lokalen SEO-Diensten in allen {count} Bundesstaaten. Dominieren Sie Google Maps, lokale Suche und KI-Suchmaschinen. 7+ Jahre Erfahrung." 
  },
  "country.seo.localSeo": { 
    en: "Local SEO", 
    ar: "SEO المحلي", 
    es: "SEO Local", 
    pt: "SEO Local", 
    fr: "SEO Local", 
    it: "SEO Locale", 
    de: "Lokales SEO" 
  },

  // ============ STATE PAGES - UNIQUE SEO OPTIMIZED CONTENT ============
  "nav.home": { 
    en: "Home", 
    ar: "الرئيسية", 
    es: "Inicio", 
    pt: "Início", 
    fr: "Accueil", 
    it: "Home", 
    de: "Startseite" 
  },
  "state.unitedStates": { 
    en: "United States", 
    ar: "الولايات المتحدة", 
    es: "Estados Unidos", 
    pt: "Estados Unidos", 
    fr: "États-Unis", 
    it: "Stati Uniti", 
    de: "Vereinigte Staaten" 
  },
  "state.servingCities": { 
    en: "Serving {count}+ cities in {state}", 
    ar: "نخدم أكثر من {count} مدينة في {state}", 
    es: "Sirviendo más de {count} ciudades en {state}", 
    pt: "Atendendo mais de {count} cidades em {state}", 
    fr: "Desservant plus de {count} villes en {state}", 
    it: "Servendo oltre {count} città in {state}", 
    de: "Über {count} Städte in {state} betreuen" 
  },
  "state.heroTitle": { 
    en: "Local SEO Expert for {state} Businesses", 
    ar: "خبير SEO المحلي للشركات في {state}", 
    es: "Experto en SEO Local para Negocios en {state}", 
    pt: "Especialista em SEO Local para Empresas em {state}", 
    fr: "Expert SEO Local pour les Entreprises en {state}", 
    it: "Esperto SEO Locale per Aziende in {state}", 
    de: "Lokaler SEO-Experte für {state} Unternehmen" 
  },
  "state.heroDescription": { 
    en: "I help {state} businesses get found on Google, Google Maps, and AI-powered search. From Miami to Jacksonville, Tampa to Orlando, my strategies bring more calls, more visits, and more sales to businesses across {count}+ cities.", 
    ar: "أساعد شركات {state} على الظهور في Google وخرائط Google والبحث المدعوم بالذكاء الاصطناعي. من ميامي إلى جاكسونفيل، ومن تامبا إلى أورلاندو، استراتيجياتي تجلب المزيد من المكالمات والزيارات والمبيعات للشركات في أكثر من {count} مدينة.", 
    es: "Ayudo a negocios de {state} a aparecer en Google, Google Maps y búsqueda con IA. Desde Miami hasta Jacksonville, Tampa hasta Orlando, mis estrategias traen más llamadas, más visitas y más ventas a negocios en más de {count} ciudades.", 
    pt: "Ajudo empresas de {state} a serem encontradas no Google, Google Maps e busca com IA. De Miami a Jacksonville, Tampa a Orlando, minhas estratégias trazem mais ligações, mais visitas e mais vendas para empresas em mais de {count} cidades.", 
    fr: "J'aide les entreprises de {state} à être trouvées sur Google, Google Maps et la recherche IA. De Miami à Jacksonville, Tampa à Orlando, mes stratégies apportent plus d'appels, plus de visites et plus de ventes aux entreprises dans plus de {count} villes.", 
    it: "Aiuto le aziende di {state} a farsi trovare su Google, Google Maps e ricerca IA. Da Miami a Jacksonville, Tampa a Orlando, le mie strategie portano più chiamate, più visite e più vendite alle aziende in oltre {count} città.", 
    de: "Ich helfe {state}-Unternehmen, auf Google, Google Maps und KI-gestützter Suche gefunden zu werden. Von Miami bis Jacksonville, Tampa bis Orlando, meine Strategien bringen mehr Anrufe, mehr Besuche und mehr Verkäufe für Unternehmen in über {count} Städten." 
  },
  "state.getFreeAudit": { 
    en: "Get Free SEO Audit", 
    ar: "احصل على تدقيق SEO مجاني", 
    es: "Obtener Auditoría SEO Gratis", 
    pt: "Obter Auditoria SEO Grátis", 
    fr: "Obtenir un Audit SEO Gratuit", 
    it: "Ottieni Audit SEO Gratuito", 
    de: "Kostenloses SEO-Audit erhalten" 
  },
  "state.viewServices": { 
    en: "View Services", 
    ar: "عرض الخدمات", 
    es: "Ver Servicios", 
    pt: "Ver Serviços", 
    fr: "Voir les Services", 
    it: "Vedi Servizi", 
    de: "Dienste ansehen" 
  },
  "state.yearsExperience": { 
    en: "Years Experience", 
    ar: "سنوات الخبرة", 
    es: "Años de Experiencia", 
    pt: "Anos de Experiência", 
    fr: "Années d'Expérience", 
    it: "Anni di Esperienza", 
    de: "Jahre Erfahrung" 
  },
  "state.avgGrowth": { 
    en: "Avg. Traffic Growth", 
    ar: "متوسط نمو الزيارات", 
    es: "Crecimiento Promedio", 
    pt: "Crescimento Médio", 
    fr: "Croissance Moyenne", 
    it: "Crescita Media", 
    de: "Durchschn. Wachstum" 
  },
  "state.citiesServed": { 
    en: "Cities Served", 
    ar: "المدن المخدومة", 
    es: "Ciudades Servidas", 
    pt: "Cidades Atendidas", 
    fr: "Villes Desservies", 
    it: "Città Servite", 
    de: "Betreute Städte" 
  },
  "state.serviceAreas": { 
    en: "Service Areas", 
    ar: "مناطق الخدمة", 
    es: "Áreas de Servicio", 
    pt: "Áreas de Serviço", 
    fr: "Zones de Service", 
    it: "Aree di Servizio", 
    de: "Servicegebiete" 
  },
  "state.citiesHeading": { 
    en: "Local SEO Services Across {state}", 
    ar: "خدمات SEO المحلية في جميع أنحاء {state}", 
    es: "Servicios de SEO Local en Todo {state}", 
    pt: "Serviços de SEO Local em Todo {state}", 
    fr: "Services SEO Local dans Tout {state}", 
    it: "Servizi SEO Locale in Tutto {state}", 
    de: "Lokale SEO-Dienste in ganz {state}" 
  },
  "state.citiesDescription": { 
    en: "Whether you run a restaurant in Miami, a dental practice in Tampa, or a law firm in Orlando, I understand what {state} customers search for. My local SEO strategies are tailored to each city's unique market.", 
    ar: "سواء كنت تدير مطعمًا في ميامي، أو عيادة أسنان في تامبا، أو مكتب محاماة في أورلاندو، أفهم ما يبحث عنه عملاء {state}. استراتيجيات SEO المحلية الخاصة بي مصممة لكل سوق مدينة فريد.", 
    es: "Ya sea que tengas un restaurante en Miami, una clínica dental en Tampa o un bufete en Orlando, entiendo lo que buscan los clientes de {state}. Mis estrategias de SEO local están adaptadas al mercado único de cada ciudad.", 
    pt: "Seja um restaurante em Miami, uma clínica dental em Tampa ou um escritório de advocacia em Orlando, eu entendo o que os clientes de {state} buscam. Minhas estratégias de SEO local são adaptadas ao mercado único de cada cidade.", 
    fr: "Que vous dirigiez un restaurant à Miami, un cabinet dentaire à Tampa ou un cabinet d'avocats à Orlando, je comprends ce que recherchent les clients de {state}. Mes stratégies SEO local sont adaptées au marché unique de chaque ville.", 
    it: "Che tu gestisca un ristorante a Miami, uno studio dentistico a Tampa o uno studio legale a Orlando, capisco cosa cercano i clienti di {state}. Le mie strategie SEO locale sono adattate al mercato unico di ogni città.", 
    de: "Ob Sie ein Restaurant in Miami, eine Zahnarztpraxis in Tampa oder eine Anwaltskanzlei in Orlando betreiben, ich verstehe, wonach Kunden in {state} suchen. Meine lokalen SEO-Strategien sind auf den einzigartigen Markt jeder Stadt zugeschnitten." 
  },
  "state.allCitiesHeading": { 
    en: "All {count} Cities We Serve", 
    ar: "جميع المدن الـ {count} التي نخدمها", 
    es: "Todas las {count} Ciudades que Servimos", 
    pt: "Todas as {count} Cidades que Atendemos", 
    fr: "Toutes les {count} Villes que Nous Desservons", 
    it: "Tutte le {count} Città che Serviamo", 
    de: "Alle {count} Städte, die Wir Betreuen" 
  },
  "state.localSEOIn": { 
    en: "Local SEO in", 
    ar: "SEO المحلي في", 
    es: "SEO Local en", 
    pt: "SEO Local em", 
    fr: "SEO Local à", 
    it: "SEO Locale a", 
    de: "Lokales SEO in" 
  },
  "state.whatIOffer": { 
    en: "What I Offer", 
    ar: "ما أقدمه", 
    es: "Lo Que Ofrezco", 
    pt: "O Que Ofereço", 
    fr: "Ce Que J'Offre", 
    it: "Cosa Offro", 
    de: "Was Ich Anbiete" 
  },
  "state.servicesHeading": { 
    en: "Local SEO Services for {state} Businesses", 
    ar: "خدمات SEO المحلية للشركات في {state}", 
    es: "Servicios de SEO Local para Negocios en {state}", 
    pt: "Serviços de SEO Local para Empresas em {state}", 
    fr: "Services SEO Local pour Entreprises en {state}", 
    it: "Servizi SEO Locale per Aziende in {state}", 
    de: "Lokale SEO-Dienste für {state} Unternehmen" 
  },
  "state.servicesDescription": { 
    en: "I focus on what actually moves the needle for local businesses. No fluff, no unnecessary services, just proven tactics that bring customers through your door.", 
    ar: "أركز على ما يحدث فرقًا حقيقيًا للشركات المحلية. لا حشو، لا خدمات غير ضرورية، فقط تكتيكات مثبتة تجلب العملاء إلى بابك.", 
    es: "Me enfoco en lo que realmente mueve la aguja para los negocios locales. Sin relleno, sin servicios innecesarios, solo tácticas probadas que traen clientes a tu puerta.", 
    pt: "Foco no que realmente faz diferença para empresas locais. Sem enrolação, sem serviços desnecessários, apenas táticas comprovadas que trazem clientes para sua porta.", 
    fr: "Je me concentre sur ce qui fait vraiment la différence pour les entreprises locales. Pas de remplissage, pas de services inutiles, juste des tactiques éprouvées qui amènent les clients à votre porte.", 
    it: "Mi concentro su ciò che fa davvero la differenza per le attività locali. Niente fronzoli, niente servizi inutili, solo tattiche comprovate che portano clienti alla tua porta.", 
    de: "Ich konzentriere mich auf das, was wirklich einen Unterschied für lokale Unternehmen macht. Kein Füllmaterial, keine unnötigen Dienste, nur bewährte Taktiken, die Kunden zu Ihnen bringen." 
  },
  "state.service1Title": { 
    en: "Google Business Profile", 
    ar: "ملف Google التجاري", 
    es: "Perfil de Negocio de Google", 
    pt: "Perfil de Negócio do Google", 
    fr: "Profil Google Business", 
    it: "Profilo Google Business", 
    de: "Google Business Profil" 
  },
  "state.service1Desc": { 
    en: "Your Google listing is the first thing customers see. I optimize every detail to make your {state} business stand out and convert browsers into buyers.", 
    ar: "قائمتك على Google هي أول ما يراه العملاء. أحسّن كل التفاصيل لجعل عملك في {state} يبرز ويحول المتصفحين إلى مشترين.", 
    es: "Tu ficha de Google es lo primero que ven los clientes. Optimizo cada detalle para que tu negocio en {state} destaque y convierta visitantes en compradores.", 
    pt: "Sua ficha do Google é a primeira coisa que os clientes veem. Otimizo cada detalhe para que seu negócio em {state} se destaque e converta visitantes em compradores.", 
    fr: "Votre fiche Google est la première chose que les clients voient. J'optimise chaque détail pour que votre entreprise en {state} se démarque et convertisse les visiteurs en acheteurs.", 
    it: "La tua scheda Google è la prima cosa che i clienti vedono. Ottimizzo ogni dettaglio per far risaltare la tua attività in {state} e convertire i visitatori in acquirenti.", 
    de: "Ihr Google-Eintrag ist das Erste, was Kunden sehen. Ich optimiere jedes Detail, damit Ihr {state}-Unternehmen auffällt und Besucher in Käufer verwandelt." 
  },
  "state.service2Title": { 
    en: "Local Search Rankings", 
    ar: "تصنيفات البحث المحلي", 
    es: "Rankings de Búsqueda Local", 
    pt: "Rankings de Busca Local", 
    fr: "Classements de Recherche Locale", 
    it: "Classifiche di Ricerca Locale", 
    de: "Lokale Such-Rankings" 
  },
  "state.service2Desc": { 
    en: "When someone in {state} searches for your service, I make sure you show up. Keyword research, on-page optimization, and local signals that Google loves.", 
    ar: "عندما يبحث شخص في {state} عن خدمتك، أتأكد من ظهورك. بحث الكلمات المفتاحية، تحسين الصفحة، والإشارات المحلية التي يحبها Google.", 
    es: "Cuando alguien en {state} busca tu servicio, me aseguro de que aparezcas. Investigación de palabras clave, optimización on-page y señales locales que Google adora.", 
    pt: "Quando alguém em {state} busca seu serviço, garanto que você apareça. Pesquisa de palavras-chave, otimização on-page e sinais locais que o Google adora.", 
    fr: "Quand quelqu'un en {state} recherche votre service, je m'assure que vous apparaissez. Recherche de mots-clés, optimisation on-page et signaux locaux que Google adore.", 
    it: "Quando qualcuno in {state} cerca il tuo servizio, mi assicuro che tu appaia. Ricerca di parole chiave, ottimizzazione on-page e segnali locali che Google adora.", 
    de: "Wenn jemand in {state} nach Ihrem Service sucht, sorge ich dafür, dass Sie erscheinen. Keyword-Recherche, On-Page-Optimierung und lokale Signale, die Google liebt." 
  },
  "state.service3Title": { 
    en: "Review Generation", 
    ar: "توليد التقييمات", 
    es: "Generación de Reseñas", 
    pt: "Geração de Avaliações", 
    fr: "Génération d'Avis", 
    it: "Generazione Recensioni", 
    de: "Bewertungsgenerierung" 
  },
  "state.service3Desc": { 
    en: "More 5-star reviews mean more trust and higher rankings. I set up systems that encourage happy customers to share their experience.", 
    ar: "المزيد من التقييمات 5 نجوم تعني المزيد من الثقة وتصنيفات أعلى. أقوم بإعداد أنظمة تشجع العملاء السعداء على مشاركة تجربتهم.", 
    es: "Más reseñas de 5 estrellas significan más confianza y mejores rankings. Configuro sistemas que animan a los clientes felices a compartir su experiencia.", 
    pt: "Mais avaliações 5 estrelas significam mais confiança e rankings mais altos. Configuro sistemas que incentivam clientes satisfeitos a compartilhar sua experiência.", 
    fr: "Plus d'avis 5 étoiles signifie plus de confiance et de meilleurs classements. Je mets en place des systèmes qui encouragent les clients satisfaits à partager leur expérience.", 
    it: "Più recensioni a 5 stelle significano più fiducia e classifiche più alte. Creo sistemi che incoraggiano i clienti soddisfatti a condividere la loro esperienza.", 
    de: "Mehr 5-Sterne-Bewertungen bedeuten mehr Vertrauen und höhere Rankings. Ich richte Systeme ein, die zufriedene Kunden ermutigen, ihre Erfahrung zu teilen." 
  },
  "state.service4Title": { 
    en: "Local Content Creation", 
    ar: "إنشاء المحتوى المحلي", 
    es: "Creación de Contenido Local", 
    pt: "Criação de Conteúdo Local", 
    fr: "Création de Contenu Local", 
    it: "Creazione Contenuti Locali", 
    de: "Lokale Content-Erstellung" 
  },
  "state.service4Desc": { 
    en: "Content that speaks to {state} residents. Location pages, service pages, and blog posts that capture local search traffic and establish authority.", 
    ar: "محتوى يتحدث إلى سكان {state}. صفحات المواقع، صفحات الخدمات، ومقالات المدونة التي تلتقط حركة البحث المحلية وتؤسس السلطة.", 
    es: "Contenido que habla a los residentes de {state}. Páginas de ubicación, páginas de servicios y publicaciones de blog que capturan tráfico de búsqueda local y establecen autoridad.", 
    pt: "Conteúdo que fala com os residentes de {state}. Páginas de localização, páginas de serviços e posts de blog que capturam tráfego de busca local e estabelecem autoridade.", 
    fr: "Contenu qui parle aux résidents de {state}. Pages de localisation, pages de services et articles de blog qui captent le trafic de recherche local et établissent l'autorité.", 
    it: "Contenuti che parlano ai residenti di {state}. Pagine di località, pagine di servizi e post del blog che catturano traffico di ricerca locale e stabiliscono autorità.", 
    de: "Inhalte, die zu {state}-Bewohnern sprechen. Standortseiten, Serviceseiten und Blog-Posts, die lokalen Suchverkehr erfassen und Autorität aufbauen." 
  },
  "state.service5Title": { 
    en: "AI Search Optimization", 
    ar: "تحسين البحث بالذكاء الاصطناعي", 
    es: "Optimización para Búsqueda IA", 
    pt: "Otimização para Busca IA", 
    fr: "Optimisation pour Recherche IA", 
    it: "Ottimizzazione per Ricerca IA", 
    de: "KI-Suchoptimierung" 
  },
  "state.service5Desc": { 
    en: "ChatGPT, Google AI, and other AI tools are changing how people find businesses. I help your {state} business get recommended in these new search channels.", 
    ar: "ChatGPT و Google AI وأدوات الذكاء الاصطناعي الأخرى تغير كيفية العثور على الشركات. أساعد عملك في {state} على الحصول على توصيات في قنوات البحث الجديدة هذه.", 
    es: "ChatGPT, Google AI y otras herramientas de IA están cambiando cómo la gente encuentra negocios. Ayudo a tu negocio en {state} a ser recomendado en estos nuevos canales de búsqueda.", 
    pt: "ChatGPT, Google AI e outras ferramentas de IA estão mudando como as pessoas encontram empresas. Ajudo seu negócio em {state} a ser recomendado nesses novos canais de busca.", 
    fr: "ChatGPT, Google AI et d'autres outils IA changent la façon dont les gens trouvent des entreprises. J'aide votre entreprise en {state} à être recommandée dans ces nouveaux canaux de recherche.", 
    it: "ChatGPT, Google AI e altri strumenti IA stanno cambiando come le persone trovano le aziende. Aiuto la tua attività in {state} a essere raccomandata in questi nuovi canali di ricerca.", 
    de: "ChatGPT, Google AI und andere KI-Tools verändern, wie Menschen Unternehmen finden. Ich helfe Ihrem {state}-Unternehmen, in diesen neuen Suchkanälen empfohlen zu werden." 
  },
  "state.service6Title": { 
    en: "Citation Building", 
    ar: "بناء الاستشهادات", 
    es: "Construcción de Citaciones", 
    pt: "Construção de Citações", 
    fr: "Construction de Citations", 
    it: "Costruzione Citazioni", 
    de: "Zitationsaufbau" 
  },
  "state.service6Desc": { 
    en: "Consistent business information across directories builds trust with Google. I ensure your {state} business appears correctly everywhere that matters.", 
    ar: "المعلومات التجارية المتسقة عبر الدلائل تبني الثقة مع Google. أتأكد من ظهور عملك في {state} بشكل صحيح في كل مكان مهم.", 
    es: "Información comercial consistente en directorios construye confianza con Google. Me aseguro de que tu negocio en {state} aparezca correctamente en todos los lugares importantes.", 
    pt: "Informações comerciais consistentes em diretórios constroem confiança com o Google. Garanto que seu negócio em {state} apareça corretamente em todos os lugares importantes.", 
    fr: "Des informations commerciales cohérentes dans les annuaires renforcent la confiance avec Google. Je m'assure que votre entreprise en {state} apparaît correctement partout où cela compte.", 
    it: "Informazioni aziendali coerenti nelle directory costruiscono fiducia con Google. Mi assicuro che la tua attività in {state} appaia correttamente ovunque sia importante.", 
    de: "Konsistente Geschäftsinformationen in Verzeichnissen bauen Vertrauen bei Google auf. Ich stelle sicher, dass Ihr {state}-Unternehmen überall korrekt erscheint, wo es wichtig ist." 
  },
  "state.whyChooseLabel": { 
    en: "Why Choose Me", 
    ar: "لماذا تختارني", 
    es: "Por Qué Elegirme", 
    pt: "Por Que Me Escolher", 
    fr: "Pourquoi Me Choisir", 
    it: "Perché Scegliere Me", 
    de: "Warum Mich Wählen" 
  },
  "state.whyChooseHeading": { 
    en: "Why {state} Businesses Choose Me", 
    ar: "لماذا تختارني شركات {state}", 
    es: "Por Qué los Negocios de {state} Me Eligen", 
    pt: "Por Que Empresas de {state} Me Escolhem", 
    fr: "Pourquoi les Entreprises de {state} Me Choisissent", 
    it: "Perché le Aziende di {state} Mi Scelgono", 
    de: "Warum {state}-Unternehmen Mich Wählen" 
  },
  "state.whyChooseDescription": { 
    en: "I have worked with dozens of local businesses and understand what it takes to rank in competitive {state} markets. Here is what sets me apart.", 
    ar: "لقد عملت مع عشرات الشركات المحلية وأفهم ما يتطلبه الترتيب في أسواق {state} التنافسية. إليك ما يميزني.", 
    es: "He trabajado con docenas de negocios locales y entiendo lo que se necesita para posicionarse en los mercados competitivos de {state}. Esto es lo que me diferencia.", 
    pt: "Trabalhei com dezenas de empresas locais e entendo o que é preciso para ranquear em mercados competitivos de {state}. Aqui está o que me diferencia.", 
    fr: "J'ai travaillé avec des dizaines d'entreprises locales et je comprends ce qu'il faut pour se classer dans les marchés compétitifs de {state}. Voici ce qui me distingue.", 
    it: "Ho lavorato con dozzine di aziende locali e capisco cosa serve per classificarsi nei mercati competitivi di {state}. Ecco cosa mi distingue.", 
    de: "Ich habe mit Dutzenden lokaler Unternehmen gearbeitet und verstehe, was es braucht, um in wettbewerbsintensiven {state}-Märkten zu ranken. Hier ist, was mich unterscheidet." 
  },
  "state.why1Title": { 
    en: "Proven Track Record", 
    ar: "سجل حافل مثبت", 
    es: "Historial Probado", 
    pt: "Histórico Comprovado", 
    fr: "Bilan Prouvé", 
    it: "Track Record Comprovato", 
    de: "Nachgewiesene Erfolge" 
  },
  "state.why1Desc": { 
    en: "150%+ average traffic growth for my clients. Real results, not just promises.", 
    ar: "أكثر من 150% متوسط نمو الزيارات لعملائي. نتائج حقيقية، ليست مجرد وعود.", 
    es: "Más del 150% de crecimiento promedio de tráfico para mis clientes. Resultados reales, no solo promesas.", 
    pt: "Mais de 150% de crescimento médio de tráfego para meus clientes. Resultados reais, não apenas promessas.", 
    fr: "Plus de 150% de croissance moyenne du trafic pour mes clients. Des résultats réels, pas seulement des promesses.", 
    it: "Oltre 150% di crescita media del traffico per i miei clienti. Risultati reali, non solo promesse.", 
    de: "Über 150% durchschnittliches Traffic-Wachstum für meine Kunden. Echte Ergebnisse, nicht nur Versprechen." 
  },
  "state.why2Title": { 
    en: "Local Market Knowledge", 
    ar: "معرفة السوق المحلي", 
    es: "Conocimiento del Mercado Local", 
    pt: "Conhecimento do Mercado Local", 
    fr: "Connaissance du Marché Local", 
    it: "Conoscenza del Mercato Locale", 
    de: "Lokale Marktkenntnisse" 
  },
  "state.why2Desc": { 
    en: "I understand {state} consumer behavior and tailor strategies to your specific market.", 
    ar: "أفهم سلوك المستهلكين في {state} وأصمم استراتيجيات مخصصة لسوقك.", 
    es: "Entiendo el comportamiento del consumidor de {state} y adapto estrategias a tu mercado específico.", 
    pt: "Entendo o comportamento do consumidor de {state} e adapto estratégias ao seu mercado específico.", 
    fr: "Je comprends le comportement des consommateurs de {state} et adapte les stratégies à votre marché spécifique.", 
    it: "Capisco il comportamento dei consumatori di {state} e adatto le strategie al tuo mercato specifico.", 
    de: "Ich verstehe das Verbraucherverhalten in {state} und passe Strategien an Ihren spezifischen Markt an." 
  },
  "state.why3Title": { 
    en: "Quick Response Time", 
    ar: "وقت استجابة سريع", 
    es: "Tiempo de Respuesta Rápido", 
    pt: "Tempo de Resposta Rápido", 
    fr: "Temps de Réponse Rapide", 
    it: "Tempo di Risposta Veloce", 
    de: "Schnelle Reaktionszeit" 
  },
  "state.why3Desc": { 
    en: "Questions answered within 24 hours. Your success is my priority.", 
    ar: "الإجابة على الأسئلة خلال 24 ساعة. نجاحك هو أولويتي.", 
    es: "Preguntas respondidas en 24 horas. Tu éxito es mi prioridad.", 
    pt: "Perguntas respondidas em 24 horas. Seu sucesso é minha prioridade.", 
    fr: "Questions répondues sous 24 heures. Votre succès est ma priorité.", 
    it: "Domande risposte entro 24 ore. Il tuo successo è la mia priorità.", 
    de: "Fragen innerhalb von 24 Stunden beantwortet. Ihr Erfolg ist meine Priorität." 
  },
  "state.why4Title": { 
    en: "Transparent Reporting", 
    ar: "تقارير شفافة", 
    es: "Informes Transparentes", 
    pt: "Relatórios Transparentes", 
    fr: "Rapports Transparents", 
    it: "Report Trasparenti", 
    de: "Transparente Berichte" 
  },
  "state.why4Desc": { 
    en: "Monthly reports showing exactly what was done and results achieved. No hidden work.", 
    ar: "تقارير شهرية تظهر بالضبط ما تم إنجازه والنتائج المحققة. لا أعمال مخفية.", 
    es: "Informes mensuales que muestran exactamente qué se hizo y los resultados obtenidos. Sin trabajo oculto.", 
    pt: "Relatórios mensais mostrando exatamente o que foi feito e os resultados alcançados. Sem trabalho oculto.", 
    fr: "Rapports mensuels montrant exactement ce qui a été fait et les résultats obtenus. Pas de travail caché.", 
    it: "Report mensili che mostrano esattamente cosa è stato fatto e i risultati ottenuti. Nessun lavoro nascosto.", 
    de: "Monatliche Berichte, die genau zeigen, was getan wurde und welche Ergebnisse erzielt wurden. Keine versteckte Arbeit." 
  },
  "state.why5Title": { 
    en: "Direct Communication", 
    ar: "تواصل مباشر", 
    es: "Comunicación Directa", 
    pt: "Comunicação Direta", 
    fr: "Communication Directe", 
    it: "Comunicazione Diretta", 
    de: "Direkte Kommunikation" 
  },
  "state.why5Desc": { 
    en: "Work directly with me, not a junior team member. Your project gets my full attention.", 
    ar: "اعمل معي مباشرة، وليس مع عضو فريق مبتدئ. مشروعك يحصل على اهتمامي الكامل.", 
    es: "Trabaja directamente conmigo, no con un miembro junior. Tu proyecto recibe toda mi atención.", 
    pt: "Trabalhe diretamente comigo, não com um membro júnior. Seu projeto recebe minha atenção total.", 
    fr: "Travaillez directement avec moi, pas avec un membre junior. Votre projet reçoit toute mon attention.", 
    it: "Lavora direttamente con me, non con un membro junior. Il tuo progetto riceve tutta la mia attenzione.", 
    de: "Arbeiten Sie direkt mit mir, nicht mit einem Junior-Teammitglied. Ihr Projekt erhält meine volle Aufmerksamkeit." 
  },
  "state.why6Title": { 
    en: "Flexible Packages", 
    ar: "باقات مرنة", 
    es: "Paquetes Flexibles", 
    pt: "Pacotes Flexíveis", 
    fr: "Forfaits Flexibles", 
    it: "Pacchetti Flessibili", 
    de: "Flexible Pakete" 
  },
  "state.why6Desc": { 
    en: "Services tailored to your budget and goals. No one-size-fits-all approach here.", 
    ar: "خدمات مصممة لميزانيتك وأهدافك. لا يوجد نهج واحد يناسب الجميع هنا.", 
    es: "Servicios adaptados a tu presupuesto y objetivos. Sin enfoque único para todos.", 
    pt: "Serviços adaptados ao seu orçamento e objetivos. Sem abordagem única para todos.", 
    fr: "Services adaptés à votre budget et vos objectifs. Pas d'approche unique ici.", 
    it: "Servizi adattati al tuo budget e obiettivi. Nessun approccio unico per tutti.", 
    de: "Dienste angepasst an Ihr Budget und Ihre Ziele. Hier gibt es keinen Einheitsansatz." 
  },
  "state.readyToGrow": { 
    en: "Ready to Grow?", 
    ar: "مستعد للنمو؟", 
    es: "¿Listo para Crecer?", 
    pt: "Pronto para Crescer?", 
    fr: "Prêt à Croître?", 
    it: "Pronto a Crescere?", 
    de: "Bereit zu Wachsen?" 
  },
  "state.contactHeading": { 
    en: "Let's Grow Your {state} Business", 
    ar: "لننمّي عملك في {state}", 
    es: "Hagamos Crecer Tu Negocio en {state}", 
    pt: "Vamos Fazer Seu Negócio em {state} Crescer", 
    fr: "Faisons Croître Votre Entreprise en {state}", 
    it: "Facciamo Crescere la Tua Attività in {state}", 
    de: "Lassen Sie Uns Ihr {state}-Geschäft Wachsen" 
  },
  "state.contactDescription": { 
    en: "Ready to attract more local customers in {state}? Schedule a free consultation and let's discuss your goals. No pressure, just honest advice.", 
    ar: "مستعد لجذب المزيد من العملاء المحليين في {state}؟ حدد موعدًا لاستشارة مجانية ودعنا نناقش أهدافك. لا ضغط، فقط نصيحة صادقة.", 
    es: "¿Listo para atraer más clientes locales en {state}? Programa una consulta gratuita y hablemos de tus objetivos. Sin presión, solo consejos honestos.", 
    pt: "Pronto para atrair mais clientes locais em {state}? Agende uma consulta gratuita e vamos discutir seus objetivos. Sem pressão, apenas conselhos honestos.", 
    fr: "Prêt à attirer plus de clients locaux en {state}? Planifiez une consultation gratuite et discutons de vos objectifs. Pas de pression, juste des conseils honnêtes.", 
    it: "Pronto ad attirare più clienti locali in {state}? Pianifica una consulenza gratuita e discutiamo dei tuoi obiettivi. Nessuna pressione, solo consigli onesti.", 
    de: "Bereit, mehr lokale Kunden in {state} anzuziehen? Vereinbaren Sie eine kostenlose Beratung und lassen Sie uns Ihre Ziele besprechen. Kein Druck, nur ehrliche Beratung." 
  },
  "state.getStarted": { 
    en: "Get Started", 
    ar: "ابدأ الآن", 
    es: "Comenzar", 
    pt: "Começar", 
    fr: "Commencer", 
    it: "Inizia", 
    de: "Loslegen" 
  },
  "state.viewPricing": { 
    en: "View Pricing", 
    ar: "عرض الأسعار", 
    es: "Ver Precios", 
    pt: "Ver Preços", 
    fr: "Voir les Tarifs", 
    it: "Vedi Prezzi", 
    de: "Preise Ansehen" 
  },
  "state.responseTime": { 
    en: "Response Time", 
    ar: "وقت الاستجابة", 
    es: "Tiempo de Respuesta", 
    pt: "Tempo de Resposta", 
    fr: "Temps de Réponse", 
    it: "Tempo di Risposta", 
    de: "Antwortzeit" 
  },
  "state.freeLabel": { 
    en: "FREE", 
    ar: "مجاني", 
    es: "GRATIS", 
    pt: "GRÁTIS", 
    fr: "GRATUIT", 
    it: "GRATIS", 
    de: "KOSTENLOS" 
  },
  "state.initialAudit": { 
    en: "Initial SEO Audit", 
    ar: "تدقيق SEO الأولي", 
    es: "Auditoría SEO Inicial", 
    pt: "Auditoria SEO Inicial", 
    fr: "Audit SEO Initial", 
    it: "Audit SEO Iniziale", 
    de: "Erste SEO-Prüfung" 
  },
  "state.satisfaction": { 
    en: "Satisfaction Focus", 
    ar: "التركيز على الرضا", 
    es: "Enfoque en Satisfacción", 
    pt: "Foco em Satisfação", 
    fr: "Orientation Satisfaction", 
    it: "Focus Soddisfazione", 
    de: "Zufriedenheitsfokus" 
  },
  "state.servingBusinessesIn": { 
    en: "Serving Businesses Across {state}", 
    ar: "نخدم الشركات في جميع أنحاء {state}", 
    es: "Sirviendo Negocios en Todo {state}", 
    pt: "Atendendo Empresas em Todo {state}", 
    fr: "Au Service des Entreprises dans Tout {state}", 
    it: "Al Servizio delle Aziende in Tutto {state}", 
    de: "Unternehmen in ganz {state} betreuen" 
  },
  "state.mapDescription": { 
    en: "I provide local SEO services to businesses in all {count} cities across {state}. From major metropolitan areas to growing suburban communities, I help local businesses get found online.", 
    ar: "أقدم خدمات SEO المحلية للشركات في جميع المدن الـ {count} عبر {state}. من المناطق الحضرية الكبرى إلى المجتمعات الضواحي المتنامية، أساعد الشركات المحلية على الظهور عبر الإنترنت.", 
    es: "Ofrezco servicios de SEO local a negocios en las {count} ciudades de {state}. Desde áreas metropolitanas importantes hasta comunidades suburbanas en crecimiento, ayudo a negocios locales a ser encontrados en línea.", 
    pt: "Ofereço serviços de SEO local para empresas em todas as {count} cidades de {state}. De grandes áreas metropolitanas a comunidades suburbanas em crescimento, ajudo empresas locais a serem encontradas online.", 
    fr: "Je fournis des services SEO local aux entreprises dans les {count} villes de {state}. Des grandes zones métropolitaines aux communautés suburbaines en croissance, j'aide les entreprises locales à être trouvées en ligne.", 
    it: "Offro servizi SEO locale alle aziende in tutte le {count} città di {state}. Dalle grandi aree metropolitane alle comunità suburbane in crescita, aiuto le attività locali a farsi trovare online.", 
    de: "Ich biete lokale SEO-Dienste für Unternehmen in allen {count} Städten in {state} an. Von großen Metropolregionen bis hin zu wachsenden Vorstadtgemeinden helfe ich lokalen Unternehmen, online gefunden zu werden." 
  },
  "state.citiesWeServe": { 
    en: "Cities We Serve in {state}", 
    ar: "المدن التي نخدمها في {state}", 
    es: "Ciudades que Servimos en {state}", 
    pt: "Cidades que Atendemos em {state}", 
    fr: "Villes que Nous Desservons en {state}", 
    it: "Città che Serviamo in {state}", 
    de: "Städte, die Wir in {state} Betreuen" 
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
  dir: "ltr",
});

const DYNAMIC_STORAGE_PREFIX = "dynamicTranslations.v1.";

// Extract language from URL path
const getLanguageFromUrl = (): Language | null => {
  if (typeof window === "undefined") return null;
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const firstPart = pathParts[0];
  if (firstPart && isSupportedLanguage(firstPart)) {
    return firstPart;
  }
  return null;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      // Priority 1: URL path language
      const urlLang = getLanguageFromUrl();
      if (urlLang) return urlLang;

      // Priority 2: Stored preference
      const stored = localStorage.getItem("language") as Language;
      if (stored && SUPPORTED_LANGUAGES.includes(stored)) return stored;

      // Priority 3: Browser language
      const browserLang = navigator.language.slice(0, 2);
      if (isSupportedLanguage(browserLang)) return browserLang;
    }
    return "en";
  });

  const [dynamicTranslations, setDynamicTranslations] = useState<Record<string, string>>({});
  const pendingRef = useRef<Set<string>>(new Set());
  const [pendingTick, setPendingTick] = useState(0);

  // Sync language from URL changes
  useEffect(() => {
    const handleUrlChange = () => {
      const urlLang = getLanguageFromUrl();
      if (urlLang && urlLang !== language) {
        setLanguageState(urlLang);
      }
    };

    // Listen for popstate (back/forward navigation)
    window.addEventListener("popstate", handleUrlChange);
    
    // Initial check
    handleUrlChange();

    return () => window.removeEventListener("popstate", handleUrlChange);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    // Load per-language cached dynamic translations (AI translated)
    if (typeof window === "undefined") return;

    pendingRef.current.clear();

    if (language === "en") {
      setDynamicTranslations({});
      return;
    }

    const raw = localStorage.getItem(`${DYNAMIC_STORAGE_PREFIX}${language}`);
    if (!raw) {
      setDynamicTranslations({});
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") setDynamicTranslations(parsed);
      else setDynamicTranslations({});
    } catch {
      setDynamicTranslations({});
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    
    // Update URL to reflect new language
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const pathParts = currentPath.split("/").filter(Boolean);
      
      // Check if first part is a language code
      if (pathParts.length > 0 && isSupportedLanguage(pathParts[0])) {
        pathParts[0] = lang;
      } else {
        pathParts.unshift(lang);
      }
      
      const newPath = "/" + pathParts.join("/");
      window.history.pushState({}, "", newPath + window.location.search + window.location.hash);
    }
  };

  const t = useMemo(() => {
    return (key: string): string => {
      const staticTranslation = translations[key];
      if (staticTranslation) return staticTranslation[language] || staticTranslation.en || key;

      // If it's a missing translation KEY (e.g. "pricing.foo"), don't send it to AI.
      if (key.includes(".")) return key;

      // For English we just render the input string.
      if (language === "en") return key;

      // Dynamic AI translation cache
      const cached = dynamicTranslations[key];
      if (cached) return cached;

      // Enqueue for translation (batched)
      if (!pendingRef.current.has(key)) {
        pendingRef.current.add(key);
        setPendingTick((x) => x + 1);
      }

      // Show English until translation arrives
      return key;
    };
  }, [dynamicTranslations, language]);

  useEffect(() => {
    if (language === "en") return;
    if (pendingRef.current.size === 0) return;

    const handle = window.setTimeout(async () => {
      const batch = Array.from(pendingRef.current).slice(0, 40);
      if (batch.length === 0) return;

      const { data, error } = await supabase.functions.invoke("translate", {
        body: { targetLanguage: language, texts: batch },
      });

      // Always remove processed items from the queue (avoid infinite loops on errors)
      batch.forEach((txt) => pendingRef.current.delete(txt));

      if (error || !data?.translations) {
        // Try again later if there are still items in the queue
        if (pendingRef.current.size > 0) setPendingTick((x) => x + 1);
        return;
      }

      setDynamicTranslations((prev) => {
        const next = { ...prev, ...data.translations };
        try {
          localStorage.setItem(`${DYNAMIC_STORAGE_PREFIX}${language}`, JSON.stringify(next));
        } catch {
          // ignore quota issues
        }
        return next;
      });

      if (pendingRef.current.size > 0) setPendingTick((x) => x + 1);
    }, 250);

    return () => window.clearTimeout(handle);
  }, [language, pendingTick]);

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

