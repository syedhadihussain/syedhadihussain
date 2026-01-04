/**
 * Centralized contact information configuration
 * All contact details across the website should use these constants
 * to ensure consistency and easy updates.
 */

export const CONTACT_CONFIG = {
  // Email
  email: "contact.syedhadihussain@gmail.com",
  
  // Phone/WhatsApp (UAE number)
  phone: "+971 52 369 5036",
  phoneRaw: "+971523695036", // For WhatsApp links
  
  // WhatsApp link (always use with + prefix for international format)
  whatsappLink: "https://wa.me/+971523695036",
  
  // Calendly booking link
  calendlyLink: "https://calendly.com/syedhadihussain",
  
  // Social media links
  social: {
    linkedin: "https://www.linkedin.com/in/syed-hadi-hussain-seo-specialist/",
    facebook: "https://www.facebook.com/syedhadihussainseo/",
    github: "https://github.com/syedhadihussain",
  },
  
  // Location
  location: "Dubai, UAE",
  serviceArea: "Worldwide",
} as const;

// Helper to generate WhatsApp link with custom message
export const getWhatsAppLink = (message?: string): string => {
  if (message) {
    return `${CONTACT_CONFIG.whatsappLink}?text=${encodeURIComponent(message)}`;
  }
  return CONTACT_CONFIG.whatsappLink;
};
