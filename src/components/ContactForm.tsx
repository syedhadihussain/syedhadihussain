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
import { Send, Loader2, HelpCircle, Plus, Trash2, Building2, MapPin, Sparkles } from "lucide-react";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

type TFn = (key: string) => string;

const buildContactSchema = (t: TFn) =>
  z.object({
    name: z.string().trim().min(2, t("contact.validation.nameMin")).max(100),
    email: z.string().trim().email(t("contact.validation.emailInvalid")).max(255),
    phone: z.string().trim().min(10, t("contact.validation.phoneRequired")).max(20),
    business_name: z
      .string()
      .trim()
      .min(2, t("contact.validation.businessNameRequired"))
      .max(200),
    business_address: z.string().trim().max(300).optional(),
    business_city: z.string().trim().min(2, t("contact.validation.cityRequired")).max(100),
    business_state: z.string().trim().max(100).optional(),
    zipcode: z.string().trim().min(3, t("contact.validation.zipcodeRequired")).max(20),
    business_country: z.string().trim().min(2, t("contact.validation.countryRequired")).max(100),
    service: z.string().min(1, t("contact.validation.serviceRequired")),
    competitor: z.string().trim().max(500).optional(),
    gbp_link: z.string().trim().min(5, t("contact.validation.gbpRequired")).max(500),
    message: z.string().trim().min(10, t("contact.validation.messageMin")).max(2000),
  });

const services: Array<{ value: string; labelKey: string }> = [
  { value: "Full Stack Local SEO", labelKey: "contact.serviceOption.fullStackLocalSeo" },
  { value: "GBP Management", labelKey: "contact.serviceOption.gbpManagement" },
  { value: "GBP Audit", labelKey: "contact.serviceOption.gbpAudit" },
  { value: "Website Audit", labelKey: "contact.serviceOption.websiteAudit" },
  { value: "Complete Business Audit", labelKey: "contact.serviceOption.completeBusinessAudit" },
  { value: "Business Consultation", labelKey: "contact.serviceOption.businessConsultation" },
  { value: "Complete Project Management", labelKey: "contact.serviceOption.completeProjectManagement" },
  { value: "Website Development", labelKey: "contact.serviceOption.websiteDevelopment" },
  { value: "Local Service Ads", labelKey: "contact.serviceOption.localServiceAds" },
  { value: "Citations", labelKey: "contact.serviceOption.citations" },
  { value: "Link Building", labelKey: "contact.serviceOption.linkBuilding" },
  { value: "Website SEO", labelKey: "contact.serviceOption.websiteSeo" },
  { value: "Content Writing", labelKey: "contact.serviceOption.contentWriting" },
  { value: "Graphic Design", labelKey: "contact.serviceOption.graphicDesign" },
  { value: "Social Media Marketing", labelKey: "contact.serviceOption.socialMediaMarketing" },
  { value: "Multiple Services Bundle", labelKey: "contact.serviceOption.multipleServicesBundle" },
  { value: "Other (Custom Service)", labelKey: "contact.serviceOption.otherCustom" },
];

interface BusinessLocation {
  id: number;
  business_name: string;
  business_address: string;
  business_city: string;
  business_state: string;
  zipcode: string;
  business_country: string;
  gbp_link: string;
}

const emptyLocation: Omit<BusinessLocation, 'id'> = {
  business_name: "",
  business_address: "",
  business_city: "",
  business_state: "",
  zipcode: "",
  business_country: "",
  gbp_link: "",
};

const ContactForm = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [hasMultipleLocations, setHasMultipleLocations] = useState(false);
  const [locations, setLocations] = useState<BusinessLocation[]>([
    { id: 1, ...emptyLocation }
  ]);
  
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
    customService: "",
    competitor: "",
    gbp_link: "",
    message: "",
    promoCode: "",
  });

  const isOtherService = formData.service === "Other (Custom Service)";
  const isMultiServiceBundle = formData.service === "Multiple Services Bundle";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (id: number, field: keyof Omit<BusinessLocation, 'id'>, value: string) => {
    setLocations(prev => prev.map(loc => 
      loc.id === id ? { ...loc, [field]: value } : loc
    ));
  };

  const addLocation = () => {
    const newId = Math.max(...locations.map(l => l.id)) + 1;
    setLocations(prev => [...prev, { id: newId, ...emptyLocation }]);
  };

  const removeLocation = (id: number) => {
    if (locations.length > 1) {
      setLocations(prev => prev.filter(loc => loc.id !== id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // For multi-location, use first location for validation
      const primaryLocation = hasMultipleLocations ? locations[0] : {
        business_name: formData.business_name,
        business_address: formData.business_address,
        business_city: formData.business_city,
        business_state: formData.business_state,
        zipcode: formData.zipcode,
        business_country: formData.business_country,
        gbp_link: formData.gbp_link,
      };

      const dataToValidate = {
        ...formData,
        ...primaryLocation,
      };

      const validatedData = buildContactSchema(t).parse(dataToValidate);
      
      // If "Other" is selected, use the custom service description
      const finalService = isOtherService && formData.customService 
        ? `Other: ${formData.customService}` 
        : isMultiServiceBundle && formData.customService
        ? `Bundle: ${formData.customService}`
        : validatedData.service;

      // Build message with all locations if multi-location
      let fullMessage = validatedData.message;
      if (hasMultipleLocations && locations.length > 1) {
        const locationsInfo = locations.map((loc, idx) => 
          `\n\n--- Location ${idx + 1} ---\nBusiness: ${loc.business_name}\nAddress: ${loc.business_address}\nCity: ${loc.business_city}, ${loc.business_state} ${loc.zipcode}\nCountry: ${loc.business_country}\nGBP Link: ${loc.gbp_link}`
        ).join('');
        fullMessage = `${validatedData.message}\n\n=== MULTIPLE LOCATIONS (${locations.length} total) ===${locationsInfo}`;
      }

      // Add promo code to message if provided
      if (formData.promoCode) {
        fullMessage = `[PROMO CODE: ${formData.promoCode}]\n\n${fullMessage}`;
      }

      const { error } = await supabase.from("contacts").insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.business_name,
        service: finalService,
        message: fullMessage,
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
            service: finalService,
            message: fullMessage,
            language: language,
            business_city: validatedData.business_city,
            business_country: validatedData.business_country,
            gbp_link: validatedData.gbp_link,
            promoCode: formData.promoCode || null,
            locationCount: hasMultipleLocations ? locations.length : 1,
          },
        });
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
      }

      toast({
        title: t("contact.toast.successTitle"),
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
        customService: "",
        competitor: "",
        gbp_link: "",
        message: "",
        promoCode: "",
      });
      setHasMultipleLocations(false);
      setLocations([{ id: 1, ...emptyLocation }]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: t("contact.toast.validationTitle"),
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: t("contact.toast.errorTitle"),
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
            placeholder={t("contact.placeholder.fullName")}
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
            placeholder={t("contact.placeholder.email")}
            required
            className="bg-background/50"
          />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">{t("contact.phone")} *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder={t("contact.placeholder.phone")}
          required
          className="bg-background/50"
        />
      </div>

      {/* Multi-Location Toggle */}
      <div className="glass rounded-xl p-4 border border-primary/20">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">{t("contact.multiLocation.question")}</p>
              <p className="text-xs text-muted-foreground">{t("contact.multiLocation.hint")}</p>
            </div>
          </div>
          <Select
            value={hasMultipleLocations ? "yes" : "no"}
            onValueChange={(value) => setHasMultipleLocations(value === "yes")}
          >
            <SelectTrigger className="w-24 bg-background/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background border border-border z-50">
              <SelectItem value="no">{t("contact.multiLocation.no")}</SelectItem>
              <SelectItem value="yes">{t("contact.multiLocation.yes")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Single Location Fields */}
      {!hasMultipleLocations && (
        <>
          {/* Business Name */}
          <div className="space-y-2">
            <Label htmlFor="business_name">{t("contact.businessName")} *</Label>
            <Input
              id="business_name"
              name="business_name"
              value={formData.business_name}
              onChange={handleChange}
              placeholder={t("contact.placeholder.businessName")}
              required
              className="bg-background/50"
            />
          </div>

          {/* Business Address */}
          <div className="space-y-2">
            <Label htmlFor="business_address">{t("contact.businessAddress")}</Label>
            <Input
              id="business_address"
              name="business_address"
              value={formData.business_address}
              onChange={handleChange}
              placeholder={t("contact.placeholder.businessAddress")}
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
                placeholder={t("contact.placeholder.city")}
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
                placeholder={t("contact.placeholder.state")}
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
                placeholder={t("contact.placeholder.zipcode")}
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
              placeholder={t("contact.placeholder.country")}
              required
              className="bg-background/50"
            />
          </div>

          {/* GBP/Map Link */}
          <div className="space-y-2">
            <Label htmlFor="gbp_link">{t("contact.gbpLink")} *</Label>
            <Input
              id="gbp_link"
              name="gbp_link"
              value={formData.gbp_link}
              onChange={handleChange}
              placeholder={t("contact.placeholder.gbpLink")}
              required
              className="bg-background/50"
            />
            <p className="text-xs text-muted-foreground">{t("contact.gbpLinkHint")}</p>
          </div>
        </>
      )}

      {/* Multiple Locations Section */}
      {hasMultipleLocations && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">{t("contact.multiLocation.yourLocations")} ({locations.length})</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              {t("contact.multiLocation.discountApplies")}
            </Badge>
          </div>

          {locations.map((location, index) => (
            <div key={location.id} className="glass rounded-xl p-4 space-y-4 border border-border/50">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">{t("contact.multiLocation.location")} {index + 1}</span>
                {locations.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeLocation(location.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 px-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Business Name */}
              <div className="space-y-2">
                <Label>{t("contact.businessName")} *</Label>
                <Input
                  value={location.business_name}
                  onChange={(e) => handleLocationChange(location.id, "business_name", e.target.value)}
                  placeholder={t("contact.placeholder.businessName")}
                  required
                  className="bg-background/50"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label>{t("contact.businessAddress")}</Label>
                <Input
                  value={location.business_address}
                  onChange={(e) => handleLocationChange(location.id, "business_address", e.target.value)}
                  placeholder={t("contact.placeholder.businessAddress")}
                  className="bg-background/50"
                />
              </div>

              {/* City, State, Zip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2">
                  <Label>{t("contact.city")} *</Label>
                  <Input
                    value={location.business_city}
                    onChange={(e) => handleLocationChange(location.id, "business_city", e.target.value)}
                    placeholder={t("contact.placeholder.city")}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t("contact.state")}</Label>
                  <Input
                    value={location.business_state}
                    onChange={(e) => handleLocationChange(location.id, "business_state", e.target.value)}
                    placeholder={t("contact.placeholder.state")}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label>{t("contact.zipcode")} *</Label>
                  <Input
                    value={location.zipcode}
                    onChange={(e) => handleLocationChange(location.id, "zipcode", e.target.value)}
                    placeholder={t("contact.placeholder.zipcode")}
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="space-y-2">
                <Label>{t("contact.country")} *</Label>
                <Input
                  value={location.business_country}
                  onChange={(e) => handleLocationChange(location.id, "business_country", e.target.value)}
                  placeholder={t("contact.placeholder.country")}
                  required
                  className="bg-background/50"
                />
              </div>

              {/* GBP Link */}
              <div className="space-y-2">
                <Label>{t("contact.gbpLink")} *</Label>
                <Input
                  value={location.gbp_link}
                  onChange={(e) => handleLocationChange(location.id, "gbp_link", e.target.value)}
                  placeholder={t("contact.placeholder.gbpLink")}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={addLocation}
            className="w-full border-dashed"
          >
            <Plus className="w-4 h-4 mr-2" />
            {t("contact.multiLocation.addAnother")}
          </Button>
        </div>
      )}

      {/* Service Selection */}
      <div className="space-y-2">
        <Label htmlFor="service">{t("contact.service")} *</Label>
        <Select
          value={formData.service}
          onValueChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              service: value,
              customService:
                value !== "Other (Custom Service)" && value !== "Multiple Services Bundle" ? "" : prev.customService,
            }))
          }
        >
          <SelectTrigger className="bg-background/50">
            <SelectValue placeholder={t("contact.selectService")} />
          </SelectTrigger>
          <SelectContent className="bg-background border border-border z-50">
            {services.map((service) => (
              <SelectItem key={service.value} value={service.value}>
                {t(service.labelKey)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Custom Service Input - Only shown when "Other" or "Multiple Services Bundle" is selected */}
      {(isOtherService || isMultiServiceBundle) && (
        <div className="space-y-2 animate-fade-in">
          <Label htmlFor="customService">
            {isMultiServiceBundle ? t("contact.whichServices") + " *" : t("contact.customService") + " *"}
          </Label>
          <Textarea
            id="customService"
            name="customService"
            value={formData.customService}
            onChange={handleChange}
            placeholder={isMultiServiceBundle 
              ? t("contact.bundleServicesPlaceholder")
              : t("contact.customServiceHint")}
            required
            rows={3}
            className="bg-background/50 resize-none"
          />
          <p className="text-xs text-muted-foreground">
            {isMultiServiceBundle 
              ? t("contact.bundleServicesHint")
              : t("contact.customServiceHint")}
          </p>
        </div>
      )}

      {/* Promo Code */}
      <div className="space-y-2">
        <Label htmlFor="promoCode" className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          {t("contact.promoCode")}
        </Label>
        <Input
          id="promoCode"
          name="promoCode"
          value={formData.promoCode}
          onChange={handleChange}
          placeholder={t("contact.promoCodePlaceholder")}
          className="bg-background/50"
        />
        <p className="text-xs text-muted-foreground">
          {t("contact.promoCodeHint")}
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
          placeholder={t("contact.placeholder.competitor")}
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
          placeholder={t("contact.placeholder.message")}
          required
          rows={4}
          className="bg-background/50 resize-none"
        />
      </div>

      {/* Multi-location/Multi-service discount note */}
      {(hasMultipleLocations || isMultiServiceBundle) && (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">{t("contact.discountEligible")}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {hasMultipleLocations && locations.length > 1 
                ? t("contact.locationDiscount").replace("{count}", String(locations.length))
                : t("contact.bundleDiscount")}
            </p>
          </div>
        </div>
      )}

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
