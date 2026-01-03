import { createContext, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { isSupportedLanguage, SupportedLanguage, SUPPORTED_LANGUAGES } from "@/lib/i18n-config";

export type Language = SupportedLanguage;

type TranslationEntry = Record<SupportedLanguage, string>;

interface Translations {
  [key: string]: TranslationEntry;
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
  "nav.webDevelopment": { en: "Web Development", ar: "تطوير الويب", es: "Desarrollo Web", pt: "Desenvolvimento Web", fr: "Développement web", it: "Sviluppo web", de: "Webentwicklung" },
  "nav.contentWriting": { en: "Content Writing", ar: "كتابة المحتوى", es: "Redacción de Contenido", pt: "Redação de Conteúdo", fr: "Rédaction de contenu", it: "Scrittura di contenuti", de: "Content-Erstellung" },
  "nav.graphicDesign": { en: "Graphic Design", ar: "تصميم الجرافيك", es: "Diseño Gráfico", pt: "Design Gráfico", fr: "Design graphique", it: "Graphic design", de: "Grafikdesign" },
  "nav.socialMediaMarketing": { en: "Social Media Marketing", ar: "التسويق عبر وسائل التواصل", es: "Marketing en Redes Sociales", pt: "Marketing de Mídias Sociais", fr: "Marketing sur les réseaux sociaux", it: "Marketing sui social media", de: "Social-Media-Marketing" },
  "nav.industriesWeServe": { en: "Industries We Serve", ar: "الصناعات التي نخدمها", es: "Industrias que Atendemos", pt: "Indústrias que Atendemos", fr: "Secteurs que nous servons", it: "Settori serviti", de: "Branchen, die wir bedienen" },
  "nav.clientPortal": { en: "Client Portal", ar: "بوابة العميل", es: "Portal del Cliente", pt: "Portal do Cliente", fr: "Portail client", it: "Portale clienti", de: "Kundenportal" },

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

  // About (legacy keys kept for compatibility)
  "about.description": { en: "I'm Syed Hadi Hussain, a full-stack local SEO specialist who helps local and service-based businesses get more visibility on Google and turn searches into real leads.", ar: "أنا سيد هادي حسين، متخصص SEO محلي شامل أساعد الشركات المحلية والخدمية على الحصول على مزيد من الظهور على Google وتحويل عمليات البحث إلى عملاء حقيقيين.", es: "Soy Syed Hadi Hussain, un especialista en SEO local completo que ayuda a empresas locales a obtener más visibilidad en Google y convertir búsquedas en clientes reales.", pt: "Sou Syed Hadi Hussain, um especialista em SEO local completo que ajuda empresas locais a obter mais visibilidade no Google e converter pesquisas em leads reais.", fr: "Je suis Syed Hadi Hussain, un spécialiste SEO local complet qui aide les entreprises locales à obtenir plus de visibilité sur Google et à convertir les recherches en leads réels.", it: "Sono Syed Hadi Hussain, uno specialista SEO locale completo che aiuta le aziende locali a ottenere più visibilità su Google e a convertire le ricerche in lead reali.", de: "Ich bin Syed Hadi Hussain, ein Full-Stack Local SEO Spezialist, der lokalen Unternehmen hilft, mehr Sichtbarkeit bei Google zu erlangen und Suchen in echte Leads umzuwandeln." },
  "about.heading": { en: "Full-Stack Local SEO Specialist", ar: "متخصص SEO محلي شامل", es: "Especialista en SEO Local Full-Stack", pt: "Especialista em SEO Local Full-Stack", fr: "Spécialiste SEO local Full-Stack", it: "Specialista SEO locale Full-Stack", de: "Full-Stack Local SEO Spezialist" },
  "about.para1": { en: "I'm Syed Hadi Hussain, a full-stack local SEO specialist who helps local and service-based businesses get more visibility on Google and turn searches into real leads.", ar: "أنا سيد هادي حسين، متخصص SEO محلي شامل أساعد الشركات المحلية والخدمية على الحصول على مزيد من الظهور على Google وتحويل عمليات البحث إلى عملاء حقيقيين.", es: "Soy Syed Hadi Hussain, un especialista en SEO local completo que ayuda a empresas locales a obtener más visibilidad en Google y convertir búsquedas en clientes reales.", pt: "Sou Syed Hadi Hussain, um especialista em SEO local completo que ajuda empresas locais a obter mais visibilidade no Google e converter pesquisas em leads reais.", fr: "Je suis Syed Hadi Hussain, un spécialiste SEO local complet qui aide les entreprises locales à obtenir plus de visibilité sur Google et à convertir les recherches en leads réels.", it: "Sono Syed Hadi Hussain, uno specialista SEO locale completo che aiuta le aziende locali a ottenere più visibilità su Google e a convertire le ricerche in lead reali.", de: "Ich bin Syed Hadi Hussain, ein Full-Stack Local SEO Spezialist, der lokalen Unternehmen hilft, mehr Sichtbarkeit bei Google zu erlangen und Suchen in echte Leads umzuwandeln." },
  "about.para2": { en: "I don't just focus on rankings. I focus on what actually matters to your business, calls, inquiries, and customers. I manage the complete SEO process from strategy to execution, so you don't have to deal with multiple people or confusion.", ar: "لا أركز فقط على التصنيفات. أركز على ما يهم عملك حقاً: المكالمات والاستفسارات والعملاء. أدير عملية SEO الكاملة من الاستراتيجية إلى التنفيذ، لذلك لا تحتاج للتعامل مع أشخاص متعددين أو الارتباك.", es: "No solo me enfoco en los rankings. Me enfoco en lo que realmente importa para tu negocio: llamadas, consultas y clientes. Gestiono el proceso SEO completo desde la estrategia hasta la ejecución, para que no tengas que tratar con múltiples personas o confusión.", pt: "Não me concentro apenas em rankings. Concentro-me no que realmente importa para seu negócio: chamadas, consultas e clientes. Gerencio o processo completo de SEO da estratégia à execução, para que você não precise lidar com múltiplas pessoas ou confusão.", fr: "Je ne me concentre pas seulement sur les classements. Je me concentre sur ce qui compte vraiment pour votre entreprise : les appels, les demandes et les clients. Je gère le processus SEO complet de la stratégie à l'exécution, pour que vous n'ayez pas à gérer plusieurs personnes ou la confusion.", it: "Non mi concentro solo sui ranking. Mi concentro su ciò che conta davvero per la tua attività: chiamate, richieste e clienti. Gestisco l'intero processo SEO dalla strategia all'esecuzione, così non devi avere a che fare con più persone o confusione.", de: "Ich konzentriere mich nicht nur auf Rankings. Ich konzentriere mich auf das, was für Ihr Unternehmen wirklich zählt: Anrufe, Anfragen und Kunden. Ich manage den kompletten SEO-Prozess von der Strategie bis zur Umsetzung, damit Sie nicht mit mehreren Personen oder Verwirrung umgehen müssen." },
  "about.para3": { en: "With 7+ years of experience and 100+ clients served, I help businesses grow through clear, proven, and result-focused local SEO.", ar: "مع أكثر من 7 سنوات من الخبرة وخدمة أكثر من 100 عميل، أساعد الشركات على النمو من خلال SEO محلي واضح ومثبت ومركز على النتائج.", es: "Con más de 7 años de experiencia y más de 100 clientes atendidos, ayudo a las empresas a crecer a través de SEO local claro, probado y enfocado en resultados.", pt: "Com mais de 7 anos de experiência e mais de 100 clientes atendidos, ajudo empresas a crescer através de SEO local claro, comprovado e focado em resultados.", fr: "Avec plus de 7 ans d'expérience et plus de 100 clients servis, j'aide les entreprises à se développer grâce à un SEO local clair, éprouvé et axé sur les résultats.", it: "Con oltre 7 anni di esperienza e oltre 100 clienti serviti, aiuto le aziende a crescere attraverso un SEO locale chiaro, comprovato e focalizzato sui risultati.", de: "Mit über 7 Jahren Erfahrung und über 100 betreuten Kunden helfe ich Unternehmen durch klares, bewährtes und ergebnisorientiertes lokales SEO zu wachsen." },
  "about.yearsExp": { en: "Years Experience", ar: "سنوات الخبرة", es: "Años de Experiencia", pt: "Anos de Experiência", fr: "Années d'expérience", it: "Anni di esperienza", de: "Jahre Erfahrung" },
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

  // Pricing Page
  "pricing.subtitle": { en: "Transparent Pricing", ar: "أسعار شفافة", es: "Precios Transparentes", pt: "Preços Transparentes", fr: "Tarifs transparents", it: "Prezzi trasparenti", de: "Transparente Preise" },
  "pricing.title": { en: "Simple, Transparent Pricing", ar: "أسعار بسيطة وشفافة", es: "Precios Simples y Transparentes", pt: "Preços Simples e Transparentes", fr: "Tarifs simples et transparents", it: "Prezzi semplici e trasparenti", de: "Einfache, transparente Preise" },
  "pricing.description": { en: "Choose the package that fits your business needs. All plans include dedicated support and proven results.", ar: "اختر الباقة التي تناسب احتياجات عملك. جميع الخطط تتضمن دعماً مخصصاً ونتائج مثبتة.", es: "Elige el paquete que se adapte a las necesidades de tu negocio. Todos los planes incluyen soporte dedicado y resultados probados.", pt: "Escolha o pacote que se adapta às necessidades do seu negócio. Todos os planos incluem suporte dedicado e resultados comprovados.", fr: "Choisissez le forfait qui correspond aux besoins de votre entreprise. Tous les plans incluent un support dédié et des résultats prouvés.", it: "Scegli il pacchetto che si adatta alle esigenze della tua azienda. Tutti i piani includono supporto dedicato e risultati comprovati.", de: "Wählen Sie das Paket, das zu Ihren Geschäftsanforderungen passt. Alle Pläne beinhalten engagierten Support und bewährte Ergebnisse." },
  "pricing.limitedTime": { en: "Limited Time", ar: "وقت محدود", es: "Tiempo Limitado", pt: "Tempo Limitado", fr: "Temps limité", it: "Tempo limitato", de: "Begrenzte Zeit" },
  "pricing.specialOfferTitle": { en: "50% OFF SEO Audit!", ar: "خصم 50% على تدقيق SEO!", es: "¡50% DESCUENTO en Auditoría SEO!", pt: "50% DESCONTO em Auditoria SEO!", fr: "50% DE RÉDUCTION sur l'audit SEO!", it: "50% DI SCONTO sull'Audit SEO!", de: "50% RABATT auf SEO-Audit!" },
  "pricing.specialOfferDesc": { en: "Book within 3 days and get your audit for just $50", ar: "احجز خلال 3 أيام واحصل على تدقيقك مقابل 50$ فقط", es: "Reserva en 3 días y obtén tu auditoría por solo $50", pt: "Reserve em 3 dias e obtenha sua auditoria por apenas $50", fr: "Réservez dans les 3 jours et obtenez votre audit pour seulement 50$", it: "Prenota entro 3 giorni e ottieni il tuo audit per soli $50", de: "Buchen Sie innerhalb von 3 Tagen und erhalten Sie Ihr Audit für nur 50$" },
  "pricing.claimDiscount": { en: "Claim Your 50% Discount", ar: "احصل على خصم 50%", es: "Reclama Tu 50% de Descuento", pt: "Reivindique Seu Desconto de 50%", fr: "Réclamez votre réduction de 50%", it: "Richiedi il tuo sconto del 50%", de: "Fordern Sie Ihren 50% Rabatt an" },
  "pricing.mostPopular": { en: "Most Popular", ar: "الأكثر شعبية", es: "Más Popular", pt: "Mais Popular", fr: "Le plus populaire", it: "Più popolare", de: "Am beliebtesten" },
  "pricing.multiLocationNote": { en: "Multi-location or need more services?", ar: "مواقع متعددة أو تحتاج المزيد من الخدمات؟", es: "¿Múltiples ubicaciones o necesitas más servicios?", pt: "Múltiplos locais ou precisa de mais serviços?", fr: "Plusieurs emplacements ou besoin de plus de services?", it: "Più sedi o hai bisogno di più servizi?", de: "Mehrere Standorte oder benötigen Sie mehr Dienste?" },
  "pricing.useCode": { en: "Use code", ar: "استخدم الكود", es: "Usa el código", pt: "Use o código", fr: "Utilisez le code", it: "Usa il codice", de: "Verwenden Sie den Code" },
  "pricing.forSpecialPricing": { en: "for special pricing!", ar: "للحصول على أسعار خاصة!", es: "¡para precios especiales!", pt: "para preços especiais!", fr: "pour des tarifs spéciaux!", it: "per prezzi speciali!", de: "für Sonderpreise!" },
  "pricing.multiLocationDiscount": { en: "Special Multi-Location Discount", ar: "خصم خاص للمواقع المتعددة", es: "Descuento Especial Multi-Ubicación", pt: "Desconto Especial Multi-Localização", fr: "Réduction spéciale multi-emplacements", it: "Sconto speciale multi-sede", de: "Spezieller Multi-Standort-Rabatt" },
  "pricing.multiLocationTitle": { en: "Managing Multiple Locations or Need Multiple Services?", ar: "تدير مواقع متعددة أو تحتاج خدمات متعددة؟", es: "¿Gestionas Múltiples Ubicaciones o Necesitas Múltiples Servicios?", pt: "Gerenciando Múltiplos Locais ou Precisa de Múltiplos Serviços?", fr: "Gérez plusieurs emplacements ou avez besoin de plusieurs services?", it: "Gestisci più sedi o hai bisogno di più servizi?", de: "Verwalten Sie mehrere Standorte oder benötigen Sie mehrere Dienste?" },
  "pricing.multiLocationDesc": { en: "Get a custom quote with exclusive discounts for businesses with multiple Google Business Profiles, franchise locations, or those needing a combination of SEO, web development, content, and marketing services.", ar: "احصل على عرض أسعار مخصص مع خصومات حصرية للشركات التي لديها ملفات Google Business متعددة أو مواقع امتياز أو تلك التي تحتاج مزيجاً من خدمات SEO وتطوير الويب والمحتوى والتسويق.", es: "Obtén una cotización personalizada con descuentos exclusivos para empresas con múltiples Perfiles de Google Business, ubicaciones de franquicia, o aquellas que necesitan una combinación de SEO, desarrollo web, contenido y servicios de marketing.", pt: "Obtenha uma cotação personalizada com descontos exclusivos para empresas com múltiplos Perfis de Negócios do Google, locais de franquia, ou aquelas que precisam de uma combinação de SEO, desenvolvimento web, conteúdo e serviços de marketing.", fr: "Obtenez un devis personnalisé avec des réductions exclusives pour les entreprises avec plusieurs profils Google Business, des emplacements de franchise, ou celles qui ont besoin d'une combinaison de SEO, développement web, contenu et services marketing.", it: "Ottieni un preventivo personalizzato con sconti esclusivi per aziende con più Profili Google Business, sedi in franchising, o quelle che hanno bisogno di una combinazione di SEO, sviluppo web, contenuti e servizi di marketing.", de: "Erhalten Sie ein individuelles Angebot mit exklusiven Rabatten für Unternehmen mit mehreren Google Business-Profilen, Franchise-Standorten oder solchen, die eine Kombination aus SEO, Webentwicklung, Content und Marketing-Dienstleistungen benötigen." },
  "pricing.multiLocationSeo": { en: "Multi-Location SEO", ar: "SEO للمواقع المتعددة", es: "SEO Multi-Ubicación", pt: "SEO Multi-Localização", fr: "SEO multi-emplacements", it: "SEO multi-sede", de: "Multi-Standort-SEO" },
  "pricing.multiLocationSeoDesc": { en: "Managing 2+ GBP locations? Get volume discounts up to 30% off per location.", ar: "تدير أكثر من موقعين GBP؟ احصل على خصومات كمية تصل إلى 30% لكل موقع.", es: "¿Gestionas 2+ ubicaciones GBP? Obtén descuentos por volumen de hasta 30% por ubicación.", pt: "Gerenciando 2+ locais GBP? Obtenha descontos por volume de até 30% por local.", fr: "Gérez 2+ emplacements GBP? Obtenez des réductions de volume jusqu'à 30% par emplacement.", it: "Gestisci 2+ sedi GBP? Ottieni sconti volume fino al 30% per sede.", de: "Verwalten Sie 2+ GBP-Standorte? Erhalten Sie Mengenrabatte bis zu 30% pro Standort." },
  "pricing.bundledServices": { en: "Bundled Services", ar: "خدمات مجمعة", es: "Servicios Combinados", pt: "Serviços Combinados", fr: "Services groupés", it: "Servizi in bundle", de: "Gebündelte Dienste" },
  "pricing.bundledServicesDesc": { en: "Combine SEO + Web Dev + Content + Social Media for up to 25% bundle discount.", ar: "اجمع بين SEO + تطوير الويب + المحتوى + وسائل التواصل للحصول على خصم يصل إلى 25%.", es: "Combina SEO + Desarrollo Web + Contenido + Redes Sociales para hasta 25% de descuento en paquete.", pt: "Combine SEO + Desenvolvimento Web + Conteúdo + Mídias Sociais para até 25% de desconto em pacote.", fr: "Combinez SEO + Développement Web + Contenu + Médias Sociaux pour jusqu'à 25% de réduction groupée.", it: "Combina SEO + Sviluppo Web + Contenuti + Social Media per uno sconto bundle fino al 25%.", de: "Kombinieren Sie SEO + Webentwicklung + Content + Social Media für bis zu 25% Paketrabatt." },
  "pricing.enterpriseSolutions": { en: "Enterprise Solutions", ar: "حلول المؤسسات", es: "Soluciones Empresariales", pt: "Soluções Empresariais", fr: "Solutions entreprise", it: "Soluzioni aziendali", de: "Unternehmenslösungen" },
  "pricing.enterpriseDesc": { en: "Franchise or agency? Custom pricing with dedicated account management.", ar: "امتياز أو وكالة؟ أسعار مخصصة مع إدارة حساب مخصصة.", es: "¿Franquicia o agencia? Precios personalizados con gestión de cuenta dedicada.", pt: "Franquia ou agência? Preços personalizados com gerenciamento de conta dedicado.", fr: "Franchise ou agence? Tarifs personnalisés avec gestion de compte dédiée.", it: "Franchising o agenzia? Prezzi personalizzati con gestione account dedicata.", de: "Franchise oder Agentur? Individuelle Preise mit dediziertem Account-Management." },
  "pricing.bookStrategyCall": { en: "Book a Strategy Call", ar: "احجز مكالمة استراتيجية", es: "Reservar Llamada Estratégica", pt: "Agendar Chamada Estratégica", fr: "Réserver un appel stratégique", it: "Prenota una chiamata strategica", de: "Strategiegespräch buchen" },
  "pricing.requestCustomQuote": { en: "Request Custom Quote", ar: "اطلب عرض أسعار مخصص", es: "Solicitar Cotización Personalizada", pt: "Solicitar Orçamento Personalizado", fr: "Demander un devis personnalisé", it: "Richiedi preventivo personalizzato", de: "Individuelles Angebot anfordern" },
  "pricing.mentionCode": { en: "Mention \"MULTI-DISCOUNT\" when you reach out to unlock exclusive pricing", ar: "اذكر \"MULTI-DISCOUNT\" عند التواصل للحصول على أسعار حصرية", es: "Menciona \"MULTI-DISCOUNT\" cuando te comuniques para desbloquear precios exclusivos", pt: "Mencione \"MULTI-DISCOUNT\" ao entrar em contato para desbloquear preços exclusivos", fr: "Mentionnez \"MULTI-DISCOUNT\" lorsque vous nous contactez pour débloquer des tarifs exclusifs", it: "Menziona \"MULTI-DISCOUNT\" quando ci contatti per sbloccare prezzi esclusivi", de: "Erwähnen Sie \"MULTI-DISCOUNT\" bei Ihrer Kontaktaufnahme, um exklusive Preise freizuschalten" },
  "pricing.haveQuestions": { en: "Have Questions?", ar: "لديك أسئلة؟", es: "¿Tienes Preguntas?", pt: "Tem Perguntas?", fr: "Vous avez des questions?", it: "Hai domande?", de: "Haben Sie Fragen?" },
  "pricing.questionsDesc": { en: "Check our FAQ or get in touch for custom solutions tailored to your needs.", ar: "تحقق من الأسئلة الشائعة أو تواصل معنا للحصول على حلول مخصصة تناسب احتياجاتك.", es: "Consulta nuestras Preguntas Frecuentes o contáctanos para soluciones personalizadas adaptadas a tus necesidades.", pt: "Confira nosso FAQ ou entre em contato para soluções personalizadas adaptadas às suas necessidades.", fr: "Consultez notre FAQ ou contactez-nous pour des solutions personnalisées adaptées à vos besoins.", it: "Controlla le nostre FAQ o contattaci per soluzioni personalizzate su misura per le tue esigenze.", de: "Schauen Sie in unsere FAQ oder kontaktieren Sie uns für maßgeschneiderte Lösungen." },
  "pricing.viewFaq": { en: "View FAQ", ar: "عرض الأسئلة الشائعة", es: "Ver Preguntas Frecuentes", pt: "Ver FAQ", fr: "Voir FAQ", it: "Vedi FAQ", de: "FAQ ansehen" },
  "pricing.viewCaseStudies": { en: "View Case Studies", ar: "عرض دراسات الحالة", es: "Ver Casos de Estudio", pt: "Ver Estudos de Caso", fr: "Voir les études de cas", it: "Vedi casi studio", de: "Fallstudien ansehen" },
  "pricing.contactUs": { en: "Contact Us", ar: "اتصل بنا", es: "Contáctanos", pt: "Fale Conosco", fr: "Contactez-nous", it: "Contattaci", de: "Kontaktieren Sie uns" },
  // Pricing Packages
  "pricing.gbpFullAudit": { en: "GBP Full Audit", ar: "تدقيق GBP الكامل", es: "Auditoría GBP Completa", pt: "Auditoria GBP Completa", fr: "Audit GBP Complet", it: "Audit GBP Completo", de: "Vollständiges GBP-Audit" },
  "pricing.gbpFullAuditDesc": { en: "Complete Google Business Profile audit to understand your current standing and get actionable recommendations.", ar: "تدقيق كامل لملف Google Business لفهم وضعك الحالي والحصول على توصيات قابلة للتنفيذ.", es: "Auditoría completa de Google Business Profile para entender tu posición actual y obtener recomendaciones prácticas.", pt: "Auditoria completa do Google Business Profile para entender sua posição atual e obter recomendações acionáveis.", fr: "Audit complet de Google Business Profile pour comprendre votre position actuelle et obtenir des recommandations exploitables.", it: "Audit completo di Google Business Profile per capire la tua posizione attuale e ottenere raccomandazioni attuabili.", de: "Vollständiges Google Business Profile-Audit, um Ihren aktuellen Stand zu verstehen und umsetzbare Empfehlungen zu erhalten." },
  "pricing.fullBusinessAudit": { en: "Full Business Audit", ar: "تدقيق الأعمال الكامل", es: "Auditoría de Negocio Completa", pt: "Auditoria de Negócio Completa", fr: "Audit d'Entreprise Complet", it: "Audit Aziendale Completo", de: "Vollständiges Geschäfts-Audit" },
  "pricing.fullBusinessAuditDesc": { en: "Complete audit of your entire online presence — website, GBP, social media, and reputation. Get a full roadmap for growth.", ar: "تدقيق كامل لوجودك عبر الإنترنت بالكامل — الموقع و GBP ووسائل التواصل والسمعة. احصل على خريطة طريق كاملة للنمو.", es: "Auditoría completa de toda tu presencia online — sitio web, GBP, redes sociales y reputación. Obtén una hoja de ruta completa para el crecimiento.", pt: "Auditoria completa de toda sua presença online — site, GBP, mídias sociais e reputação. Obtenha um roteiro completo para crescimento.", fr: "Audit complet de toute votre présence en ligne — site web, GBP, réseaux sociaux et réputation. Obtenez une feuille de route complète pour la croissance.", it: "Audit completo di tutta la tua presenza online — sito web, GBP, social media e reputazione. Ottieni una roadmap completa per la crescita.", de: "Vollständiges Audit Ihrer gesamten Online-Präsenz — Website, GBP, Social Media und Reputation. Erhalten Sie eine komplette Roadmap für Wachstum." },
  "pricing.seoAudit": { en: "SEO Audit", ar: "تدقيق SEO", es: "Auditoría SEO", pt: "Auditoria SEO", fr: "Audit SEO", it: "Audit SEO", de: "SEO-Audit" },
  "pricing.seoAuditDesc": { en: "Perfect for understanding your current SEO standing and getting actionable recommendations.", ar: "مثالي لفهم وضعك الحالي في SEO والحصول على توصيات قابلة للتنفيذ.", es: "Perfecto para comprender tu posición SEO actual y obtener recomendaciones prácticas.", pt: "Perfeito para entender sua posição atual em SEO e obter recomendações acionáveis.", fr: "Parfait pour comprendre votre position SEO actuelle et obtenir des recommandations exploitables.", it: "Perfetto per capire la tua posizione SEO attuale e ottenere raccomandazioni attuabili.", de: "Perfekt, um Ihren aktuellen SEO-Stand zu verstehen und umsetzbare Empfehlungen zu erhalten." },
  "pricing.gbpManagement": { en: "GBP Management", ar: "إدارة GBP", es: "Gestión GBP", pt: "Gestão GBP", fr: "Gestion GBP", it: "Gestione GBP", de: "GBP-Verwaltung" },
  "pricing.gbpManagementDesc": { en: "Ongoing Google Business Profile optimization to keep you ranking high in local search.", ar: "تحسين مستمر لملف Google Business للحفاظ على ترتيبك العالي في البحث المحلي.", es: "Optimización continua de Google Business Profile para mantenerte en los primeros lugares en la búsqueda local.", pt: "Otimização contínua do Google Business Profile para manter você bem ranqueado na busca local.", fr: "Optimisation continue de Google Business Profile pour vous maintenir en haut des résultats locaux.", it: "Ottimizzazione continua di Google Business Profile per mantenerti in alto nella ricerca locale.", de: "Laufende Google Business Profile-Optimierung, um Sie in der lokalen Suche hoch zu halten." },
  "pricing.fullStackSeo": { en: "Full Stack Local SEO", ar: "SEO محلي شامل", es: "SEO Local Completo", pt: "SEO Local Completo", fr: "SEO Local Complet", it: "SEO Locale Completo", de: "Full-Stack lokales SEO" },
  "pricing.fullStackSeoDesc": { en: "Complete local SEO solution with result guarantee. Includes website SEO, GBP management & comprehensive optimization.", ar: "حل SEO محلي كامل مع ضمان النتائج. يشمل SEO الموقع وإدارة GBP والتحسين الشامل.", es: "Solución SEO local completa con garantía de resultados. Incluye SEO del sitio web, gestión GBP y optimización integral.", pt: "Solução SEO local completa com garantia de resultados. Inclui SEO do site, gestão GBP e otimização abrangente.", fr: "Solution SEO locale complète avec garantie de résultats. Inclut SEO du site, gestion GBP et optimisation complète.", it: "Soluzione SEO locale completa con garanzia di risultati. Include SEO del sito, gestione GBP e ottimizzazione completa.", de: "Komplette lokale SEO-Lösung mit Ergebnisgarantie. Beinhaltet Website-SEO, GBP-Verwaltung und umfassende Optimierung." },
  "pricing.fullStackSeoFeaturedDesc": { en: "Result guaranteed or we work FREE after agreed timeline. We analyze your competition and set realistic ranking goals during the full business audit. Includes full website SEO, GBP management & comprehensive optimization.", ar: "نتائج مضمونة أو نعمل مجاناً بعد الجدول الزمني المتفق عليه. نحلل منافسيك ونضع أهداف ترتيب واقعية أثناء التدقيق الكامل للأعمال. يشمل SEO كامل للموقع وإدارة GBP والتحسين الشامل.", es: "Resultado garantizado o trabajamos GRATIS después del plazo acordado. Analizamos tu competencia y establecemos objetivos de posicionamiento realistas durante la auditoría completa del negocio. Incluye SEO completo del sitio web, gestión GBP y optimización integral.", pt: "Resultado garantido ou trabalhamos GRÁTIS após o prazo acordado. Analisamos sua concorrência e definimos metas de ranking realistas durante a auditoria completa do negócio. Inclui SEO completo do site, gestão GBP e otimização abrangente.", fr: "Résultat garanti ou nous travaillons GRATUITEMENT après le délai convenu. Nous analysons votre concurrence et fixons des objectifs de classement réalistes lors de l'audit complet de l'entreprise. Inclut SEO complet du site, gestion GBP et optimisation complète.", it: "Risultato garantito o lavoriamo GRATIS dopo la tempistica concordata. Analizziamo la tua concorrenza e stabiliamo obiettivi di posizionamento realistici durante l'audit aziendale completo. Include SEO completo del sito, gestione GBP e ottimizzazione completa.", de: "Ergebnis garantiert oder wir arbeiten KOSTENLOS nach vereinbartem Zeitrahmen. Wir analysieren Ihre Konkurrenz und setzen realistische Ranking-Ziele während des vollständigen Geschäftsaudits. Beinhaltet vollständiges Website-SEO, GBP-Verwaltung und umfassende Optimierung." },
  "pricing.learnAboutGuarantee": { en: "Learn About Guarantee", ar: "تعرف على الضمان", es: "Conoce la Garantía", pt: "Saiba Sobre a Garantia", fr: "En Savoir Plus sur la Garantie", it: "Scopri la Garanzia", de: "Über die Garantie erfahren" },
  "pricing.completeAudit": { en: "Complete Business Audit", ar: "تدقيق الأعمال الكامل", es: "Auditoría de Negocio Completa", pt: "Auditoria de Negócio Completa", fr: "Audit d'entreprise complet", it: "Audit aziendale completo", de: "Vollständiges Geschäftsaudit" },
  "pricing.completeAuditDesc": { en: "Comprehensive analysis of your entire digital presence with a detailed action plan.", ar: "تحليل شامل لوجودك الرقمي بالكامل مع خطة عمل مفصلة.", es: "Análisis integral de toda tu presencia digital con un plan de acción detallado.", pt: "Análise abrangente de toda sua presença digital com um plano de ação detalhado.", fr: "Analyse complète de toute votre présence numérique avec un plan d'action détaillé.", it: "Analisi completa di tutta la tua presenza digitale con un piano d'azione dettagliato.", de: "Umfassende Analyse Ihrer gesamten digitalen Präsenz mit detailliertem Aktionsplan." },
  "pricing.projectManagement": { en: "Project Management", ar: "إدارة المشاريع", es: "Gestión de Proyectos", pt: "Gerenciamento de Projetos", fr: "Gestion de projet", it: "Gestione progetti", de: "Projektmanagement" },
  "pricing.projectManagementDesc": { en: "End-to-end digital project management for businesses that need a full-stack solution.", ar: "إدارة مشاريع رقمية من البداية للنهاية للشركات التي تحتاج حلاً شاملاً.", es: "Gestión de proyectos digitales de principio a fin para empresas que necesitan una solución completa.", pt: "Gerenciamento de projetos digitais de ponta a ponta para empresas que precisam de uma solução completa.", fr: "Gestion de projet numérique de bout en bout pour les entreprises qui ont besoin d'une solution complète.", it: "Gestione progetti digitali end-to-end per aziende che hanno bisogno di una soluzione completa.", de: "End-to-End digitales Projektmanagement für Unternehmen, die eine Komplettlösung benötigen." },
  "pricing.localServiceAds": { en: "Local Service Ads", ar: "إعلانات الخدمات المحلية", es: "Anuncios de Servicios Locales", pt: "Anúncios de Serviços Locais", fr: "Annonces de services locaux", it: "Annunci di servizi locali", de: "Lokale Serviceanzeigen" },
  "pricing.localServiceAdsDesc": { en: "Google Local Service Ads management to get guaranteed leads for your service business.", ar: "إدارة إعلانات Google للخدمات المحلية للحصول على عملاء مضمونين لعملك الخدمي.", es: "Gestión de Google Local Service Ads para obtener leads garantizados para tu negocio de servicios.", pt: "Gestão de Google Local Service Ads para obter leads garantidos para seu negócio de serviços.", fr: "Gestion de Google Local Service Ads pour obtenir des leads garantis pour votre entreprise de services.", it: "Gestione Google Local Service Ads per ottenere lead garantiti per la tua attività di servizi.", de: "Google Local Service Ads-Verwaltung, um garantierte Leads für Ihr Dienstleistungsunternehmen zu erhalten." },
  "pricing.custom": { en: "Custom", ar: "مخصص", es: "Personalizado", pt: "Personalizado", fr: "Personnalisé", it: "Personalizzato", de: "Individuell" },
  "pricing.perMonth": { en: "/month", ar: "/شهر", es: "/mes", pt: "/mês", fr: "/mois", it: "/mese", de: "/Monat" },
  "pricing.perMonthAdSpend": { en: "/month + ad spend", ar: "/شهر + ميزانية الإعلانات", es: "/mes + gasto en anuncios", pt: "/mês + gasto em anúncios", fr: "/mois + dépenses publicitaires", it: "/mese + spesa pubblicitaria", de: "/Monat + Werbeausgaben" },
  "pricing.signUpHighlight": { en: "Sign up within 3 days for 50% OFF!", ar: "سجل خلال 3 أيام للحصول على خصم 50%!", es: "¡Regístrate en 3 días para 50% de descuento!", pt: "Cadastre-se em 3 dias para 50% de desconto!", fr: "Inscrivez-vous dans les 3 jours pour 50% de réduction!", it: "Iscriviti entro 3 giorni per il 50% di sconto!", de: "Melden Sie sich innerhalb von 3 Tagen für 50% Rabatt an!" },
  // Pricing Features
  "pricing.feature.gbpAnalysis": { en: "Complete GBP Analysis", ar: "تحليل GBP الكامل", es: "Análisis GBP Completo", pt: "Análise GBP Completa", fr: "Analyse GBP complète", it: "Analisi GBP completa", de: "Vollständige GBP-Analyse" },
  "pricing.feature.websiteAudit": { en: "Website SEO Audit", ar: "تدقيق SEO للموقع", es: "Auditoría SEO del Sitio Web", pt: "Auditoria SEO do Site", fr: "Audit SEO du site web", it: "Audit SEO del sito web", de: "Website SEO-Audit" },
  "pricing.feature.competitorAnalysis3": { en: "Competitor Analysis (3 competitors)", ar: "تحليل المنافسين (3 منافسين)", es: "Análisis de Competidores (3 competidores)", pt: "Análise de Concorrentes (3 concorrentes)", fr: "Analyse des concurrents (3 concurrents)", it: "Analisi concorrenti (3 concorrenti)", de: "Wettbewerbsanalyse (3 Wettbewerber)" },
  "pricing.feature.localRankingCheck": { en: "Local Ranking Check", ar: "فحص الترتيب المحلي", es: "Verificación de Ranking Local", pt: "Verificação de Ranking Local", fr: "Vérification du classement local", it: "Verifica ranking locale", de: "Lokale Ranking-Prüfung" },
  "pricing.feature.napConsistency": { en: "NAP Consistency Review", ar: "مراجعة تناسق NAP", es: "Revisión de Consistencia NAP", pt: "Revisão de Consistência NAP", fr: "Examen de la cohérence NAP", it: "Revisione coerenza NAP", de: "NAP-Konsistenzprüfung" },
  "pricing.feature.recommendations": { en: "Actionable Recommendations Report", ar: "تقرير التوصيات القابلة للتنفيذ", es: "Informe de Recomendaciones Prácticas", pt: "Relatório de Recomendações Acionáveis", fr: "Rapport de recommandations exploitables", it: "Report raccomandazioni attuabili", de: "Bericht mit umsetzbaren Empfehlungen" },
  "pricing.feature.strategyCall30": { en: "30-min Strategy Call", ar: "مكالمة استراتيجية 30 دقيقة", es: "Llamada Estratégica de 30 min", pt: "Chamada Estratégica de 30 min", fr: "Appel stratégique de 30 min", it: "Chiamata strategica di 30 min", de: "30-min Strategiegespräch" },
  "pricing.feature.strategyCall60": { en: "60-min Strategy Call", ar: "مكالمة استراتيجية 60 دقيقة", es: "Llamada Estratégica de 60 min", pt: "Chamada Estratégica de 60 min", fr: "Appel stratégique de 60 min", it: "Chiamata strategica di 60 min", de: "60-min Strategiegespräch" },
  "pricing.feature.socialMediaAudit": { en: "Social Media Presence Audit", ar: "تدقيق وجود وسائل التواصل الاجتماعي", es: "Auditoría de Presencia en Redes Sociales", pt: "Auditoria de Presença em Mídias Sociais", fr: "Audit de présence sur les réseaux sociaux", it: "Audit presenza social media", de: "Social-Media-Präsenz-Audit" },
  "pricing.feature.onlineReputationCheck": { en: "Online Reputation Check", ar: "فحص السمعة عبر الإنترنت", es: "Verificación de Reputación Online", pt: "Verificação de Reputação Online", fr: "Vérification de la réputation en ligne", it: "Verifica reputazione online", de: "Online-Reputationsprüfung" },
  "pricing.feature.fullPresenceReport": { en: "Complete Online Presence Report", ar: "تقرير الوجود الكامل عبر الإنترنت", es: "Informe Completo de Presencia Online", pt: "Relatório Completo de Presença Online", fr: "Rapport complet de présence en ligne", it: "Report completo presenza online", de: "Vollständiger Online-Präsenz-Bericht" },
  "pricing.feature.actionableRecommendations": { en: "Actionable Growth Recommendations", ar: "توصيات نمو قابلة للتنفيذ", es: "Recomendaciones de Crecimiento Prácticas", pt: "Recomendações de Crescimento Acionáveis", fr: "Recommandations de croissance exploitables", it: "Raccomandazioni di crescita attuabili", de: "Umsetzbare Wachstumsempfehlungen" },
  "pricing.cta.getFullAudit": { en: "Get Full Audit", ar: "احصل على التدقيق الكامل", es: "Obtener Auditoría Completa", pt: "Obter Auditoria Completa", fr: "Obtenir l'audit complet", it: "Ottieni Audit Completo", de: "Vollständiges Audit Erhalten" },
  "pricing.feature.weeklyPosts": { en: "Weekly GBP Posts & Updates", ar: "منشورات وتحديثات GBP أسبوعية", es: "Publicaciones y Actualizaciones GBP Semanales", pt: "Posts e Atualizações GBP Semanais", fr: "Publications et mises à jour GBP hebdomadaires", it: "Post e aggiornamenti GBP settimanali", de: "Wöchentliche GBP-Beiträge & Updates" },
  "pricing.feature.photoVideo": { en: "Photo & Video Optimization", ar: "تحسين الصور والفيديو", es: "Optimización de Fotos y Videos", pt: "Otimização de Fotos e Vídeos", fr: "Optimisation photos et vidéos", it: "Ottimizzazione foto e video", de: "Foto- & Video-Optimierung" },
  "pricing.feature.reviewManagement": { en: "Review Response Management", ar: "إدارة الرد على المراجعات", es: "Gestión de Respuesta a Reseñas", pt: "Gestão de Respostas a Avaliações", fr: "Gestion des réponses aux avis", it: "Gestione risposte recensioni", de: "Bewertungs-Antwort-Management" },
  "pricing.feature.qaMonitoring": { en: "Q&A Monitoring & Responses", ar: "مراقبة والرد على الأسئلة والأجوبة", es: "Monitoreo y Respuestas de Preguntas y Respuestas", pt: "Monitoramento e Respostas de Perguntas e Respostas", fr: "Surveillance et réponses Q&R", it: "Monitoraggio e risposte Q&A", de: "Q&A-Überwachung & Antworten" },
  "pricing.feature.categoryOptimization": { en: "Category & Service Optimization", ar: "تحسين الفئات والخدمات", es: "Optimización de Categorías y Servicios", pt: "Otimização de Categorias e Serviços", fr: "Optimisation des catégories et services", it: "Ottimizzazione categorie e servizi", de: "Kategorie- & Service-Optimierung" },
  "pricing.feature.monthlyReport": { en: "Monthly Performance Report", ar: "تقرير الأداء الشهري", es: "Informe de Rendimiento Mensual", pt: "Relatório de Desempenho Mensal", fr: "Rapport de performance mensuel", it: "Report prestazioni mensile", de: "Monatlicher Leistungsbericht" },
  "pricing.feature.competitorMonitoring": { en: "Competitor Monitoring", ar: "مراقبة المنافسين", es: "Monitoreo de Competidores", pt: "Monitoramento de Concorrentes", fr: "Surveillance des concurrents", it: "Monitoraggio concorrenti", de: "Wettbewerberüberwachung" },
  "pricing.feature.prioritySupport": { en: "Priority Support", ar: "دعم ذو أولوية", es: "Soporte Prioritario", pt: "Suporte Prioritário", fr: "Support prioritaire", it: "Supporto prioritario", de: "Prioritäts-Support" },
  "pricing.feature.everythingInGbp": { en: "Everything in GBP Management", ar: "كل ما في إدارة GBP", es: "Todo en Gestión GBP", pt: "Tudo em Gestão GBP", fr: "Tout dans la gestion GBP", it: "Tutto in Gestione GBP", de: "Alles aus GBP-Verwaltung" },
  "pricing.feature.onPageSeo": { en: "On-Page SEO Optimization", ar: "تحسين SEO على الصفحة", es: "Optimización SEO On-Page", pt: "Otimização SEO On-Page", fr: "Optimisation SEO on-page", it: "Ottimizzazione SEO on-page", de: "On-Page SEO-Optimierung" },
  "pricing.feature.localKeywordResearch": { en: "Local Keyword Research", ar: "بحث الكلمات المفتاحية المحلية", es: "Investigación de Palabras Clave Locales", pt: "Pesquisa de Palavras-chave Locais", fr: "Recherche de mots-clés locaux", it: "Ricerca parole chiave locali", de: "Lokale Keyword-Recherche" },
  "pricing.feature.citationBuilding": { en: "Citation Building (20/month)", ar: "بناء الاستشهادات (20/شهر)", es: "Construcción de Citaciones (20/mes)", pt: "Construção de Citações (20/mês)", fr: "Création de citations (20/mois)", it: "Creazione citazioni (20/mese)", de: "Zitationsaufbau (20/Monat)" },
  "pricing.feature.citations10Monthly": { en: "10 Citations/Month (No Backlinks)", ar: "10 استشهادات/شهر (بدون روابط خلفية)", es: "10 Citaciones/Mes (Sin Backlinks)", pt: "10 Citações/Mês (Sem Backlinks)", fr: "10 Citations/Mois (Sans Backlinks)", it: "10 Citazioni/Mese (Senza Backlink)", de: "10 Zitationen/Monat (Keine Backlinks)" },
  "pricing.feature.linkBuilding": { en: "Link Building (5 quality links/month)", ar: "بناء الروابط (5 روابط جودة/شهر)", es: "Construcción de Enlaces (5 enlaces de calidad/mes)", pt: "Construção de Links (5 links de qualidade/mês)", fr: "Création de liens (5 liens de qualité/mois)", it: "Link building (5 link di qualità/mese)", de: "Linkaufbau (5 Qualitätslinks/Monat)" },
  "pricing.feature.technicalSeo": { en: "Technical SEO Fixes", ar: "إصلاحات SEO التقنية", es: "Correcciones de SEO Técnico", pt: "Correções de SEO Técnico", fr: "Corrections SEO techniques", it: "Correzioni SEO tecniche", de: "Technische SEO-Korrekturen" },
  "pricing.feature.schemaMarkup": { en: "Schema Markup Implementation", ar: "تنفيذ ترميز المخطط", es: "Implementación de Schema Markup", pt: "Implementação de Schema Markup", fr: "Implémentation du balisage Schema", it: "Implementazione Schema Markup", de: "Schema Markup-Implementierung" },
  "pricing.feature.weeklyCalls": { en: "Weekly Strategy Calls", ar: "مكالمات استراتيجية أسبوعية", es: "Llamadas Estratégicas Semanales", pt: "Chamadas Estratégicas Semanais", fr: "Appels stratégiques hebdomadaires", it: "Chiamate strategiche settimanali", de: "Wöchentliche Strategiegespräche" },
  "pricing.feature.websiteSeoIncluded": { en: "Full Website SEO Included", ar: "SEO كامل للموقع مشمول", es: "SEO Completo del Sitio Incluido", pt: "SEO Completo do Site Incluído", fr: "SEO Complet du Site Inclus", it: "SEO Completo del Sito Incluso", de: "Vollständiges Website-SEO Inklusive" },
  "pricing.feature.timelineAfterAudit": { en: "Timeline Defined After Full Business Audit", ar: "يتم تحديد الجدول الزمني بعد التدقيق الكامل للأعمال", es: "Plazo Definido Después de la Auditoría Completa del Negocio", pt: "Prazo Definido Após Auditoria Completa do Negócio", fr: "Délai Défini Après Audit Complet de l'Entreprise", it: "Tempistica Definita Dopo Audit Aziendale Completo", de: "Zeitrahmen Nach Vollständigem Geschäftsaudit Festgelegt" },
  "pricing.feature.fullWebsiteAudit": { en: "Full Website SEO Audit", ar: "تدقيق SEO كامل للموقع", es: "Auditoría SEO Completa del Sitio", pt: "Auditoria SEO Completa do Site", fr: "Audit SEO complet du site", it: "Audit SEO completo del sito", de: "Vollständiges Website SEO-Audit" },
  "pricing.feature.gbpLocalAnalysis": { en: "GBP & Local SEO Analysis", ar: "تحليل GBP و SEO المحلي", es: "Análisis GBP y SEO Local", pt: "Análise GBP e SEO Local", fr: "Analyse GBP et SEO local", it: "Analisi GBP e SEO locale", de: "GBP- & lokale SEO-Analyse" },
  "pricing.feature.competitorDeepDive": { en: "Competitor Deep Dive (5 competitors)", ar: "تحليل عميق للمنافسين (5 منافسين)", es: "Análisis Profundo de Competidores (5 competidores)", pt: "Análise Profunda de Concorrentes (5 concorrentes)", fr: "Analyse approfondie des concurrents (5 concurrents)", it: "Analisi approfondita concorrenti (5 concorrenti)", de: "Tiefenanalyse Wettbewerber (5 Wettbewerber)" },
  "pricing.feature.socialMediaReview": { en: "Social Media Presence Review", ar: "مراجعة التواجد على وسائل التواصل", es: "Revisión de Presencia en Redes Sociales", pt: "Revisão de Presença nas Mídias Sociais", fr: "Examen de la présence sur les réseaux sociaux", it: "Revisione presenza social media", de: "Überprüfung der Social-Media-Präsenz" },
  "pricing.feature.brandConsistency": { en: "Brand Consistency Check", ar: "فحص تناسق العلامة التجارية", es: "Verificación de Consistencia de Marca", pt: "Verificação de Consistência de Marca", fr: "Vérification de la cohérence de marque", it: "Verifica coerenza brand", de: "Marken-Konsistenzprüfung" },
  "pricing.feature.technicalPerformance": { en: "Technical Performance Analysis", ar: "تحليل الأداء التقني", es: "Análisis de Rendimiento Técnico", pt: "Análise de Desempenho Técnico", fr: "Analyse des performances techniques", it: "Analisi prestazioni tecniche", de: "Technische Leistungsanalyse" },
  "pricing.feature.pdfReport": { en: "Detailed PDF Report", ar: "تقرير PDF مفصل", es: "Informe PDF Detallado", pt: "Relatório PDF Detalhado", fr: "Rapport PDF détaillé", it: "Report PDF dettagliato", de: "Detaillierter PDF-Bericht" },
  "pricing.feature.emailSupport30": { en: "30-day Email Support", ar: "دعم بريد إلكتروني لمدة 30 يوماً", es: "Soporte por Email de 30 días", pt: "Suporte por Email de 30 dias", fr: "Support email de 30 jours", it: "Supporto email di 30 giorni", de: "30-Tage E-Mail-Support" },
  "pricing.feature.dedicatedPM": { en: "Dedicated Project Manager", ar: "مدير مشروع مخصص", es: "Gerente de Proyecto Dedicado", pt: "Gerente de Projeto Dedicado", fr: "Chef de projet dédié", it: "Project manager dedicato", de: "Dedizierter Projektmanager" },
  "pricing.feature.webDevelopment": { en: "Website Development", ar: "تطوير الموقع", es: "Desarrollo de Sitio Web", pt: "Desenvolvimento de Site", fr: "Développement de site web", it: "Sviluppo sito web", de: "Website-Entwicklung" },
  "pricing.feature.seoMarketingStrategy": { en: "SEO & Marketing Strategy", ar: "استراتيجية SEO والتسويق", es: "Estrategia SEO y Marketing", pt: "Estratégia SEO e Marketing", fr: "Stratégie SEO et marketing", it: "Strategia SEO e marketing", de: "SEO- & Marketing-Strategie" },
  "pricing.feature.socialMediaManagement": { en: "Social Media Management", ar: "إدارة وسائل التواصل الاجتماعي", es: "Gestión de Redes Sociales", pt: "Gestão de Mídias Sociais", fr: "Gestion des réseaux sociaux", it: "Gestione social media", de: "Social-Media-Management" },
  "pricing.feature.adCampaignManagement": { en: "Advertising Campaign Management", ar: "إدارة الحملات الإعلانية", es: "Gestión de Campañas Publicitarias", pt: "Gestão de Campanhas Publicitárias", fr: "Gestion des campagnes publicitaires", it: "Gestione campagne pubblicitarie", de: "Werbekampagnen-Management" },
  "pricing.feature.vendorCoordination": { en: "Vendor Coordination", ar: "تنسيق الموردين", es: "Coordinación de Proveedores", pt: "Coordenação de Fornecedores", fr: "Coordination des fournisseurs", it: "Coordinamento fornitori", de: "Lieferantenkoordination" },
  "pricing.feature.weeklyReports": { en: "Weekly Progress Reports", ar: "تقارير التقدم الأسبوعية", es: "Informes de Progreso Semanales", pt: "Relatórios de Progresso Semanais", fr: "Rapports d'avancement hebdomadaires", it: "Report progressi settimanali", de: "Wöchentliche Fortschrittsberichte" },
  "pricing.feature.support247": { en: "24/7 Priority Support", ar: "دعم ذو أولوية على مدار الساعة", es: "Soporte Prioritario 24/7", pt: "Suporte Prioritário 24/7", fr: "Support prioritaire 24/7", it: "Supporto prioritario 24/7", de: "24/7 Prioritäts-Support" },
  "pricing.feature.customDashboard": { en: "Custom Dashboard Access", ar: "الوصول إلى لوحة تحكم مخصصة", es: "Acceso a Panel Personalizado", pt: "Acesso a Painel Personalizado", fr: "Accès au tableau de bord personnalisé", it: "Accesso dashboard personalizzato", de: "Zugang zum benutzerdefinierten Dashboard" },
  "pricing.feature.lsaSetup": { en: "LSA Account Setup", ar: "إعداد حساب LSA", es: "Configuración de Cuenta LSA", pt: "Configuração de Conta LSA", fr: "Configuration du compte LSA", it: "Configurazione account LSA", de: "LSA-Konto-Einrichtung" },
  "pricing.feature.profileOptimization": { en: "Profile Optimization", ar: "تحسين الملف الشخصي", es: "Optimización de Perfil", pt: "Otimização de Perfil", fr: "Optimisation du profil", it: "Ottimizzazione profilo", de: "Profiloptimierung" },
  "pricing.feature.badgeVerification": { en: "Badge Verification Support", ar: "دعم التحقق من الشارة", es: "Soporte de Verificación de Insignia", pt: "Suporte de Verificação de Distintivo", fr: "Support de vérification du badge", it: "Supporto verifica badge", de: "Badge-Verifizierungssupport" },
  "pricing.feature.leadResponse": { en: "Lead Response Management", ar: "إدارة الرد على العملاء المحتملين", es: "Gestión de Respuesta a Leads", pt: "Gestão de Resposta a Leads", fr: "Gestion des réponses aux leads", it: "Gestione risposte lead", de: "Lead-Response-Management" },
  "pricing.feature.disputeHandling": { en: "Dispute Handling", ar: "معالجة النزاعات", es: "Manejo de Disputas", pt: "Tratamento de Disputas", fr: "Gestion des litiges", it: "Gestione dispute", de: "Streitbeilegung" },
  "pricing.feature.performanceOptimization": { en: "Performance Optimization", ar: "تحسين الأداء", es: "Optimización de Rendimiento", pt: "Otimização de Desempenho", fr: "Optimisation des performances", it: "Ottimizzazione prestazioni", de: "Leistungsoptimierung" },
  "pricing.feature.weeklyReporting": { en: "Weekly Reporting", ar: "التقارير الأسبوعية", es: "Informes Semanales", pt: "Relatórios Semanais", fr: "Rapports hebdomadaires", it: "Reportistica settimanale", de: "Wöchentliche Berichterstattung" },
  "pricing.feature.budgetRecommendations": { en: "Budget Recommendations", ar: "توصيات الميزانية", es: "Recomendaciones de Presupuesto", pt: "Recomendações de Orçamento", fr: "Recommandations de budget", it: "Raccomandazioni budget", de: "Budget-Empfehlungen" },
  // Pricing CTA Buttons
  "pricing.cta.getAuditNow": { en: "Get Audit Now", ar: "احصل على التدقيق الآن", es: "Obtener Auditoría Ahora", pt: "Obter Auditoria Agora", fr: "Obtenir l'audit maintenant", it: "Ottieni audit ora", de: "Audit jetzt erhalten" },
  "pricing.cta.getStarted": { en: "Get Started", ar: "ابدأ الآن", es: "Comenzar", pt: "Começar", fr: "Commencer", it: "Inizia", de: "Loslegen" },
  "pricing.cta.orderAudit": { en: "Order Audit", ar: "اطلب التدقيق", es: "Ordenar Auditoría", pt: "Solicitar Auditoria", fr: "Commander l'audit", it: "Ordina audit", de: "Audit bestellen" },
  "pricing.cta.getQuote": { en: "Get Quote", ar: "احصل على عرض أسعار", es: "Obtener Cotización", pt: "Obter Orçamento", fr: "Obtenir un devis", it: "Richiedi preventivo", de: "Angebot einholen" },
  // Pricing Badges
  "pricing.badge.off50": { en: "50% OFF", ar: "خصم 50%", es: "50% DESCUENTO", pt: "50% DESCONTO", fr: "50% DE RÉDUCTION", it: "50% SCONTO", de: "50% RABATT" },
  "pricing.badge.off25": { en: "25% OFF", ar: "خصم 25%", es: "25% DESCUENTO", pt: "25% DESCONTO", fr: "25% DE RÉDUCTION", it: "25% SCONTO", de: "25% RABATT" },
  "pricing.badge.popular": { en: "Popular", ar: "شائع", es: "Popular", pt: "Popular", fr: "Populaire", it: "Popolare", de: "Beliebt" },
  "pricing.badge.bestValue": { en: "Best Value", ar: "أفضل قيمة", es: "Mejor Valor", pt: "Melhor Valor", fr: "Meilleur Rapport", it: "Miglior Valore", de: "Bestes Preis-Leistung" },
  "pricing.badge.mostPopular": { en: "Most Popular", ar: "الأكثر شعبية", es: "Más Popular", pt: "Mais Popular", fr: "Le Plus Populaire", it: "Più Popolare", de: "Am Beliebtesten" },
  "pricing.badge.affordable": { en: "Affordable", ar: "بأسعار معقولة", es: "Asequible", pt: "Acessível", fr: "Abordable", it: "Conveniente", de: "Erschwinglich" },
  "pricing.badge.premium": { en: "Premium", ar: "متميز", es: "Premium", pt: "Premium", fr: "Premium", it: "Premium", de: "Premium" },
  "pricing.badge.save15": { en: "Save 15%", ar: "وفر 15%", es: "Ahorra 15%", pt: "Economize 15%", fr: "Économisez 15%", it: "Risparmia 15%", de: "15% Sparen" },
  "pricing.badge.save25": { en: "Save 25%", ar: "وفر 25%", es: "Ahorra 25%", pt: "Economize 25%", fr: "Économisez 25%", it: "Risparmia 25%", de: "25% Sparen" },
  "pricing.badge.bestDeal": { en: "Best Deal", ar: "أفضل صفقة", es: "Mejor Oferta", pt: "Melhor Oferta", fr: "Meilleure Offre", it: "Migliore Offerta", de: "Bestes Angebot" },
  "pricing.badge.resultGuarantee": { en: "Result Guaranteed", ar: "نتائج مضمونة", es: "Resultado Garantizado", pt: "Resultado Garantido", fr: "Résultat Garanti", it: "Risultato Garantito", de: "Ergebnis Garantiert" },
  "pricing.badge.trending": { en: "Trending", ar: "رائج", es: "Tendencia", pt: "Tendência", fr: "Tendance", it: "Di Tendenza", de: "Trend" },
  "pricing.badge.new": { en: "New", ar: "جديد", es: "Nuevo", pt: "Novo", fr: "Nouveau", it: "Nuovo", de: "Neu" },
  "pricing.badge.free": { en: "Free", ar: "مجاني", es: "Gratis", pt: "Grátis", fr: "Gratuit", it: "Gratuito", de: "Kostenlos" },
  "pricing.free": { en: "FREE", ar: "مجاني", es: "GRATIS", pt: "GRÁTIS", fr: "GRATUIT", it: "GRATUITO", de: "KOSTENLOS" },
  "pricing.mostSubscribed": { en: "Most Subscribed", ar: "الأكثر اشتراكاً", es: "Más Suscrito", pt: "Mais Assinado", fr: "Le Plus Souscrit", it: "Più Sottoscritto", de: "Am Meisten Abonniert" },
  "pricing.resultGuaranteeNote": { en: "Results guaranteed or we work FREE after agreed timeline. Timeline set after full business audit.", ar: "نتائج مضمونة أو نعمل مجاناً بعد الجدول الزمني المتفق عليه. يتم تحديد الجدول بعد تدقيق العمل الكامل.", es: "Resultados garantizados o trabajamos GRATIS después del plazo acordado. El plazo se establece después de la auditoría completa del negocio.", pt: "Resultados garantidos ou trabalhamos GRÁTIS após o prazo acordado. O prazo é definido após a auditoria completa do negócio.", fr: "Résultats garantis ou nous travaillons GRATUITEMENT après le délai convenu. Le délai est fixé après l'audit complet de l'entreprise.", it: "Risultati garantiti o lavoriamo GRATIS dopo la tempistica concordata. La tempistica viene stabilita dopo l'audit aziendale completo.", de: "Ergebnisse garantiert oder wir arbeiten KOSTENLOS nach vereinbartem Zeitrahmen. Zeitrahmen wird nach vollständigem Geschäftsaudit festgelegt." },
  "pricing.forBusinessesNote": { en: "For businesses facing no calls, no ranks, low visibility — we fix it!", ar: "للشركات التي تواجه عدم وجود مكالمات أو تصنيفات أو ظهور منخفض — نحن نصلحها!", es: "Para negocios sin llamadas, sin rankings, baja visibilidad — ¡lo arreglamos!", pt: "Para empresas sem chamadas, sem rankings, baixa visibilidade — nós resolvemos!", fr: "Pour les entreprises sans appels, sans classements, faible visibilité — nous le réparons!", it: "Per aziende senza chiamate, senza ranking, bassa visibilità — lo risolviamo!", de: "Für Unternehmen ohne Anrufe, ohne Rankings, niedrige Sichtbarkeit — wir beheben es!" },
  "pricing.delivery.20days": { en: "Delivery: 20 days (safe Google-compliant optimization)", ar: "التسليم: 20 يوم (تحسين آمن متوافق مع Google)", es: "Entrega: 20 días (optimización segura compatible con Google)", pt: "Entrega: 20 dias (otimização segura compatível com Google)", fr: "Livraison: 20 jours (optimisation sécurisée conforme à Google)", it: "Consegna: 20 giorni (ottimizzazione sicura conforme a Google)", de: "Lieferung: 20 Tage (sichere Google-konforme Optimierung)" },
  "pricing.delivery.2to3days": { en: "Delivery: 2-3 business days", ar: "التسليم: 2-3 أيام عمل", es: "Entrega: 2-3 días hábiles", pt: "Entrega: 2-3 dias úteis", fr: "Livraison: 2-3 jours ouvrables", it: "Consegna: 2-3 giorni lavorativi", de: "Lieferung: 2-3 Werktage" },
  "pricing.delivery.5to7days": { en: "Delivery: 5-7 business days", ar: "التسليم: 5-7 أيام عمل", es: "Entrega: 5-7 días hábiles", pt: "Entrega: 5-7 dias úteis", fr: "Livraison: 5-7 jours ouvrables", it: "Consegna: 5-7 giorni lavorativi", de: "Lieferung: 5-7 Werktage" },
  "pricing.delivery.urgent": { en: "Urgent delivery (12-24 hrs)", ar: "تسليم عاجل (12-24 ساعة)", es: "Entrega urgente (12-24 hrs)", pt: "Entrega urgente (12-24 hrs)", fr: "Livraison urgente (12-24h)", it: "Consegna urgente (12-24 ore)", de: "Eillieferung (12-24 Std)" },

  // New Pricing Page Translations
  "pricing.globallyAffordable": { en: "Globally Affordable Pricing", ar: "أسعار عالمية معقولة", es: "Precios Globalmente Asequibles", pt: "Preços Globalmente Acessíveis", fr: "Tarifs Mondialement Abordables", it: "Prezzi Globalmente Accessibili", de: "Weltweit Erschwingliche Preise" },
  "pricing.noHiddenFees": { en: "No Hidden Fees", ar: "لا رسوم مخفية", es: "Sin Cargos Ocultos", pt: "Sem Taxas Ocultas", fr: "Pas de Frais Cachés", it: "Nessun Costo Nascosto", de: "Keine versteckten Gebühren" },
  "pricing.cancelAnytime": { en: "Cancel Anytime", ar: "إلغاء في أي وقت", es: "Cancela Cuando Quieras", pt: "Cancele a Qualquer Momento", fr: "Annulez Quand Vous Voulez", it: "Annulla Quando Vuoi", de: "Jederzeit Kündbar" },
  "pricing.resultsDriven": { en: "Results Driven", ar: "موجه نحو النتائج", es: "Orientado a Resultados", pt: "Orientado a Resultados", fr: "Axé sur les Résultats", it: "Orientato ai Risultati", de: "Ergebnisorientiert" },
  "pricing.launchOfferTitle": { en: "Launch Offer — Up to 50% OFF!", ar: "عرض الإطلاق — خصم حتى 50%!", es: "¡Oferta de Lanzamiento — Hasta 50% DESCUENTO!", pt: "Oferta de Lançamento — Até 50% DESCONTO!", fr: "Offre de Lancement — Jusqu'à 50% DE RÉDUCTION!", it: "Offerta Lancio — Fino al 50% SCONTO!", de: "Startangebot — Bis zu 50% RABATT!" },
  "pricing.launchOfferDesc": { en: "Book within 3 days and save big on all services", ar: "احجز خلال 3 أيام ووفر الكثير على جميع الخدمات", es: "Reserva en 3 días y ahorra mucho en todos los servicios", pt: "Reserve em 3 dias e economize muito em todos os serviços", fr: "Réservez dans les 3 jours et économisez gros sur tous les services", it: "Prenota entro 3 giorni e risparmia tanto su tutti i servizi", de: "Buchen Sie innerhalb von 3 Tagen und sparen Sie bei allen Diensten" },

  // One-Time Services
  "pricing.oneTimeServices": { en: "One-Time Services", ar: "خدمات لمرة واحدة", es: "Servicios Únicos", pt: "Serviços Únicos", fr: "Services Ponctuels", it: "Servizi Una Tantum", de: "Einmalige Dienste" },
  "pricing.oneTimeTitle": { en: "Get Started with One-Time Services", ar: "ابدأ مع الخدمات لمرة واحدة", es: "Comienza con Servicios Únicos", pt: "Comece com Serviços Únicos", fr: "Commencez avec des Services Ponctuels", it: "Inizia con Servizi Una Tantum", de: "Starten Sie mit Einmaligen Diensten" },
  "pricing.oneTimeDesc": { en: "Perfect for businesses just starting out or needing a specific service", ar: "مثالي للشركات التي بدأت للتو أو تحتاج خدمة محددة", es: "Perfecto para negocios que recién comienzan o necesitan un servicio específico", pt: "Perfeito para empresas iniciantes ou que precisam de um serviço específico", fr: "Parfait pour les entreprises qui débutent ou ont besoin d'un service spécifique", it: "Perfetto per aziende appena avviate o che necessitano di un servizio specifico", de: "Perfekt für Unternehmen die gerade starten oder einen bestimmten Dienst benötigen" },

  // GBP Verification
  "pricing.gbpVerification": { en: "GBP Verification + Setup", ar: "تحقق وإعداد GBP", es: "Verificación + Configuración GBP", pt: "Verificação + Configuração GBP", fr: "Vérification + Configuration GBP", it: "Verifica + Configurazione GBP", de: "GBP Verifizierung + Einrichtung" },
  "pricing.gbpVerificationDesc": { en: "Complete Google Business Profile creation and verification with basic optimization.", ar: "إنشاء ملف Google Business الكامل والتحقق منه مع التحسين الأساسي.", es: "Creación y verificación completa de Google Business Profile con optimización básica.", pt: "Criação e verificação completa do Google Business Profile com otimização básica.", fr: "Création et vérification complètes de Google Business Profile avec optimisation de base.", it: "Creazione e verifica completa di Google Business Profile con ottimizzazione di base.", de: "Vollständige Google Business Profile Erstellung und Verifizierung mit Basisoptimierung." },

  // GBP Optimization
  "pricing.gbpOptimization": { en: "GBP Full Optimization", ar: "تحسين GBP الكامل", es: "Optimización Completa GBP", pt: "Otimização Completa GBP", fr: "Optimisation Complète GBP", it: "Ottimizzazione Completa GBP", de: "Vollständige GBP Optimierung" },
  "pricing.gbpOptimizationDesc": { en: "One-time comprehensive optimization of your existing Google Business Profile for maximum visibility.", ar: "تحسين شامل لمرة واحدة لملف Google Business الحالي لأقصى ظهور.", es: "Optimización integral única de tu perfil de Google Business existente para máxima visibilidad.", pt: "Otimização abrangente única do seu Google Business Profile existente para máxima visibilidade.", fr: "Optimisation complète unique de votre Google Business Profile existant pour une visibilité maximale.", it: "Ottimizzazione completa una tantum del tuo Google Business Profile esistente per la massima visibilità.", de: "Einmalige umfassende Optimierung Ihres bestehenden Google Business Profiles für maximale Sichtbarkeit." },

  // Subscription Plans
  "pricing.subscriptionPlans": { en: "Subscription Plans", ar: "خطط الاشتراك", es: "Planes de Suscripción", pt: "Planos de Assinatura", fr: "Plans d'Abonnement", it: "Piani di Abbonamento", de: "Abonnement-Pläne" },
  "pricing.subscriptionTitle": { en: "Ongoing Management & Growth", ar: "الإدارة والنمو المستمر", es: "Gestión y Crecimiento Continuo", pt: "Gestão e Crescimento Contínuo", fr: "Gestion et Croissance Continue", it: "Gestione e Crescita Continua", de: "Laufendes Management & Wachstum" },
  "pricing.subscriptionDesc": { en: "Choose a plan that fits your goals. Longer commitments = bigger savings.", ar: "اختر خطة تناسب أهدافك. التزامات أطول = توفير أكبر.", es: "Elige un plan que se ajuste a tus objetivos. Compromisos más largos = mayores ahorros.", pt: "Escolha um plano que se adapte aos seus objetivos. Compromissos mais longos = maiores economias.", fr: "Choisissez un plan adapté à vos objectifs. Engagements plus longs = économies plus importantes.", it: "Scegli un piano adatto ai tuoi obiettivi. Impegni più lunghi = risparmi maggiori.", de: "Wählen Sie einen Plan der zu Ihren Zielen passt. Längere Verpflichtungen = größere Einsparungen." },
  "pricing.monthly": { en: "Monthly", ar: "شهري", es: "Mensual", pt: "Mensal", fr: "Mensuel", it: "Mensile", de: "Monatlich" },
  "pricing.6month": { en: "6 Months", ar: "6 أشهر", es: "6 Meses", pt: "6 Meses", fr: "6 Mois", it: "6 Mesi", de: "6 Monate" },
  "pricing.annual": { en: "Annual", ar: "سنوي", es: "Anual", pt: "Anual", fr: "Annuel", it: "Annuale", de: "Jährlich" },
  "pricing.per6Months": { en: "/6 months", ar: "/6 أشهر", es: "/6 meses", pt: "/6 meses", fr: "/6 mois", it: "/6 mesi", de: "/6 Monate" },
  "pricing.perYear": { en: "/year", ar: "/سنة", es: "/año", pt: "/ano", fr: "/an", it: "/anno", de: "/Jahr" },
  "pricing.equivalent": { en: "≈", ar: "≈", es: "≈", pt: "≈", fr: "≈", it: "≈", de: "≈" },
  "pricing.youSave": { en: "You save", ar: "توفر", es: "Ahorras", pt: "Você economiza", fr: "Vous économisez", it: "Risparmi", de: "Sie sparen" },

  // Starter Plan
  "pricing.starterPlan": { en: "Starter Plan", ar: "الخطة المبتدئة", es: "Plan Inicial", pt: "Plano Inicial", fr: "Plan Débutant", it: "Piano Starter", de: "Starter-Plan" },
  "pricing.starterPlanDesc": { en: "Perfect for small businesses wanting to maintain their online presence with basic optimization.", ar: "مثالي للشركات الصغيرة التي تريد الحفاظ على تواجدها عبر الإنترنت مع التحسين الأساسي.", es: "Perfecto para pequeñas empresas que quieren mantener su presencia en línea con optimización básica.", pt: "Perfeito para pequenas empresas que querem manter sua presença online com otimização básica.", fr: "Parfait pour les petites entreprises qui veulent maintenir leur présence en ligne avec une optimisation de base.", it: "Perfetto per piccole aziende che vogliono mantenere la loro presenza online con ottimizzazione di base.", de: "Perfekt für kleine Unternehmen die ihre Online-Präsenz mit Basisoptimierung pflegen möchten." },

  // Add-On Services
  "pricing.addOnServices": { en: "Add-On Services", ar: "خدمات إضافية", es: "Servicios Adicionales", pt: "Serviços Adicionais", fr: "Services Complémentaires", it: "Servizi Aggiuntivi", de: "Zusätzliche Dienste" },
  "pricing.addOnTitle": { en: "Boost Your Results with Add-Ons", ar: "عزز نتائجك مع الإضافات", es: "Potencia Tus Resultados con Complementos", pt: "Potencialize Seus Resultados com Complementos", fr: "Boostez Vos Résultats avec des Compléments", it: "Potenzia i Tuoi Risultati con Componenti Aggiuntivi", de: "Steigern Sie Ihre Ergebnisse mit Zusatzdiensten" },
  "pricing.addOnDesc": { en: "Combine with any plan for maximum impact", ar: "اجمعها مع أي خطة لأقصى تأثير", es: "Combina con cualquier plan para máximo impacto", pt: "Combine com qualquer plano para máximo impacto", fr: "Combinez avec n'importe quel plan pour un impact maximum", it: "Combina con qualsiasi piano per il massimo impatto", de: "Kombinieren Sie mit jedem Plan für maximale Wirkung" },

  // New Features
  "pricing.feature.gbpCreation": { en: "GBP Account Creation", ar: "إنشاء حساب GBP", es: "Creación de Cuenta GBP", pt: "Criação de Conta GBP", fr: "Création de Compte GBP", it: "Creazione Account GBP", de: "GBP-Konto Erstellung" },
  "pricing.feature.businessVerification": { en: "Business Verification Handling", ar: "معالجة تحقق الأعمال", es: "Gestión de Verificación de Negocio", pt: "Gestão de Verificação de Negócio", fr: "Gestion de la Vérification d'Entreprise", it: "Gestione Verifica Aziendale", de: "Geschäftsverifizierung" },
  "pricing.feature.basicInfoSetup": { en: "Basic Info & NAP Setup", ar: "إعداد المعلومات الأساسية و NAP", es: "Configuración de Info Básica y NAP", pt: "Configuração de Info Básica e NAP", fr: "Configuration Info de Base et NAP", it: "Configurazione Info Base e NAP", de: "Basisinfo & NAP-Einrichtung" },
  "pricing.feature.categorySelection": { en: "Optimal Category Selection", ar: "اختيار الفئة الأمثل", es: "Selección Óptima de Categoría", pt: "Seleção Ideal de Categoria", fr: "Sélection de Catégorie Optimale", it: "Selezione Categoria Ottimale", de: "Optimale Kategorieauswahl" },
  "pricing.feature.serviceAreaSetup": { en: "Service Area Configuration", ar: "تكوين منطقة الخدمة", es: "Configuración de Área de Servicio", pt: "Configuração de Área de Serviço", fr: "Configuration de Zone de Service", it: "Configurazione Area di Servizio", de: "Servicegebiet-Konfiguration" },
  "pricing.feature.hoursSetup": { en: "Business Hours Setup", ar: "إعداد ساعات العمل", es: "Configuración de Horarios", pt: "Configuração de Horários", fr: "Configuration des Horaires", it: "Configurazione Orari", de: "Öffnungszeiten-Einrichtung" },
  "pricing.feature.initialPhotos": { en: "Initial Photo Upload (up to 10)", ar: "تحميل الصور الأولية (حتى 10)", es: "Carga Inicial de Fotos (hasta 10)", pt: "Upload Inicial de Fotos (até 10)", fr: "Téléchargement Initial de Photos (jusqu'à 10)", it: "Caricamento Foto Iniziale (fino a 10)", de: "Erster Foto-Upload (bis zu 10)" },
  "pricing.feature.verificationSupport": { en: "Verification Issue Support", ar: "دعم مشاكل التحقق", es: "Soporte de Problemas de Verificación", pt: "Suporte a Problemas de Verificação", fr: "Support Problèmes de Vérification", it: "Supporto Problemi Verifica", de: "Verifizierungsproblem-Support" },
  "pricing.feature.fullProfileOptimization": { en: "Full Profile Optimization", ar: "تحسين الملف الكامل", es: "Optimización Completa del Perfil", pt: "Otimização Completa do Perfil", fr: "Optimisation Complète du Profil", it: "Ottimizzazione Profilo Completa", de: "Vollständige Profiloptimierung" },
  "pricing.feature.keywordResearch": { en: "Local Keyword Research", ar: "بحث الكلمات المفتاحية المحلية", es: "Investigación de Palabras Clave Locales", pt: "Pesquisa de Palavras-chave Locais", fr: "Recherche de Mots-clés Locaux", it: "Ricerca Parole Chiave Locali", de: "Lokale Keyword-Recherche" },
  "pricing.feature.descriptionOptimization": { en: "Description Optimization", ar: "تحسين الوصف", es: "Optimización de Descripción", pt: "Otimização de Descrição", fr: "Optimisation de la Description", it: "Ottimizzazione Descrizione", de: "Beschreibungsoptimierung" },
  "pricing.feature.servicesSetup": { en: "Services Section Setup", ar: "إعداد قسم الخدمات", es: "Configuración de Sección de Servicios", pt: "Configuração de Seção de Serviços", fr: "Configuration de Section Services", it: "Configurazione Sezione Servizi", de: "Service-Bereich Einrichtung" },
  "pricing.feature.productsSetup": { en: "Products Section Setup", ar: "إعداد قسم المنتجات", es: "Configuración de Sección de Productos", pt: "Configuração de Seção de Produtos", fr: "Configuration de Section Produits", it: "Configurazione Sezione Prodotti", de: "Produkt-Bereich Einrichtung" },
  "pricing.feature.photoOptimization": { en: "Photo Optimization & Geotagging", ar: "تحسين الصور والترميز الجغرافي", es: "Optimización de Fotos y Geoetiquetado", pt: "Otimização de Fotos e Geotagging", fr: "Optimisation Photos et Géolocalisation", it: "Ottimizzazione Foto e Geotagging", de: "Foto-Optimierung & Geotagging" },
  "pricing.feature.qaSetup": { en: "Q&A Section Setup", ar: "إعداد قسم الأسئلة والأجوبة", es: "Configuración de Sección Preguntas y Respuestas", pt: "Configuração de Seção Perguntas e Respostas", fr: "Configuration de Section Q&R", it: "Configurazione Sezione Q&A", de: "Q&A-Bereich Einrichtung" },
  "pricing.feature.gbpPostsBiweekly": { en: "GBP Posts (2x/month)", ar: "منشورات GBP (مرتين/شهر)", es: "Publicaciones GBP (2x/mes)", pt: "Posts GBP (2x/mês)", fr: "Publications GBP (2x/mois)", it: "Post GBP (2x/mese)", de: "GBP-Beiträge (2x/Monat)" },
  "pricing.feature.gbpPostsBiweeklySimple": { en: "GBP Posts Bi-weekly", ar: "منشورات GBP نصف شهرية", es: "Publicaciones GBP Quincenal", pt: "Posts GBP Quinzenal", fr: "Publications GBP Bi-hebdomadaire", it: "Post GBP Bi-settimanale", de: "GBP-Beiträge Zweiwöchentlich" },
  "pricing.feature.basicPhotoUpdates": { en: "Basic Photo Updates", ar: "تحديثات الصور الأساسية", es: "Actualizaciones Básicas de Fotos", pt: "Atualizações Básicas de Fotos", fr: "Mises à Jour Photos de Base", it: "Aggiornamenti Foto Base", de: "Basis-Foto-Updates" },
  "pricing.feature.reviewResponseBasic": { en: "Review Response (up to 10/month)", ar: "الرد على المراجعات (حتى 10/شهر)", es: "Respuesta a Reseñas (hasta 10/mes)", pt: "Resposta a Avaliações (até 10/mês)", fr: "Réponse aux Avis (jusqu'à 10/mois)", it: "Risposta Recensioni (fino a 10/mese)", de: "Bewertungsantworten (bis zu 10/Monat)" },
  "pricing.feature.reviewResponseSimple": { en: "Review Response", ar: "الرد على المراجعات", es: "Respuesta a Reseñas", pt: "Resposta a Avaliações", fr: "Réponse aux Avis", it: "Risposta Recensioni", de: "Bewertungsantworten" },
  "pricing.feature.emailSupport": { en: "Email Support", ar: "دعم البريد الإلكتروني", es: "Soporte por Email", pt: "Suporte por Email", fr: "Support Email", it: "Supporto Email", de: "E-Mail-Support" },
  "pricing.feature.priceLocked": { en: "Price Locked for Duration", ar: "السعر مثبت طوال المدة", es: "Precio Bloqueado por la Duración", pt: "Preço Fixo pela Duração", fr: "Prix Bloqué pour la Durée", it: "Prezzo Bloccato per la Durata", de: "Preis für Laufzeit Gesperrt" },
  "pricing.feature.freeAudit": { en: "FREE Bonus SEO Audit ($100 value)", ar: "تدقيق SEO مجاني إضافي (قيمة $100)", es: "Auditoría SEO GRATIS de Bonificación (valor $100)", pt: "Auditoria SEO GRÁTIS de Bônus (valor $100)", fr: "Audit SEO GRATUIT en Bonus (valeur 100$)", it: "Audit SEO GRATIS Bonus (valore $100)", de: "GRATIS Bonus SEO-Audit ($100 Wert)" },
  "pricing.feature.bonusOptimization": { en: "Bonus Monthly Optimization Report", ar: "تقرير تحسين شهري إضافي", es: "Informe de Optimización Mensual de Bonificación", pt: "Relatório de Otimização Mensal de Bônus", fr: "Rapport d'Optimisation Mensuel Bonus", it: "Report Ottimizzazione Mensile Bonus", de: "Bonus Monatlicher Optimierungsbericht" },
  "pricing.feature.quarterlyStrategy": { en: "Quarterly Strategy Review Call", ar: "مكالمة مراجعة استراتيجية ربع سنوية", es: "Llamada de Revisión Estratégica Trimestral", pt: "Chamada de Revisão Estratégica Trimestral", fr: "Appel de Révision Stratégique Trimestriel", it: "Chiamata Revisione Strategia Trimestrale", de: "Vierteljährliches Strategiegespräch" },

  // CTA Buttons
  "pricing.cta.optimizeNow": { en: "Optimize Now", ar: "حسّن الآن", es: "Optimizar Ahora", pt: "Otimizar Agora", fr: "Optimiser Maintenant", it: "Ottimizza Ora", de: "Jetzt Optimieren" },
  "pricing.cta.subscribe6": { en: "Subscribe 6 Months", ar: "اشترك 6 أشهر", es: "Suscribirse 6 Meses", pt: "Assinar 6 Meses", fr: "S'abonner 6 Mois", it: "Abbonati 6 Mesi", de: "6 Monate Abonnieren" },
  "pricing.cta.subscribe12": { en: "Subscribe Annual", ar: "اشترك سنوياً", es: "Suscribirse Anual", pt: "Assinar Anual", fr: "S'abonner Annuel", it: "Abbonati Annuale", de: "Jährlich Abonnieren" },
  "pricing.cta.bookFreeConsultation": { en: "Book Free Consultation", ar: "احجز استشارة مجانية", es: "Reservar Consulta Gratis", pt: "Agendar Consulta Grátis", fr: "Réserver Consultation Gratuite", it: "Prenota Consulenza Gratuita", de: "Kostenlose Beratung Buchen" },

  // Other Services
  "pricing.otherServices": { en: "Other Services", ar: "خدمات أخرى", es: "Otros Servicios", pt: "Outros Serviços", fr: "Autres Services", it: "Altri Servizi", de: "Andere Dienste" },
  "pricing.otherServicesTitle": { en: "Complete Digital Solutions", ar: "حلول رقمية متكاملة", es: "Soluciones Digitales Completas", pt: "Soluções Digitais Completas", fr: "Solutions Numériques Complètes", it: "Soluzioni Digitali Complete", de: "Komplette Digitale Lösungen" },
  "pricing.otherServicesDesc": { en: "Beyond SEO — full-service digital marketing and development", ar: "ما وراء SEO — تسويق رقمي وتطوير متكامل", es: "Más allá del SEO — marketing digital y desarrollo de servicio completo", pt: "Além do SEO — marketing digital e desenvolvimento de serviço completo", fr: "Au-delà du SEO — marketing numérique et développement complet", it: "Oltre la SEO — marketing digitale e sviluppo completo", de: "Über SEO hinaus — Full-Service Digital Marketing und Entwicklung" },
  "pricing.startingFrom": { en: "Starting from", ar: "يبدأ من", es: "Desde", pt: "A partir de", fr: "À partir de", it: "A partire da", de: "Ab" },

  // Web Development
  "pricing.webDevelopment": { en: "Web Development", ar: "تطوير الويب", es: "Desarrollo Web", pt: "Desenvolvimento Web", fr: "Développement Web", it: "Sviluppo Web", de: "Webentwicklung" },
  "pricing.webDevelopmentDesc": { en: "Custom, fast, SEO-optimized websites that convert visitors into customers.", ar: "مواقع ويب مخصصة وسريعة ومحسنة لـ SEO تحول الزوار إلى عملاء.", es: "Sitios web personalizados, rápidos y optimizados para SEO que convierten visitantes en clientes.", pt: "Sites personalizados, rápidos e otimizados para SEO que convertem visitantes em clientes.", fr: "Sites web personnalisés, rapides et optimisés pour le SEO qui convertissent les visiteurs en clients.", it: "Siti web personalizzati, veloci e ottimizzati per SEO che convertono i visitatori in clienti.", de: "Maßgeschneiderte, schnelle, SEO-optimierte Websites die Besucher in Kunden verwandeln." },
  "pricing.feature.responsiveDesign": { en: "Fully Responsive Design", ar: "تصميم متجاوب بالكامل", es: "Diseño Totalmente Responsivo", pt: "Design Totalmente Responsivo", fr: "Design Entièrement Réactif", it: "Design Completamente Responsive", de: "Vollständig Responsives Design" },
  "pricing.feature.seoOptimized": { en: "SEO Optimized Structure", ar: "هيكل محسن لـ SEO", es: "Estructura Optimizada para SEO", pt: "Estrutura Otimizada para SEO", fr: "Structure Optimisée SEO", it: "Struttura Ottimizzata SEO", de: "SEO-optimierte Struktur" },
  "pricing.feature.fastLoading": { en: "Fast Loading Speed", ar: "سرعة تحميل عالية", es: "Velocidad de Carga Rápida", pt: "Velocidade de Carregamento Rápida", fr: "Vitesse de Chargement Rapide", it: "Velocità di Caricamento Rapida", de: "Schnelle Ladegeschwindigkeit" },
  "pricing.feature.mobileFirst": { en: "Mobile-First Approach", ar: "نهج الجوال أولاً", es: "Enfoque Mobile-First", pt: "Abordagem Mobile-First", fr: "Approche Mobile-First", it: "Approccio Mobile-First", de: "Mobile-First Ansatz" },
  "pricing.feature.customDesign": { en: "Custom Unique Design", ar: "تصميم مخصص وفريد", es: "Diseño Único Personalizado", pt: "Design Único Personalizado", fr: "Design Unique Personnalisé", it: "Design Unico Personalizzato", de: "Einzigartiges Maßgeschneidertes Design" },
  "pricing.feature.cmsIntegration": { en: "CMS Integration", ar: "تكامل نظام إدارة المحتوى", es: "Integración CMS", pt: "Integração CMS", fr: "Intégration CMS", it: "Integrazione CMS", de: "CMS Integration" },
  "pricing.feature.support30Days": { en: "30 Days Post-Launch Support", ar: "دعم لمدة 30 يوم بعد الإطلاق", es: "30 Días de Soporte Post-Lanzamiento", pt: "30 Dias de Suporte Pós-Lançamento", fr: "30 Jours de Support Post-Lancement", it: "30 Giorni di Supporto Post-Lancio", de: "30 Tage Support nach Launch" },

  // Content Writing
  "pricing.contentWriting": { en: "Content Writing", ar: "كتابة المحتوى", es: "Redacción de Contenido", pt: "Redação de Conteúdo", fr: "Rédaction de Contenu", it: "Scrittura di Contenuti", de: "Content-Erstellung" },
  "pricing.contentWritingDesc": { en: "Engaging, SEO-optimized content that ranks and converts.", ar: "محتوى جذاب ومحسن لـ SEO يحقق الترتيب والتحويل.", es: "Contenido atractivo y optimizado para SEO que posiciona y convierte.", pt: "Conteúdo envolvente e otimizado para SEO que rankeia e converte.", fr: "Contenu engageant et optimisé pour le SEO qui se classe et convertit.", it: "Contenuti coinvolgenti e ottimizzati per SEO che si posizionano e convertono.", de: "Ansprechende, SEO-optimierte Inhalte die ranken und konvertieren." },
  "pricing.feature.seoContent": { en: "SEO-Optimized Content", ar: "محتوى محسن لـ SEO", es: "Contenido Optimizado para SEO", pt: "Conteúdo Otimizado para SEO", fr: "Contenu Optimisé SEO", it: "Contenuto Ottimizzato SEO", de: "SEO-optimierter Inhalt" },
  "pricing.feature.blogPosts": { en: "Blog Posts & Articles", ar: "منشورات المدونة والمقالات", es: "Posts y Artículos de Blog", pt: "Posts e Artigos de Blog", fr: "Articles de Blog", it: "Post e Articoli del Blog", de: "Blog-Posts & Artikel" },
  "pricing.feature.productDescriptions": { en: "Product Descriptions", ar: "أوصاف المنتجات", es: "Descripciones de Productos", pt: "Descrições de Produtos", fr: "Descriptions de Produits", it: "Descrizioni Prodotti", de: "Produktbeschreibungen" },
  "pricing.feature.websiteCopy": { en: "Website Copy", ar: "نصوص الموقع", es: "Textos del Sitio Web", pt: "Textos do Site", fr: "Textes du Site Web", it: "Testi del Sito Web", de: "Website-Texte" },
  "pricing.feature.keywordOptimized": { en: "Keyword-Optimized Writing", ar: "كتابة محسنة بالكلمات المفتاحية", es: "Escritura Optimizada por Palabras Clave", pt: "Escrita Otimizada por Palavras-chave", fr: "Rédaction Optimisée par Mots-clés", it: "Scrittura Ottimizzata per Parole Chiave", de: "Keyword-optimiertes Schreiben" },
  "pricing.feature.unlimitedRevisions": { en: "Unlimited Revisions", ar: "مراجعات غير محدودة", es: "Revisiones Ilimitadas", pt: "Revisões Ilimitadas", fr: "Révisions Illimitées", it: "Revisioni Illimitate", de: "Unbegrenzte Überarbeitungen" },

  // Graphic Design
  "pricing.graphicDesign": { en: "Graphic Design", ar: "تصميم الجرافيك", es: "Diseño Gráfico", pt: "Design Gráfico", fr: "Design Graphique", it: "Graphic Design", de: "Grafikdesign" },
  "pricing.graphicDesignDesc": { en: "Professional visuals that make your brand stand out.", ar: "مرئيات احترافية تجعل علامتك التجارية تبرز.", es: "Visuales profesionales que hacen destacar tu marca.", pt: "Visuais profissionais que fazem sua marca se destacar.", fr: "Visuels professionnels qui font ressortir votre marque.", it: "Visual professionali che fanno risaltare il tuo brand.", de: "Professionelle Visuals die Ihre Marke hervorheben." },
  "pricing.feature.logoDesign": { en: "Logo Design", ar: "تصميم الشعار", es: "Diseño de Logo", pt: "Design de Logo", fr: "Conception de Logo", it: "Design del Logo", de: "Logo-Design" },
  "pricing.feature.brandIdentity": { en: "Brand Identity Package", ar: "حزمة هوية العلامة التجارية", es: "Paquete de Identidad de Marca", pt: "Pacote de Identidade de Marca", fr: "Package Identité de Marque", it: "Pacchetto Identità del Brand", de: "Markenidentitäts-Paket" },
  "pricing.feature.socialGraphics": { en: "Social Media Graphics", ar: "رسومات وسائل التواصل", es: "Gráficos de Redes Sociales", pt: "Gráficos de Mídias Sociais", fr: "Graphiques Réseaux Sociaux", it: "Grafiche Social Media", de: "Social Media Grafiken" },
  "pricing.feature.printMaterials": { en: "Print Materials", ar: "مواد مطبوعة", es: "Materiales Impresos", pt: "Materiais Impressos", fr: "Matériaux Imprimés", it: "Materiali Stampati", de: "Druckmaterialien" },
  "pricing.feature.customIllustrations": { en: "Custom Illustrations", ar: "رسوم توضيحية مخصصة", es: "Ilustraciones Personalizadas", pt: "Ilustrações Personalizadas", fr: "Illustrations Personnalisées", it: "Illustrazioni Personalizzate", de: "Individuelle Illustrationen" },
  "pricing.feature.sourceFiles": { en: "Source Files Included", ar: "ملفات المصدر متضمنة", es: "Archivos Fuente Incluidos", pt: "Arquivos Fonte Incluídos", fr: "Fichiers Source Inclus", it: "File Sorgente Inclusi", de: "Quelldateien Inklusive" },

  // Social Media Marketing
  "pricing.socialMediaMarketing": { en: "Social Media Marketing", ar: "التسويق عبر وسائل التواصل", es: "Marketing en Redes Sociales", pt: "Marketing de Mídias Sociais", fr: "Marketing sur les Réseaux Sociaux", it: "Marketing sui Social Media", de: "Social Media Marketing" },
  "pricing.socialMediaMarketingDesc": { en: "Strategic social presence that builds brand awareness and engagement.", ar: "حضور اجتماعي استراتيجي يبني الوعي بالعلامة التجارية والتفاعل.", es: "Presencia social estratégica que construye conciencia de marca y engagement.", pt: "Presença social estratégica que constrói consciência de marca e engajamento.", fr: "Présence sociale stratégique qui construit la notoriété et l'engagement de la marque.", it: "Presenza sociale strategica che costruisce consapevolezza del brand e engagement.", de: "Strategische Social Media Präsenz die Markenbekanntheit und Engagement aufbaut." },
  "pricing.feature.contentCalendar": { en: "Content Calendar Planning", ar: "تخطيط تقويم المحتوى", es: "Planificación de Calendario de Contenido", pt: "Planejamento de Calendário de Conteúdo", fr: "Planification Calendrier de Contenu", it: "Pianificazione Calendario Contenuti", de: "Content-Kalender Planung" },
  "pricing.feature.dailyPosting": { en: "Daily Posting Schedule", ar: "جدول نشر يومي", es: "Programa de Publicación Diaria", pt: "Programação de Postagem Diária", fr: "Programme de Publication Quotidien", it: "Programma Pubblicazione Giornaliera", de: "Täglicher Posting-Plan" },
  "pricing.feature.communityManagement": { en: "Community Management", ar: "إدارة المجتمع", es: "Gestión de Comunidad", pt: "Gestão de Comunidade", fr: "Gestion de Communauté", it: "Gestione della Community", de: "Community Management" },
  "pricing.feature.analyticsReporting": { en: "Analytics & Reporting", ar: "التحليلات والتقارير", es: "Analíticas e Informes", pt: "Análises e Relatórios", fr: "Analyses et Rapports", it: "Analisi e Report", de: "Analysen & Berichte" },
  "pricing.feature.adManagement": { en: "Ad Campaign Management", ar: "إدارة الحملات الإعلانية", es: "Gestión de Campañas Publicitarias", pt: "Gestão de Campanhas de Anúncios", fr: "Gestion de Campagnes Publicitaires", it: "Gestione Campagne Pubblicitarie", de: "Werbekampagnen-Management" },
  "pricing.feature.influencerOutreach": { en: "Influencer Outreach", ar: "التواصل مع المؤثرين", es: "Alcance a Influencers", pt: "Alcance a Influenciadores", fr: "Prospection Influenceurs", it: "Outreach Influencer", de: "Influencer Outreach" },

  // Local SEO Consultation
  "pricing.localSeoConsultation": { en: "Local SEO Consultation", ar: "استشارة SEO المحلي", es: "Consultoría SEO Local", pt: "Consultoria SEO Local", fr: "Consultation SEO Local", it: "Consulenza SEO Locale", de: "Lokale SEO-Beratung" },
  "pricing.localSeoConsultationDesc": { en: "Strategic consultation to choose the right location, business name, and ranking factors for maximum local visibility.", ar: "استشارة استراتيجية لاختيار الموقع المناسب واسم العمل وعوامل الترتيب لأقصى ظهور محلي.", es: "Consultoría estratégica para elegir la ubicación correcta, nombre de negocio y factores de posicionamiento para máxima visibilidad local.", pt: "Consultoria estratégica para escolher a localização certa, nome do negócio e fatores de ranking para máxima visibilidade local.", fr: "Consultation stratégique pour choisir le bon emplacement, nom d'entreprise et facteurs de classement pour une visibilité locale maximale.", it: "Consulenza strategica per scegliere la giusta posizione, nome dell'attività e fattori di ranking per massima visibilità locale.", de: "Strategische Beratung zur Auswahl des richtigen Standorts, Firmennamens und Ranking-Faktoren für maximale lokale Sichtbarkeit." },
  "pricing.feature.locationStrategy": { en: "Best Location Selection for Ranking", ar: "اختيار أفضل موقع للترتيب", es: "Selección de Mejor Ubicación para Posicionamiento", pt: "Seleção de Melhor Localização para Ranking", fr: "Sélection du Meilleur Emplacement pour le Classement", it: "Selezione della Migliore Posizione per il Ranking", de: "Beste Standortauswahl für Ranking" },
  "pricing.feature.businessNameOptimization": { en: "Business Name Optimization Tips", ar: "نصائح تحسين اسم العمل", es: "Consejos de Optimización del Nombre del Negocio", pt: "Dicas de Otimização do Nome da Empresa", fr: "Conseils d'Optimisation du Nom d'Entreprise", it: "Consigli Ottimizzazione Nome Attività", de: "Tipps zur Optimierung des Firmennamens" },
  "pricing.feature.rankingFactorsReview": { en: "Local Ranking Factors Review", ar: "مراجعة عوامل الترتيب المحلي", es: "Revisión de Factores de Posicionamiento Local", pt: "Revisão de Fatores de Ranking Local", fr: "Examen des Facteurs de Classement Local", it: "Revisione Fattori di Ranking Locale", de: "Überprüfung lokaler Ranking-Faktoren" },
  "pricing.feature.actionPlan": { en: "Personalized Action Plan", ar: "خطة عمل شخصية", es: "Plan de Acción Personalizado", pt: "Plano de Ação Personalizado", fr: "Plan d'Action Personnalisé", it: "Piano d'Azione Personalizzato", de: "Personalisierter Aktionsplan" },
  "pricing.cta.bookConsultation": { en: "Book Consultation", ar: "احجز استشارة", es: "Reservar Consulta", pt: "Agendar Consulta", fr: "Réserver Consultation", it: "Prenota Consulenza", de: "Beratung Buchen" },

  // AI Services
  "pricing.aiReceptionist": { en: "AI Receptionist", ar: "موظف استقبال ذكي", es: "Recepcionista IA", pt: "Recepcionista IA", fr: "Réceptionniste IA", it: "Receptionist IA", de: "KI-Rezeptionist" },
  "pricing.aiReceptionistDesc": { en: "24/7 AI-powered phone answering that handles calls, books appointments, and captures leads.", ar: "رد على الهاتف بالذكاء الاصطناعي على مدار الساعة للتعامل مع المكالمات وحجز المواعيد والتقاط العملاء المحتملين.", es: "Atención telefónica con IA 24/7 que maneja llamadas, agenda citas y captura leads.", pt: "Atendimento telefônico com IA 24/7 que lida com chamadas, agenda compromissos e captura leads.", fr: "Réponse téléphonique IA 24/7 qui gère les appels, prend les rendez-vous et capture les leads.", it: "Risposta telefonica IA 24/7 che gestisce chiamate, prenota appuntamenti e cattura lead.", de: "24/7 KI-gestützte Telefonannahme die Anrufe bearbeitet, Termine bucht und Leads erfasst." },
  "pricing.feature.247Availability": { en: "24/7 Availability", ar: "متاح على مدار الساعة", es: "Disponibilidad 24/7", pt: "Disponibilidade 24/7", fr: "Disponibilité 24/7", it: "Disponibilità 24/7", de: "24/7 Verfügbarkeit" },
  "pricing.feature.callHandling": { en: "Professional Call Handling", ar: "تعامل احترافي مع المكالمات", es: "Manejo Profesional de Llamadas", pt: "Atendimento Profissional de Chamadas", fr: "Gestion Professionnelle des Appels", it: "Gestione Professionale Chiamate", de: "Professionelle Anrufbearbeitung" },
  "pricing.feature.appointmentBooking": { en: "Automated Appointment Booking", ar: "حجز مواعيد تلقائي", es: "Reserva Automática de Citas", pt: "Agendamento Automático", fr: "Réservation Automatique de Rendez-vous", it: "Prenotazione Appuntamenti Automatica", de: "Automatische Terminbuchung" },
  "pricing.feature.leadCapture": { en: "Intelligent Lead Capture", ar: "التقاط ذكي للعملاء المحتملين", es: "Captura Inteligente de Leads", pt: "Captura Inteligente de Leads", fr: "Capture Intelligente de Leads", it: "Cattura Lead Intelligente", de: "Intelligente Lead-Erfassung" },
  "pricing.feature.customVoice": { en: "Custom Voice & Persona", ar: "صوت وشخصية مخصصة", es: "Voz y Personalidad Personalizada", pt: "Voz e Personalidade Customizada", fr: "Voix et Persona Personnalisés", it: "Voce e Persona Personalizzati", de: "Individuelle Stimme & Persona" },
  "pricing.feature.integration": { en: "CRM & Calendar Integration", ar: "تكامل مع CRM والتقويم", es: "Integración CRM y Calendario", pt: "Integração CRM e Calendário", fr: "Intégration CRM et Calendrier", it: "Integrazione CRM e Calendario", de: "CRM- & Kalender-Integration" },

  // AI Chatbots
  "pricing.aiChatbots": { en: "AI Automated Chatbots", ar: "روبوتات محادثة ذكية", es: "Chatbots Automatizados IA", pt: "Chatbots Automatizados IA", fr: "Chatbots Automatisés IA", it: "Chatbot Automatizzati IA", de: "KI-Automatisierte Chatbots" },
  "pricing.aiChatbotsDesc": { en: "Smart chatbots that qualify leads, answer FAQs, and boost conversions around the clock.", ar: "روبوتات محادثة ذكية تؤهل العملاء المحتملين وتجيب على الأسئلة الشائعة وتعزز التحويلات على مدار الساعة.", es: "Chatbots inteligentes que califican leads, responden FAQs y aumentan conversiones las 24 horas.", pt: "Chatbots inteligentes que qualificam leads, respondem FAQs e aumentam conversões 24 horas.", fr: "Chatbots intelligents qui qualifient les leads, répondent aux FAQ et boostent les conversions 24h/24.", it: "Chatbot intelligenti che qualificano lead, rispondono alle FAQ e aumentano le conversioni 24/7.", de: "Intelligente Chatbots die Leads qualifizieren, FAQs beantworten und Conversions rund um die Uhr steigern." },
  "pricing.feature.automatedResponses": { en: "Instant Automated Responses", ar: "ردود تلقائية فورية", es: "Respuestas Automáticas Instantáneas", pt: "Respostas Automáticas Instantâneas", fr: "Réponses Automatiques Instantanées", it: "Risposte Automatiche Istantanee", de: "Sofortige Automatische Antworten" },
  "pricing.feature.leadQualification": { en: "Smart Lead Qualification", ar: "تأهيل ذكي للعملاء المحتملين", es: "Calificación Inteligente de Leads", pt: "Qualificação Inteligente de Leads", fr: "Qualification Intelligente des Leads", it: "Qualificazione Lead Intelligente", de: "Intelligente Lead-Qualifizierung" },
  "pricing.feature.faqHandling": { en: "FAQ Auto-Handling", ar: "معالجة تلقائية للأسئلة الشائعة", es: "Manejo Automático de FAQs", pt: "Tratamento Automático de FAQs", fr: "Gestion Automatique des FAQ", it: "Gestione Automatica FAQ", de: "Automatische FAQ-Bearbeitung" },
  "pricing.feature.multiPlatform": { en: "Multi-Platform Deployment", ar: "نشر على منصات متعددة", es: "Despliegue Multi-Plataforma", pt: "Implantação Multi-Plataforma", fr: "Déploiement Multi-Plateforme", it: "Distribuzione Multi-Piattaforma", de: "Multi-Plattform-Einsatz" },
  "pricing.feature.analytics": { en: "Conversation Analytics", ar: "تحليلات المحادثات", es: "Análisis de Conversaciones", pt: "Análise de Conversas", fr: "Analyses de Conversation", it: "Analisi Conversazioni", de: "Konversations-Analysen" },
  "pricing.feature.customTraining": { en: "Custom AI Training", ar: "تدريب ذكاء اصطناعي مخصص", es: "Entrenamiento IA Personalizado", pt: "Treinamento IA Personalizado", fr: "Formation IA Personnalisée", it: "Training IA Personalizzato", de: "Individuelles KI-Training" },

  // Business Consultation
  "pricing.businessConsultation": { en: "Business Consultation", ar: "استشارات الأعمال", es: "Consultoría de Negocios", pt: "Consultoria de Negócios", fr: "Consultation d'Entreprise", it: "Consulenza Aziendale", de: "Unternehmensberatung" },
  "pricing.businessConsultationDesc": { en: "Strategic consultation to boost your online presence and grow your business digitally.", ar: "استشارة استراتيجية لتعزيز تواجدك عبر الإنترنت وتنمية أعمالك رقمياً.", es: "Consultoría estratégica para impulsar tu presencia online y hacer crecer tu negocio digitalmente.", pt: "Consultoria estratégica para impulsionar sua presença online e crescer seu negócio digitalmente.", fr: "Consultation stratégique pour booster votre présence en ligne et développer votre entreprise numériquement.", it: "Consulenza strategica per potenziare la tua presenza online e far crescere il tuo business digitalmente.", de: "Strategische Beratung zur Steigerung Ihrer Online-Präsenz und digitalem Geschäftswachstum." },
  "pricing.feature.onlinePresenceAudit": { en: "Online Presence Audit", ar: "تدقيق التواجد عبر الإنترنت", es: "Auditoría de Presencia Online", pt: "Auditoria de Presença Online", fr: "Audit de Présence en Ligne", it: "Audit Presenza Online", de: "Online-Präsenz-Audit" },
  "pricing.feature.digitalStrategy": { en: "Digital Strategy Development", ar: "تطوير استراتيجية رقمية", es: "Desarrollo de Estrategia Digital", pt: "Desenvolvimento de Estratégia Digital", fr: "Développement de Stratégie Digitale", it: "Sviluppo Strategia Digitale", de: "Digitale Strategieentwicklung" },
  "pricing.feature.competitorAnalysis": { en: "Competitor Analysis", ar: "تحليل المنافسين", es: "Análisis de Competencia", pt: "Análise de Concorrentes", fr: "Analyse de la Concurrence", it: "Analisi Concorrenza", de: "Wettbewerbsanalyse" },
  "pricing.feature.growthPlan": { en: "Growth Roadmap", ar: "خارطة طريق النمو", es: "Hoja de Ruta de Crecimiento", pt: "Roadmap de Crescimento", fr: "Feuille de Route de Croissance", it: "Roadmap di Crescita", de: "Wachstums-Roadmap" },
  "pricing.feature.implementationGuidance": { en: "Implementation Guidance", ar: "إرشادات التنفيذ", es: "Guía de Implementación", pt: "Orientação de Implementação", fr: "Guidance d'Implémentation", it: "Guida all'Implementazione", de: "Implementierungsanleitung" },
  "pricing.feature.ongoingSupport": { en: "Ongoing Support", ar: "دعم مستمر", es: "Soporte Continuo", pt: "Suporte Contínuo", fr: "Support Continu", it: "Supporto Continuo", de: "Laufende Unterstützung" },

  // Quote-based pricing
  "pricing.getCustomQuote": { en: "Get Free Quote", ar: "احصل على عرض سعر مجاني", es: "Obtener Cotización Gratis", pt: "Obter Orçamento Grátis", fr: "Obtenir un Devis Gratuit", it: "Richiedi Preventivo Gratuito", de: "Kostenloses Angebot Einholen" },
  "pricing.cta.getFreeQuote": { en: "Get Free Quote", ar: "احصل على عرض سعر مجاني", es: "Obtener Cotización Gratis", pt: "Obter Orçamento Grátis", fr: "Obtenir un Devis Gratuit", it: "Richiedi Preventivo Gratuito", de: "Kostenloses Angebot Einholen" },
  "pricing.feature.advancedTechStack": { en: "Advanced Tech Stack Options", ar: "خيارات تقنية متقدمة", es: "Opciones de Tecnología Avanzada", pt: "Opções de Tecnologia Avançada", fr: "Options de Stack Technique Avancé", it: "Opzioni Stack Tecnologico Avanzato", de: "Erweiterte Technologie-Optionen" },

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
  "caseStudies.description": { en: "Discover how strategic Local SEO has transformed businesses across different industries and regions. Every case study shows real, measurable results.", ar: "اكتشف كيف غيّر SEO المحلي الاستراتيجي الشركات عبر مختلف الصناعات والمناطق. كل دراسة حالة تعرض نتائج حقيقية وقابلة للقياس.", es: "Descubre cómo el SEO Local estratégico ha transformado negocios en diferentes industrias y regiones. Cada caso de estudio muestra resultados reales y medibles.", pt: "Descubra como o SEO Local estratégico transformou empresas em diferentes indústrias e regiões. Cada estudo de caso mostra resultados reais e mensuráveis.", fr: "Découvrez comment le SEO local stratégique a transformé des entreprises dans différentes industries et régions. Chaque étude de cas montre des résultats réels et mesurables.", it: "Scopri come il SEO locale strategico ha trasformato aziende in diversi settori e regioni. Ogni caso di studio mostra risultati reali e misurabili.", de: "Entdecken Sie, wie strategisches lokales SEO Unternehmen in verschiedenen Branchen und Regionen transformiert hat. Jede Fallstudie zeigt echte, messbare Ergebnisse." },
  "caseStudies.clientsServed": { en: "Clients Served", ar: "عملاء تم خدمتهم", es: "Clientes Atendidos", pt: "Clientes Atendidos", fr: "Clients servis", it: "Clienti serviti", de: "Betreute Kunden" },
  "caseStudies.industries": { en: "Industries", ar: "الصناعات", es: "Industrias", pt: "Indústrias", fr: "Industries", it: "Settori", de: "Branchen" },
  "caseStudies.successRate": { en: "Success Rate", ar: "معدل النجاح", es: "Tasa de Éxito", pt: "Taxa de Sucesso", fr: "Taux de réussite", it: "Tasso di successo", de: "Erfolgsrate" },
  "caseStudies.challenge": { en: "Challenge", ar: "التحدي", es: "Desafío", pt: "Desafio", fr: "Défi", it: "Sfida", de: "Herausforderung" },
  "caseStudies.solution": { en: "Solution", ar: "الحل", es: "Solución", pt: "Solução", fr: "Solution", it: "Soluzione", de: "Lösung" },
  "caseStudies.results": { en: "Results", ar: "النتائج", es: "Resultados", pt: "Resultados", fr: "Résultats", it: "Risultati", de: "Ergebnisse" },
  "caseStudies.ctaTitle": { en: "Want Results Like These?", ar: "هل تريد نتائج مثل هذه؟", es: "¿Quieres Resultados Como Estos?", pt: "Quer Resultados Como Estes?", fr: "Vous voulez des résultats comme ceux-ci?", it: "Vuoi risultati come questi?", de: "Möchten Sie solche Ergebnisse?" },
  "caseStudies.ctaDescription": { en: "Let's discuss how we can achieve similar or better results for your business. Get a professional SEO audit for just $50 (50% OFF — book within 24 hours!)", ar: "دعنا نناقش كيف يمكننا تحقيق نتائج مماثلة أو أفضل لعملك. احصل على تدقيق SEO احترافي بـ 50$ فقط (خصم 50% — احجز خلال 24 ساعة!)", es: "Discutamos cómo podemos lograr resultados similares o mejores para tu negocio. Obtén una auditoría SEO profesional por solo $50 (¡50% DE DESCUENTO — reserva en 24 horas!)", pt: "Vamos discutir como podemos alcançar resultados semelhantes ou melhores para seu negócio. Obtenha uma auditoria SEO profissional por apenas $50 (50% DE DESCONTO — reserve em 24 horas!)", fr: "Discutons de la façon dont nous pouvons obtenir des résultats similaires ou meilleurs pour votre entreprise. Obtenez un audit SEO professionnel pour seulement 50$ (50% de réduction — réservez dans les 24 heures!)", it: "Discutiamo come possiamo ottenere risultati simili o migliori per la tua attività. Ottieni un audit SEO professionale per soli $50 (50% DI SCONTO — prenota entro 24 ore!)", de: "Lassen Sie uns besprechen, wie wir ähnliche oder bessere Ergebnisse für Ihr Unternehmen erzielen können. Holen Sie sich ein professionelles SEO-Audit für nur 50$ (50% RABATT — buchen Sie innerhalb von 24 Stunden!)" },
  "caseStudies.startStory": { en: "Start Your Success Story", ar: "ابدأ قصة نجاحك", es: "Inicia Tu Historia de Éxito", pt: "Inicie Sua História de Sucesso", fr: "Commencez votre histoire de succès", it: "Inizia la tua storia di successo", de: "Starten Sie Ihre Erfolgsgeschichte" },
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
  "about.seoTitle": { en: "Meet Your Local SEO Growth Partner Behind Real Google Maps Results – Syed Hadi Hussain", ar: "تعرف على شريكك في نمو SEO المحلي وراء نتائج خرائط Google الحقيقية - سيد هادي حسين", es: "Conoce a Tu Socio de Crecimiento SEO Local Detrás de Resultados Reales en Google Maps – Syed Hadi Hussain", pt: "Conheça Seu Parceiro de Crescimento em SEO Local Por Trás de Resultados Reais no Google Maps – Syed Hadi Hussain", fr: "Rencontrez Votre Partenaire de Croissance SEO Local Derrière de Vrais Résultats Google Maps – Syed Hadi Hussain", it: "Scopri il Tuo Partner di Crescita SEO Locale Dietro ai Risultati Reali su Google Maps – Syed Hadi Hussain", de: "Lernen Sie Ihren Local SEO Wachstumspartner Hinter Echten Google Maps Ergebnissen Kennen – Syed Hadi Hussain" },
  "about.seoDescription": { en: "Discover how Syed Hadi Hussain helps service-based businesses grow through Local SEO, Google Business Profile optimization, and data-backed strategies that generate real leads.", ar: "اكتشف كيف يساعد سيد هادي حسين الشركات القائمة على الخدمات على النمو من خلال SEO المحلي وتحسين Google Business Profile والاستراتيجيات المدعومة بالبيانات التي تولد عملاء محتملين حقيقيين.", es: "Descubre cómo Syed Hadi Hussain ayuda a las empresas basadas en servicios a crecer a través del SEO Local, optimización de Google Business Profile y estrategias respaldadas por datos que generan leads reales.", pt: "Descubra como Syed Hadi Hussain ajuda empresas de serviços a crescer através de SEO Local, otimização do Google Business Profile e estratégias baseadas em dados que geram leads reais.", fr: "Découvrez comment Syed Hadi Hussain aide les entreprises de services à se développer grâce au SEO local, à l'optimisation de Google Business Profile et à des stratégies basées sur les données qui génèrent de vrais leads.", it: "Scopri come Syed Hadi Hussain aiuta le aziende di servizi a crescere attraverso SEO Locale, ottimizzazione di Google Business Profile e strategie basate sui dati che generano lead reali.", de: "Entdecken Sie, wie Syed Hadi Hussain dienstleistungsbasierten Unternehmen hilft, durch lokales SEO, Google Business Profile Optimierung und datengestützte Strategien zu wachsen, die echte Leads generieren." },
  "about.seoKeywords": { en: "Local SEO expert, SEO specialist, Syed Hadi Hussain, Google Business Profile expert, local search growth partner", ar: "خبير SEO المحلي، متخصص SEO، سيد هادي حسين، خبير Google Business Profile، شريك نمو البحث المحلي", es: "Experto en SEO Local, especialista SEO, Syed Hadi Hussain, experto en Google Business Profile, socio de crecimiento en búsqueda local", pt: "Especialista em SEO Local, especialista SEO, Syed Hadi Hussain, especialista em Google Business Profile, parceiro de crescimento em busca local", fr: "Expert SEO local, spécialiste SEO, Syed Hadi Hussain, expert Google Business Profile, partenaire de croissance en recherche locale", it: "Esperto SEO Locale, specialista SEO, Syed Hadi Hussain, esperto Google Business Profile, partner di crescita nella ricerca locale", de: "Lokaler SEO-Experte, SEO-Spezialist, Syed Hadi Hussain, Google Business Profile Experte, lokaler Suche Wachstumspartner" },
  "about.imageAlt": { en: "Syed Hadi Hussain - Senior Local SEO Specialist", ar: "سيد هادي حسين - أخصائي SEO المحلي الأول", es: "Syed Hadi Hussain - Especialista Senior en SEO Local", pt: "Syed Hadi Hussain - Especialista Sênior em SEO Local", fr: "Syed Hadi Hussain - Spécialiste SEO Local Senior", it: "Syed Hadi Hussain - Specialista SEO Locale Senior", de: "Syed Hadi Hussain - Senior Local SEO Spezialist" },
  "about.subtitle": { en: "About Me", ar: "حولي", es: "Sobre Mí", pt: "Sobre Mim", fr: "À propos de moi", it: "Chi sono", de: "Über mich" },
  "about.title": { en: "Your Partner in Local Search Success", ar: "شريكك في نجاح البحث المحلي", es: "Tu Socio en el Éxito de Búsqueda Local", pt: "Seu Parceiro no Sucesso da Busca Local", fr: "Votre Partenaire pour le Succès de la Recherche Locale", it: "Il Tuo Partner per il Successo nella Ricerca Locale", de: "Ihr Partner für den Erfolg in der lokalen Suche" },
  "about.description1": { en: "I am a results-driven Local SEO specialist with hands-on experience helping service businesses dominate Google Search and Google Business Profile rankings. I focus on practical SEO strategies that generate real calls, leads, and revenue—not just traffic.", ar: "أنا متخصص في SEO المحلي موجه بالنتائج مع خبرة عملية في مساعدة الشركات الخدمية على السيطرة على تصنيفات Google Search وGoogle Business Profile. أركز على استراتيجيات SEO العملية التي تولد مكالمات وعملاء محتملين وإيرادات حقيقية - وليس فقط حركة مرور.", es: "Soy un especialista en SEO Local orientado a resultados con experiencia práctica ayudando a empresas de servicios a dominar los rankings de Google Search y Google Business Profile. Me enfoco en estrategias SEO prácticas que generan llamadas, leads e ingresos reales, no solo tráfico.", pt: "Sou um especialista em SEO Local orientado a resultados com experiência prática ajudando empresas de serviços a dominar os rankings do Google Search e Google Business Profile. Foco em estratégias de SEO práticas que geram chamadas, leads e receita reais — não apenas tráfego.", fr: "Je suis un spécialiste SEO Local orienté résultats avec une expérience pratique pour aider les entreprises de services à dominer les classements Google Search et Google Business Profile. Je me concentre sur des stratégies SEO pratiques qui génèrent de vrais appels, leads et revenus — pas seulement du trafic.", it: "Sono uno specialista SEO Locale orientato ai risultati con esperienza pratica nell'aiutare le aziende di servizi a dominare i ranking di Google Search e Google Business Profile. Mi concentro su strategie SEO pratiche che generano chiamate, lead e ricavi reali — non solo traffico.", de: "Ich bin ein ergebnisorientierter Local SEO Spezialist mit praktischer Erfahrung, der Dienstleistungsunternehmen hilft, Google Search und Google Business Profile Rankings zu dominieren. Ich konzentriere mich auf praktische SEO-Strategien, die echte Anrufe, Leads und Umsatz generieren — nicht nur Traffic." },
  "about.description2": { en: "With 7+ years of professional SEO experience and 100+ clients served worldwide, I've developed proven methodologies that consistently deliver measurable results for local businesses.", ar: "مع أكثر من 7 سنوات من الخبرة المهنية في SEO وأكثر من 100 عميل تم خدمتهم حول العالم، طورت منهجيات مثبتة تقدم باستمرار نتائج قابلة للقياس للشركات المحلية.", es: "Con más de 7 años de experiencia profesional en SEO y más de 100 clientes atendidos en todo el mundo, he desarrollado metodologías probadas que ofrecen consistentemente resultados medibles para negocios locales.", pt: "Com mais de 7 anos de experiência profissional em SEO e mais de 100 clientes atendidos em todo o mundo, desenvolvi metodologias comprovadas que entregam consistentemente resultados mensuráveis para negócios locais.", fr: "Avec plus de 7 ans d'expérience professionnelle en SEO et plus de 100 clients servis dans le monde, j'ai développé des méthodologies éprouvées qui offrent systématiquement des résultats mesurables pour les entreprises locales.", it: "Con oltre 7 anni di esperienza professionale SEO e oltre 100 clienti serviti in tutto il mondo, ho sviluppato metodologie comprovate che offrono costantemente risultati misurabili per le attività locali.", de: "Mit über 7 Jahren professioneller SEO-Erfahrung und über 100 Kunden weltweit habe ich bewährte Methoden entwickelt, die konsistent messbare Ergebnisse für lokale Unternehmen liefern." },
  "about.viewCaseStudies": { en: "View Case Studies", ar: "عرض دراسات الحالة", es: "Ver Casos de Estudio", pt: "Ver Estudos de Caso", fr: "Voir les études de cas", it: "Vedi casi studio", de: "Fallstudien ansehen" },
  "about.exploreServices": { en: "Explore Services", ar: "استكشف الخدمات", es: "Explorar Servicios", pt: "Explorar Serviços", fr: "Explorer les services", it: "Esplora i servizi", de: "Dienstleistungen erkunden" },
  "about.getInTouch": { en: "Get In Touch", ar: "تواصل معنا", es: "Ponte en Contacto", pt: "Entre em Contato", fr: "Contactez-nous", it: "Mettiti in Contatto", de: "Kontakt aufnehmen" },
  "about.clientsServed": { en: "Clients Served", ar: "عملاء تم خدمتهم", es: "Clientes Atendidos", pt: "Clientes Atendidos", fr: "Clients servis", it: "Clienti serviti", de: "Betreute Kunden" },
  
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

  // ============ PRICING PAGE EXTRAS ============
  "pricing.seoAuditOffer": { en: "50% OFF SEO Audit!", ar: "خصم 50% على تدقيق SEO!", es: "¡50% DE DESCUENTO en Auditoría SEO!", pt: "50% DE DESCONTO na Auditoria SEO!", fr: "50% de réduction sur l'audit SEO!", it: "50% DI SCONTO sull'Audit SEO!", de: "50% RABATT auf SEO-Audit!" },
  "pricing.bookWithin3Days": { en: "Book within 3 days and get your audit for just $50", ar: "احجز خلال 3 أيام واحصل على تدقيقك مقابل 50$ فقط", es: "Reserve en 3 días y obtenga su auditoría por solo $50", pt: "Reserve em 3 dias e obtenha sua auditoria por apenas $50", fr: "Réservez dans les 3 jours et obtenez votre audit pour seulement 50$", it: "Prenota entro 3 giorni e ottieni il tuo audit per soli $50", de: "Buchen Sie innerhalb von 3 Tagen und erhalten Sie Ihr Audit für nur 50$" },
  "pricing.specialMultiLocationDiscount": { en: "Special Multi-Location Discount", ar: "خصم خاص للمواقع المتعددة", es: "Descuento Especial Multi-Ubicación", pt: "Desconto Especial Multi-Localização", fr: "Réduction spéciale multi-sites", it: "Sconto speciale multi-sede", de: "Spezieller Multi-Standort-Rabatt" },
  "pricing.managingMultiple": { en: "Managing Multiple Locations or Need Multiple Services?", ar: "تدير مواقع متعددة أو تحتاج خدمات متعددة؟", es: "¿Gestiona Múltiples Ubicaciones o Necesita Múltiples Servicios?", pt: "Gerencia Múltiplas Localizações ou Precisa de Múltiplos Serviços?", fr: "Gérez plusieurs sites ou avez besoin de plusieurs services?", it: "Gestisci più sedi o hai bisogno di più servizi?", de: "Verwalten Sie mehrere Standorte oder benötigen Sie mehrere Dienste?" },
  "pricing.customQuoteDesc": { en: "Get a custom quote with exclusive discounts for businesses with multiple Google Business Profiles, franchise locations, or those needing a combination of SEO, web development, content, and marketing services.", ar: "احصل على عرض أسعار مخصص مع خصومات حصرية للشركات التي لديها ملفات Google Business متعددة أو مواقع امتياز أو تلك التي تحتاج مزيجاً من خدمات SEO وتطوير الويب والمحتوى والتسويق.", es: "Obtenga una cotización personalizada con descuentos exclusivos para empresas con múltiples perfiles de Google Business, ubicaciones de franquicia, o aquellas que necesitan una combinación de servicios de SEO, desarrollo web, contenido y marketing.", pt: "Obtenha um orçamento personalizado com descontos exclusivos para empresas com múltiplos perfis do Google Business, locais de franquia, ou aquelas que precisam de uma combinação de serviços de SEO, desenvolvimento web, conteúdo e marketing.", fr: "Obtenez un devis personnalisé avec des réductions exclusives pour les entreprises avec plusieurs profils Google Business, des emplacements de franchise, ou celles ayant besoin d'une combinaison de services SEO, développement web, contenu et marketing.", it: "Ottieni un preventivo personalizzato con sconti esclusivi per aziende con più profili Google Business, sedi in franchising, o quelle che necessitano di una combinazione di servizi SEO, sviluppo web, contenuti e marketing.", de: "Erhalten Sie ein individuelles Angebot mit exklusiven Rabatten für Unternehmen mit mehreren Google Business Profilen, Franchise-Standorten oder solchen, die eine Kombination aus SEO, Webentwicklung, Content und Marketing-Dienstleistungen benötigen." },
  "pricing.enterpriseSolutionsDesc": { en: "Franchise or agency? Custom pricing with dedicated account management.", ar: "امتياز أو وكالة؟ أسعار مخصصة مع إدارة حساب مخصصة.", es: "¿Franquicia o agencia? Precios personalizados con gestión de cuenta dedicada.", pt: "Franquia ou agência? Preços personalizados com gerenciamento de conta dedicado.", fr: "Franchise ou agence? Tarification personnalisée avec gestion de compte dédiée.", it: "Franchising o agenzia? Prezzi personalizzati con gestione account dedicata.", de: "Franchise oder Agentur? Individuelle Preise mit dediziertem Account Management." },

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
    en: "Your Local SEO Partner in", 
    ar: "شريكك في SEO المحلي في", 
    es: "Tu Socio de SEO Local en", 
    pt: "Seu Parceiro de SEO Local em", 
    fr: "Votre Partenaire SEO Local en", 
    it: "Il Tuo Partner SEO Locale in", 
    de: "Ihr Lokaler SEO-Partner in" 
  },
  "country.heroTitle": { 
    en: "Grow Your Business Online in", 
    ar: "نمّي عملك عبر الإنترنت في", 
    es: "Haz Crecer Tu Negocio Online en", 
    pt: "Expanda Seu Negócio Online em", 
    fr: "Développez Votre Entreprise en Ligne en", 
    it: "Fai Crescere la Tua Attività Online in", 
    de: "Wachsen Sie Online in" 
  },
  "country.heroDescription": { 
    en: "Right now, someone in {country} is searching for exactly what you offer. Will they find you or your competitor? I specialize in putting local businesses at the top of Google search results and Google Maps. My clients see real growth: more phone calls, more website visits, and more customers walking through their doors.", 
    ar: "الآن، شخص ما في {country} يبحث عن ما تقدمه بالضبط. هل سيجدك أم سيجد منافسك؟ أتخصص في وضع الشركات المحلية في أعلى نتائج بحث Google وخرائط Google. عملائي يرون نمواً حقيقياً: مكالمات هاتفية أكثر، زيارات موقع أكثر، وعملاء أكثر يدخلون من أبوابهم.", 
    es: "Ahora mismo, alguien en {country} busca exactamente lo que ofreces. ¿Te encontrarán a ti o a tu competidor? Me especializo en posicionar negocios locales en la cima de los resultados de Google y Google Maps. Mis clientes ven crecimiento real: más llamadas, más visitas web, y más clientes entrando por sus puertas.", 
    pt: "Neste momento, alguém em {country} está buscando exatamente o que você oferece. Vão encontrar você ou seu concorrente? Especializo-me em colocar empresas locais no topo dos resultados do Google e Google Maps. Meus clientes veem crescimento real: mais ligações, mais visitas ao site, e mais clientes entrando pelas portas.", 
    fr: "En ce moment, quelqu'un en {country} recherche exactement ce que vous offrez. Vous trouveront-ils ou votre concurrent? Je me spécialise dans le positionnement des entreprises locales en haut des résultats Google et Google Maps. Mes clients voient une croissance réelle: plus d'appels, plus de visites, et plus de clients franchissant leurs portes.", 
    it: "In questo momento, qualcuno in {country} sta cercando esattamente ciò che offri. Troveranno te o il tuo concorrente? Mi specializzo nel posizionare attività locali in cima ai risultati Google e Google Maps. I miei clienti vedono crescita reale: più chiamate, più visite al sito, e più clienti che entrano dalle loro porte.", 
    de: "Gerade jetzt sucht jemand in {country} genau das, was Sie anbieten. Werden sie Sie oder Ihren Konkurrenten finden? Ich spezialisiere mich darauf, lokale Unternehmen an die Spitze der Google-Suchergebnisse und Google Maps zu bringen. Meine Kunden sehen echtes Wachstum: mehr Anrufe, mehr Website-Besuche, und mehr Kunden, die durch ihre Türen kommen." 
  },
  "country.expertIn": { 
    en: "Seven years ago, I started helping a local restaurant get more dinner reservations. Today, I work with businesses across", 
    ar: "قبل سبع سنوات، بدأت بمساعدة مطعم محلي للحصول على المزيد من حجوزات العشاء. اليوم، أعمل مع الشركات عبر", 
    es: "Hace siete años, empecé ayudando a un restaurante local a conseguir más reservas. Hoy, trabajo con negocios en", 
    pt: "Há sete anos, comecei ajudando um restaurante local a conseguir mais reservas. Hoje, trabalho com empresas em", 
    fr: "Il y a sept ans, j'ai commencé à aider un restaurant local à obtenir plus de réservations. Aujourd'hui, je travaille avec des entreprises en", 
    it: "Sette anni fa, ho iniziato ad aiutare un ristorante locale a ottenere più prenotazioni. Oggi, lavoro con aziende in", 
    de: "Vor sieben Jahren begann ich, einem lokalen Restaurant zu mehr Reservierungen zu verhelfen. Heute arbeite ich mit Unternehmen in" 
  },
  "country.aiReady": { 
    en: "Search is changing fast. AI tools like ChatGPT now recommend local businesses, and I make sure you are one of them.", 
    ar: "البحث يتغير بسرعة. أدوات الذكاء الاصطناعي مثل ChatGPT توصي الآن بالشركات المحلية، وأتأكد من أنك واحد منهم.", 
    es: "La búsqueda está cambiando rápido. Las herramientas de IA como ChatGPT ahora recomiendan negocios locales, y me aseguro de que seas uno de ellos.", 
    pt: "A busca está mudando rápido. Ferramentas de IA como ChatGPT agora recomendam empresas locais, e garanto que você seja uma delas.", 
    fr: "La recherche change rapidement. Les outils IA comme ChatGPT recommandent maintenant des entreprises locales, et je m'assure que vous en faites partie.", 
    it: "La ricerca sta cambiando velocemente. Gli strumenti IA come ChatGPT ora raccomandano attività locali, e mi assicuro che tu sia tra queste.", 
    de: "Die Suche ändert sich schnell. KI-Tools wie ChatGPT empfehlen jetzt lokale Unternehmen, und ich sorge dafür, dass Sie dazugehören." 
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
    en: "What Sets Me Apart", 
    ar: "ما يميزني", 
    es: "Lo Que Me Diferencia", 
    pt: "O Que Me Diferencia", 
    fr: "Ce Qui Me Distingue", 
    it: "Cosa Mi Distingue", 
    de: "Was Mich Unterscheidet" 
  },
  "country.authorityTitle": { 
    en: "Local SEO Built on Real Business Results", 
    ar: "SEO محلي مبني على نتائج أعمال حقيقية", 
    es: "SEO Local Construido sobre Resultados Reales", 
    pt: "SEO Local Construído em Resultados Reais de Negócios", 
    fr: "SEO Local Construit sur des Résultats Réels", 
    it: "SEO Locale Costruito su Risultati Aziendali Reali", 
    de: "Lokales SEO Aufgebaut auf Echten Geschäftsergebnissen" 
  },
  "country.authoritySubtitle": { 
    en: "I don't outsource your project to a junior team. When you work with me, you get direct access to someone who has spent years understanding what actually moves the needle for local businesses in {country}—whether that's a dentist in a competitive metro area or a contractor in a smaller town.", 
    ar: "لا أوكل مشروعك لفريق مبتدئ. عندما تعمل معي، تحصل على وصول مباشر لشخص قضى سنوات في فهم ما يحدث فرقاً فعلياً للشركات المحلية في {country}—سواء كان طبيب أسنان في منطقة حضرية تنافسية أو مقاول في بلدة أصغر.", 
    es: "No externalizo tu proyecto a un equipo junior. Cuando trabajas conmigo, tienes acceso directo a alguien que ha pasado años entendiendo qué realmente marca la diferencia para negocios locales en {country}—ya sea un dentista en un área metropolitana competitiva o un contratista en un pueblo más pequeño.", 
    pt: "Não terceirizo seu projeto para uma equipe júnior. Quando você trabalha comigo, tem acesso direto a alguém que passou anos entendendo o que realmente faz diferença para empresas locais em {country}—seja um dentista em uma área metropolitana competitiva ou um empreiteiro em uma cidade menor.", 
    fr: "Je ne sous-traite pas votre projet à une équipe junior. Quand vous travaillez avec moi, vous avez un accès direct à quelqu'un qui a passé des années à comprendre ce qui fait vraiment la différence pour les entreprises locales en {country}—qu'il s'agisse d'un dentiste dans une zone métropolitaine compétitive ou d'un entrepreneur dans une petite ville.", 
    it: "Non esternalizzo il tuo progetto a un team junior. Quando lavori con me, hai accesso diretto a qualcuno che ha passato anni a capire cosa fa davvero la differenza per le attività locali in {country}—che sia un dentista in un'area metropolitana competitiva o un appaltatore in una città più piccola.", 
    de: "Ich lagere Ihr Projekt nicht an ein Junior-Team aus. Wenn Sie mit mir arbeiten, haben Sie direkten Zugang zu jemandem, der Jahre damit verbracht hat zu verstehen, was wirklich einen Unterschied für lokale Unternehmen in {country} macht—sei es ein Zahnarzt in einem wettbewerbsintensiven Ballungsraum oder ein Handwerker in einer kleineren Stadt." 
  },
  "country.multiStateExpertise": { 
    en: "Deep Local Market Knowledge", 
    ar: "معرفة عميقة بالسوق المحلي", 
    es: "Conocimiento Profundo del Mercado Local", 
    pt: "Conhecimento Profundo do Mercado Local", 
    fr: "Connaissance Approfondie du Marché Local", 
    it: "Conoscenza Approfondita del Mercato Locale", 
    de: "Tiefes Wissen über Lokale Märkte" 
  },
  "country.multiStateDesc": { 
    en: "Every region in {country} has unique search patterns and competition levels. A dentist in one city faces different challenges than a contractor in another. Having worked with businesses across all {count} regions, I understand these local differences and adapt my approach accordingly.", 
    ar: "كل منطقة في {country} لها أنماط بحث فريدة ومستويات منافسة مختلفة. طبيب أسنان في مدينة يواجه تحديات مختلفة عن مقاول في مدينة أخرى. بعد العمل مع شركات عبر جميع المناطق الـ {count}، أفهم هذه الاختلافات المحلية وأكيف نهجي وفقًا لذلك.", 
    es: "Cada región en {country} tiene patrones de búsqueda únicos y niveles de competencia diferentes. Un dentista en una ciudad enfrenta desafíos diferentes a un contratista en otra. Habiendo trabajado con negocios en las {count} regiones, entiendo estas diferencias locales y adapto mi enfoque en consecuencia.", 
    pt: "Cada região em {country} tem padrões de busca únicos e níveis de competição diferentes. Um dentista em uma cidade enfrenta desafios diferentes de um empreiteiro em outra. Tendo trabalhado com empresas em todas as {count} regiões, entendo essas diferenças locais e adapto minha abordagem de acordo.", 
    fr: "Chaque région en {country} a des modèles de recherche uniques et des niveaux de concurrence différents. Un dentiste dans une ville fait face à des défis différents d'un entrepreneur dans une autre. Ayant travaillé avec des entreprises dans les {count} régions, je comprends ces différences locales et adapte mon approche en conséquence.", 
    it: "Ogni regione in {country} ha schemi di ricerca unici e livelli di concorrenza diversi. Un dentista in una città affronta sfide diverse da un appaltatore in un'altra. Avendo lavorato con aziende in tutte le {count} regioni, capisco queste differenze locali e adatto il mio approccio di conseguenza.", 
    de: "Jede Region in {country} hat einzigartige Suchmuster und unterschiedliche Wettbewerbsniveaus. Ein Zahnarzt in einer Stadt steht vor anderen Herausforderungen als ein Handwerker in einer anderen. Da ich mit Unternehmen in allen {count} Regionen gearbeitet habe, verstehe ich diese lokalen Unterschiede und passe meinen Ansatz entsprechend an." 
  },
  "country.mapOptimization": { 
    en: "Map Pack Visibility That Converts", 
    ar: "ظهور في حزمة الخريطة يحقق نتائج", 
    es: "Visibilidad en Map Pack que Convierte", 
    pt: "Visibilidade no Map Pack que Converte", 
    fr: "Visibilité Map Pack qui Convertit", 
    it: "Visibilità Map Pack che Converte", 
    de: "Map Pack Sichtbarkeit die Konvertiert" 
  },
  "country.mapOptimizationDesc": { 
    en: "The top 3 results in Google Maps get 93% of all clicks. Most agencies promise 'better rankings' but I focus specifically on getting you into those top positions and optimizing your listing so that clicks turn into calls, not just views.", 
    ar: "أفضل 3 نتائج في خرائط Google تحصل على 93% من جميع النقرات. معظم الوكالات تعد بـ'تصنيفات أفضل' لكنني أركز تحديداً على إيصالك لتلك المراكز العليا وتحسين قائمتك حتى تتحول النقرات إلى مكالمات، وليس مجرد مشاهدات.", 
    es: "Los 3 primeros resultados en Google Maps obtienen el 93% de todos los clics. La mayoría de agencias prometen 'mejores rankings' pero yo me enfoco específicamente en ponerte en esas posiciones top y optimizar tu ficha para que los clics se conviertan en llamadas, no solo vistas.", 
    pt: "Os 3 primeiros resultados no Google Maps recebem 93% de todos os cliques. A maioria das agências promete 'melhores rankings' mas eu foco especificamente em colocá-lo nessas posições top e otimizar sua listagem para que cliques se tornem ligações, não apenas visualizações.", 
    fr: "Les 3 premiers résultats sur Google Maps obtiennent 93% de tous les clics. La plupart des agences promettent 'de meilleurs classements' mais je me concentre spécifiquement sur vous placer dans ces positions top et optimiser votre fiche pour que les clics deviennent des appels, pas seulement des vues.", 
    it: "I primi 3 risultati su Google Maps ottengono il 93% di tutti i clic. La maggior parte delle agenzie promette 'classifiche migliori' ma io mi concentro specificamente sul portarti in quelle posizioni top e ottimizzare la tua scheda in modo che i clic diventino chiamate, non solo visualizzazioni.", 
    de: "Die Top 3 Ergebnisse in Google Maps erhalten 93% aller Klicks. Die meisten Agenturen versprechen 'bessere Rankings' aber ich konzentriere mich speziell darauf, Sie in diese Top-Positionen zu bringen und Ihren Eintrag so zu optimieren, dass Klicks zu Anrufen werden, nicht nur zu Aufrufen." 
  },
  "country.aiSearchReady": { 
    en: "Prepared for How People Search Tomorrow", 
    ar: "مستعد لطريقة بحث الناس غداً", 
    es: "Preparado para Cómo Buscará la Gente Mañana", 
    pt: "Preparado para Como as Pessoas Buscarão Amanhã", 
    fr: "Préparé pour la Recherche de Demain", 
    it: "Preparato per Come Cercheranno le Persone Domani", 
    de: "Vorbereitet auf die Suche von Morgen" 
  },
  "country.aiSearchReadyDesc": { 
    en: "Ask ChatGPT for 'the best dentist near me' and watch what happens. AI-powered search is already here, and it is reshaping how customers find local businesses. My strategies do not just work for Google today. They position you for AI search tomorrow.", 
    ar: "اسأل ChatGPT عن 'أفضل طبيب أسنان بالقرب مني' وشاهد ما يحدث. البحث المدعوم بالذكاء الاصطناعي موجود بالفعل، ويعيد تشكيل كيفية عثور العملاء على الشركات المحلية. استراتيجياتي لا تعمل فقط لـ Google اليوم بل تضعك في موقع جيد للبحث بالذكاء الاصطناعي غداً.", 
    es: "Pregunta a ChatGPT por 'el mejor dentista cerca de mí' y mira qué pasa. La búsqueda con IA ya está aquí, y está reformando cómo los clientes encuentran negocios locales. Mis estrategias no solo funcionan para Google hoy. Te posicionan para la búsqueda IA de mañana.", 
    pt: "Pergunte ao ChatGPT 'o melhor dentista perto de mim' e veja o que acontece. A busca com IA já está aqui, e está remodelando como os clientes encontram empresas locais. Minhas estratégias não funcionam apenas para o Google hoje. Elas te posicionam para a busca IA de amanhã.", 
    fr: "Demandez à ChatGPT 'le meilleur dentiste près de chez moi' et regardez ce qui se passe. La recherche IA est déjà là, et elle remodèle la façon dont les clients trouvent les entreprises locales. Mes stratégies ne fonctionnent pas seulement pour Google aujourd'hui. Elles vous positionnent pour la recherche IA de demain.", 
    it: "Chiedi a ChatGPT 'il miglior dentista vicino a me' e guarda cosa succede. La ricerca IA è già qui, e sta rimodellando il modo in cui i clienti trovano le attività locali. Le mie strategie non funzionano solo per Google oggi. Ti posizionano per la ricerca IA di domani.", 
    de: "Fragen Sie ChatGPT nach 'dem besten Zahnarzt in meiner Nähe' und sehen Sie, was passiert. KI-gestützte Suche ist bereits hier und verändert, wie Kunden lokale Unternehmen finden. Meine Strategien funktionieren nicht nur für Google heute. Sie positionieren Sie für die KI-Suche von morgen." 
  },
  "country.localSearchDominance": { 
    en: "Measurable Growth You Can Track", 
    ar: "نمو قابل للقياس يمكنك تتبعه", 
    es: "Crecimiento Medible que Puedes Rastrear", 
    pt: "Crescimento Mensurável que Você Pode Acompanhar", 
    fr: "Croissance Mesurable que Vous Pouvez Suivre", 
    it: "Crescita Misurabile che Puoi Monitorare", 
    de: "Messbares Wachstum das Sie Verfolgen Können" 
  },
  "country.localSearchDominanceDesc": { 
    en: "I don't hide behind vague metrics. Every month, you'll see exactly how many calls came from your Google listing, how many people requested directions, and how your search visibility has changed. On average, my clients in {country} see 150%+ growth in qualified local traffic within 6 months.", 
    ar: "لا أختبئ وراء مقاييس غامضة. كل شهر، سترى بالضبط عدد المكالمات التي جاءت من قائمتك على Google، وعدد الأشخاص الذين طلبوا الاتجاهات، وكيف تغيرت رؤيتك في البحث. في المتوسط، يرى عملائي في {country} نمواً بنسبة 150%+ في الزيارات المحلية المؤهلة خلال 6 أشهر.", 
    es: "No me escondo detrás de métricas vagas. Cada mes, verás exactamente cuántas llamadas vinieron de tu ficha de Google, cuántas personas pidieron direcciones, y cómo ha cambiado tu visibilidad de búsqueda. En promedio, mis clientes en {country} ven 150%+ de crecimiento en tráfico local cualificado en 6 meses.", 
    pt: "Não me escondo atrás de métricas vagas. Todo mês, você verá exatamente quantas ligações vieram da sua ficha do Google, quantas pessoas pediram direções, e como sua visibilidade de busca mudou. Em média, meus clientes em {country} veem 150%+ de crescimento em tráfego local qualificado em 6 meses.", 
    fr: "Je ne me cache pas derrière des métriques vagues. Chaque mois, vous verrez exactement combien d'appels sont venus de votre fiche Google, combien de personnes ont demandé des directions, et comment votre visibilité de recherche a changé. En moyenne, mes clients en {country} voient 150%+ de croissance du trafic local qualifié en 6 mois.", 
    it: "Non mi nascondo dietro metriche vaghe. Ogni mese, vedrai esattamente quante chiamate sono arrivate dalla tua scheda Google, quante persone hanno chiesto indicazioni, e come è cambiata la tua visibilità di ricerca. In media, i miei clienti in {country} vedono 150%+ di crescita nel traffico locale qualificato in 6 mesi.", 
    de: "Ich verstecke mich nicht hinter vagen Metriken. Jeden Monat sehen Sie genau, wie viele Anrufe von Ihrem Google-Eintrag kamen, wie viele Personen Wegbeschreibungen angefordert haben und wie sich Ihre Suchsichtbarkeit verändert hat. Im Durchschnitt sehen meine Kunden in {country} 150%+ Wachstum bei qualifiziertem lokalem Traffic innerhalb von 6 Monaten." 
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
  "country.serviceAreas": { 
    en: "Service Areas", 
    ar: "مناطق الخدمة", 
    es: "Áreas de Servicio", 
    pt: "Áreas de Serviço", 
    fr: "Zones de service", 
    it: "Aree di servizio", 
    de: "Servicegebiete" 
  },
  "country.statesHeading": { 
    en: "Local SEO Services Across {country}", 
    ar: "خدمات SEO المحلي عبر {country}", 
    es: "Servicios de SEO Local en {country}", 
    pt: "Serviços de SEO Local em {country}", 
    fr: "Services SEO Local dans {country}", 
    it: "Servizi SEO Locale in {country}", 
    de: "Lokale SEO-Dienste in {country}" 
  },
  "country.statesDescription": { 
    en: "I provide specialized local SEO services across all {count} states and territories. Click on any state to explore city-specific services and local market insights.", 
    ar: "أقدم خدمات SEO محلية متخصصة عبر جميع {count} ولاية ومنطقة. انقر على أي ولاية لاستكشاف الخدمات الخاصة بالمدن ورؤى السوق المحلي.", 
    es: "Ofrezco servicios de SEO local especializados en todos los {count} estados y territorios. Haz clic en cualquier estado para explorar servicios específicos de ciudades.", 
    pt: "Forneço serviços especializados de SEO local em todos os {count} estados e territórios. Clique em qualquer estado para explorar serviços específicos de cidades.", 
    fr: "Je fournis des services SEO local spécialisés dans les {count} états et territoires. Cliquez sur un état pour explorer les services spécifiques aux villes.", 
    it: "Fornisco servizi SEO locale specializzati in tutti i {count} stati e territori. Clicca su uno stato per esplorare i servizi specifici per città.", 
    de: "Ich biete spezialisierte lokale SEO-Dienste in allen {count} Bundesstaaten und Territorien. Klicken Sie auf einen Staat, um stadtspezifische Dienste zu erkunden." 
  },
  "country.cities": { 
    en: "cities", 
    ar: "مدن", 
    es: "ciudades", 
    pt: "cidades", 
    fr: "villes", 
    it: "città", 
    de: "Städte" 
  },
  "country.viewState": { 
    en: "View State", 
    ar: "عرض الولاية", 
    es: "Ver Estado", 
    pt: "Ver Estado", 
    fr: "Voir l'état", 
    it: "Vedi Stato", 
    de: "Bundesstaat ansehen" 
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
    en: "How I Help {country} Businesses Get Found Online", 
    ar: "كيف أساعد شركات {country} على الظهور عبر الإنترنت", 
    es: "Cómo Ayudo a Negocios de {country} a Ser Encontrados Online", 
    pt: "Como Ajudo Empresas de {country} a Serem Encontradas Online", 
    fr: "Comment J'Aide les Entreprises de {country} à Être Trouvées en Ligne", 
    it: "Come Aiuto le Aziende di {country} a Farsi Trovare Online", 
    de: "Wie Ich {country}-Unternehmen Helfe, Online Gefunden zu Werden" 
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
    en: "See What I Have Done for {country} Business Owners", 
    ar: "شاهد ما فعلته لأصحاب الأعمال في {country}", 
    es: "Mira Lo Que He Hecho para Dueños de Negocios en {country}", 
    pt: "Veja o Que Fiz para Proprietários de Empresas em {country}", 
    fr: "Voyez Ce Que J'ai Fait pour les Propriétaires d'Entreprises en {country}", 
    it: "Guarda Cosa Ho Fatto per i Proprietari di Attività in {country}", 
    de: "Sehen Sie, Was Ich für Geschäftsinhaber in {country} Getan Habe" 
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
    en: "Let's Discuss Your {country} Business Goals", 
    ar: "دعنا نناقش أهداف عملك في {country}", 
    es: "Hablemos de los Objetivos de Tu Negocio en {country}", 
    pt: "Vamos Discutir os Objetivos do Seu Negócio em {country}", 
    fr: "Discutons des Objectifs de Votre Entreprise en {country}", 
    it: "Parliamo degli Obiettivi della Tua Attività in {country}", 
    de: "Lassen Sie Uns Ihre {country}-Geschäftsziele Besprechen" 
  },
  "country.contact.subtitle": { 
    en: "Schedule a free 30-minute call where we can look at your current online presence together. I will share specific recommendations you can use whether we work together or not.", 
    ar: "حدد موعداً لمكالمة مجانية لمدة 30 دقيقة حيث يمكننا النظر في حضورك الحالي عبر الإنترنت معاً. سأشارك توصيات محددة يمكنك استخدامها سواء عملنا معاً أم لا.", 
    es: "Agenda una llamada gratuita de 30 minutos donde podemos revisar tu presencia online actual juntos. Compartiré recomendaciones específicas que puedes usar trabajes conmigo o no.", 
    pt: "Agende uma chamada gratuita de 30 minutos onde podemos analisar sua presença online atual juntos. Compartilharei recomendações específicas que você pode usar trabalhando comigo ou não.", 
    fr: "Planifiez un appel gratuit de 30 minutes où nous pouvons examiner ensemble votre présence en ligne actuelle. Je partagerai des recommandations spécifiques que vous pourrez utiliser que nous travaillions ensemble ou non.", 
    it: "Prenota una chiamata gratuita di 30 minuti dove possiamo esaminare insieme la tua attuale presenza online. Condividerò raccomandazioni specifiche che potrai usare che lavoriamo insieme o meno.", 
    de: "Vereinbaren Sie ein kostenloses 30-minütiges Gespräch, bei dem wir gemeinsam Ihre aktuelle Online-Präsenz betrachten können. Ich teile spezifische Empfehlungen, die Sie nutzen können, ob wir zusammenarbeiten oder nicht." 
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
    en: "Rank Higher on Google in {state}", 
    ar: "احتل مرتبة أعلى على Google في {state}", 
    es: "Posiciónate Mejor en Google en {state}", 
    pt: "Apareça Melhor no Google em {state}", 
    fr: "Classez-vous Plus Haut sur Google au {state}", 
    it: "Posizionati Meglio su Google in {state}", 
    de: "Ranken Sie Höher bei Google in {state}" 
  },
  "state.heroDescription": { 
    en: "Local businesses in {state} compete for the same customers every day. The ones that show up first on Google win. I help service providers, retailers, and professionals in {city1}, {city2}, {city3}, {city4}, and {count}+ other {state} cities capture more leads through Local SEO Services that actually deliver results.", 
    ar: "الشركات المحلية في {state} تتنافس على نفس العملاء كل يوم. من يظهر أولاً على Google يفوز. أساعد مزودي الخدمات وتجار التجزئة والمهنيين في {city1} و{city2} و{city3} و{city4} وأكثر من {count} مدينة أخرى في {state} على جذب المزيد من العملاء المحتملين من خلال خدمات SEO المحلية التي تحقق نتائج فعلية.", 
    es: "Los negocios locales en {state} compiten por los mismos clientes cada día. Los que aparecen primero en Google ganan. Ayudo a proveedores de servicios, minoristas y profesionales en {city1}, {city2}, {city3}, {city4} y más de {count} ciudades de {state} a captar más leads a través de Servicios de SEO Local que realmente entregan resultados.", 
    pt: "Empresas locais em {state} competem pelos mesmos clientes todos os dias. Quem aparece primeiro no Google vence. Ajudo prestadores de serviços, varejistas e profissionais em {city1}, {city2}, {city3}, {city4} e mais de {count} cidades de {state} a captar mais leads através de Serviços de SEO Local que realmente entregam resultados.", 
    fr: "Les entreprises locales au {state} rivalisent pour les mêmes clients chaque jour. Ceux qui apparaissent en premier sur Google gagnent. J'aide les prestataires de services, les détaillants et les professionnels à {city1}, {city2}, {city3}, {city4} et plus de {count} autres villes du {state} à capturer plus de prospects grâce aux Services SEO Local qui produisent réellement des résultats.", 
    it: "Le attività locali in {state} competono per gli stessi clienti ogni giorno. Chi appare per primo su Google vince. Aiuto fornitori di servizi, rivenditori e professionisti a {city1}, {city2}, {city3}, {city4} e oltre {count} altre città del {state} a catturare più lead attraverso Servizi SEO Locale che producono risultati concreti.", 
    de: "Lokale Unternehmen in {state} konkurrieren jeden Tag um dieselben Kunden. Wer zuerst bei Google erscheint, gewinnt. Ich helfe Dienstleistern, Einzelhändlern und Fachleuten in {city1}, {city2}, {city3}, {city4} und über {count} weiteren {state}-Städten, mehr Leads durch Local SEO Services zu gewinnen, die tatsächlich Ergebnisse liefern." 
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
    en: "Serving Business Owners Throughout {state}", 
    ar: "نخدم أصحاب الأعمال في جميع أنحاء {state}", 
    es: "Sirviendo a Dueños de Negocios en Todo {state}", 
    pt: "Atendendo Proprietários de Empresas em Todo {state}", 
    fr: "Au Service des Propriétaires d'Entreprises dans Tout {state}", 
    it: "Al Servizio dei Proprietari di Attività in Tutto {state}", 
    de: "Wir Betreuen Geschäftsinhaber in ganz {state}" 
  },
  "state.citiesDescription": { 
    en: "Different cities in {state} have different competitive landscapes. A restaurant owner in {city1} faces unique challenges compared to a home service provider in {city2} or a healthcare practice in {city3}. I develop tailored Local SEO Services strategies that work for your specific market conditions.", 
    ar: "المدن المختلفة في {state} لها مشاهد تنافسية مختلفة. صاحب مطعم في {city1} يواجه تحديات فريدة مقارنة بمزود خدمات منزلية في {city2} أو عيادة رعاية صحية في {city3}. أطور استراتيجيات خدمات SEO محلية مخصصة تناسب ظروف سوقك المحددة.", 
    es: "Diferentes ciudades de {state} tienen panoramas competitivos diferentes. Un dueño de restaurante en {city1} enfrenta desafíos únicos comparado con un proveedor de servicios para el hogar en {city2} o una práctica de salud en {city3}. Desarrollo estrategias de Servicios de SEO Local personalizadas que funcionan para tus condiciones de mercado específicas.", 
    pt: "Diferentes cidades de {state} têm cenários competitivos diferentes. Um proprietário de restaurante em {city1} enfrenta desafios únicos comparado a um prestador de serviços domésticos em {city2} ou uma clínica de saúde em {city3}. Desenvolvo estratégias de Serviços de SEO Local personalizadas que funcionam para suas condições de mercado específicas.", 
    fr: "Différentes villes du {state} ont des paysages concurrentiels différents. Un propriétaire de restaurant à {city1} fait face à des défis uniques comparé à un prestataire de services à domicile à {city2} ou un cabinet médical à {city3}. Je développe des stratégies de Services SEO Local personnalisées qui fonctionnent pour vos conditions de marché spécifiques.", 
    it: "Diverse città del {state} hanno panorami competitivi diversi. Un proprietario di ristorante a {city1} affronta sfide uniche rispetto a un fornitore di servizi domestici a {city2} o uno studio medico a {city3}. Sviluppo strategie di Servizi SEO Locale personalizzate che funzionano per le tue condizioni di mercato specifiche.", 
    de: "Verschiedene Städte in {state} haben unterschiedliche Wettbewerbslandschaften. Ein Restaurantbesitzer in {city1} steht vor einzigartigen Herausforderungen im Vergleich zu einem Hausdienstleister in {city2} oder einer Gesundheitspraxis in {city3}. Ich entwickle maßgeschneiderte Local SEO Services Strategien, die für Ihre spezifischen Marktbedingungen funktionieren." 
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
    en: "What Local SEO Services Include for {state} Businesses", 
    ar: "ما تتضمنه خدمات SEO المحلية لشركات {state}", 
    es: "Qué Incluyen los Servicios de SEO Local para Negocios de {state}", 
    pt: "O Que os Serviços de SEO Local Incluem para Empresas de {state}", 
    fr: "Ce Que les Services SEO Local Incluent pour les Entreprises du {state}", 
    it: "Cosa Includono i Servizi SEO Locale per le Aziende di {state}", 
    de: "Was Local SEO Services für {state}-Unternehmen Beinhalten" 
  },
  "state.servicesDescription": { 
    en: "I focus on strategies that bring measurable results to {state} business owners. Every service below is designed to increase your visibility where it matters most: Google Search, Google Maps, and AI-powered search tools.", 
    ar: "أركز على الاستراتيجيات التي تحقق نتائج قابلة للقياس لأصحاب الأعمال في {state}. كل خدمة أدناه مصممة لزيادة ظهورك حيث يهم أكثر: بحث Google وخرائط Google وأدوات البحث المدعومة بالذكاء الاصطناعي.", 
    es: "Me enfoco en estrategias que traen resultados medibles a los dueños de negocios de {state}. Cada servicio a continuación está diseñado para aumentar tu visibilidad donde más importa: Búsqueda de Google, Google Maps y herramientas de búsqueda con IA.", 
    pt: "Foco em estratégias que trazem resultados mensuráveis para proprietários de empresas de {state}. Cada serviço abaixo é projetado para aumentar sua visibilidade onde mais importa: Busca do Google, Google Maps e ferramentas de busca com IA.", 
    fr: "Je me concentre sur des stratégies qui apportent des résultats mesurables aux propriétaires d'entreprises du {state}. Chaque service ci-dessous est conçu pour augmenter votre visibilité là où cela compte le plus: Recherche Google, Google Maps et outils de recherche IA.", 
    it: "Mi concentro su strategie che portano risultati misurabili ai proprietari di attività di {state}. Ogni servizio qui sotto è progettato per aumentare la tua visibilità dove conta di più: Ricerca Google, Google Maps e strumenti di ricerca IA.", 
    de: "Ich konzentriere mich auf Strategien, die messbare Ergebnisse für {state}-Geschäftsinhaber bringen. Jeder Service unten ist darauf ausgelegt, Ihre Sichtbarkeit dort zu erhöhen, wo es am wichtigsten ist: Google-Suche, Google Maps und KI-gestützte Suchtools." 
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
    en: "Customers decide within seconds whether to contact you based on your Google listing. I fine-tune every element of your profile to maximize clicks, calls, and direction requests from {state} searchers.", 
    ar: "يقرر العملاء في ثوانٍ ما إذا كانوا سيتصلون بك بناءً على قائمتك على Google. أضبط كل عنصر في ملفك لتعظيم النقرات والمكالمات وطلبات الاتجاهات من الباحثين في {state}.", 
    es: "Los clientes deciden en segundos si contactarte basándose en tu ficha de Google. Afino cada elemento de tu perfil para maximizar clics, llamadas y solicitudes de direcciones de buscadores de {state}.", 
    pt: "Os clientes decidem em segundos se vão entrar em contato com base na sua ficha do Google. Ajusto cada elemento do seu perfil para maximizar cliques, ligações e solicitações de direções de pesquisadores de {state}.", 
    fr: "Les clients décident en quelques secondes de vous contacter en fonction de votre fiche Google. J'affine chaque élément de votre profil pour maximiser les clics, appels et demandes d'itinéraires des chercheurs au {state}.", 
    it: "I clienti decidono in pochi secondi se contattarti in base alla tua scheda Google. Perfeziono ogni elemento del tuo profilo per massimizzare clic, chiamate e richieste di indicazioni dai cercatori in {state}.", 
    de: "Kunden entscheiden innerhalb von Sekunden, ob sie Sie kontaktieren, basierend auf Ihrem Google-Eintrag. Ich optimiere jedes Element Ihres Profils, um Klicks, Anrufe und Wegbeschreibungsanfragen von {state}-Suchenden zu maximieren." 
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
    en: "Appearing on page one for local searches requires technical precision and strategic content. I implement on-page optimizations and build local signals that position your {state} business ahead of competitors.", 
    ar: "الظهور في الصفحة الأولى للبحث المحلي يتطلب دقة تقنية ومحتوى استراتيجي. أنفذ تحسينات على الصفحة وأبني إشارات محلية تضع عملك في {state} أمام المنافسين.", 
    es: "Aparecer en la primera página para búsquedas locales requiere precisión técnica y contenido estratégico. Implemento optimizaciones on-page y construyo señales locales que posicionan tu negocio de {state} por delante de los competidores.", 
    pt: "Aparecer na primeira página para buscas locais requer precisão técnica e conteúdo estratégico. Implemento otimizações on-page e construo sinais locais que posicionam seu negócio de {state} à frente dos concorrentes.", 
    fr: "Apparaître en première page pour les recherches locales nécessite une précision technique et un contenu stratégique. Je mets en œuvre des optimisations on-page et construis des signaux locaux qui positionnent votre entreprise au {state} devant les concurrents.", 
    it: "Apparire in prima pagina per le ricerche locali richiede precisione tecnica e contenuti strategici. Implemento ottimizzazioni on-page e costruisco segnali locali che posizionano la tua attività in {state} davanti ai concorrenti.", 
    de: "Auf Seite eins für lokale Suchanfragen zu erscheinen, erfordert technische Präzision und strategische Inhalte. Ich implementiere On-Page-Optimierungen und baue lokale Signale auf, die Ihr {state}-Unternehmen vor Wettbewerbern positionieren." 
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
    en: "A steady flow of authentic reviews signals trustworthiness to both customers and search algorithms. I establish systematic processes that consistently generate positive feedback from your satisfied clients.", 
    ar: "تدفق مستمر من التقييمات الأصلية يشير إلى الموثوقية لكل من العملاء وخوارزميات البحث. أؤسس عمليات منهجية تولد باستمرار ردود فعل إيجابية من عملائك الراضين.", 
    es: "Un flujo constante de reseñas auténticas señala confiabilidad tanto a los clientes como a los algoritmos de búsqueda. Establezco procesos sistemáticos que generan consistentemente comentarios positivos de tus clientes satisfechos.", 
    pt: "Um fluxo constante de avaliações autênticas sinaliza confiabilidade tanto para clientes quanto para algoritmos de busca. Estabeleço processos sistemáticos que geram consistentemente feedback positivo dos seus clientes satisfeitos.", 
    fr: "Un flux régulier d'avis authentiques signale la fiabilité aux clients et aux algorithmes de recherche. J'établis des processus systématiques qui génèrent constamment des retours positifs de vos clients satisfaits.", 
    it: "Un flusso costante di recensioni autentiche segnala affidabilità sia ai clienti che agli algoritmi di ricerca. Stabilisco processi sistematici che generano costantemente feedback positivi dai tuoi clienti soddisfatti.", 
    de: "Ein stetiger Strom authentischer Bewertungen signalisiert Vertrauenswürdigkeit sowohl für Kunden als auch für Suchalgorithmen. Ich etabliere systematische Prozesse, die konsequent positives Feedback von Ihren zufriedenen Kunden generieren." 
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
    en: "Generic content fails to connect with {state} audiences. I develop location-specific pages and articles that resonate with regional searchers while building your reputation as a local authority.", 
    ar: "المحتوى العام يفشل في التواصل مع جماهير {state}. أطور صفحات ومقالات خاصة بالموقع تتردد صداها مع الباحثين الإقليميين مع بناء سمعتك كسلطة محلية.", 
    es: "El contenido genérico no conecta con las audiencias de {state}. Desarrollo páginas y artículos específicos de ubicación que resuenan con los buscadores regionales mientras construyo tu reputación como autoridad local.", 
    pt: "Conteúdo genérico falha em conectar com audiências de {state}. Desenvolvo páginas e artigos específicos de localização que ressoam com pesquisadores regionais enquanto construo sua reputação como autoridade local.", 
    fr: "Le contenu générique ne parvient pas à se connecter avec les audiences du {state}. Je développe des pages et des articles spécifiques à l'emplacement qui résonnent avec les chercheurs régionaux tout en construisant votre réputation d'autorité locale.", 
    it: "I contenuti generici non riescono a connettersi con il pubblico di {state}. Sviluppo pagine e articoli specifici per località che risuonano con i cercatori regionali costruendo la tua reputazione come autorità locale.", 
    de: "Generischer Inhalt schafft es nicht, mit {state}-Publikum zu verbinden. Ich entwickle standortspezifische Seiten und Artikel, die bei regionalen Suchenden Anklang finden und gleichzeitig Ihren Ruf als lokale Autorität aufbauen."
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
    en: "What Makes My {state} Local SEO Services Different", 
    ar: "ما يجعل خدمات SEO المحلية الخاصة بي في {state} مختلفة", 
    es: "Qué Hace Diferentes Mis Servicios de SEO Local en {state}", 
    pt: "O Que Torna Meus Serviços de SEO Local em {state} Diferentes", 
    fr: "Ce Qui Rend Mes Services SEO Local au {state} Différents", 
    it: "Cosa Rende Diversi i Miei Servizi SEO Locale in {state}", 
    de: "Was Meine {state} Local SEO Services Anders Macht" 
  },
  "state.whyChooseDescription": { 
    en: "After helping dozens of {state} businesses improve their local visibility, I understand what works in your market. Here is why business owners choose to work with me.", 
    ar: "بعد مساعدة عشرات الشركات في {state} على تحسين ظهورها المحلي، أفهم ما ينجح في سوقك. إليك لماذا يختار أصحاب الأعمال العمل معي.", 
    es: "Después de ayudar a docenas de negocios de {state} a mejorar su visibilidad local, entiendo qué funciona en tu mercado. Aquí está por qué los dueños de negocios eligen trabajar conmigo.", 
    pt: "Depois de ajudar dezenas de empresas de {state} a melhorar sua visibilidade local, entendo o que funciona no seu mercado. Aqui está por que os proprietários de empresas escolhem trabalhar comigo.", 
    fr: "Après avoir aidé des dizaines d'entreprises du {state} à améliorer leur visibilité locale, je comprends ce qui fonctionne dans votre marché. Voici pourquoi les propriétaires d'entreprises choisissent de travailler avec moi.", 
    it: "Dopo aver aiutato dozzine di aziende del {state} a migliorare la loro visibilità locale, capisco cosa funziona nel tuo mercato. Ecco perché i proprietari di attività scelgono di lavorare con me.", 
    de: "Nachdem ich Dutzenden von {state}-Unternehmen geholfen habe, ihre lokale Sichtbarkeit zu verbessern, verstehe ich, was in Ihrem Markt funktioniert. Hier ist, warum Geschäftsinhaber sich entscheiden, mit mir zu arbeiten." 
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
    en: "Large agencies assign junior staff to client accounts after closing deals. When you work with me, you get direct access to the person actually executing your strategy.", 
    ar: "الوكالات الكبيرة تعين موظفين مبتدئين لحسابات العملاء بعد إغلاق الصفقات. عندما تعمل معي، تحصل على وصول مباشر للشخص الذي ينفذ استراتيجيتك فعليًا.", 
    es: "Las grandes agencias asignan personal junior a las cuentas de clientes después de cerrar tratos. Cuando trabajas conmigo, obtienes acceso directo a la persona que realmente ejecuta tu estrategia.", 
    pt: "Grandes agências atribuem funcionários juniores às contas de clientes após fechar negócios. Quando você trabalha comigo, obtém acesso direto à pessoa que realmente executa sua estratégia.", 
    fr: "Les grandes agences assignent du personnel junior aux comptes clients après avoir conclu des affaires. Quand vous travaillez avec moi, vous avez un accès direct à la personne qui exécute réellement votre stratégie.", 
    it: "Le grandi agenzie assegnano personale junior agli account clienti dopo aver chiuso accordi. Quando lavori con me, ottieni accesso diretto alla persona che effettivamente esegue la tua strategia.", 
    de: "Große Agenturen weisen Junior-Mitarbeiter nach Vertragsabschluss den Kundenkonten zu. Wenn Sie mit mir arbeiten, haben Sie direkten Zugang zu der Person, die Ihre Strategie tatsächlich umsetzt." 
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
    en: "Cookie-cutter packages waste money on services you may not need. I create customized plans that match your specific objectives and available investment.", 
    ar: "الباقات الجاهزة تهدر المال على خدمات قد لا تحتاجها. أنشئ خططًا مخصصة تتناسب مع أهدافك المحددة والاستثمار المتاح.", 
    es: "Los paquetes genéricos desperdician dinero en servicios que quizás no necesites. Creo planes personalizados que coinciden con tus objetivos específicos e inversión disponible.", 
    pt: "Pacotes genéricos desperdiçam dinheiro em serviços que você pode não precisar. Crio planos personalizados que correspondem aos seus objetivos específicos e investimento disponível.", 
    fr: "Les forfaits génériques gaspillent de l'argent sur des services dont vous n'avez peut-être pas besoin. Je crée des plans personnalisés qui correspondent à vos objectifs spécifiques et à votre investissement disponible.", 
    it: "I pacchetti standardizzati sprecano denaro su servizi che potresti non aver bisogno. Creo piani personalizzati che corrispondono ai tuoi obiettivi specifici e all'investimento disponibile.", 
    de: "Standardpakete verschwenden Geld für Dienste, die Sie möglicherweise nicht benötigen. Ich erstelle maßgeschneiderte Pläne, die Ihren spezifischen Zielen und verfügbaren Investitionen entsprechen." 
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
    en: "Ready to Grow Your {state} Business?", 
    ar: "مستعد لتنمية عملك في {state}؟", 
    es: "¿Listo para Hacer Crecer Tu Negocio en {state}?", 
    pt: "Pronto para Crescer Seu Negócio em {state}?", 
    fr: "Prêt à Faire Croître Votre Entreprise au {state}?", 
    it: "Pronto a Far Crescere la Tua Attività in {state}?", 
    de: "Bereit, Ihr {state}-Geschäft zu Vergrößern?" 
  },
  "state.contactDescription": { 
    en: "Every month you wait, competitors gain ground in local search. Book a free strategy session and get specific recommendations for your {state} business. No obligation, no pressure, just actionable advice you can use right away.", 
    ar: "كل شهر تنتظره، يكسب المنافسون أرضاً في البحث المحلي. احجز جلسة استراتيجية مجانية واحصل على توصيات محددة لعملك في {state}. لا التزام، لا ضغط، فقط نصائح قابلة للتنفيذ يمكنك استخدامها فوراً.", 
    es: "Cada mes que esperas, los competidores ganan terreno en la búsqueda local. Reserva una sesión estratégica gratuita y obtén recomendaciones específicas para tu negocio en {state}. Sin obligación, sin presión, solo consejos prácticos que puedes usar de inmediato.", 
    pt: "Cada mês que você espera, concorrentes ganham terreno na busca local. Agende uma sessão estratégica gratuita e receba recomendações específicas para seu negócio em {state}. Sem obrigação, sem pressão, apenas conselhos práticos que você pode usar imediatamente.", 
    fr: "Chaque mois que vous attendez, les concurrents gagnent du terrain dans la recherche locale. Réservez une session stratégique gratuite et obtenez des recommandations spécifiques pour votre entreprise au {state}. Sans engagement, sans pression, juste des conseils pratiques que vous pouvez utiliser immédiatement.", 
    it: "Ogni mese che aspetti, i concorrenti guadagnano terreno nella ricerca locale. Prenota una sessione strategica gratuita e ottieni raccomandazioni specifiche per la tua attività in {state}. Nessun obbligo, nessuna pressione, solo consigli pratici che puoi usare subito.", 
    de: "Jeden Monat, den Sie warten, gewinnen Wettbewerber in der lokalen Suche an Boden. Buchen Sie eine kostenlose Strategiesitzung und erhalten Sie spezifische Empfehlungen für Ihr {state}-Unternehmen. Keine Verpflichtung, kein Druck, nur umsetzbare Ratschläge, die Sie sofort nutzen können." 
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
    en: "My reach extends throughout {state}, covering {count} distinct cities and communities. No matter where your customers are located, I position your business to capture their attention when they search for local services.", 
    ar: "يمتد نطاقي في جميع أنحاء {state}، ويغطي {count} مدينة ومجتمع متميز. بغض النظر عن مكان تواجد عملائك، أضع عملك لجذب انتباههم عند البحث عن الخدمات المحلية.", 
    es: "Mi alcance se extiende por todo {state}, cubriendo {count} ciudades y comunidades distintas. Sin importar dónde estén ubicados tus clientes, posiciono tu negocio para captar su atención cuando buscan servicios locales.", 
    pt: "Meu alcance se estende por todo {state}, cobrindo {count} cidades e comunidades distintas. Não importa onde seus clientes estejam localizados, posiciono seu negócio para captar a atenção deles quando buscam serviços locais.", 
    fr: "Ma portée s'étend à travers tout le {state}, couvrant {count} villes et communautés distinctes. Peu importe où se trouvent vos clients, je positionne votre entreprise pour capter leur attention lorsqu'ils recherchent des services locaux.", 
    it: "La mia portata si estende in tutto {state}, coprendo {count} città e comunità distinte. Non importa dove si trovino i tuoi clienti, posiziono la tua attività per catturare la loro attenzione quando cercano servizi locali.", 
    de: "Meine Reichweite erstreckt sich über ganz {state} und umfasst {count} verschiedene Städte und Gemeinden. Egal wo Ihre Kunden sich befinden, ich positioniere Ihr Unternehmen, um ihre Aufmerksamkeit zu gewinnen, wenn sie nach lokalen Diensten suchen." 
  },
  "state.citiesWeServe": { 
    en: "{state} Cities I Work With", 
    ar: "مدن {state} التي أعمل معها", 
    es: "Ciudades de {state} con las que Trabajo", 
    pt: "Cidades de {state} com as quais Trabalho", 
    fr: "Villes du {state} avec Lesquelles je Travaille", 
    it: "Città di {state} con cui Lavoro", 
    de: "{state} Städte, mit denen ich Arbeite" 
  },

  // Breadcrumb translations
  "breadcrumb.home": {
    en: "Home",
    ar: "الرئيسية",
    es: "Inicio",
    pt: "Início",
    fr: "Accueil",
    it: "Home",
    de: "Startseite"
  },
  "breadcrumb.localSeo": {
    en: "Local SEO",
    ar: "SEO المحلي",
    es: "SEO Local",
    pt: "SEO Local",
    fr: "SEO Local",
    it: "SEO Locale",
    de: "Lokales SEO"
  },

  // Related Cities translations
  "relatedCities.subtitle": {
    en: "Nearby Areas",
    ar: "المناطق المجاورة",
    es: "Áreas Cercanas",
    pt: "Áreas Próximas",
    fr: "Zones Proches",
    it: "Aree Vicine",
    de: "Nahe Gebiete"
  },
  "relatedCities.heading": {
    en: "More Local SEO Services in {state}",
    ar: "المزيد من خدمات SEO المحلية في {state}",
    es: "Más Servicios de SEO Local en {state}",
    pt: "Mais Serviços de SEO Local em {state}",
    fr: "Plus de Services SEO Local dans {state}",
    it: "Altri Servizi SEO Locale in {state}",
    de: "Weitere Local SEO Services in {state}"
  },
  "relatedCities.description": {
    en: "Explore my local SEO services for other cities near {city} in {state}.",
    ar: "استكشف خدمات SEO المحلية الخاصة بي للمدن الأخرى القريبة من {city} في {state}.",
    es: "Explora mis servicios de SEO local para otras ciudades cerca de {city} en {state}.",
    pt: "Explore meus serviços de SEO local para outras cidades perto de {city} em {state}.",
    fr: "Découvrez mes services SEO local pour d'autres villes près de {city} dans {state}.",
    it: "Esplora i miei servizi SEO locale per altre città vicino a {city} in {state}.",
    de: "Entdecken Sie meine lokalen SEO-Dienste für andere Städte in der Nähe von {city} in {state}."
  },
  "relatedCities.localSeo": {
    en: "Local SEO",
    ar: "SEO المحلي",
    es: "SEO Local",
    pt: "SEO Local",
    fr: "SEO Local",
    it: "SEO Locale",
    de: "Lokales SEO"
  },
  "relatedCities.viewAll": {
    en: "View all cities in {state}",
    ar: "عرض جميع المدن في {state}",
    es: "Ver todas las ciudades en {state}",
    pt: "Ver todas as cidades em {state}",
    fr: "Voir toutes les villes de {state}",
    it: "Vedi tutte le città in {state}",
    de: "Alle Städte in {state} anzeigen"
  },

  // ============ INDUSTRY PAGES - UNIQUE SEO OPTIMIZED CONTENT ============
  "industry.relatedServices": {
    en: "Related Services",
    ar: "الخدمات ذات الصلة",
    es: "Servicios Relacionados",
    pt: "Serviços Relacionados",
    fr: "Services connexes",
    it: "Servizi correlati",
    de: "Verwandte Dienste"
  },
  "industry.otherIndustries": {
    en: "Other {category} We Serve",
    ar: "{category} أخرى نخدمها",
    es: "Otros {category} que Servimos",
    pt: "Outros {category} que Atendemos",
    fr: "Autres {category} que nous servons",
    it: "Altri {category} che serviamo",
    de: "Andere {category} die wir bedienen"
  },
  "industry.exploreServices": {
    en: "Explore our specialized Local SEO services for other businesses in the {category} industry.",
    ar: "استكشف خدمات SEO المحلية المتخصصة لدينا للشركات الأخرى في صناعة {category}.",
    es: "Explore nuestros servicios especializados de SEO Local para otros negocios en la industria de {category}.",
    pt: "Explore nossos serviços especializados de SEO Local para outros negócios na indústria de {category}.",
    fr: "Explorez nos services SEO Local spécialisés pour d'autres entreprises de l'industrie {category}.",
    it: "Esplora i nostri servizi SEO Locale specializzati per altre aziende nel settore {category}.",
    de: "Entdecken Sie unsere spezialisierten lokalen SEO-Dienste für andere Unternehmen in der {category}-Branche."
  },
  "industry.allCategories": {
    en: "All Industry Categories",
    ar: "جميع فئات الصناعة",
    es: "Todas las Categorías de la Industria",
    pt: "Todas as Categorias da Indústria",
    fr: "Toutes les catégories d'industrie",
    it: "Tutte le categorie di industria",
    de: "Alle Branchenkategorien"
  },
  "industry.weProvideServices": {
    en: "We provide Local SEO services for businesses across all industries",
    ar: "نقدم خدمات SEO المحلية للشركات في جميع الصناعات",
    es: "Proporcionamos servicios de SEO Local para negocios en todas las industrias",
    pt: "Fornecemos serviços de SEO Local para empresas em todas as indústrias",
    fr: "Nous fournissons des services SEO Local pour les entreprises de toutes les industries",
    it: "Forniamo servizi SEO Locale per aziende di tutti i settori",
    de: "Wir bieten lokale SEO-Dienste für Unternehmen aller Branchen"
  },
  "industry.viewAllIndustries": {
    en: "View All 300+ Industries We Serve",
    ar: "عرض جميع الصناعات الـ 300+ التي نخدمها",
    es: "Ver Todas las 300+ Industrias que Servimos",
    pt: "Ver Todas as 300+ Indústrias que Atendemos",
    fr: "Voir toutes les 300+ industries que nous servons",
    it: "Vedi tutte le 300+ industrie che serviamo",
    de: "Alle 300+ Branchen ansehen, die wir bedienen"
  },
  "industry.localSeoFor": {
    en: "Local SEO for {name}",
    ar: "SEO المحلي لـ {name}",
    es: "SEO Local para {name}",
    pt: "SEO Local para {name}",
    fr: "SEO Local pour {name}",
    it: "SEO Locale per {name}",
    de: "Lokales SEO für {name}"
  },
  "industry.localSeoServices": {
    en: "Local SEO Services",
    ar: "خدمات SEO المحلية",
    es: "Servicios de SEO Local",
    pt: "Serviços de SEO Local",
    fr: "Services SEO Local",
    it: "Servizi SEO Locale",
    de: "Lokale SEO-Dienste"
  },
  "industry.servicesWeProvide": {
    en: "Our Services for {name}",
    ar: "خدماتنا لـ {name}",
    es: "Nuestros Servicios para {name}",
    pt: "Nossos Serviços para {name}",
    fr: "Nos services pour {name}",
    it: "I nostri servizi per {name}",
    de: "Unsere Dienste für {name}"
  },
  "industry.servicesDescription": {
    en: "Comprehensive Local SEO solutions tailored specifically for {name}",
    ar: "حلول SEO محلية شاملة مصممة خصيصاً لـ {name}",
    es: "Soluciones integrales de SEO Local adaptadas específicamente para {name}",
    pt: "Soluções completas de SEO Local adaptadas especificamente para {name}",
    fr: "Solutions SEO Local complètes adaptées spécifiquement pour {name}",
    it: "Soluzioni SEO Locale complete personalizzate specificamente per {name}",
    de: "Umfassende lokale SEO-Lösungen speziell für {name}"
  },
  "industry.faqTitle": {
    en: "Frequently Asked Questions",
    ar: "الأسئلة الشائعة",
    es: "Preguntas Frecuentes",
    pt: "Perguntas Frequentes",
    fr: "Questions fréquemment posées",
    it: "Domande frequenti",
    de: "Häufig gestellte Fragen"
  },
  "industry.faqSubtitle": {
    en: "Common questions about Local SEO for {name}",
    ar: "أسئلة شائعة حول SEO المحلي لـ {name}",
    es: "Preguntas comunes sobre SEO Local para {name}",
    pt: "Perguntas comuns sobre SEO Local para {name}",
    fr: "Questions courantes sur le SEO Local pour {name}",
    it: "Domande comuni sul SEO Locale per {name}",
    de: "Häufige Fragen zum lokalen SEO für {name}"
  },
  "industry.contactTitle": {
    en: "Ready to Grow Your {name} Business?",
    ar: "هل أنت مستعد لتنمية أعمال {name} الخاصة بك؟",
    es: "¿Listo para Hacer Crecer Su Negocio de {name}?",
    pt: "Pronto para Crescer Seu Negócio de {name}?",
    fr: "Prêt à développer votre entreprise de {name}?",
    it: "Pronto a far crescere la tua attività di {name}?",
    de: "Bereit, Ihr {name}-Geschäft auszubauen?"
  },
  "industry.contactDescription": {
    en: "Get a free consultation and learn how we can help your {name} business dominate local search results.",
    ar: "احصل على استشارة مجانية وتعرف على كيفية مساعدة أعمال {name} الخاصة بك للسيطرة على نتائج البحث المحلية.",
    es: "Obtenga una consulta gratuita y aprenda cómo podemos ayudar a su negocio de {name} a dominar los resultados de búsqueda local.",
    pt: "Obtenha uma consulta gratuita e saiba como podemos ajudar seu negócio de {name} a dominar os resultados de busca local.",
    fr: "Obtenez une consultation gratuite et découvrez comment nous pouvons aider votre entreprise de {name} à dominer les résultats de recherche locale.",
    it: "Ottieni una consulenza gratuita e scopri come possiamo aiutare la tua attività di {name} a dominare i risultati di ricerca locale.",
    de: "Erhalten Sie eine kostenlose Beratung und erfahren Sie, wie wir Ihrem {name}-Geschäft helfen können, lokale Suchergebnisse zu dominieren."
  },
  "industry.gbpOptimization": {
    en: "Google Business Profile Optimization",
    ar: "تحسين ملف Google التجاري",
    es: "Optimización de Perfil de Google Business",
    pt: "Otimização de Perfil do Google Business",
    fr: "Optimisation du profil Google Business",
    it: "Ottimizzazione del profilo Google Business",
    de: "Google Business Profil Optimierung"
  },
  "industry.citationBuilding": {
    en: "Local Citation Building",
    ar: "بناء الاستشهادات المحلية",
    es: "Construcción de Citas Locales",
    pt: "Construção de Citações Locais",
    fr: "Construction de citations locales",
    it: "Costruzione citazioni locali",
    de: "Lokaler Zitationsaufbau"
  },
  "industry.reviewManagement": {
    en: "Review Management & Generation",
    ar: "إدارة وتوليد المراجعات",
    es: "Gestión y Generación de Reseñas",
    pt: "Gestão e Geração de Avaliações",
    fr: "Gestion et génération d'avis",
    it: "Gestione e generazione recensioni",
    de: "Bewertungsmanagement & Generierung"
  },
  "industry.googleMapsSeo": {
    en: "Google Maps SEO",
    ar: "تحسين خرائط Google",
    es: "SEO de Google Maps",
    pt: "SEO do Google Maps",
    fr: "SEO Google Maps",
    it: "SEO Google Maps",
    de: "Google Maps SEO"
  },
  "industry.localLinkBuilding": {
    en: "Local Link Building",
    ar: "بناء الروابط المحلية",
    es: "Construcción de Enlaces Locales",
    pt: "Construção de Links Locais",
    fr: "Création de liens locaux",
    it: "Link building locale",
    de: "Lokaler Linkaufbau"
  },
  "industry.localContentMarketing": {
    en: "Local Content Marketing",
    ar: "تسويق المحتوى المحلي",
    es: "Marketing de Contenido Local",
    pt: "Marketing de Conteúdo Local",
    fr: "Marketing de contenu local",
    it: "Content marketing locale",
    de: "Lokales Content Marketing"
  },
  "industry.competitorAnalysis": {
    en: "Competitor Analysis",
    ar: "تحليل المنافسين",
    es: "Análisis de Competidores",
    pt: "Análise de Concorrentes",
    fr: "Analyse des concurrents",
    it: "Analisi dei concorrenti",
    de: "Wettbewerbsanalyse"
  },
  "industry.localKeywordResearch": {
    en: "Local Keyword Research",
    ar: "بحث الكلمات المفتاحية المحلية",
    es: "Investigación de Palabras Clave Locales",
    pt: "Pesquisa de Palavras-chave Locais",
    fr: "Recherche de mots-clés locaux",
    it: "Ricerca parole chiave locali",
    de: "Lokale Keyword-Recherche"
  },
  "industry.onPageOptimization": {
    en: "On-Page Local SEO Optimization",
    ar: "تحسين SEO المحلي على الصفحة",
    es: "Optimización SEO Local On-Page",
    pt: "Otimização SEO Local On-Page",
    fr: "Optimisation SEO Local On-Page",
    it: "Ottimizzazione SEO locale on-page",
    de: "On-Page lokale SEO-Optimierung"
  },
  "industry.localSchemaMakrup": {
    en: "Local Schema Markup",
    ar: "ترميز المخطط المحلي",
    es: "Marcado de Esquema Local",
    pt: "Marcação de Schema Local",
    fr: "Balisage de schéma local",
    it: "Markup schema locale",
    de: "Lokales Schema Markup"
  },
  "industry.aiSearchOptimization": {
    en: "AI Search Optimization",
    ar: "تحسين البحث بالذكاء الاصطناعي",
    es: "Optimización de Búsqueda IA",
    pt: "Otimização de Busca IA",
    fr: "Optimisation de recherche IA",
    it: "Ottimizzazione ricerca IA",
    de: "KI-Suchoptimierung"
  },
  "industry.mobileLocalSeo": {
    en: "Mobile Local SEO",
    ar: "SEO محلي للجوال",
    es: "SEO Local Móvil",
    pt: "SEO Local Mobile",
    fr: "SEO local mobile",
    it: "SEO locale mobile",
    de: "Mobiles lokales SEO"
  },
  "industry.viewCaseStudies": {
    en: "View Case Studies",
    ar: "عرض دراسات الحالة",
    es: "Ver Casos de Estudio",
    pt: "Ver Estudos de Caso",
    fr: "Voir les études de cas",
    it: "Vedi casi studio",
    de: "Fallstudien ansehen"
  },
  "industry.fiveStarRated": {
    en: "5-Star Rated",
    ar: "تقييم 5 نجوم",
    es: "Calificación 5 Estrellas",
    pt: "Avaliação 5 Estrelas",
    fr: "Noté 5 étoiles",
    it: "Valutazione 5 stelle",
    de: "5-Sterne-Bewertung"
  },
  "industry.servingWorldwide": {
    en: "Serving Worldwide",
    ar: "نخدم في جميع أنحاء العالم",
    es: "Sirviendo en Todo el Mundo",
    pt: "Atendendo em Todo o Mundo",
    fr: "Service mondial",
    it: "Servizio mondiale",
    de: "Weltweit tätig"
  },
  "industry.clientsServed": {
    en: "100+ {name} Clients",
    ar: "أكثر من 100 عميل {name}",
    es: "100+ Clientes de {name}",
    pt: "100+ Clientes de {name}",
    fr: "100+ clients {name}",
    it: "100+ clienti {name}",
    de: "100+ {name} Kunden"
  },

  // ============ CITY PAGES ============
  "city.stopLosingCustomers": {
    en: "Businesses: Stop Losing Customers to Competitors",
    ar: "الشركات: توقف عن خسارة العملاء لصالح المنافسين",
    es: "Negocios: Deja de Perder Clientes ante la Competencia",
    pt: "Empresas: Pare de Perder Clientes para Concorrentes",
    fr: "Entreprises: Arrêtez de perdre des clients au profit de la concurrence",
    it: "Aziende: Smetti di perdere clienti a favore dei concorrenti",
    de: "Unternehmen: Hören Sie auf, Kunden an die Konkurrenz zu verlieren"
  },
  "city.get50OffAudit": {
    en: "Get 50% Off Your SEO Audit for {city}",
    ar: "احصل على خصم 50% على تدقيق SEO لـ {city}",
    es: "Obtén 50% de Descuento en tu Auditoría SEO para {city}",
    pt: "Obtenha 50% de Desconto na Auditoria SEO para {city}",
    fr: "Obtenez 50% de réduction sur votre audit SEO pour {city}",
    it: "Ottieni il 50% di sconto sull'audit SEO per {city}",
    de: "50% Rabatt auf Ihr SEO-Audit für {city}"
  },
  "city.seeRealResults": {
    en: "See Real Results",
    ar: "شاهد نتائج حقيقية",
    es: "Ver Resultados Reales",
    pt: "Ver Resultados Reais",
    fr: "Voir les résultats réels",
    it: "Vedi risultati reali",
    de: "Echte Ergebnisse sehen"
  },
  "city.yearsProvenResults": {
    en: "Years Proven Results",
    ar: "سنوات من النتائج المثبتة",
    es: "Años de Resultados Comprobados",
    pt: "Anos de Resultados Comprovados",
    fr: "Années de résultats prouvés",
    it: "Anni di risultati comprovati",
    de: "Jahre bewährte Ergebnisse"
  },
  "city.averageVisibilityBoost": {
    en: "Average Visibility Boost",
    ar: "متوسط زيادة الظهور",
    es: "Aumento Promedio de Visibilidad",
    pt: "Aumento Médio de Visibilidade",
    fr: "Augmentation moyenne de la visibilité",
    it: "Aumento medio della visibilità",
    de: "Durchschnittliche Sichtbarkeitssteigerung"
  },
  "city.industriesMastered": {
    en: "Industries Mastered",
    ar: "صناعات متقنة",
    es: "Industrias Dominadas",
    pt: "Indústrias Dominadas",
    fr: "Industries maîtrisées",
    it: "Industrie padroneggiate",
    de: "Beherrschte Branchen"
  },
  "city.yourLocalExpert": {
    en: "Your Local SEO Expert in {city}",
    ar: "خبير SEO المحلي الخاص بك في {city}",
    es: "Tu Experto en SEO Local en {city}",
    pt: "Seu Especialista em SEO Local em {city}",
    fr: "Votre expert SEO local à {city}",
    it: "Il tuo esperto SEO locale a {city}",
    de: "Ihr lokaler SEO-Experte in {city}"
  },
  "city.trustedByBusinesses": {
    en: "Trusted by Businesses in {state}",
    ar: "موثوق به من قبل الشركات في {state}",
    es: "Confiado por Negocios en {state}",
    pt: "Confiável por Empresas em {state}",
    fr: "Approuvé par les entreprises de {state}",
    it: "Affidabile dalle aziende in {state}",
    de: "Von Unternehmen in {state} vertraut"
  },
  "industry.viewAll300Industries": {
    en: "View All 300+ Industries We Serve",
    ar: "عرض جميع الصناعات الـ 300+ التي نخدمها",
    es: "Ver Todas las 300+ Industrias que Servimos",
    pt: "Ver Todas as 300+ Indústrias que Atendemos",
    fr: "Voir toutes les 300+ industries que nous servons",
    it: "Vedi tutte le 300+ industrie che serviamo",
    de: "Alle 300+ Branchen ansehen, die wir bedienen"
  },

  // ============ CITY SERVICES ============
  "cityServices.localSeoServicesIn": {
    en: "Local SEO Services in {city}",
    ar: "خدمات SEO المحلية في {city}",
    es: "Servicios de SEO Local en {city}",
    pt: "Serviços de SEO Local em {city}",
    fr: "Services SEO Local à {city}",
    it: "Servizi SEO Locale a {city}",
    de: "Lokale SEO-Dienste in {city}"
  },
  "cityServices.completeSolutions": {
    en: "Complete Local SEO Solutions That Put {city} Customers at Your Door",
    ar: "حلول SEO محلية كاملة تجلب عملاء {city} إلى بابك",
    es: "Soluciones Completas de SEO Local que Traen Clientes de {city} a Tu Puerta",
    pt: "Soluções Completas de SEO Local que Trazem Clientes de {city} à Sua Porta",
    fr: "Solutions SEO Local Complètes qui Amènent les Clients de {city} à Votre Porte",
    it: "Soluzioni SEO Locale Complete che Portano i Clienti di {city} alla Tua Porta",
    de: "Komplette lokale SEO-Lösungen, die {city}-Kunden zu Ihrer Tür bringen"
  },
  "cityServices.stopWatching": {
    en: "Stop watching competitors take YOUR customers. I deliver full-spectrum local SEO for {city}, {state} businesses from Google Maps mastery to AI search domination. Every strategy is designed for one thing:",
    ar: "توقف عن مشاهدة المنافسين يأخذون عملاءك. أقدم SEO محلي كامل الطيف لشركات {city}، {state} من إتقان خرائط Google إلى هيمنة البحث بالذكاء الاصطناعي. كل استراتيجية مصممة لشيء واحد:",
    es: "Deja de ver cómo los competidores se llevan TUS clientes. Ofrezco SEO local de espectro completo para negocios de {city}, {state} desde el dominio de Google Maps hasta la dominación de búsqueda IA. Cada estrategia está diseñada para una cosa:",
    pt: "Pare de assistir os concorrentes levarem SEUS clientes. Entrego SEO local de espectro completo para empresas de {city}, {state} desde o domínio do Google Maps até a dominação da busca IA. Cada estratégia é projetada para uma coisa:",
    fr: "Arrêtez de regarder les concurrents prendre VOS clients. Je fournis un SEO local complet pour les entreprises de {city}, {state} de la maîtrise de Google Maps à la domination de la recherche IA. Chaque stratégie est conçue pour une chose:",
    it: "Smetti di guardare i concorrenti prendere i TUOI clienti. Fornisco SEO locale a spettro completo per le aziende di {city}, {state} dalla padronanza di Google Maps al dominio della ricerca IA. Ogni strategia è progettata per una cosa:",
    de: "Hören Sie auf zuzusehen, wie Konkurrenten IHRE Kunden nehmen. Ich liefere Full-Spectrum lokales SEO für Unternehmen in {city}, {state} von Google Maps Beherrschung bis zur KI-Suchdominanz. Jede Strategie ist für eines konzipiert:"
  },
  "cityServices.moreCustomers": {
    en: "more customers, more revenue",
    ar: "المزيد من العملاء، المزيد من الإيرادات",
    es: "más clientes, más ingresos",
    pt: "mais clientes, mais receita",
    fr: "plus de clients, plus de revenus",
    it: "più clienti, più entrate",
    de: "mehr Kunden, mehr Umsatz"
  },
  "cityServices.googleMapsDomination": {
    en: "Google Maps Domination",
    ar: "هيمنة خرائط Google",
    es: "Dominio de Google Maps",
    pt: "Domínio do Google Maps",
    fr: "Domination Google Maps",
    it: "Dominio Google Maps",
    de: "Google Maps Dominanz"
  },
  "cityServices.googleMapsDesc": {
    en: "Your customers search Google Maps first. Get into the coveted top 3 Map Pack results where 93% of local clicks happen. More visibility means more walk-ins and calls.",
    ar: "يبحث عملاؤك في خرائط Google أولاً. ادخل في أفضل 3 نتائج Map Pack حيث يحدث 93% من النقرات المحلية. المزيد من الظهور يعني المزيد من الزيارات والمكالمات.",
    es: "Tus clientes buscan primero en Google Maps. Entra en los codiciados 3 primeros resultados del Map Pack donde ocurre el 93% de los clics locales. Más visibilidad significa más visitas y llamadas.",
    pt: "Seus clientes pesquisam primeiro no Google Maps. Entre nos cobiçados 3 primeiros resultados do Map Pack onde acontecem 93% dos cliques locais. Mais visibilidade significa mais visitas e ligações.",
    fr: "Vos clients cherchent d'abord sur Google Maps. Entrez dans les 3 premiers résultats Map Pack tant convoités où se produisent 93% des clics locaux. Plus de visibilité signifie plus de visites et d'appels.",
    it: "I tuoi clienti cercano prima su Google Maps. Entra nei primi 3 risultati del Map Pack dove avviene il 93% dei clic locali. Più visibilità significa più visite e chiamate.",
    de: "Ihre Kunden suchen zuerst auf Google Maps. Kommen Sie in die begehrten Top 3 Map Pack Ergebnisse, wo 93% der lokalen Klicks passieren. Mehr Sichtbarkeit bedeutet mehr Besuche und Anrufe."
  },
  "cityServices.aiSearchOptimization": {
    en: "AI Search Optimization",
    ar: "تحسين البحث بالذكاء الاصطناعي",
    es: "Optimización de Búsqueda IA",
    pt: "Otimização de Busca IA",
    fr: "Optimisation de recherche IA",
    it: "Ottimizzazione ricerca IA",
    de: "KI-Suchoptimierung"
  },
  "cityServices.aiSearchDesc": {
    en: "ChatGPT and AI assistants are the NEW search. I ensure your business gets recommended when customers ask AI for the best service near them. Stay ahead of competitors still stuck in 2020.",
    ar: "ChatGPT ومساعدات الذكاء الاصطناعي هي البحث الجديد. أتأكد من أن عملك يُوصى به عندما يسأل العملاء الذكاء الاصطناعي عن أفضل خدمة بالقرب منهم. ابق متقدماً على المنافسين العالقين في 2020.",
    es: "ChatGPT y los asistentes de IA son la NUEVA búsqueda. Me aseguro de que tu negocio sea recomendado cuando los clientes pregunten a la IA por el mejor servicio cerca de ellos. Mantente adelante de los competidores atascados en 2020.",
    pt: "ChatGPT e assistentes de IA são a NOVA busca. Garanto que seu negócio seja recomendado quando os clientes perguntam à IA pelo melhor serviço perto deles. Fique à frente dos concorrentes ainda presos em 2020.",
    fr: "ChatGPT et les assistants IA sont la NOUVELLE recherche. Je m'assure que votre entreprise soit recommandée quand les clients demandent à l'IA le meilleur service près d'eux. Restez en avance sur les concurrents encore bloqués en 2020.",
    it: "ChatGPT e gli assistenti IA sono la NUOVA ricerca. Mi assicuro che la tua attività venga consigliata quando i clienti chiedono all'IA il miglior servizio vicino a loro. Resta avanti rispetto ai concorrenti ancora bloccati nel 2020.",
    de: "ChatGPT und KI-Assistenten sind die NEUE Suche. Ich stelle sicher, dass Ihr Unternehmen empfohlen wird, wenn Kunden die KI nach dem besten Service in ihrer Nähe fragen. Bleiben Sie den Konkurrenten voraus, die noch in 2020 feststecken."
  },
  "cityServices.citationAuthorityBuilding": {
    en: "Citation Authority Building",
    ar: "بناء سلطة الاستشهادات",
    es: "Construcción de Autoridad de Citas",
    pt: "Construção de Autoridade de Citações",
    fr: "Construction d'autorité de citations",
    it: "Costruzione autorità citazioni",
    de: "Zitationsautoritätsaufbau"
  },
  "cityServices.citationDesc": {
    en: "I build your presence across 100+ authoritative directories. Consistent NAP data across the web tells Google you are THE trusted local business. Watch your rankings climb.",
    ar: "أبني حضورك عبر أكثر من 100 دليل موثوق. بيانات NAP المتسقة عبر الويب تخبر Google أنك الشركة المحلية الموثوقة. شاهد تصنيفاتك ترتفع.",
    es: "Construyo tu presencia en más de 100 directorios autorizados. Datos NAP consistentes en la web le dicen a Google que eres EL negocio local de confianza. Mira cómo suben tus rankings.",
    pt: "Construo sua presença em mais de 100 diretórios autorizados. Dados NAP consistentes na web dizem ao Google que você é O negócio local confiável. Veja seus rankings subirem.",
    fr: "Je construis votre présence sur plus de 100 annuaires faisant autorité. Des données NAP cohérentes sur le web disent à Google que vous êtes L'entreprise locale de confiance. Regardez vos classements grimper.",
    it: "Costruisco la tua presenza su oltre 100 directory autorevoli. Dati NAP coerenti sul web dicono a Google che sei L'attività locale affidabile. Guarda i tuoi ranking salire.",
    de: "Ich baue Ihre Präsenz in über 100 maßgeblichen Verzeichnissen auf. Konsistente NAP-Daten im Web sagen Google, dass Sie DAS vertrauenswürdige lokale Unternehmen sind. Sehen Sie, wie Ihre Rankings steigen."
  },
  "cityServices.fiveStarReviewMachine": {
    en: "5-Star Review Machine",
    ar: "آلة التقييمات 5 نجوم",
    es: "Máquina de Reseñas 5 Estrellas",
    pt: "Máquina de Avaliações 5 Estrelas",
    fr: "Machine à avis 5 étoiles",
    it: "Macchina recensioni 5 stelle",
    de: "5-Sterne-Bewertungsmaschine"
  },
  "cityServices.reviewDesc": {
    en: "Reviews drive decisions. I implement proven systems that turn your happy customers into enthusiastic reviewers. More 5-star reviews means more trust and more customers.",
    ar: "المراجعات تقود القرارات. أطبق أنظمة مثبتة تحول عملاءك السعداء إلى مراجعين متحمسين. المزيد من تقييمات 5 نجوم يعني المزيد من الثقة والمزيد من العملاء.",
    es: "Las reseñas impulsan las decisiones. Implemento sistemas probados que convierten a tus clientes felices en entusiastas reseñadores. Más reseñas de 5 estrellas significa más confianza y más clientes.",
    pt: "Avaliações impulsionam decisões. Implemento sistemas comprovados que transformam seus clientes felizes em avaliadores entusiasmados. Mais avaliações 5 estrelas significa mais confiança e mais clientes.",
    fr: "Les avis guident les décisions. J'implémente des systèmes éprouvés qui transforment vos clients satisfaits en évaluateurs enthousiastes. Plus d'avis 5 étoiles signifie plus de confiance et plus de clients.",
    it: "Le recensioni guidano le decisioni. Implemento sistemi comprovati che trasformano i tuoi clienti soddisfatti in recensori entusiasti. Più recensioni 5 stelle significa più fiducia e più clienti.",
    de: "Bewertungen treiben Entscheidungen. Ich implementiere bewährte Systeme, die Ihre zufriedenen Kunden in begeisterte Bewerter verwandeln. Mehr 5-Sterne-Bewertungen bedeutet mehr Vertrauen und mehr Kunden."
  },
  "cityServices.highIntentKeywords": {
    en: "High-Intent Keywords",
    ar: "كلمات مفتاحية عالية النية",
    es: "Palabras Clave de Alta Intención",
    pt: "Palavras-chave de Alta Intenção",
    fr: "Mots-clés à forte intention",
    it: "Parole chiave ad alta intenzione",
    de: "Keywords mit hoher Kaufabsicht"
  },
  "cityServices.keywordsDesc": {
    en: "I find the exact search terms your customers use when they are ready to buy. No vanity keywords, just terms that put cash in your register.",
    ar: "أجد مصطلحات البحث الدقيقة التي يستخدمها عملاؤك عندما يكونون مستعدين للشراء. لا كلمات مفتاحية استعراضية، فقط مصطلحات تضع النقود في صندوقك.",
    es: "Encuentro los términos de búsqueda exactos que usan tus clientes cuando están listos para comprar. Sin palabras clave de vanidad, solo términos que ponen dinero en tu caja.",
    pt: "Encontro os termos de busca exatos que seus clientes usam quando estão prontos para comprar. Sem palavras-chave de vaidade, apenas termos que colocam dinheiro no seu caixa.",
    fr: "Je trouve les termes de recherche exacts que vos clients utilisent quand ils sont prêts à acheter. Pas de mots-clés de vanité, juste des termes qui mettent de l'argent dans votre caisse.",
    it: "Trovo i termini di ricerca esatti che i tuoi clienti usano quando sono pronti ad acquistare. Nessuna parola chiave di vanità, solo termini che mettono soldi nel tuo registratore di cassa.",
    de: "Ich finde die genauen Suchbegriffe, die Ihre Kunden verwenden, wenn sie kaufbereit sind. Keine Vanity-Keywords, nur Begriffe, die Geld in Ihre Kasse bringen."
  },
  "cityServices.competitorDestructionStrategy": {
    en: "Competitor Destruction Strategy",
    ar: "استراتيجية تدمير المنافسين",
    es: "Estrategia de Destrucción de Competidores",
    pt: "Estratégia de Destruição de Concorrentes",
    fr: "Stratégie de destruction des concurrents",
    it: "Strategia di distruzione dei concorrenti",
    de: "Konkurrenz-Zerstörungsstrategie"
  },
  "cityServices.competitorDesc": {
    en: "I analyze exactly what is working for your competitors, then build a strategy to outrank them. Why let them steal YOUR customers?",
    ar: "أحلل بالضبط ما ينجح لدى منافسيك، ثم أبني استراتيجية للتفوق عليهم. لماذا تدعهم يسرقون عملاءك؟",
    es: "Analizo exactamente qué está funcionando para tus competidores, luego construyo una estrategia para superarlos. ¿Por qué dejarlos robar TUS clientes?",
    pt: "Analiso exatamente o que está funcionando para seus concorrentes, depois construo uma estratégia para superá-los. Por que deixá-los roubar SEUS clientes?",
    fr: "J'analyse exactement ce qui fonctionne pour vos concurrents, puis je construis une stratégie pour les surpasser. Pourquoi les laisser voler VOS clients?",
    it: "Analizzo esattamente cosa funziona per i tuoi concorrenti, poi costruisco una strategia per superarli. Perché lasciarli rubare i TUOI clienti?",
    de: "Ich analysiere genau, was bei Ihren Konkurrenten funktioniert, und baue dann eine Strategie auf, um sie zu übertreffen. Warum lassen Sie sie IHRE Kunden stehlen?"
  },
  "cityServices.localAuthorityLinkBuilding": {
    en: "Local Authority Link Building",
    ar: "بناء روابط السلطة المحلية",
    es: "Construcción de Enlaces de Autoridad Local",
    pt: "Construção de Links de Autoridade Local",
    fr: "Construction de liens d'autorité locale",
    it: "Link building di autorità locale",
    de: "Lokaler Autoritäts-Linkaufbau"
  },
  "cityServices.linkBuildingDesc": {
    en: "Earn powerful backlinks from local sources that Google trusts. Local links mean local relevance and higher rankings for every local search.",
    ar: "اكسب روابط خلفية قوية من مصادر محلية يثق بها Google. الروابط المحلية تعني الصلة المحلية وتصنيفات أعلى لكل بحث محلي.",
    es: "Gana potentes backlinks de fuentes locales en las que Google confía. Enlaces locales significan relevancia local y rankings más altos para cada búsqueda local.",
    pt: "Ganhe backlinks poderosos de fontes locais em que o Google confia. Links locais significam relevância local e rankings mais altos para cada busca local.",
    fr: "Gagnez des backlinks puissants de sources locales auxquelles Google fait confiance. Les liens locaux signifient pertinence locale et classements plus élevés pour chaque recherche locale.",
    it: "Guadagna backlink potenti da fonti locali di cui Google si fida. I link locali significano rilevanza locale e ranking più alti per ogni ricerca locale.",
    de: "Verdienen Sie starke Backlinks von lokalen Quellen, denen Google vertraut. Lokale Links bedeuten lokale Relevanz und höhere Rankings für jede lokale Suche."
  },
  "cityServices.voiceSearchCapture": {
    en: "Voice Search Capture",
    ar: "التقاط البحث الصوتي",
    es: "Captura de Búsqueda por Voz",
    pt: "Captura de Busca por Voz",
    fr: "Capture de recherche vocale",
    it: "Cattura ricerca vocale",
    de: "Sprachsuche-Erfassung"
  },
  "cityServices.voiceSearchDesc": {
    en: "Hey Siri, find a service near me. I optimize your content so you are THE answer to voice searches. Over 50% of searches are voice, do not miss these customers.",
    ar: "يا Siri، اعثر على خدمة قريبة مني. أحسن محتواك لتكون الإجابة على البحث الصوتي. أكثر من 50% من عمليات البحث صوتية، لا تفوت هؤلاء العملاء.",
    es: "Oye Siri, encuentra un servicio cerca de mí. Optimizo tu contenido para que seas LA respuesta a las búsquedas por voz. Más del 50% de las búsquedas son por voz, no pierdas estos clientes.",
    pt: "Ei Siri, encontre um serviço perto de mim. Otimizo seu conteúdo para que você seja A resposta às buscas por voz. Mais de 50% das buscas são por voz, não perca esses clientes.",
    fr: "Dis Siri, trouve un service près de moi. J'optimise votre contenu pour que vous soyez LA réponse aux recherches vocales. Plus de 50% des recherches sont vocales, ne manquez pas ces clients.",
    it: "Ehi Siri, trova un servizio vicino a me. Ottimizzo i tuoi contenuti in modo che tu sia LA risposta alle ricerche vocali. Oltre il 50% delle ricerche sono vocali, non perdere questi clienti.",
    de: "Hey Siri, finde einen Service in meiner Nähe. Ich optimiere Ihre Inhalte, damit Sie DIE Antwort auf Sprachsuchen sind. Über 50% der Suchen sind Sprachsuchen, verpassen Sie diese Kunden nicht."
  },
  "cityServices.industriesMastered": {
    en: "Local SEO for Industries I have Mastered in {city}",
    ar: "SEO محلي للصناعات التي أتقنتها في {city}",
    es: "SEO Local para Industrias que he Dominado en {city}",
    pt: "SEO Local para Indústrias que Dominei em {city}",
    fr: "SEO Local pour les industries que j'ai maîtrisées à {city}",
    it: "SEO Locale per le industrie che ho padroneggiato a {city}",
    de: "Lokales SEO für Branchen, die ich in {city} beherrsche"
  },
  "cityServices.whateverBusiness": {
    en: "Whatever your business, I have helped similar companies in {city} dominate local search:",
    ar: "مهما كان عملك، لقد ساعدت شركات مماثلة في {city} على السيطرة على البحث المحلي:",
    es: "Sea cual sea tu negocio, he ayudado a empresas similares en {city} a dominar la búsqueda local:",
    pt: "Seja qual for o seu negócio, ajudei empresas similares em {city} a dominar a busca local:",
    fr: "Quel que soit votre entreprise, j'ai aidé des entreprises similaires à {city} à dominer la recherche locale:",
    it: "Qualunque sia la tua attività, ho aiutato aziende simili a {city} a dominare la ricerca locale:",
    de: "Was auch immer Ihr Geschäft ist, ich habe ähnlichen Unternehmen in {city} geholfen, die lokale Suche zu dominieren:"
  },
  "cityServices.moreIndustries": {
    en: "More Industries in {city}",
    ar: "المزيد من الصناعات في {city}",
    es: "Más Industrias en {city}",
    pt: "Mais Indústrias em {city}",
    fr: "Plus d'industries à {city}",
    it: "Più industrie a {city}",
    de: "Mehr Branchen in {city}"
  },

  // ============ SERVICES PAGE - SERVICE ITEMS ============
  "servicesPage.title": { en: "Local SEO Services That Drive Results", ar: "خدمات SEO المحلية التي تحقق النتائج", es: "Servicios de SEO Local que Generan Resultados", pt: "Serviços de SEO Local que Geram Resultados", fr: "Services SEO locaux qui génèrent des résultats", it: "Servizi SEO locali che generano risultati", de: "Lokale SEO-Dienste, die Ergebnisse liefern" },
  "servicesPage.description": { en: "Comprehensive strategies tailored to boost your local visibility, attract more customers, and grow your business.", ar: "استراتيجيات شاملة مصممة لتعزيز ظهورك المحلي وجذب المزيد من العملاء وتنمية عملك.", es: "Estrategias integrales adaptadas para impulsar tu visibilidad local, atraer más clientes y hacer crecer tu negocio.", pt: "Estratégias abrangentes adaptadas para aumentar sua visibilidade local, atraer mais clientes e fazer seu negócio crescer.", fr: "Stratégies complètes adaptées pour booster votre visibilité locale, attirer plus de clients et développer votre entreprise.", it: "Strategie complete su misura per aumentare la tua visibilità locale, attirare più clienti e far crescere la tua attività.", de: "Umfassende Strategien zur Steigerung Ihrer lokalen Sichtbarkeit, um mehr Kunden zu gewinnen und Ihr Geschäft auszubauen." },
  "servicesPage.getSeoAudit": { en: "Get SEO Audit — $50", ar: "احصل على تدقيق SEO — 50$", es: "Obtener Auditoría SEO — $50", pt: "Obter Auditoria SEO — $50", fr: "Obtenir un audit SEO — 50$", it: "Ottieni Audit SEO — $50", de: "SEO-Audit erhalten — 50$" },
  "servicesPage.ctaTitle": { en: "Ready to Dominate Local Search?", ar: "هل أنت مستعد للسيطرة على البحث المحلي؟", es: "¿Listo para Dominar la Búsqueda Local?", pt: "Pronto para Dominar a Busca Local?", fr: "Prêt à dominer la recherche locale?", it: "Pronto a dominare la ricerca locale?", de: "Bereit, die lokale Suche zu dominieren?" },
  "servicesPage.ctaDesc": { en: "Get a professional SEO audit for just", ar: "احصل على تدقيق SEO احترافي مقابل", es: "Obtenga una auditoría SEO profesional por solo", pt: "Obtenha uma auditoria SEO profissional por apenas", fr: "Obtenez un audit SEO professionnel pour seulement", it: "Ottieni un audit SEO professionale per soli", de: "Erhalten Sie ein professionelles SEO-Audit für nur" },
  "servicesPage.ctaDesc2": { en: "(50% OFF — book within 24 hours!) and discover how these services can transform your local visibility.", ar: "(خصم 50% — احجز خلال 24 ساعة!) واكتشف كيف يمكن لهذه الخدمات تحويل ظهورك المحلي.", es: "(50% DE DESCUENTO — ¡reserve en 24 horas!) y descubra cómo estos servicios pueden transformar su visibilidad local.", pt: "(50% DE DESCONTO — reserve em 24 horas!) e descubra como esses serviços podem transformar sua visibilidade local.", fr: "(50% de réduction — réservez dans les 24 heures!) et découvrez comment ces services peuvent transformer votre visibilité locale.", it: "(50% DI SCONTO — prenota entro 24 ore!) e scopri come questi servizi possono trasformare la tua visibilità locale.", de: "(50% RABATT — buchen Sie innerhalb von 24 Stunden!) und entdecken Sie, wie diese Dienste Ihre lokale Sichtbarkeit transformieren können." },
  "servicesPage.contactMe": { en: "Contact Me", ar: "تواصل معي", es: "Contáctame", pt: "Entre em Contato", fr: "Contactez-moi", it: "Contattami", de: "Kontaktieren Sie mich" },
  
  // Service Items (for ServicesPage.tsx)
  "Local SEO Optimization": { en: "Local SEO Optimization", ar: "تحسين SEO المحلي", es: "Optimización SEO Local", pt: "Otimização SEO Local", fr: "Optimisation SEO local", it: "Ottimizzazione SEO locale", de: "Lokale SEO-Optimierung" },
  "Boost your visibility on Google Search with local SEO strategies that attract high-intent customers in your local area.": { en: "Boost your visibility on Google Search with local SEO strategies that attract high-intent customers in your local area.", ar: "عزز ظهورك على بحث Google باستراتيجيات SEO محلية تجذب العملاء ذوي النية العالية في منطقتك المحلية.", es: "Impulsa tu visibilidad en Google Search con estrategias SEO locales que atraen clientes de alta intención en tu área local.", pt: "Aumente sua visibilidade no Google Search com estratégias de SEO local que atraem clientes de alta intenção em sua área local.", fr: "Boostez votre visibilité sur Google Search avec des stratégies SEO locales qui attirent des clients à forte intention dans votre zone locale.", it: "Aumenta la tua visibilità su Google Search con strategie SEO locali che attraggono clienti ad alta intenzione nella tua zona.", de: "Steigern Sie Ihre Sichtbarkeit in der Google-Suche mit lokalen SEO-Strategien, die kaufwillige Kunden in Ihrer Region anziehen." },
  "Service area targeting": { en: "Service area targeting", ar: "استهداف منطقة الخدمة", es: "Segmentación de área de servicio", pt: "Segmentação de área de serviço", fr: "Ciblage de zone de service", it: "Targeting dell'area di servizio", de: "Zielgebiet-Targeting" },
  "Local keyword optimization": { en: "Local keyword optimization", ar: "تحسين الكلمات المفتاحية المحلية", es: "Optimización de palabras clave locales", pt: "Otimização de palavras-chave locais", fr: "Optimisation des mots-clés locaux", it: "Ottimizzazione parole chiave locali", de: "Lokale Keyword-Optimierung" },
  "Competitor analysis": { en: "Competitor analysis", ar: "تحليل المنافسين", es: "Análisis de competidores", pt: "Análise de concorrentes", fr: "Analyse des concurrents", it: "Analisi dei concorrenti", de: "Wettbewerbsanalyse" },
  "Local content strategy": { en: "Local content strategy", ar: "استراتيجية المحتوى المحلي", es: "Estrategia de contenido local", pt: "Estratégia de conteúdo local", fr: "Stratégie de contenu local", it: "Strategia di contenuti locali", de: "Lokale Content-Strategie" },
  "Performance tracking": { en: "Performance tracking", ar: "تتبع الأداء", es: "Seguimiento del rendimiento", pt: "Rastreamento de desempenho", fr: "Suivi des performances", it: "Monitoraggio delle prestazioni", de: "Leistungsverfolgung" },
  
  "Google Business Profile Management": { en: "Google Business Profile Management", ar: "إدارة ملف Google التجاري", es: "Gestión de Google Business Profile", pt: "Gerenciamento do Google Business Profile", fr: "Gestion de Google Business Profile", it: "Gestione Google Business Profile", de: "Google Business Profile Verwaltung" },
  "Complete setup, optimization, and management of your Google Business Profile to maximize visibility in search, maps, and AI-powered listings.": { en: "Complete setup, optimization, and management of your Google Business Profile to maximize visibility in search, maps, and AI-powered listings.", ar: "الإعداد الكامل والتحسين وإدارة ملف Google التجاري الخاص بك لتعظيم الظهور في البحث والخرائط والقوائم المدعومة بالذكاء الاصطناعي.", es: "Configuración completa, optimización y gestión de tu Google Business Profile para maximizar la visibilidad en búsqueda, mapas y listados con IA.", pt: "Configuração completa, otimização e gerenciamento do seu Google Business Profile para maximizar a visibilidade em pesquisa, mapas e listagens com IA.", fr: "Configuration complète, optimisation et gestion de votre Google Business Profile pour maximiser la visibilité dans la recherche, les cartes et les listes alimentées par l'IA.", it: "Configurazione completa, ottimizzazione e gestione del tuo Google Business Profile per massimizzare la visibilità nella ricerca, mappe e elenchi alimentati dall'IA.", de: "Komplette Einrichtung, Optimierung und Verwaltung Ihres Google Business Profiles für maximale Sichtbarkeit in Suche, Karten und KI-gestützten Listen." },
  "Profile verification & setup": { en: "Profile verification & setup", ar: "التحقق من الملف والإعداد", es: "Verificación y configuración del perfil", pt: "Verificação e configuração do perfil", fr: "Vérification et configuration du profil", it: "Verifica e configurazione del profilo", de: "Profilverifizierung & Einrichtung" },
  "Category & attribute optimization": { en: "Category & attribute optimization", ar: "تحسين الفئات والسمات", es: "Optimización de categorías y atributos", pt: "Otimização de categorias e atributos", fr: "Optimisation des catégories et attributs", it: "Ottimizzazione categorie e attributi", de: "Kategorie- & Attributoptimierung" },
  "Photo & video strategy": { en: "Photo & video strategy", ar: "استراتيجية الصور والفيديو", es: "Estrategia de fotos y videos", pt: "Estratégia de fotos e vídeos", fr: "Stratégie photos et vidéos", it: "Strategia foto e video", de: "Foto- & Videostrategie" },
  "Q&A management": { en: "Q&A management", ar: "إدارة الأسئلة والأجوبة", es: "Gestión de preguntas y respuestas", pt: "Gestão de perguntas e respostas", fr: "Gestion des questions-réponses", it: "Gestione domande e risposte", de: "Q&A-Verwaltung" },
  "Posts & updates scheduling": { en: "Posts & updates scheduling", ar: "جدولة المنشورات والتحديثات", es: "Programación de publicaciones y actualizaciones", pt: "Agendamento de posts e atualizações", fr: "Planification des posts et mises à jour", it: "Pianificazione post e aggiornamenti", de: "Posts & Updates-Planung" },

  "Map SEO – Google, Apple, Bing": { en: "Map SEO – Google, Apple, Bing", ar: "SEO الخرائط – Google، Apple، Bing", es: "SEO de Mapas – Google, Apple, Bing", pt: "SEO de Mapas – Google, Apple, Bing", fr: "SEO Maps – Google, Apple, Bing", it: "SEO Mappe – Google, Apple, Bing", de: "Karten-SEO – Google, Apple, Bing" },
  "Optimize your presence on Google Maps, Apple Maps, Bing Maps, and other location-based platforms to effectively capture local searches.": { en: "Optimize your presence on Google Maps, Apple Maps, Bing Maps, and other location-based platforms to effectively capture local searches.", ar: "حسّن تواجدك على خرائط Google وApple وBing ومنصات أخرى قائمة على الموقع لجذب عمليات البحث المحلية بفعالية.", es: "Optimiza tu presencia en Google Maps, Apple Maps, Bing Maps y otras plataformas basadas en ubicación para capturar efectivamente búsquedas locales.", pt: "Otimize sua presença no Google Maps, Apple Maps, Bing Maps e outras plataformas baseadas em localização para capturar efetivamente pesquisas locais.", fr: "Optimisez votre présence sur Google Maps, Apple Maps, Bing Maps et d'autres plateformes basées sur la localisation pour capturer efficacement les recherches locales.", it: "Ottimizza la tua presenza su Google Maps, Apple Maps, Bing Maps e altre piattaforme basate sulla posizione per catturare efficacemente le ricerche locali.", de: "Optimieren Sie Ihre Präsenz auf Google Maps, Apple Maps, Bing Maps und anderen standortbasierten Plattformen für effektive lokale Suchen." },
  "Multi-platform optimization": { en: "Multi-platform optimization", ar: "تحسين متعدد المنصات", es: "Optimización multiplataforma", pt: "Otimização multiplataforma", fr: "Optimisation multi-plateforme", it: "Ottimizzazione multi-piattaforma", de: "Multi-Plattform-Optimierung" },
  "Location accuracy verification": { en: "Location accuracy verification", ar: "التحقق من دقة الموقع", es: "Verificación de precisión de ubicación", pt: "Verificação de precisão de localização", fr: "Vérification de précision de localisation", it: "Verifica precisione posizione", de: "Standortgenauigkeitsüberprüfung" },
  "Map ranking strategies": { en: "Map ranking strategies", ar: "استراتيجيات ترتيب الخرائط", es: "Estrategias de ranking en mapas", pt: "Estratégias de ranking em mapas", fr: "Stratégies de classement sur les cartes", it: "Strategie di ranking mappe", de: "Karten-Ranking-Strategien" },
  "Geo-grid tracking": { en: "Geo-grid tracking", ar: "تتبع الشبكة الجغرافية", es: "Seguimiento de cuadrícula geográfica", pt: "Rastreamento de grade geográfica", fr: "Suivi de grille géographique", it: "Tracciamento geo-griglia", de: "Geo-Grid-Tracking" },
  "Competitor positioning": { en: "Competitor positioning", ar: "تموضع المنافسين", es: "Posicionamiento de competidores", pt: "Posicionamento de concorrentes", fr: "Positionnement des concurrents", it: "Posizionamento concorrenti", de: "Wettbewerber-Positionierung" },

  "Keyword Research & Semantic SEO": { en: "Keyword Research & Semantic SEO", ar: "بحث الكلمات المفتاحية وSEO الدلالي", es: "Investigación de Palabras Clave y SEO Semántico", pt: "Pesquisa de Palavras-chave e SEO Semântico", fr: "Recherche de mots-clés et SEO sémantique", it: "Ricerca parole chiave e SEO semantico", de: "Keyword-Recherche & Semantisches SEO" },
  "Identify the best keywords for your business, including voice search and AI-generated queries, to drive relevant traffic that converts.": { en: "Identify the best keywords for your business, including voice search and AI-generated queries, to drive relevant traffic that converts.", ar: "حدد أفضل الكلمات المفتاحية لعملك، بما في ذلك البحث الصوتي واستعلامات الذكاء الاصطناعي، لجلب حركة مرور ذات صلة تتحول إلى عملاء.", es: "Identifica las mejores palabras clave para tu negocio, incluyendo búsqueda por voz y consultas generadas por IA, para atraer tráfico relevante que convierte.", pt: "Identifique as melhores palavras-chave para seu negócio, incluindo pesquisa por voz e consultas geradas por IA, para direcionar tráfego relevante que converte.", fr: "Identifiez les meilleurs mots-clés pour votre entreprise, y compris la recherche vocale et les requêtes générées par l'IA, pour générer un trafic pertinent qui convertit.", it: "Identifica le migliori parole chiave per la tua attività, inclusa la ricerca vocale e le query generate dall'IA, per generare traffico rilevante che converte.", de: "Identifizieren Sie die besten Keywords für Ihr Unternehmen, einschließlich Sprachsuche und KI-generierte Anfragen, um relevanten Traffic zu generieren, der konvertiert." },
  "Competitor keyword analysis": { en: "Competitor keyword analysis", ar: "تحليل كلمات المنافسين المفتاحية", es: "Análisis de palabras clave de competidores", pt: "Análise de palavras-chave de concorrentes", fr: "Analyse des mots-clés des concurrents", it: "Analisi parole chiave concorrenti", de: "Wettbewerber-Keyword-Analyse" },
  "Service-area targeting": { en: "Service-area targeting", ar: "استهداف منطقة الخدمة", es: "Segmentación de área de servicio", pt: "Segmentação de área de serviço", fr: "Ciblage de zone de service", it: "Targeting area di servizio", de: "Servicegebiet-Targeting" },
  "Long-tail keyword discovery": { en: "Long-tail keyword discovery", ar: "اكتشاف الكلمات المفتاحية الطويلة", es: "Descubrimiento de palabras clave de cola larga", pt: "Descoberta de palavras-chave de cauda longa", fr: "Découverte de mots-clés longue traîne", it: "Scoperta parole chiave long-tail", de: "Long-Tail-Keyword-Entdeckung" },
  "Search intent mapping": { en: "Search intent mapping", ar: "تخطيط نية البحث", es: "Mapeo de intención de búsqueda", pt: "Mapeamento de intenção de busca", fr: "Cartographie de l'intention de recherche", it: "Mappatura dell'intento di ricerca", de: "Suchabsicht-Mapping" },
  "Voice search optimization": { en: "Voice search optimization", ar: "تحسين البحث الصوتي", es: "Optimización de búsqueda por voz", pt: "Otimização de busca por voz", fr: "Optimisation de la recherche vocale", it: "Ottimizzazione ricerca vocale", de: "Sprachsuche-Optimierung" },

  "On-Page SEO": { en: "On-Page SEO", ar: "SEO على الصفحة", es: "SEO On-Page", pt: "SEO On-Page", fr: "SEO On-Page", it: "SEO On-Page", de: "On-Page SEO" },
  "Optimize your website's content and structure with meta tags, headings, structured data, and semantic markup for better rankings.": { en: "Optimize your website's content and structure with meta tags, headings, structured data, and semantic markup for better rankings.", ar: "حسّن محتوى وهيكل موقعك بالعلامات الوصفية والعناوين والبيانات المهيكلة والترميز الدلالي لترتيب أفضل.", es: "Optimiza el contenido y estructura de tu sitio web con meta etiquetas, encabezados, datos estructurados y marcado semántico para mejores rankings.", pt: "Otimize o conteúdo e estrutura do seu site com meta tags, títulos, dados estruturados e marcação semântica para melhores rankings.", fr: "Optimisez le contenu et la structure de votre site web avec des balises meta, des en-têtes, des données structurées et un balisage sémantique pour de meilleurs classements.", it: "Ottimizza il contenuto e la struttura del tuo sito web con meta tag, intestazioni, dati strutturati e markup semantico per migliori ranking.", de: "Optimieren Sie den Inhalt und die Struktur Ihrer Website mit Meta-Tags, Überschriften, strukturierten Daten und semantischem Markup für bessere Rankings." },
  "Title & meta optimization": { en: "Title & meta optimization", ar: "تحسين العنوان والوصف", es: "Optimización de título y meta", pt: "Otimização de título e meta", fr: "Optimisation des titres et métas", it: "Ottimizzazione titoli e meta", de: "Titel- & Meta-Optimierung" },
  "Local content creation": { en: "Local content creation", ar: "إنشاء محتوى محلي", es: "Creación de contenido local", pt: "Criação de conteúdo local", fr: "Création de contenu local", it: "Creazione contenuti locali", de: "Lokale Content-Erstellung" },
  "Schema markup implementation": { en: "Schema markup implementation", ar: "تنفيذ ترميز المخطط", es: "Implementación de marcado de esquema", pt: "Implementação de marcação de esquema", fr: "Implémentation du balisage schema", it: "Implementazione markup schema", de: "Schema-Markup-Implementierung" },
  "Internal linking strategy": { en: "Internal linking strategy", ar: "استراتيجية الربط الداخلي", es: "Estrategia de enlaces internos", pt: "Estratégia de links internos", fr: "Stratégie de liens internes", it: "Strategia di link interni", de: "Interne Verlinkungsstrategie" },
  "Mobile optimization": { en: "Mobile optimization", ar: "تحسين الجوال", es: "Optimización móvil", pt: "Otimização móvel", fr: "Optimisation mobile", it: "Ottimizzazione mobile", de: "Mobile Optimierung" },

  "Technical SEO": { en: "Technical SEO", ar: "SEO التقني", es: "SEO Técnico", pt: "SEO Técnico", fr: "SEO Technique", it: "SEO Tecnico", de: "Technisches SEO" },
  "Fix site performance, speed, mobile-friendliness, indexing, and crawl issues so your website works flawlessly for search engines.": { en: "Fix site performance, speed, mobile-friendliness, indexing, and crawl issues so your website works flawlessly for search engines.", ar: "أصلح أداء الموقع والسرعة والتوافق مع الجوال والفهرسة ومشاكل الزحف ليعمل موقعك بشكل مثالي لمحركات البحث.", es: "Soluciona el rendimiento del sitio, velocidad, compatibilidad móvil, indexación y problemas de rastreo para que tu sitio funcione perfectamente para los motores de búsqueda.", pt: "Corrija o desempenho do site, velocidade, compatibilidade móvel, indexação e problemas de rastreamento para que seu site funcione perfeitamente para os mecanismos de busca.", fr: "Corrigez les performances du site, la vitesse, la compatibilité mobile, l'indexation et les problèmes d'exploration pour que votre site fonctionne parfaitement pour les moteurs de recherche.", it: "Risolvi prestazioni del sito, velocità, compatibilità mobile, indicizzazione e problemi di scansione affinché il tuo sito funzioni perfettamente per i motori di ricerca.", de: "Beheben Sie Website-Performance, Geschwindigkeit, Mobile-Freundlichkeit, Indexierung und Crawl-Probleme, damit Ihre Website perfekt für Suchmaschinen funktioniert." },
  "Site speed optimization": { en: "Site speed optimization", ar: "تحسين سرعة الموقع", es: "Optimización de velocidad del sitio", pt: "Otimização de velocidade do site", fr: "Optimisation de la vitesse du site", it: "Ottimizzazione velocità del sito", de: "Website-Geschwindigkeitsoptimierung" },
  "Mobile-first analysis": { en: "Mobile-first analysis", ar: "تحليل الجوال أولاً", es: "Análisis mobile-first", pt: "Análise mobile-first", fr: "Analyse mobile-first", it: "Analisi mobile-first", de: "Mobile-First-Analyse" },
  "Crawl error resolution": { en: "Crawl error resolution", ar: "حل أخطاء الزحف", es: "Resolución de errores de rastreo", pt: "Resolução de erros de rastreamento", fr: "Résolution des erreurs d'exploration", it: "Risoluzione errori di scansione", de: "Crawl-Fehler-Behebung" },
  "Core Web Vitals": { en: "Core Web Vitals", ar: "Core Web Vitals", es: "Core Web Vitals", pt: "Core Web Vitals", fr: "Core Web Vitals", it: "Core Web Vitals", de: "Core Web Vitals" },
  "Structured data validation": { en: "Structured data validation", ar: "التحقق من البيانات المهيكلة", es: "Validación de datos estructurados", pt: "Validação de dados estruturados", fr: "Validation des données structurées", it: "Validazione dati strutturati", de: "Strukturierte Daten-Validierung" },

  "Citation Building & NAP": { en: "Citation Building & NAP", ar: "بناء الاستشهادات وNAP", es: "Construcción de Citas y NAP", pt: "Construção de Citações e NAP", fr: "Construction de citations et NAP", it: "Costruzione citazioni e NAP", de: "Zitationsaufbau & NAP" },
  "Build consistent NAP citations across authoritative directories to boost local rankings and trust signals.": { en: "Build consistent NAP citations across authoritative directories to boost local rankings and trust signals.", ar: "بناء استشهادات NAP متسقة عبر الدلائل الموثوقة لتعزيز التصنيفات المحلية وإشارات الثقة.", es: "Construye citaciones NAP consistentes en directorios autorizados para impulsar los rankings locales y señales de confianza.", pt: "Construa citações NAP consistentes em diretórios confiáveis para impulsionar os rankings locais e sinais de confiança.", fr: "Construisez des citations NAP cohérentes sur les annuaires faisant autorité pour booster les classements locaux et les signaux de confiance.", it: "Costruisci citazioni NAP coerenti su directory autorevoli per aumentare i ranking locali e i segnali di fiducia.", de: "Bauen Sie konsistente NAP-Zitierungen in maßgeblichen Verzeichnissen auf, um lokale Rankings und Vertrauenssignale zu stärken." },
  "NAP audit & cleanup": { en: "NAP audit & cleanup", ar: "تدقيق وتنظيف NAP", es: "Auditoría y limpieza NAP", pt: "Auditoria e limpeza NAP", fr: "Audit et nettoyage NAP", it: "Audit e pulizia NAP", de: "NAP-Audit & Bereinigung" },
  "Directory submissions (150+)": { en: "Directory submissions (150+)", ar: "تقديم للدلائل (أكثر من 150)", es: "Envíos a directorios (150+)", pt: "Submissões a diretórios (150+)", fr: "Soumissions d'annuaires (150+)", it: "Iscrizioni directory (150+)", de: "Verzeichniseinträge (150+)" },
  "Data aggregator distribution": { en: "Data aggregator distribution", ar: "توزيع مجمعات البيانات", es: "Distribución de agregadores de datos", pt: "Distribuição de agregadores de dados", fr: "Distribution d'agrégateurs de données", it: "Distribuzione aggregatori dati", de: "Datenaggregator-Verteilung" },
  "Industry-specific citations": { en: "Industry-specific citations", ar: "استشهادات خاصة بالصناعة", es: "Citas específicas de la industria", pt: "Citações específicas da indústria", fr: "Citations spécifiques à l'industrie", it: "Citazioni specifiche del settore", de: "Branchenspezifische Zitierungen" },
  "Ongoing monitoring": { en: "Ongoing monitoring", ar: "المراقبة المستمرة", es: "Monitoreo continuo", pt: "Monitoramento contínuo", fr: "Surveillance continue", it: "Monitoraggio continuo", de: "Kontinuierliches Monitoring" },

  "Review Management": { en: "Review Management", ar: "إدارة المراجعات", es: "Gestión de Reseñas", pt: "Gestão de Avaliações", fr: "Gestion des avis", it: "Gestione recensioni", de: "Bewertungsmanagement" },
  "Comprehensive review strategy to build your online reputation, generate more reviews, and manage customer feedback.": { en: "Comprehensive review strategy to build your online reputation, generate more reviews, and manage customer feedback.", ar: "استراتيجية مراجعة شاملة لبناء سمعتك عبر الإنترنت وتوليد المزيد من المراجعات وإدارة ملاحظات العملاء.", es: "Estrategia integral de reseñas para construir tu reputación online, generar más reseñas y gestionar comentarios de clientes.", pt: "Estratégia abrangente de avaliações para construir sua reputação online, gerar mais avaliações e gerenciar feedback de clientes.", fr: "Stratégie d'avis complète pour construire votre réputation en ligne, générer plus d'avis et gérer les commentaires clients.", it: "Strategia completa di recensioni per costruire la tua reputazione online, generare più recensioni e gestire il feedback dei clienti.", de: "Umfassende Bewertungsstrategie zum Aufbau Ihrer Online-Reputation, Generierung von mehr Bewertungen und Verwaltung von Kundenfeedback." },
  "Review generation campaigns": { en: "Review generation campaigns", ar: "حملات توليد المراجعات", es: "Campañas de generación de reseñas", pt: "Campanhas de geração de avaliações", fr: "Campagnes de génération d'avis", it: "Campagne di generazione recensioni", de: "Bewertungsgenerierungs-Kampagnen" },
  "Response templates": { en: "Response templates", ar: "قوالب الرد", es: "Plantillas de respuesta", pt: "Modelos de resposta", fr: "Modèles de réponse", it: "Template di risposta", de: "Antwortvorlagen" },
  "Negative review handling": { en: "Negative review handling", ar: "التعامل مع المراجعات السلبية", es: "Manejo de reseñas negativas", pt: "Tratamento de avaliações negativas", fr: "Gestion des avis négatifs", it: "Gestione recensioni negative", de: "Umgang mit negativen Bewertungen" },
  "Review monitoring alerts": { en: "Review monitoring alerts", ar: "تنبيهات مراقبة المراجعات", es: "Alertas de monitoreo de reseñas", pt: "Alertas de monitoramento de avaliações", fr: "Alertes de surveillance des avis", it: "Avvisi monitoraggio recensioni", de: "Bewertungsüberwachungs-Benachrichtigungen" },
  "Reputation scoring": { en: "Reputation scoring", ar: "تقييم السمعة", es: "Puntuación de reputación", pt: "Pontuação de reputação", fr: "Score de réputation", it: "Punteggio di reputazione", de: "Reputationsbewertung" },

  "Content Strategy & AI-Optimized Content": { en: "Content Strategy & AI-Optimized Content", ar: "استراتيجية المحتوى والمحتوى المحسن للذكاء الاصطناعي", es: "Estrategia de Contenido y Contenido Optimizado para IA", pt: "Estratégia de Conteúdo e Conteúdo Otimizado para IA", fr: "Stratégie de contenu et contenu optimisé pour l'IA", it: "Strategia di contenuti e contenuti ottimizzati per l'IA", de: "Content-Strategie & KI-optimierte Inhalte" },
  "Create high-quality, AI-ready content for service pages, blogs, FAQs, and landing pages to rank on search engines and generative platforms.": { en: "Create high-quality, AI-ready content for service pages, blogs, FAQs, and landing pages to rank on search engines and generative platforms.", ar: "إنشاء محتوى عالي الجودة جاهز للذكاء الاصطناعي لصفحات الخدمات والمدونات والأسئلة الشائعة وصفحات الهبوط للترتيب في محركات البحث والمنصات التوليدية.", es: "Crea contenido de alta calidad listo para IA para páginas de servicios, blogs, FAQs y landing pages para posicionar en motores de búsqueda y plataformas generativas.", pt: "Crie conteúdo de alta qualidade pronto para IA para páginas de serviços, blogs, FAQs e landing pages para rankear em mecanismos de busca e plataformas generativas.", fr: "Créez du contenu de haute qualité prêt pour l'IA pour les pages de services, blogs, FAQ et pages d'atterrissage pour se classer sur les moteurs de recherche et plateformes génératives.", it: "Crea contenuti di alta qualità pronti per l'IA per pagine di servizi, blog, FAQ e landing page per posizionarsi sui motori di ricerca e piattaforme generative.", de: "Erstellen Sie hochwertige, KI-bereite Inhalte für Service-Seiten, Blogs, FAQs und Landing Pages für Rankings in Suchmaschinen und generativen Plattformen." },
  "Service page content": { en: "Service page content", ar: "محتوى صفحات الخدمات", es: "Contenido de páginas de servicios", pt: "Conteúdo de páginas de serviços", fr: "Contenu des pages de services", it: "Contenuto pagine servizi", de: "Service-Seiten-Inhalte" },
  "Blog strategy & creation": { en: "Blog strategy & creation", ar: "استراتيجية وإنشاء المدونة", es: "Estrategia y creación de blog", pt: "Estratégia e criação de blog", fr: "Stratégie et création de blog", it: "Strategia e creazione blog", de: "Blog-Strategie & Erstellung" },
  "FAQ optimization": { en: "FAQ optimization", ar: "تحسين الأسئلة الشائعة", es: "Optimización de FAQ", pt: "Otimização de FAQ", fr: "Optimisation FAQ", it: "Ottimizzazione FAQ", de: "FAQ-Optimierung" },
  "Location pages": { en: "Location pages", ar: "صفحات المواقع", es: "Páginas de ubicación", pt: "Páginas de localização", fr: "Pages de localisation", it: "Pagine località", de: "Standortseiten" },
  "AI-optimized formatting": { en: "AI-optimized formatting", ar: "تنسيق محسن للذكاء الاصطناعي", es: "Formato optimizado para IA", pt: "Formatação otimizada para IA", fr: "Formatage optimisé pour l'IA", it: "Formattazione ottimizzata per IA", de: "KI-optimierte Formatierung" },

  "Link Building & Local Citations": { en: "Link Building & Local Citations", ar: "بناء الروابط والاستشهادات المحلية", es: "Link Building y Citaciones Locales", pt: "Link Building e Citações Locais", fr: "Link Building et Citations Locales", it: "Link Building e Citazioni Locali", de: "Linkaufbau & Lokale Zitierungen" },
  "Build high-authority links and local citations to boost trust signals and improve visibility across all platforms.": { en: "Build high-authority links and local citations to boost trust signals and improve visibility across all platforms.", ar: "بناء روابط عالية السلطة واستشهادات محلية لتعزيز إشارات الثقة وتحسين الظهور عبر جميع المنصات.", es: "Construye enlaces de alta autoridad y citaciones locales para impulsar señales de confianza y mejorar la visibilidad en todas las plataformas.", pt: "Construa links de alta autoridade e citações locais para aumentar sinais de confiança e melhorar a visibilidade em todas as plataformas.", fr: "Construisez des liens de haute autorité et des citations locales pour renforcer les signaux de confiance et améliorer la visibilité sur toutes les plateformes.", it: "Costruisci link ad alta autorità e citazioni locali per aumentare i segnali di fiducia e migliorare la visibilità su tutte le piattaforme.", de: "Bauen Sie hochwertige Links und lokale Zitierungen auf, um Vertrauenssignale zu stärken und die Sichtbarkeit auf allen Plattformen zu verbessern." },
  "Local link building": { en: "Local link building", ar: "بناء الروابط المحلية", es: "Construcción de enlaces locales", pt: "Construção de links locais", fr: "Création de liens locaux", it: "Link building locale", de: "Lokaler Linkaufbau" },
  "Guest posting": { en: "Guest posting", ar: "النشر كضيف", es: "Publicación de invitados", pt: "Guest posting", fr: "Publication d'invités", it: "Guest posting", de: "Gastbeiträge" },
  "Digital PR": { en: "Digital PR", ar: "العلاقات العامة الرقمية", es: "RP Digital", pt: "RP Digital", fr: "RP Digital", it: "PR Digitale", de: "Digitale PR" },
  "Resource page links": { en: "Resource page links", ar: "روابط صفحات الموارد", es: "Enlaces de páginas de recursos", pt: "Links de páginas de recursos", fr: "Liens de pages de ressources", it: "Link pagine risorse", de: "Ressourcenseiten-Links" },
  "Competitor backlink analysis": { en: "Competitor backlink analysis", ar: "تحليل الروابط الخلفية للمنافسين", es: "Análisis de backlinks de competidores", pt: "Análise de backlinks de concorrentes", fr: "Analyse des backlinks des concurrents", it: "Analisi backlink concorrenti", de: "Wettbewerber-Backlink-Analyse" },

  "Conversion Tracking & Analytics": { en: "Conversion Tracking & Analytics", ar: "تتبع التحويلات والتحليلات", es: "Seguimiento de Conversiones y Analytics", pt: "Rastreamento de Conversões e Analytics", fr: "Suivi des conversions et Analytics", it: "Tracciamento conversioni e Analytics", de: "Conversion-Tracking & Analytics" },
  "Set up GA4, GTM, UTM tracking, and advanced analytics to track traffic, calls, map clicks, and conversions with actionable insights.": { en: "Set up GA4, GTM, UTM tracking, and advanced analytics to track traffic, calls, map clicks, and conversions with actionable insights.", ar: "إعداد GA4 وGTM وتتبع UTM والتحليلات المتقدمة لتتبع حركة المرور والمكالمات ونقرات الخرائط والتحويلات مع رؤى قابلة للتنفيذ.", es: "Configura GA4, GTM, seguimiento UTM y analytics avanzados para rastrear tráfico, llamadas, clics en mapas y conversiones con insights accionables.", pt: "Configure GA4, GTM, rastreamento UTM e analytics avançados para rastrear tráfego, chamadas, cliques em mapas e conversões com insights acionáveis.", fr: "Configurez GA4, GTM, le suivi UTM et des analyses avancées pour suivre le trafic, les appels, les clics sur les cartes et les conversions avec des insights exploitables.", it: "Configura GA4, GTM, tracciamento UTM e analytics avanzati per tracciare traffico, chiamate, clic sulle mappe e conversioni con insights azionabili.", de: "Richten Sie GA4, GTM, UTM-Tracking und erweiterte Analytics ein, um Traffic, Anrufe, Kartenklicks und Conversions mit umsetzbaren Erkenntnissen zu verfolgen." },
  "GA4 setup & configuration": { en: "GA4 setup & configuration", ar: "إعداد وتكوين GA4", es: "Configuración de GA4", pt: "Configuração do GA4", fr: "Configuration GA4", it: "Configurazione GA4", de: "GA4-Einrichtung & Konfiguration" },
  "Goal tracking": { en: "Goal tracking", ar: "تتبع الأهداف", es: "Seguimiento de objetivos", pt: "Rastreamento de metas", fr: "Suivi des objectifs", it: "Tracciamento obiettivi", de: "Zielverfolgung" },
  "Call tracking integration": { en: "Call tracking integration", ar: "تكامل تتبع المكالمات", es: "Integración de seguimiento de llamadas", pt: "Integração de rastreamento de chamadas", fr: "Intégration du suivi des appels", it: "Integrazione tracciamento chiamate", de: "Anrufverfolgungsintegration" },
  "Custom dashboards": { en: "Custom dashboards", ar: "لوحات معلومات مخصصة", es: "Dashboards personalizados", pt: "Dashboards personalizados", fr: "Tableaux de bord personnalisés", it: "Dashboard personalizzate", de: "Benutzerdefinierte Dashboards" },
  "Monthly reporting": { en: "Monthly reporting", ar: "التقارير الشهرية", es: "Informes mensuales", pt: "Relatórios mensais", fr: "Rapports mensuels", it: "Report mensili", de: "Monatliche Berichterstattung" },

  "Full-Stack Project Management": { en: "Full-Stack Project Management", ar: "إدارة المشاريع الشاملة", es: "Gestión de Proyectos Full-Stack", pt: "Gerenciamento de Projetos Full-Stack", fr: "Gestion de projet Full-Stack", it: "Gestione progetti Full-Stack", de: "Full-Stack Projektmanagement" },
  "Manage all SEO, AI, and map optimization projects end-to-end, ensuring timely execution and alignment with business goals.": { en: "Manage all SEO, AI, and map optimization projects end-to-end, ensuring timely execution and alignment with business goals.", ar: "إدارة جميع مشاريع SEO والذكاء الاصطناعي وتحسين الخرائط من البداية للنهاية، مع ضمان التنفيذ في الوقت المناسب والتوافق مع أهداف العمل.", es: "Gestiona todos los proyectos de SEO, IA y optimización de mapas de principio a fin, asegurando ejecución oportuna y alineación con objetivos comerciales.", pt: "Gerencie todos os projetos de SEO, IA e otimização de mapas de ponta a ponta, garantindo execução oportuna e alinhamento com objetivos de negócios.", fr: "Gérez tous les projets SEO, IA et optimisation de cartes de bout en bout, assurant une exécution rapide et un alignement avec les objectifs commerciaux.", it: "Gestisci tutti i progetti SEO, IA e ottimizzazione mappe end-to-end, garantendo esecuzione tempestiva e allineamento con gli obiettivi aziendali.", de: "Verwalten Sie alle SEO-, KI- und Kartenoptimierungsprojekte End-to-End mit zeitnaher Ausführung und Ausrichtung an Geschäftszielen." },
  "Project planning": { en: "Project planning", ar: "تخطيط المشاريع", es: "Planificación de proyectos", pt: "Planejamento de projetos", fr: "Planification de projet", it: "Pianificazione progetti", de: "Projektplanung" },
  "Task coordination": { en: "Task coordination", ar: "تنسيق المهام", es: "Coordinación de tareas", pt: "Coordenação de tarefas", fr: "Coordination des tâches", it: "Coordinamento attività", de: "Aufgabenkoordination" },
  "Timeline management": { en: "Timeline management", ar: "إدارة الجدول الزمني", es: "Gestión de cronogramas", pt: "Gestão de cronogramas", fr: "Gestion des délais", it: "Gestione timeline", de: "Zeitplanverwaltung" },
  "Strategy adjustments": { en: "Strategy adjustments", ar: "تعديلات الاستراتيجية", es: "Ajustes de estrategia", pt: "Ajustes de estratégia", fr: "Ajustements de stratégie", it: "Aggiustamenti strategia", de: "Strategieanpassungen" },

  "Client Communication & Reporting": { en: "Client Communication & Reporting", ar: "التواصل مع العملاء والتقارير", es: "Comunicación con Clientes y Reportes", pt: "Comunicação com Clientes e Relatórios", fr: "Communication client et rapports", it: "Comunicazione clienti e reportistica", de: "Kundenkommunikation & Reporting" },
  "Transparent, regular updates with insights on search performance, map visibility, AI ranking signals, and lead generation.": { en: "Transparent, regular updates with insights on search performance, map visibility, AI ranking signals, and lead generation.", ar: "تحديثات شفافة ومنتظمة مع رؤى حول أداء البحث وظهور الخرائط وإشارات ترتيب الذكاء الاصطناعي وتوليد العملاء المحتملين.", es: "Actualizaciones transparentes y regulares con insights sobre rendimiento de búsqueda, visibilidad en mapas, señales de ranking IA y generación de leads.", pt: "Atualizações transparentes e regulares com insights sobre desempenho de busca, visibilidade em mapas, sinais de ranking de IA e geração de leads.", fr: "Mises à jour transparentes et régulières avec des insights sur les performances de recherche, la visibilité des cartes, les signaux de classement IA et la génération de leads.", it: "Aggiornamenti trasparenti e regolari con insights sulle prestazioni di ricerca, visibilità delle mappe, segnali di ranking IA e generazione di lead.", de: "Transparente, regelmäßige Updates mit Einblicken in Suchperformance, Kartensichtbarkeit, KI-Ranking-Signale und Lead-Generierung." },
  "Weekly status updates": { en: "Weekly status updates", ar: "تحديثات الحالة الأسبوعية", es: "Actualizaciones de estado semanales", pt: "Atualizações de status semanais", fr: "Mises à jour de statut hebdomadaires", it: "Aggiornamenti di stato settimanali", de: "Wöchentliche Statusupdates" },
  "Monthly performance reports": { en: "Monthly performance reports", ar: "تقارير الأداء الشهرية", es: "Informes de rendimiento mensuales", pt: "Relatórios de desempenho mensais", fr: "Rapports de performance mensuels", it: "Report di performance mensili", de: "Monatliche Leistungsberichte" },
  "Strategy recommendations": { en: "Strategy recommendations", ar: "توصيات الاستراتيجية", es: "Recomendaciones de estrategia", pt: "Recomendações de estratégia", fr: "Recommandations de stratégie", it: "Raccomandazioni strategiche", de: "Strategieempfehlungen" },
  "ROI tracking": { en: "ROI tracking", ar: "تتبع العائد على الاستثمار", es: "Seguimiento de ROI", pt: "Rastreamento de ROI", fr: "Suivi du ROI", it: "Tracciamento ROI", de: "ROI-Verfolgung" },
  "Client dashboard access": { en: "Client dashboard access", ar: "الوصول للوحة تحكم العميل", es: "Acceso al dashboard de cliente", pt: "Acesso ao dashboard do cliente", fr: "Accès au tableau de bord client", it: "Accesso dashboard cliente", de: "Kunden-Dashboard-Zugang" },

  "Advanced AI & Generative SEO": { en: "Advanced AI & Generative SEO", ar: "SEO المتقدم والتوليدي بالذكاء الاصطناعي", es: "SEO Avanzado de IA y Generativo", pt: "SEO Avançado de IA e Generativo", fr: "SEO avancé IA et génératif", it: "SEO avanzato IA e generativo", de: "Fortgeschrittenes KI & Generatives SEO" },
  "Implement strategies to get your business cited by ChatGPT, Perplexity, Bing AI, and other generative engines for future-ready SEO.": { en: "Implement strategies to get your business cited by ChatGPT, Perplexity, Bing AI, and other generative engines for future-ready SEO.", ar: "تنفيذ استراتيجيات لجعل عملك مذكوراً من قبل ChatGPT وPerplexity وBing AI ومحركات توليدية أخرى لـ SEO جاهز للمستقبل.", es: "Implementa estrategias para que tu negocio sea citado por ChatGPT, Perplexity, Bing AI y otros motores generativos para SEO preparado para el futuro.", pt: "Implemente estratégias para que seu negócio seja citado pelo ChatGPT, Perplexity, Bing AI e outros mecanismos generativos para SEO pronto para o futuro.", fr: "Implémentez des stratégies pour que votre entreprise soit citée par ChatGPT, Perplexity, Bing AI et d'autres moteurs génératifs pour un SEO prêt pour l'avenir.", it: "Implementa strategie per far citare la tua attività da ChatGPT, Perplexity, Bing AI e altri motori generativi per un SEO pronto per il futuro.", de: "Implementieren Sie Strategien, damit Ihr Unternehmen von ChatGPT, Perplexity, Bing AI und anderen generativen Engines zitiert wird für zukunftssicheres SEO." },
  "AI citation optimization": { en: "AI citation optimization", ar: "تحسين استشهادات الذكاء الاصطناعي", es: "Optimización de citaciones IA", pt: "Otimização de citações de IA", fr: "Optimisation des citations IA", it: "Ottimizzazione citazioni IA", de: "KI-Zitierungsoptimierung" },
  "Generative engine optimization": { en: "Generative engine optimization", ar: "تحسين المحركات التوليدية", es: "Optimización de motores generativos", pt: "Otimização de mecanismos generativos", fr: "Optimisation des moteurs génératifs", it: "Ottimizzazione motori generativi", de: "Generative Engine Optimierung" },
  "Structured data for AI": { en: "Structured data for AI", ar: "بيانات منظمة للذكاء الاصطناعي", es: "Datos estructurados para IA", pt: "Dados estruturados para IA", fr: "Données structurées pour l'IA", it: "Dati strutturati per IA", de: "Strukturierte Daten für KI" },
  "FAQ schema markup": { en: "FAQ schema markup", ar: "ترميز مخطط الأسئلة الشائعة", es: "Marcado de esquema FAQ", pt: "Marcação de esquema FAQ", fr: "Balisage schema FAQ", it: "Markup schema FAQ", de: "FAQ-Schema-Markup" },
  "AI-ready content formatting": { en: "AI-ready content formatting", ar: "تنسيق المحتوى جاهز للذكاء الاصطناعي", es: "Formato de contenido listo para IA", pt: "Formatação de conteúdo pronto para IA", fr: "Formatage de contenu prêt pour l'IA", it: "Formattazione contenuti pronti per IA", de: "KI-bereite Inhaltsformatierung" },

  // ============ PORTAL TRANSLATIONS ============
  "portal.login": { en: "Login", ar: "تسجيل الدخول", es: "Iniciar Sesión", pt: "Entrar", fr: "Connexion", it: "Accedi", de: "Anmelden" },
  "portal.signup": { en: "Sign Up", ar: "إنشاء حساب", es: "Registrarse", pt: "Cadastrar", fr: "S'inscrire", it: "Registrati", de: "Registrieren" },
  "portal.email": { en: "Email", ar: "البريد الإلكتروني", es: "Correo Electrónico", pt: "E-mail", fr: "E-mail", it: "Email", de: "E-Mail" },
  "portal.password": { en: "Password", ar: "كلمة المرور", es: "Contraseña", pt: "Senha", fr: "Mot de passe", it: "Password", de: "Passwort" },
  "portal.fullName": { en: "Full Name", ar: "الاسم الكامل", es: "Nombre Completo", pt: "Nome Completo", fr: "Nom complet", it: "Nome completo", de: "Vollständiger Name" },
  "portal.company": { en: "Company", ar: "الشركة", es: "Empresa", pt: "Empresa", fr: "Entreprise", it: "Azienda", de: "Unternehmen" },
  "portal.country": { en: "Country", ar: "البلد", es: "País", pt: "País", fr: "Pays", it: "Paese", de: "Land" },
  "portal.phone": { en: "Phone", ar: "الهاتف", es: "Teléfono", pt: "Telefone", fr: "Téléphone", it: "Telefono", de: "Telefon" },
  "portal.signIn": { en: "Sign In", ar: "تسجيل الدخول", es: "Iniciar Sesión", pt: "Entrar", fr: "Se connecter", it: "Accedi", de: "Anmelden" },
  "portal.signingIn": { en: "Signing in...", ar: "جاري تسجيل الدخول...", es: "Iniciando sesión...", pt: "Entrando...", fr: "Connexion en cours...", it: "Accesso in corso...", de: "Anmeldung läuft..." },
  "portal.createAccount": { en: "Create Account", ar: "إنشاء حساب", es: "Crear Cuenta", pt: "Criar Conta", fr: "Créer un compte", it: "Crea Account", de: "Konto erstellen" },
  "portal.creatingAccount": { en: "Creating account...", ar: "جاري إنشاء الحساب...", es: "Creando cuenta...", pt: "Criando conta...", fr: "Création du compte...", it: "Creazione account...", de: "Konto wird erstellt..." },
  "portal.backToWebsite": { en: "Back to website", ar: "العودة للموقع", es: "Volver al sitio web", pt: "Voltar ao site", fr: "Retour au site", it: "Torna al sito", de: "Zurück zur Website" },
  "portal.clientPortal": { en: "Client Portal", ar: "بوابة العميل", es: "Portal del Cliente", pt: "Portal do Cliente", fr: "Portail client", it: "Portale clienti", de: "Kundenportal" },
  "portal.accessProjects": { en: "Access your projects, messages, and documents", ar: "الوصول إلى مشاريعك ورسائلك ومستنداتك", es: "Accede a tus proyectos, mensajes y documentos", pt: "Acesse seus projetos, mensagens e documentos", fr: "Accédez à vos projets, messages et documents", it: "Accedi ai tuoi progetti, messaggi e documenti", de: "Zugriff auf Ihre Projekte, Nachrichten und Dokumente" },
  "portal.dashboard": { en: "Dashboard", ar: "لوحة التحكم", es: "Panel de Control", pt: "Painel", fr: "Tableau de bord", it: "Dashboard", de: "Dashboard" },
  "portal.projects": { en: "Projects", ar: "المشاريع", es: "Proyectos", pt: "Projetos", fr: "Projets", it: "Progetti", de: "Projekte" },
  "portal.messages": { en: "Messages", ar: "الرسائل", es: "Mensajes", pt: "Mensagens", fr: "Messages", it: "Messaggi", de: "Nachrichten" },
  "portal.documents": { en: "Documents", ar: "المستندات", es: "Documentos", pt: "Documentos", fr: "Documents", it: "Documenti", de: "Dokumente" },
  "portal.agreements": { en: "Agreements", ar: "الاتفاقيات", es: "Acuerdos", pt: "Acordos", fr: "Accords", it: "Accordi", de: "Vereinbarungen" },
  "portal.subscription": { en: "Subscription", ar: "الاشتراك", es: "Suscripción", pt: "Assinatura", fr: "Abonnement", it: "Abbonamento", de: "Abonnement" },
  "portal.settings": { en: "Settings", ar: "الإعدادات", es: "Configuración", pt: "Configurações", fr: "Paramètres", it: "Impostazioni", de: "Einstellungen" },
  "portal.welcomeBack": { en: "Welcome back!", ar: "مرحباً بعودتك!", es: "¡Bienvenido de nuevo!", pt: "Bem-vindo de volta!", fr: "Bon retour!", it: "Bentornato!", de: "Willkommen zurück!" },
  "portal.overviewText": { en: "Here's an overview of your account and projects.", ar: "إليك نظرة عامة على حسابك ومشاريعك.", es: "Aquí tienes una vista general de tu cuenta y proyectos.", pt: "Aqui está uma visão geral da sua conta e projetos.", fr: "Voici un aperçu de votre compte et de vos projets.", it: "Ecco una panoramica del tuo account e dei tuoi progetti.", de: "Hier ist eine Übersicht über Ihr Konto und Ihre Projekte." },
  "portal.viewAnalytics": { en: "View Analytics", ar: "عرض التحليلات", es: "Ver Analytics", pt: "Ver Analytics", fr: "Voir les analytics", it: "Vedi Analytics", de: "Analytics anzeigen" },
  "portal.yourProfile": { en: "Your Profile", ar: "ملفك الشخصي", es: "Tu Perfil", pt: "Seu Perfil", fr: "Votre profil", it: "Il tuo profilo", de: "Ihr Profil" },
  "portal.clientId": { en: "Client ID", ar: "معرف العميل", es: "ID de Cliente", pt: "ID do Cliente", fr: "ID Client", it: "ID Cliente", de: "Kunden-ID" },
  "portal.plan": { en: "Plan", ar: "الخطة", es: "Plan", pt: "Plano", fr: "Plan", it: "Piano", de: "Plan" },
  "portal.status": { en: "Status", ar: "الحالة", es: "Estado", pt: "Status", fr: "Statut", it: "Stato", de: "Status" },
  "portal.activeProjects": { en: "Active Projects", ar: "المشاريع النشطة", es: "Proyectos Activos", pt: "Projetos Ativos", fr: "Projets actifs", it: "Progetti attivi", de: "Aktive Projekte" },
  "portal.unreadMessages": { en: "Unread Messages", ar: "الرسائل غير المقروءة", es: "Mensajes sin Leer", pt: "Mensagens não Lidas", fr: "Messages non lus", it: "Messaggi non letti", de: "Ungelesene Nachrichten" },
  "portal.pendingApprovals": { en: "Pending Approvals", ar: "الموافقات المعلقة", es: "Aprobaciones Pendientes", pt: "Aprovações Pendentes", fr: "Approbations en attente", it: "Approvazioni in sospeso", de: "Ausstehende Genehmigungen" },
  "portal.upcomingMilestones": { en: "Upcoming Milestones", ar: "المعالم القادمة", es: "Hitos Próximos", pt: "Marcos Próximos", fr: "Jalons à venir", it: "Milestone in arrivo", de: "Bevorstehende Meilensteine" },
  "portal.signNow": { en: "Sign Now", ar: "وقّع الآن", es: "Firmar Ahora", pt: "Assinar Agora", fr: "Signer maintenant", it: "Firma ora", de: "Jetzt unterschreiben" },
  "portal.viewAll": { en: "View All", ar: "عرض الكل", es: "Ver Todo", pt: "Ver Tudo", fr: "Voir tout", it: "Vedi tutto", de: "Alle anzeigen" },
  "portal.allCaughtUp": { en: "All caught up! No pending approvals.", ar: "كل شيء جاهز! لا توجد موافقات معلقة.", es: "¡Todo al día! Sin aprobaciones pendientes.", pt: "Tudo em dia! Sem aprovações pendentes.", fr: "Tout est à jour! Pas d'approbations en attente.", it: "Tutto in ordine! Nessuna approvazione in sospeso.", de: "Alles erledigt! Keine ausstehenden Genehmigungen." },
  "portal.projectOverview": { en: "Project Overview", ar: "نظرة عامة على المشروع", es: "Resumen del Proyecto", pt: "Visão Geral do Projeto", fr: "Aperçu du projet", it: "Panoramica progetto", de: "Projektübersicht" },
  "portal.progress": { en: "Progress", ar: "التقدم", es: "Progreso", pt: "Progresso", fr: "Progression", it: "Progresso", de: "Fortschritt" },
  "portal.noProjects": { en: "No projects yet", ar: "لا توجد مشاريع بعد", es: "Sin proyectos aún", pt: "Sem projetos ainda", fr: "Pas encore de projets", it: "Nessun progetto ancora", de: "Noch keine Projekte" },
  "portal.noMilestones": { en: "No upcoming milestones", ar: "لا توجد معالم قادمة", es: "Sin hitos próximos", pt: "Sem marcos próximos", fr: "Pas de jalons à venir", it: "Nessun milestone in arrivo", de: "Keine bevorstehenden Meilensteine" },
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

      // Enqueue for translation (batched) - defer state update to avoid updating during render
      if (!pendingRef.current.has(key)) {
        pendingRef.current.add(key);
        // Use queueMicrotask to defer the state update outside the render phase
        queueMicrotask(() => setPendingTick((x) => x + 1));
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

      if (error || !data?.translations) {
        // On error, keep items in the queue for retry
        console.error("Translation error:", error);
        // Show a toast on first failure only (avoid spamming)
        if (pendingRef.current.size === batch.length) {
          // Only report major failures
          console.warn("Translation batch failed, will retry...");
        }
        // Trigger retry after a delay
        window.setTimeout(() => setPendingTick((x) => x + 1), 2000);
        return;
      }

      // Only remove successfully translated items from the queue
      const translatedKeys = Object.keys(data.translations);
      translatedKeys.forEach((txt) => pendingRef.current.delete(txt));

      setDynamicTranslations((prev) => {
        const next = { ...prev, ...data.translations };
        try {
          localStorage.setItem(`${DYNAMIC_STORAGE_PREFIX}${language}`, JSON.stringify(next));
        } catch {
          // ignore quota issues
        }
        return next;
      });

      // If there are still pending items (some weren't returned), trigger another batch
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

