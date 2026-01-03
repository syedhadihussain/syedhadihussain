import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { COUNTRIES, CountryData } from "@/lib/countries-config";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import WorldMapVisualization from "@/components/areas/WorldMapVisualization";
import { MapPin, Globe, ArrowRight, Users, TrendingUp, Award, Search, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AreasWeServePage = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  
  // Get all countries as an array
  const countries = Object.values(COUNTRIES);
  
  // Define regions
  const regionMapping: Record<string, string[]> = {
    "North America": ["us", "ca", "mx"],
    "Europe": ["uk", "de", "fr", "es", "it", "nl", "ie", "pt", "ch", "se", "no", "dk", "fi", "be", "lu", "lt"],
    "Asia Pacific": ["au", "nz", "sg", "my"],
    "Middle East": ["ae", "sa", "qa", "kw", "om", "eg"],
    "South America": ["br"],
    "Africa": ["sh"],
  };

  const getCountryRegion = (code: string): string => {
    for (const [region, codes] of Object.entries(regionMapping)) {
      if (codes.includes(code)) return region;
    }
    return "Other";
  };

  // Filter countries based on search and region
  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = 
        searchQuery === "" ||
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.localName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = 
        selectedRegion === "all" ||
        regionMapping[selectedRegion]?.includes(country.code);
      
      return matchesSearch && matchesRegion;
    });
  }, [countries, searchQuery, selectedRegion]);

  // Group filtered countries by region
  const groupedCountries = useMemo(() => {
    const groups: Record<string, CountryData[]> = {};
    
    filteredCountries.forEach((country) => {
      const region = getCountryRegion(country.code);
      if (!groups[region]) groups[region] = [];
      groups[region].push(country);
    });
    
    // Sort regions in preferred order
    const orderedRegions = ["North America", "Europe", "Asia Pacific", "Middle East", "South America", "Africa"];
    const sortedGroups: [string, CountryData[]][] = [];
    
    orderedRegions.forEach((region) => {
      if (groups[region] && groups[region].length > 0) {
        sortedGroups.push([region, groups[region]]);
      }
    });
    
    return sortedGroups;
  }, [filteredCountries]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRegion("all");
  };

  const hasActiveFilters = searchQuery !== "" || selectedRegion !== "all";

  return (
    <>
      <Helmet>
        <title>Areas We Serve | Local SEO Services in 30+ Countries Worldwide</title>
        <meta 
          name="description" 
          content="Explore our Local SEO services across 30+ countries including USA, UK, Canada, Australia, Germany, UAE, and more. Expert Google Maps optimization and local search marketing worldwide." 
        />
        <meta name="keywords" content="local SEO worldwide, international SEO services, Google Maps optimization, local search marketing, global SEO expert" />
        <link rel="canonical" href={`https://syedhadihussain.com/${language}/areas-we-serve`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="container-narrow">
              <div className="text-center max-w-4xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">Global Coverage</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Areas We{" "}
                  <span className="text-primary">Serve</span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Delivering expert Local SEO services across <strong>{countries.length}+ countries</strong> worldwide. 
                  From Google Maps optimization to local search marketing, I help businesses dominate their local markets.
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{countries.length}+ Countries</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>500+ States & Regions</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span>1000+ Cities</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    <span>7+ Years Experience</span>
                  </div>
                </div>
              </div>

              {/* Interactive World Map */}
              <WorldMapVisualization countries={countries} />
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-8 border-b border-border bg-muted/30 sticky top-[72px] z-40 backdrop-blur-sm">
            <div className="container-narrow">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search Input */}
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search countries by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-10"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Region Filter */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Filter className="h-4 w-4 text-muted-foreground hidden md:block" />
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <SelectValue placeholder="Filter by region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="North America">North America</SelectItem>
                      <SelectItem value="Europe">Europe</SelectItem>
                      <SelectItem value="Asia Pacific">Asia Pacific</SelectItem>
                      <SelectItem value="Middle East">Middle East</SelectItem>
                      <SelectItem value="South America">South America</SelectItem>
                      <SelectItem value="Africa">Africa</SelectItem>
                    </SelectContent>
                  </Select>

                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>
              </div>

              {/* Results count */}
              <div className="mt-4 text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredCountries.length}</span> of {countries.length} countries
                {hasActiveFilters && " (filtered)"}
              </div>
            </div>
          </section>

          {/* Countries Grid by Region */}
          <section className="py-16">
            <div className="container-narrow">
              {filteredCountries.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">No countries found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                groupedCountries.map(([region, regionCountries]) => (
                  <div key={region} className="mb-16 last:mb-0">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-1 w-8 bg-primary rounded-full" />
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{region}</h2>
                      <div className="h-px flex-1 bg-border" />
                      <span className="text-sm text-muted-foreground">{regionCountries.length} {regionCountries.length === 1 ? 'country' : 'countries'}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {regionCountries.map((country) => (
                        <Link
                          key={country.code}
                          to={`/${language}/${country.code}`}
                          className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                        >
                          <div className="p-6">
                            {/* Flag and Country Name */}
                            <div className="flex items-center gap-4 mb-4">
                              <span className="text-5xl" role="img" aria-label={`${country.name} flag`}>
                                {country.flag}
                              </span>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                  {country.name}
                                </h3>
                                {country.localName !== country.name && (
                                  <p className="text-sm text-muted-foreground truncate">
                                    {country.localName}
                                  </p>
                                )}
                              </div>
                            </div>
                            
                            {/* Stats */}
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5" />
                                {country.statesCount || country.states?.length || 0} {country.code === 'sh' ? 'Districts' : 'Regions'}
                              </span>
                              <span className="text-xs bg-muted px-2 py-1 rounded">
                                {country.currency}
                              </span>
                            </div>
                            
                            {/* CTA Button */}
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                            >
                              <span>View Services</span>
                              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                          
                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10">
            <div className="container-narrow">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Dominate Your Local Market?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're in New York, London, Sydney, or Dubai – I can help your business 
                  rank higher on Google Maps and local search results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link to={`/${language}/contact`}>
                      Get Free Consultation
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to={`/${language}/serving-industries`}>
                      View All Industries
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AreasWeServePage;
