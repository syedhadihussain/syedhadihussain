import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, MapPin, Star, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { IndustryData } from "@/lib/industries-config";
import { Link, useLocation } from "react-router-dom";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "@/lib/i18n-config";

// Industry-specific images mapping by individual industry slug for unique images per page
const INDUSTRY_HERO_IMAGES: Record<string, string> = {
  // ============ HOME MAINTENANCE ============
  "plumbers": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  "electricians": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
  "handyman-services": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  "hvac-services": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop",
  "ac-repair-services": "https://images.unsplash.com/photo-1631545806609-5a79ef2fdb0e?w=800&h=600&fit=crop",
  "boiler-repair-services": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop",
  "gas-engineers": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
  "locksmiths": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "painters-decorators": "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&h=600&fit=crop",
  "roofing-companies": "https://images.unsplash.com/photo-1632759145354-d3e1e0cc8c4f?w=800&h=600&fit=crop",
  "garage-door-repair-installation-services": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
  "shutter-installation-services": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  "blinds-installation-services": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop",
  "curtain-fitting-services": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
  "awning-installation-services": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  "window-cleaning-services": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop",
  "abseiling-window-cleaners": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop",
  "facade-cleaning-services": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  "glass-repair-services": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  "emergency-glass-replacement": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  "double-glazing-repair": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  "mirror-installation-services": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  "flat-pack-furniture-assembly": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
  "scaffolding-companies": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "mold-remediation-professionals": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  "water-damage-restoration-professionals": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  "pressure-washing-professionals": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",

  // ============ CLEANING ============
  "home-cleaning-services": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
  "deep-cleaning-services": "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop",
  "end-of-tenancy-cleaning": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
  "carpet-cleaning-services": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&h=600&fit=crop",
  "warehouse-cleaning-services": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "factory-cleaning-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "industrial-cleaning-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "commercial-kitchen-installation": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  "kitchen-extraction-ventilation-cleaning": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  "grease-trap-cleaning-services": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  "water-tank-cleaning": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  "pool-cleaning-services": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
  "laundry-services": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&h=600&fit=crop",
  "dry-cleaning-services": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&h=600&fit=crop",
  "ironing-services": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&h=600&fit=crop",
  "holiday-let-cleaning-services": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "mattress-cleaning-services": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
  "blind-cleaning-services": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
  "cleanroom-cleaning-services": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
  "street-cleaning-contractors": "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&h=600&fit=crop",
  "snow-clearance-services": "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&h=600&fit=crop",
  "gritting-services": "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&h=600&fit=crop",
  "winter-maintenance-services": "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&h=600&fit=crop",
  "cryogenic-cleaning-services": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
  "dry-ice-blasting-services": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
  "shot-blasting-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",

  // ============ CONSTRUCTION ============
  "builders": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "construction-companies": "https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop",
  "home-builders": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "surveyors": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "quantity-surveyors": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "land-surveyors": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "party-wall-surveyors": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "dilapidation-survey-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "snagging-inspection-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "new-build-snagging-inspectors": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "architects": "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
  "interior-designers": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
  "structural-crack-monitoring-services": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "building-control-inspectors": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "building-envelope-consultants": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  "cladding-inspection-services": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  "external-wall-fire-review-ews1-services": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  "fire-compartmentation-services": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "fire-door-inspection-services": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "formwork-contractors": "https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop",
  "steel-fabrication-companies": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "aluminium-fabrication-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "welding-services": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
  "powder-coating-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "concrete-cutting-services": "https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop",
  "core-drilling-services": "https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop",
  "waterproofing-services": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "damp-proofing-services": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "basement-tanking-services": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "stone-masonry-restoration": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "lime-mortar-repair-services": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "dry-stone-walling-services": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",

  // ============ INSPECTION ============
  "surveying-mapping-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "arboricultural-consultancy-services": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
  "tree-risk-assessment-services": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
  "ecology-consultants": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  "protected-species-surveys": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  "bat-surveys": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  "great-crested-newt-surveys": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  "drone-roof-inspection-services": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
  "drone-survey-services": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
  "thermal-imaging-inspection-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "church-roof-inspection-services": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  "bell-tower-maintenance-services": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  "ground-investigation-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "soil-testing-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "archaeological-survey-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "watching-brief-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "flood-risk-assessment-consultants": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "asbestos-re-inspection-services": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
  "lead-paint-testing-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "radon-testing-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "air-quality-testing-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "noise-assessment-consultants": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "legionella-risk-assessment-services": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
  "explosive-ordnance-disposal-surveys-uxo": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "ndt-testing-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "ultrasonic-testing-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "magnetic-particle-inspection-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "radiography-testing-services": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",

  // ============ PEST CONTROL ============
  "pest-control-services": "https://images.unsplash.com/photo-1632934969160-7d0e0b9a4d1a?w=800&h=600&fit=crop",
  "bed-bug-control": "https://images.unsplash.com/photo-1632934969160-7d0e0b9a4d1a?w=800&h=600&fit=crop",
  "termite-control": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  "bird-control-services": "https://images.unsplash.com/photo-1632934969160-7d0e0b9a4d1a?w=800&h=600&fit=crop",
  "falconry-pest-control": "https://images.unsplash.com/photo-1632934969160-7d0e0b9a4d1a?w=800&h=600&fit=crop",
  "pest-proofing-services": "https://images.unsplash.com/photo-1632934969160-7d0e0b9a4d1a?w=800&h=600&fit=crop",

  // ============ WASTE & RECYCLING ============
  "waste-removal-services": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "junk-removal-services": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "skip-hire-services": "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&h=600&fit=crop",
  "recycling-companies": "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&h=600&fit=crop",
  "industrial-waste-management": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "hazardous-waste-disposal": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "septic-tank-cleaning": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  "septic-tank-installation": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  "animal-waste-removal-services": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "fuel-tank-cleaning-services": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "waste-oil-collection-services": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "trade-waste-consultants": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "fats-oils-grease-fog-management-services": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  "effluent-treatment-services": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
  "sludge-management-services": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
  "anaerobic-digestion-consultants": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",

  // ============ LANDSCAPING ============
  "gardeners": "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
  "landscaping-services": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop",
  "tree-surgeons": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
  "tree-removal-services": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
  "hedgelaying-services": "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
  "ditch-clearance-services": "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
  "land-drainage-contractors": "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",

  // ============ ENERGY ============
  "solar-panel-installers": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
  "ev-charging-installers": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
  "ev-fleet-charging-services": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
  "energy-auditors": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
  "commercial-energy-consultants": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
  "breeam-assessment-services": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
  "carbon-footprint-assessment-services": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
  "sustainable-building-consultants": "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
  "lightning-protection-installation": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
  "lightning-protection-testing-services": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",

  // ============ SECURITY ============
  "cctv-installation-services": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop",
  "security-system-installers": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "smart-home-installers": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "access-control-system-installers": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "intercom-system-installers": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "alarm-response-services": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "key-holding-services": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "remote-cctv-monitoring": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop",
  "security-guard-services": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "dog-security-services": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "k9-security-services": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "smart-lock-installation": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",

  // ============ HEALTHCARE ============
  "family-doctors": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "obstetricians": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "gynecologists": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "womens-health-doctors": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "pediatricians": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "child-doctors": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "kids-health-specialists": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "orthopedic-surgeons": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "bone-specialists": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "joint-doctors": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "dermatologists": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "skin-specialists": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "dermatology-clinics": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "cardiologists": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "veterinary-clinics": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop",
  "animal-hospitals": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop",
  "pet-grooming-services": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop",
  "pet-boarding-services": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop",
  "dog-training-services": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop",
  "veterinary-physiotherapy": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=600&fit=crop",
  "doctors-clinics": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "private-doctors": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "dentists": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
  "cosmetic-dentists": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
  "dental-implant-clinics": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
  "orthodontists": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
  "hospitals": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "physiotherapy-clinics": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  "sports-physiotherapy-clinics": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  "chiropractors": "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
  "foot-clinics": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "opticians": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "eye-clinics": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "endodontists": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
  "skin-clinics": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "mental-health-clinics": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
  "psychologists": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
  "psychiatrists": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop",
  "nutritionists": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
  "dietitians": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
  "weight-loss-clinics": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
  "fertility-clinics": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "alternative-medicine-clinics": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",

  // ============ BEAUTY ============
  "hair-salons": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
  "barber-shops": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
  "beauty-salons": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
  "beauty-parlours": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
  "spas": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
  "massage-centers": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
  "nail-salons": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop",
  "makeup-artists": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
  "tattoo-studios": "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&h=600&fit=crop",
  "body-piercing-studios": "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&h=600&fit=crop",
  "laser-hair-removal-clinics": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
  "hair-transplant-clinics": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",

  // ============ AUTOMOTIVE ============
  "car-repair-shops": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
  "auto-mechanics": "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&h=600&fit=crop",
  "mobile-mechanics": "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&h=600&fit=crop",
  "car-denting-painting": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
  "auto-electricians": "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&h=600&fit=crop",
  "hybrid-car-repair": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
  "mot-test-centers": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
  "tyre-shops": "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=800&h=600&fit=crop",
  "mobile-tyre-fitting-services": "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=800&h=600&fit=crop",
  "car-wash-services": "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop",
  "mobile-car-wash": "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop",
  "car-detailing-services": "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop",
  "car-towing-services": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
  "breakdown-recovery-services": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
  "roadside-assistance-services": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
  "car-lockout-services": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "used-car-dealers": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
  "car-rental-services": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
  "taxi-firms": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
  "minicab-services": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
  "airport-transfer-services": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
  "chauffeur-services": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
  "limousine-hire": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
  "coach-hire-services": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
  "minibus-hire-services": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",

  // ============ CHILDCARE ============
  "childcare-centers": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
  "daycare-nurseries": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop",
  "preschools": "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=600&fit=crop",
  "montessori-schools": "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=600&fit=crop",
  "after-school-clubs": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
  "schools": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
  "private-schools": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
  "colleges": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
  "universities": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
  "tuition-centers": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
  "coaching-institutes": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
  "language-schools": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
  "music-schools": "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&h=600&fit=crop",
  "dance-schools": "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&h=600&fit=crop",
  "dance-studios": "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&h=600&fit=crop",
  "art-classes": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
  "painting-classes": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
  "photography-training": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
  "driving-schools": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
  "ielts-training-centers": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
  "pte-training-centers": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
  "computer-training-institutes": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",

  // ============ ELDERLY CARE ============
  "elderly-care-services": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
  "home-care-services": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=600&fit=crop",
  "assisted-living-facilities": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
  "care-homes": "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=600&fit=crop",
  "home-nursing-services": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=600&fit=crop",
  "stairlift-installation": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
  "mobility-lift-services": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
  "access-ramp-installation": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
  "disabled-access-services": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",

  // ============ FUNERAL & RELIGIOUS ============
  "funeral-services": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  "cremation-services": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  "churches": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  "mosques": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  "temples": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  "religious-centers": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",

  // ============ LEGAL & FINANCIAL ============
  "law-firms": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "family-lawyers": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "divorce-lawyers": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "criminal-lawyers": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "immigration-lawyers": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "personal-injury-lawyers": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "accident-claim-lawyers": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "no-win-no-fee-lawyers": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "employment-lawyers": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "property-lawyers": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "business-lawyers": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "notary-public-services": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "insurance-brokers": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  "mortgage-brokers": "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop",
  "loan-advisors": "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop",
  "financial-planners": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
  "wealth-management-firms": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",

  // ============ REAL ESTATE ============
  "real-estate-agencies": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "property-dealers": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "estate-agents": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "letting-agents": "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop",
  "property-management-companies": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  "airbnb-management-services": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "short-term-let-management": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "serviced-apartment-management": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "hmo-licensing-consultants": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "selective-licensing-consultants": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "tenant-reference-checks": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "inventory-clerk-services": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "check-in-check-out-inspection-services": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "property-staging-services": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
  "home-staging-consultants": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
  "show-home-dressing-services": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",

  // ============ FOOD & BEVERAGE ============
  "restaurants": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  "cafes": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
  "coffee-shops": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
  "bakeries": "https://images.unsplash.com/photo-1517433670267-30f41c68b1f2?w=800&h=600&fit=crop",
  "pizza-shops": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop",
  "fast-food-restaurants": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&h=600&fit=crop",
  "takeaway-restaurants": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&h=600&fit=crop",
  "catering-services": "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
  "food-trucks": "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&h=600&fit=crop",
  "street-food-vendors": "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&h=600&fit=crop",
  "dark-kitchens": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  "cloud-kitchens": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  "butchers": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop",
  "fishmongers": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop",
  "greengrocers": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
  "halal-meat-shops": "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop",
  "asian-grocery-stores": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
  "organic-food-stores": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
  "farm-shops": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
  "cash-carry-wholesalers": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",

  // ============ HOSPITALITY & EVENTS ============
  "hotels": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "motels": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "guest-houses": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "bed-and-breakfast": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "caravan-parks": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "holiday-parks": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "wedding-planners": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  "event-management-companies": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  "photographers": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
  "wedding-photographers": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  "videographers": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
  "dj-services": "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=800&h=600&fit=crop",
  "marquee-hire-services": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  "party-equipment-rental": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  "exhibition-stand-builders": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  "trade-show-stand-contractors": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",

  // ============ TECHNOLOGY ============
  "it-support-companies": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "managed-it-services": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "data-cabling-services": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "structured-cabling-services": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "server-installation-services": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "pos-system-providers": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "cybersecurity-services": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
  "internet-service-providers": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "telecom-service-providers": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",

  // ============ PROFESSIONAL SERVICES ============
  "accountants": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
  "bookkeepers": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
  "tax-consultants": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
  "business-consultants": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "translation-services": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
  "interpretation-services": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",

  // ============ MANUFACTURING ============
  "commercial-printing-services": "https://images.unsplash.com/photo-1534033483939-1edf7d07b7ac?w=800&h=600&fit=crop",
  "packaging-companies": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "label-printing-services": "https://images.unsplash.com/photo-1534033483939-1edf7d07b7ac?w=800&h=600&fit=crop",
  "embroidery-services": "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&h=600&fit=crop",
  "signage-companies": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "sign-board-installation-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "neon-sign-repair-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "digital-display-installation": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "billboard-advertising-companies": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",

  // ============ STORAGE & LOGISTICS ============
  "storage-facilities": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "self-storage-units": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "document-storage-services": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "archive-management-services": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "courier-services": "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&h=600&fit=crop",
  "same-day-delivery-services": "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&h=600&fit=crop",
  "logistics-companies": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "freight-forwarders": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "air-freight-services": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
  "sea-freight-services": "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop",

  // ============ FITNESS ============
  "gyms": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
  "fitness-centers": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
  "yoga-studios": "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=600&fit=crop",
  "pilates-studios": "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=600&fit=crop",
  "personal-trainers": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
  "martial-arts-schools": "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop",
  "karate-classes": "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop",
  "taekwondo-schools": "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&h=600&fit=crop",
  "boxing-gyms": "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop",
  "shooting-ranges": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",

  // ============ SPECIALIZED TRADES ============
  "antique-restoration-services": "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop",
  "furniture-restoration-services": "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop",
  "upholstery-services": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
  "clock-repair-services": "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&h=600&fit=crop",
  "watch-repair-services": "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&h=600&fit=crop",
  "shoe-repair-services": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
  "key-cutting-services": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "vending-machine-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "atm-installation-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "portable-toilet-hire": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  "luxury-toilet-trailer-hire": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  "film-tv-location-services": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
  "3d-scanning-services": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "3d-printing-services": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "cnc-machining-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "laser-cutting-services": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
};

// Category fallback images for industries without specific images
const CATEGORY_FALLBACK_IMAGES: Record<string, string> = {
  "home-maintenance": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
  "cleaning": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
  "construction": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  "inspection": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "pest-control": "https://images.unsplash.com/photo-1632934969160-7d0e0b9a4d1a?w=800&h=600&fit=crop",
  "waste-recycling": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  "landscaping": "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop",
  "energy": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
  "security": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  "healthcare": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
  "beauty": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
  "automotive": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
  "childcare": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
  "elderly-care": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop",
  "funeral-religious": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
  "legal-financial": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  "real-estate": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  "food-beverage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  "hospitality-events": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  "technology": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  "professional-services": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  "manufacturing": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
  "storage-logistics": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "fitness": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
  "specialized-trades": "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop",
};

interface IndustryHeroProps {
  industry: IndustryData;
}

const IndustryHero = ({ industry }: IndustryHeroProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentLang = SUPPORTED_LANGUAGES.includes(pathParts[0] as any) ? pathParts[0] : DEFAULT_LANGUAGE;
  const langLink = (path: string) => `/${currentLang}${path}`;

  // First try to get industry-specific image, then fall back to category image
  const heroImage = INDUSTRY_HERO_IMAGES[industry.slug] || CATEGORY_FALLBACK_IMAGES[industry.categorySlug] || CATEGORY_FALLBACK_IMAGES["home-maintenance"];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-card/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Category Badge */}
            <ScrollReveal animation="fade-up">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/30 bg-primary/5">
                <span className="mr-2">{industry.icon}</span>
                {industry.category}
              </Badge>
            </ScrollReveal>

            {/* Main Heading */}
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {industry.keyword.split(' ').map((word, index) => (
                  word.toLowerCase() === 'seo' || word.toLowerCase() === 'local' ? (
                    <span key={index} className="text-primary">{word} </span>
                  ) : (
                    <span key={index}>{word} </span>
                  )
                ))}
              </h1>
            </ScrollReveal>

            {/* Tagline */}
            <ScrollReveal animation="fade-up" delay={150}>
              <p className="text-xl md:text-2xl text-primary font-medium mb-4">
                {industry.heroTagline}
              </p>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {industry.heroDescription}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fade-up" delay={250}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="btn-shine group">
                  <Link to={langLink("/contact")}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t("hero.bookConsultation")}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to={langLink("/case-studies")}>
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Trust Signals */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>5-Star Rated</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Serving Worldwide</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>100+ {industry.name} Clients</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl scale-110" />
                <figure className="relative gradient-border rounded-2xl overflow-hidden">
                  <img
                    src={heroImage}
                    alt={`${industry.name} - Professional Local SEO Services`}
                    className="w-full max-w-lg rounded-2xl object-cover aspect-[4/3]"
                    loading="eager"
                    fetchPriority="high"
                    width="600"
                    height="450"
                  />
                </figure>
                {/* Stats Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 glow-sm">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {industry.stats.slice(0, 3).map((stat, index) => (
                      <div key={index}>
                        <p className="text-lg font-bold text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;
