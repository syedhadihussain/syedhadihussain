import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Send, Loader2, HelpCircle } from "lucide-react";
import { z } from "zod";
import { Link } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number is required").max(20),
  business_name: z.string().trim().min(2, "Business name is required").max(200),
  business_address: z.string().trim().max(300).optional(),
  business_city: z.string().trim().min(2, "City is required").max(100),
  business_state: z.string().trim().max(100).optional(),
  zipcode: z.string().trim().min(3, "Zipcode is required").max(20),
  business_country: z.string().trim().min(2, "Country is required").max(100),
  service: z.string().min(1, "Please select a service"),
  competitor: z.string().trim().max(500).optional(),
  gbp_link: z.string().trim().min(5, "GBP/Map link is required").max(500),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

const services = [
  "Full Stack Local SEO",
  "GBP Management",
  "GBP Audit",
  "Website Audit",
  "Complete Business Audit",
  "Business Consultation",
  "Complete Project Management",
  "Website Development",
  "Local Service Ads",
  "Citations",
  "Link Building",
  "Website SEO",
  "Other (Custom Service)",
];

const ContactForm = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    business_address: "",
    business_city: "",
    business_state: "",
    zipcode: "",
    business_country: "",
    service: "",
    competitor: "",
    gbp_link: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = contactSchema.parse(formData);

      const { error } = await supabase.from("contacts").insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.business_name,
        service: validatedData.service,
        message: validatedData.message,
        language: language,
        business_name: validatedData.business_name,
        business_address: validatedData.business_address || null,
        business_city: validatedData.business_city,
        business_state: validatedData.business_state || null,
        zipcode: validatedData.zipcode,
        business_country: validatedData.business_country,
        competitor: validatedData.competitor || null,
        gbp_link: validatedData.gbp_link,
      });

      if (error) throw error;

      try {
        await supabase.functions.invoke("send-contact-email", {
          body: {
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            company: validatedData.business_name,
            service: validatedData.service,
            message: validatedData.message,
            language: language,
            business_city: validatedData.business_city,
            business_country: validatedData.business_country,
            gbp_link: validatedData.gbp_link,
          },
        });
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
      }

      toast({
        title: "Success!",
        description: t("contact.success"),
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        business_name: "",
        business_address: "",
        business_city: "",
        business_state: "",
        zipcode: "",
        business_country: "",
        service: "",
        competitor: "",
        gbp_link: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: t("contact.error"),
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Help Link */}
      <div className="flex items-center justify-end">
        <Link 
          to="/blog/how-to-fill-contact-form" 
          className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          {t("contact.formGuide")}
        </Link>
      </div>

      {/* Client Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t("contact.clientName")} *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="bg-background/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t("contact.email")} *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="bg-background/50"
          />
        </div>
      </div>

      {/* Business Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="business_name">{t("contact.businessName")} *</Label>
          <Input
            id="business_name"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
            placeholder="ABC Services LLC"
            required
            className="bg-background/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t("contact.phone")} *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            required
            className="bg-background/50"
          />
        </div>
      </div>

      {/* Business Address */}
      <div className="space-y-2">
        <Label htmlFor="business_address">{t("contact.businessAddress")}</Label>
        <Input
          id="business_address"
          name="business_address"
          value={formData.business_address}
          onChange={handleChange}
          placeholder="123 Main Street, Suite 100"
          className="bg-background/50"
        />
      </div>

      {/* City, State, Zipcode */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="business_city">{t("contact.city")} *</Label>
          <Input
            id="business_city"
            name="business_city"
            value={formData.business_city}
            onChange={handleChange}
            placeholder="New York"
            required
            className="bg-background/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="business_state">{t("contact.state")}</Label>
          <Input
            id="business_state"
            name="business_state"
            value={formData.business_state}
            onChange={handleChange}
            placeholder="NY"
            className="bg-background/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zipcode">{t("contact.zipcode")} *</Label>
          <Input
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            placeholder="10001"
            required
            className="bg-background/50"
          />
        </div>
      </div>

      {/* Country */}
      <div className="space-y-2">
        <Label htmlFor="business_country">{t("contact.country")} *</Label>
        <Input
          id="business_country"
          name="business_country"
          value={formData.business_country}
          onChange={handleChange}
          placeholder="United States"
          required
          className="bg-background/50"
        />
      </div>

      {/* Service Selection */}
      <div className="space-y-2">
        <Label htmlFor="service">{t("contact.service")} *</Label>
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
        >
          <SelectTrigger className="bg-background/50">
            <SelectValue placeholder={t("contact.selectService")} />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* GBP/Map Link */}
      <div className="space-y-2">
        <Label htmlFor="gbp_link">{t("contact.gbpLink")} *</Label>
        <Input
          id="gbp_link"
          name="gbp_link"
          value={formData.gbp_link}
          onChange={handleChange}
          placeholder="https://maps.google.com/..."
          required
          className="bg-background/50"
        />
        <p className="text-xs text-muted-foreground">
          {t("contact.gbpLinkHint")}
        </p>
      </div>

      {/* Competitor */}
      <div className="space-y-2">
        <Label htmlFor="competitor">{t("contact.competitor")}</Label>
        <Input
          id="competitor"
          name="competitor"
          value={formData.competitor}
          onChange={handleChange}
          placeholder="Competitor business name or website"
          className="bg-background/50"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">{t("contact.message")} *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, goals, and any specific challenges..."
          required
          rows={4}
          className="bg-background/50 resize-none"
        />
      </div>

      <Button type="submit" size="lg" className="w-full glow group" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            {t("contact.sending")}
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            {t("contact.submit")}
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;