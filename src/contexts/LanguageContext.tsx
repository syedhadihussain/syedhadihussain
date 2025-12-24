import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Language = "en" | "ar" | "es" | "pt" | "fr" | "it" | "de";

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

  // Contact Form
  "contact.title": { en: "Ready to Dominate Google?", ar: "هل أنت مستعد للسيطرة على Google؟", es: "¿Listo para Dominar Google?", pt: "Pronto para Dominar o Google?", fr: "Prêt à dominer Google?", it: "Pronto a dominare Google?", de: "Bereit, Google zu dominieren?" },
  "contact.subtitle": { en: "Let's Work Together", ar: "لنعمل معاً", es: "Trabajemos Juntos", pt: "Vamos Trabalhar Juntos", fr: "Travaillons ensemble", it: "Lavoriamo insieme", de: "Lassen Sie uns zusammenarbeiten" },
  "contact.description": { en: "Get a professional SEO audit for just $50 (50% OFF if you book within 24 hours!) and discover how to outrank your competitors.", ar: "احصل على تدقيق SEO احترافي مقابل 50$ فقط (خصم 50% إذا حجزت خلال 24 ساعة!) واكتشف كيف تتفوق على منافسيك.", es: "Obtenga una auditoría SEO profesional por solo $50 (¡50% DE DESCUENTO si reserva en 24 horas!) y descubra cómo superar a sus competidores.", pt: "Obtenha uma auditoria SEO profissional por apenas $50 (50% DE DESCONTO se reservar em 24 horas!) e descubra como superar seus concorrentes.", fr: "Obtenez un audit SEO professionnel pour seulement 50$ (50% de réduction si vous réservez dans les 24 heures!) et découvrez comment surpasser vos concurrents.", it: "Ottieni un audit SEO professionale per soli $50 (50% DI SCONTO se prenoti entro 24 ore!) e scopri come superare i tuoi concorrenti.", de: "Erhalten Sie ein professionelles SEO-Audit für nur 50$ (50% RABATT bei Buchung innerhalb von 24 Stunden!) und erfahren Sie, wie Sie Ihre Konkurrenten übertreffen." },
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
  "contact.formGuide": { en: "Need help? Read the form guide", ar: "تحتاج مساعدة؟ اقرأ دليل النموذج", es: "¿Necesita ayuda? Lea la guía del formulario", pt: "Precisa de ajuda? Leia o guia do formulário", fr: "Besoin d'aide? Lisez le guide du formulaire", it: "Hai bisogno di aiuto? Leggi la guida al modulo", de: "Brauchen Sie Hilfe? Lesen Sie die Formularanleitung" },

  // Services
  "services.title": { en: "Local SEO Services That Drive Results", ar: "خدمات SEO المحلية التي تحقق النتائج", es: "Servicios de SEO Local que Generan Resultados", pt: "Serviços de SEO Local que Geram Resultados", fr: "Services SEO locaux qui génèrent des résultats", it: "Servizi SEO locali che generano risultati", de: "Lokale SEO-Dienste, die Ergebnisse liefern" },
  "services.subtitle": { en: "Comprehensive strategies to boost your local visibility", ar: "استراتيجيات شاملة لتعزيز ظهورك المحلي", es: "Estrategias integrales para impulsar tu visibilidad local", pt: "Estratégias abrangentes para aumentar sua visibilidade local", fr: "Stratégies complètes pour booster votre visibilité locale", it: "Strategie complete per aumentare la tua visibilità locale", de: "Umfassende Strategien zur Steigerung Ihrer lokalen Sichtbarkeit" },

  // About
  "about.title": { en: "About Me", ar: "عني", es: "Sobre Mí", pt: "Sobre Mim", fr: "À propos de moi", it: "Chi sono", de: "Über mich" },
  "about.subtitle": { en: "Your Partner in Local Search Success", ar: "شريكك في نجاح البحث المحلي", es: "Tu Socio en el Éxito de la Búsqueda Local", pt: "Seu Parceiro no Sucesso de Busca Local", fr: "Votre partenaire pour le succès de la recherche locale", it: "Il tuo partner per il successo nella ricerca locale", de: "Ihr Partner für lokalen Sucherfolg" },
  "about.description": { en: "I'm Syed Hadi Hussain, a full-stack local SEO specialist who helps local and service-based businesses get more visibility on Google and turn searches into real leads.", ar: "أنا سيد هادي حسين، متخصص SEO محلي شامل أساعد الشركات المحلية والخدمية على الحصول على مزيد من الظهور على Google وتحويل عمليات البحث إلى عملاء حقيقيين.", es: "Soy Syed Hadi Hussain, un especialista en SEO local completo que ayuda a empresas locales a obtener más visibilidad en Google y convertir búsquedas en clientes reales.", pt: "Sou Syed Hadi Hussain, um especialista em SEO local completo que ajuda empresas locais a obter mais visibilidade no Google e converter pesquisas em leads reais.", fr: "Je suis Syed Hadi Hussain, un spécialiste SEO local complet qui aide les entreprises locales à obtenir plus de visibilité sur Google et à convertir les recherches en leads réels.", it: "Sono Syed Hadi Hussain, uno specialista SEO locale completo che aiuta le aziende locali a ottenere più visibilità su Google e a convertire le ricerche in lead reali.", de: "Ich bin Syed Hadi Hussain, ein Full-Stack Local SEO Spezialist, der lokalen Unternehmen hilft, mehr Sichtbarkeit bei Google zu erlangen und Suchen in echte Leads umzuwandeln." },

  // Testimonials
  "testimonials.title": { en: "What Clients Say", ar: "ماذا يقول العملاء", es: "Lo que Dicen los Clientes", pt: "O que os Clientes Dizem", fr: "Ce que disent les clients", it: "Cosa dicono i clienti", de: "Was Kunden sagen" },
  "testimonials.subtitle": { en: "Real results from real businesses", ar: "نتائج حقيقية من شركات حقيقية", es: "Resultados reales de negocios reales", pt: "Resultados reais de negócios reais", fr: "Résultats réels d'entreprises réelles", it: "Risultati reali da aziende reali", de: "Echte Ergebnisse von echten Unternehmen" },

  // FAQ
  "faq.title": { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة", es: "Preguntas Frecuentes", pt: "Perguntas Frequentes", fr: "Questions fréquemment posées", it: "Domande frequenti", de: "Häufig gestellte Fragen" },
  "faq.subtitle": { en: "Everything you need to know about Local SEO", ar: "كل ما تحتاج معرفته عن SEO المحلي", es: "Todo lo que necesitas saber sobre SEO Local", pt: "Tudo o que você precisa saber sobre SEO Local", fr: "Tout ce que vous devez savoir sur le SEO local", it: "Tutto quello che devi sapere sul SEO locale", de: "Alles, was Sie über Local SEO wissen müssen" },

  // Footer
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة.", es: "Todos los derechos reservados.", pt: "Todos os direitos reservados.", fr: "Tous droits réservés.", it: "Tutti i diritti riservati.", de: "Alle Rechte vorbehalten." },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية", es: "Política de Privacidad", pt: "Política de Privacidade", fr: "Politique de confidentialité", it: "Informativa sulla privacy", de: "Datenschutzrichtlinie" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة", es: "Términos de Servicio", pt: "Termos de Serviço", fr: "Conditions d'utilisation", it: "Termini di servizio", de: "Nutzungsbedingungen" },
  "footer.tagline": { en: "Trusted by 100+ businesses worldwide for proven SEO results.", ar: "موثوق به من قبل أكثر من 100 شركة حول العالم لنتائج SEO مثبتة.", es: "Confiado por más de 100 empresas en todo el mundo para resultados SEO comprobados.", pt: "Confiado por mais de 100 empresas em todo o mundo para resultados SEO comprovados.", fr: "Approuvé par plus de 100 entreprises dans le monde pour des résultats SEO prouvés.", it: "Affidabile da oltre 100 aziende in tutto il mondo per risultati SEO comprovati.", de: "Von über 100 Unternehmen weltweit für bewiesene SEO-Ergebnisse vertraut." },
  "footer.payments": { en: "Accepted Payments", ar: "طرق الدفع المقبولة", es: "Pagos Aceptados", pt: "Pagamentos Aceitos", fr: "Paiements acceptés", it: "Pagamenti accettati", de: "Akzeptierte Zahlungen" },

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
      if (stored && ["en", "ar", "es", "pt", "fr", "it", "de"].includes(stored)) return stored;
      
      // Detect browser language
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "ar") return "ar";
      if (browserLang === "es") return "es";
      if (browserLang === "pt") return "pt";
      if (browserLang === "fr") return "fr";
      if (browserLang === "it") return "it";
      if (browserLang === "de") return "de";
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
