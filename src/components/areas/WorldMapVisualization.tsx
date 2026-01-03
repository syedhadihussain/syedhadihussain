import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/lib/countries-config";
import { MapPin, Globe, ExternalLink, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorldMapVisualizationProps {
  countries: CountryData[];
  onCountryHover?: (country: CountryData | null) => void;
}

// Region colors for the legend
const REGION_COLORS = {
  "North America": "hsl(var(--primary))",
  "Europe": "hsl(142, 76%, 36%)",
  "Asia Pacific": "hsl(199, 89%, 48%)",
  "Middle East": "hsl(25, 95%, 53%)",
  "South America": "hsl(280, 65%, 60%)",
  "Africa": "hsl(45, 93%, 47%)",
};

const getCountryRegion = (code: string): keyof typeof REGION_COLORS => {
  if (["us", "ca", "mx"].includes(code)) return "North America";
  if (["uk", "de", "fr", "es", "it", "nl", "ie", "pt", "ch", "se", "no", "dk", "fi", "be", "lu", "lt"].includes(code)) return "Europe";
  if (["au", "nz", "sg", "my"].includes(code)) return "Asia Pacific";
  if (["ae", "sa", "qa", "kw", "om", "eg", "jo"].includes(code)) return "Middle East";
  if (["br"].includes(code)) return "South America";
  return "Africa";
};

const WorldMapVisualization = ({ countries, onCountryHover }: WorldMapVisualizationProps) => {
  const { language } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Group countries by region for display
  const countriesByRegion = countries.reduce((acc, country) => {
    const region = getCountryRegion(country.code);
    if (!acc[region]) acc[region] = [];
    acc[region].push(country);
    return acc;
  }, {} as Record<string, CountryData[]>);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full bg-gradient-to-br from-muted/30 via-background to-muted/20 rounded-2xl border border-border overflow-hidden"
    >
      {/* 3D Globe Embed */}
      <div className="relative w-full aspect-[16/9] min-h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63149012.73857758!2d15!3d20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1704300000000"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Interactive World Map - Areas We Serve"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        
        {/* Fullscreen button */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={toggleFullscreen}
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
        
        {/* Globe icon overlay */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border">
          <Globe className="h-4 w-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-foreground">Interactive Globe</span>
        </div>
      </div>

      {/* Country Quick Links Grid */}
      <div className="p-6 border-t border-border bg-muted/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Quick Access to Countries</h3>
          <span className="text-sm text-muted-foreground">{countries.length} countries served</span>
        </div>
        
        {/* Region tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setSelectedRegion(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedRegion === null 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted hover:bg-muted/80 text-muted-foreground'
            }`}
          >
            All
          </button>
          {Object.entries(REGION_COLORS).map(([region, color]) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region === selectedRegion ? null : region)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                selectedRegion === region 
                  ? 'text-white' 
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              }`}
              style={selectedRegion === region ? { backgroundColor: color } : {}}
            >
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: color }}
              />
              {region}
              <span className="text-xs opacity-75">
                ({countriesByRegion[region]?.length || 0})
              </span>
            </button>
          ))}
        </div>

        {/* Countries grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {countries
            .filter(c => !selectedRegion || getCountryRegion(c.code) === selectedRegion)
            .map((country) => {
              const region = getCountryRegion(country.code);
              const color = REGION_COLORS[region];
              
              return (
                <Link
                  key={country.code}
                  to={`/${language}/${country.code}`}
                  className="group flex flex-col items-center gap-1 p-3 rounded-xl bg-background hover:bg-muted border border-transparent hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
                  onMouseEnter={() => onCountryHover?.(country)}
                  onMouseLeave={() => onCountryHover?.(null)}
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {country.flag}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground text-center truncate w-full">
                    {country.name}
                  </span>
                  <div 
                    className="w-full h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: color }}
                  />
                </Link>
              );
            })}
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap items-center justify-center gap-6 p-4 bg-primary/5 border-t border-border">
        {Object.entries(countriesByRegion).map(([region, regionCountries]) => (
          <div key={region} className="flex items-center gap-2 text-sm">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: REGION_COLORS[region as keyof typeof REGION_COLORS] }}
            />
            <span className="text-muted-foreground">{region}:</span>
            <span className="font-semibold text-foreground">{regionCountries.length}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldMapVisualization;
