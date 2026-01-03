import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CountryData } from "@/lib/countries-config";
import { MapPin, ExternalLink } from "lucide-react";

interface WorldMapVisualizationProps {
  countries: CountryData[];
  onCountryHover?: (country: CountryData | null) => void;
}

// SVG path data for simplified world map regions
const COUNTRY_PATHS: Record<string, { path: string; cx: number; cy: number }> = {
  us: { 
    path: "M 50 120 L 150 120 L 160 140 L 140 160 L 50 160 Z", 
    cx: 100, cy: 140 
  },
  ca: { 
    path: "M 50 70 L 170 70 L 180 100 L 150 120 L 50 120 Z", 
    cx: 110, cy: 95 
  },
  mx: { 
    path: "M 60 160 L 120 160 L 130 200 L 80 210 L 50 180 Z", 
    cx: 90, cy: 185 
  },
  br: { 
    path: "M 180 220 L 230 200 L 250 260 L 210 300 L 170 280 Z", 
    cx: 210, cy: 250 
  },
  uk: { 
    path: "M 350 100 L 365 95 L 370 120 L 355 125 L 345 115 Z", 
    cx: 358, cy: 110 
  },
  de: { 
    path: "M 385 115 L 410 110 L 415 145 L 385 150 Z", 
    cx: 400, cy: 130 
  },
  fr: { 
    path: "M 355 130 L 385 125 L 390 165 L 355 170 Z", 
    cx: 370, cy: 148 
  },
  es: { 
    path: "M 340 160 L 375 155 L 380 190 L 340 195 Z", 
    cx: 358, cy: 175 
  },
  it: { 
    path: "M 400 150 L 425 145 L 430 200 L 405 205 Z", 
    cx: 415, cy: 175 
  },
  nl: { 
    path: "M 378 105 L 395 102 L 398 118 L 380 120 Z", 
    cx: 388, cy: 111 
  },
  ie: { 
    path: "M 335 100 L 350 98 L 352 118 L 338 120 Z", 
    cx: 343, cy: 109 
  },
  pt: { 
    path: "M 325 160 L 340 158 L 342 195 L 327 197 Z", 
    cx: 333, cy: 178 
  },
  ch: { 
    path: "M 388 138 L 405 135 L 408 152 L 390 155 Z", 
    cx: 397, cy: 145 
  },
  be: { 
    path: "M 372 112 L 388 110 L 390 125 L 374 127 Z", 
    cx: 381, cy: 118 
  },
  lu: { 
    path: "M 378 120 L 388 118 L 390 130 L 380 132 Z", 
    cx: 384, cy: 125 
  },
  se: { 
    path: "M 405 50 L 425 45 L 430 100 L 410 105 Z", 
    cx: 418, cy: 75 
  },
  no: { 
    path: "M 385 40 L 410 35 L 415 90 L 390 95 Z", 
    cx: 400, cy: 65 
  },
  dk: { 
    path: "M 390 95 L 410 92 L 413 110 L 392 113 Z", 
    cx: 401, cy: 102 
  },
  fi: { 
    path: "M 430 45 L 455 40 L 460 95 L 435 100 Z", 
    cx: 445, cy: 70 
  },
  lt: { 
    path: "M 435 100 L 455 97 L 458 118 L 438 121 Z", 
    cx: 446, cy: 109 
  },
  au: { 
    path: "M 620 280 L 720 270 L 740 350 L 630 360 Z", 
    cx: 680, cy: 315 
  },
  nz: { 
    path: "M 760 340 L 785 335 L 790 380 L 765 385 Z", 
    cx: 775, cy: 358 
  },
  sg: { 
    path: "M 590 235 L 610 233 L 612 250 L 592 252 Z", 
    cx: 601, cy: 242 
  },
  my: { 
    path: "M 575 220 L 610 215 L 615 248 L 580 253 Z", 
    cx: 595, cy: 232 
  },
  ae: { 
    path: "M 500 190 L 525 185 L 530 215 L 505 220 Z", 
    cx: 515, cy: 202 
  },
  sa: { 
    path: "M 470 175 L 510 170 L 520 220 L 475 225 Z", 
    cx: 495, cy: 198 
  },
  qa: { 
    path: "M 505 195 L 520 193 L 522 215 L 507 217 Z", 
    cx: 513, cy: 205 
  },
  kw: { 
    path: "M 490 175 L 505 173 L 507 190 L 492 192 Z", 
    cx: 498, cy: 182 
  },
  om: { 
    path: "M 515 205 L 540 200 L 545 240 L 520 245 Z", 
    cx: 530, cy: 222 
  },
  eg: { 
    path: "M 445 175 L 475 170 L 480 215 L 450 220 Z", 
    cx: 462, cy: 195 
  },
  sh: { 
    path: "M 365 290 L 380 288 L 382 305 L 367 307 Z", 
    cx: 373, cy: 297 
  },
};

// Region colors for the map
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
  if (["ae", "sa", "qa", "kw", "om", "eg"].includes(code)) return "Middle East";
  if (["br"].includes(code)) return "South America";
  return "Africa";
};

const WorldMapVisualization = ({ countries, onCountryHover }: WorldMapVisualizationProps) => {
  const { language } = useLanguage();
  const [hoveredCountry, setHoveredCountry] = useState<CountryData | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (country: CountryData, e: React.MouseEvent) => {
    setHoveredCountry(country);
    setTooltipPos({ x: e.clientX, y: e.clientY });
    onCountryHover?.(country);
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
    onCountryHover?.(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (hoveredCountry) {
      setTooltipPos({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-muted/30 via-background to-muted/20 rounded-2xl border border-border overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* World map SVG */}
      <svg 
        viewBox="0 0 800 400" 
        className="w-full h-full"
        onMouseMove={handleMouseMove}
      >
        {/* Ocean background */}
        <rect x="0" y="0" width="800" height="400" fill="transparent" />
        
        {/* Continent outlines (simplified) */}
        <g className="opacity-10">
          {/* North America outline */}
          <path d="M 30 60 Q 180 40 200 150 Q 180 220 100 220 Q 30 200 30 60" fill="currentColor" className="text-muted-foreground" />
          {/* South America outline */}
          <path d="M 150 220 Q 260 200 280 350 Q 180 380 140 300 Q 130 250 150 220" fill="currentColor" className="text-muted-foreground" />
          {/* Europe outline */}
          <path d="M 320 60 Q 480 40 470 180 Q 400 200 320 180 Q 300 120 320 60" fill="currentColor" className="text-muted-foreground" />
          {/* Africa outline */}
          <path d="M 370 180 Q 500 170 520 320 Q 420 380 350 320 Q 340 250 370 180" fill="currentColor" className="text-muted-foreground" />
          {/* Asia outline */}
          <path d="M 470 40 Q 700 30 720 180 Q 680 260 550 260 Q 470 200 470 40" fill="currentColor" className="text-muted-foreground" />
          {/* Australia outline */}
          <path d="M 600 260 Q 760 250 780 380 Q 620 400 600 260" fill="currentColor" className="text-muted-foreground" />
        </g>

        {/* Country markers */}
        {countries.map((country) => {
          const pathData = COUNTRY_PATHS[country.code];
          if (!pathData) return null;
          
          const region = getCountryRegion(country.code);
          const color = REGION_COLORS[region];
          const isHovered = hoveredCountry?.code === country.code;

          return (
            <Link
              key={country.code}
              to={`/${language}/${country.code}`}
              className="cursor-pointer"
            >
              <g
                onMouseEnter={(e) => handleMouseEnter(country, e)}
                onMouseLeave={handleMouseLeave}
                className="transition-all duration-300"
              >
                {/* Glow effect on hover */}
                {isHovered && (
                  <circle
                    cx={pathData.cx}
                    cy={pathData.cy}
                    r="25"
                    fill={color}
                    opacity="0.3"
                    className="animate-pulse"
                  />
                )}
                
                {/* Country marker */}
                <circle
                  cx={pathData.cx}
                  cy={pathData.cy}
                  r={isHovered ? 14 : 10}
                  fill={color}
                  stroke="white"
                  strokeWidth="2"
                  className="transition-all duration-200 drop-shadow-lg"
                />
                
                {/* Flag on hover */}
                {isHovered && (
                  <text
                    x={pathData.cx}
                    y={pathData.cy + 4}
                    textAnchor="middle"
                    fontSize="16"
                    className="pointer-events-none"
                  >
                    {country.flag}
                  </text>
                )}
              </g>
            </Link>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoveredCountry && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: tooltipPos.x + 15,
            top: tooltipPos.y - 10,
            transform: 'translateY(-100%)',
          }}
        >
          <div className="bg-popover border border-border rounded-lg shadow-xl p-3 min-w-[180px]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{hoveredCountry.flag}</span>
              <div>
                <h4 className="font-semibold text-foreground">{hoveredCountry.name}</h4>
                {hoveredCountry.localName !== hoveredCountry.name && (
                  <p className="text-xs text-muted-foreground">{hoveredCountry.localName}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {hoveredCountry.statesCount || hoveredCountry.states?.length || 0} Regions
              </span>
              <span className="flex items-center gap-1 text-primary">
                <ExternalLink className="h-3 w-3" />
                Click to explore
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-3 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border">
        {Object.entries(REGION_COLORS).map(([region, color]) => (
          <div key={region} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: color }}
            />
            <span className="text-xs text-muted-foreground">{region}</span>
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border">
        <span className="font-medium">{countries.length}</span> Countries Served
      </div>
    </div>
  );
};

export default WorldMapVisualization;
