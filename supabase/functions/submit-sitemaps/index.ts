import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Initialize Supabase client for logging
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const BASE_URL = "https://syedhadihussain.com";

// All sitemaps to submit (new v2 structure)
const SITEMAPS = [
  // Master index
  `${BASE_URL}/sitemap.xml`,
  // Countries sitemap
  `${BASE_URL}/sitemaps/countries.xml`,
  // Content sitemap (blog & pages)
  `${BASE_URL}/sitemaps/content.xml`,
  // Industry categories sitemap
  `${BASE_URL}/sitemaps/industries/categories.xml`,
];

// Add state sitemaps per country
const COUNTRIES = ['us', 'ca', 'au', 'uk', 'de', 'ae', 'mx', 'my', 'it', 'nz', 'br', 'ie', 'sg', 'za', 'nl', 'fr', 'es', 'se', 'no', 'dk', 'fi', 'ch', 'be', 'sa', 'qa', 'eg', 'pt', 'om', 'kw', 'lu', 'jo'];
COUNTRIES.forEach(country => {
  SITEMAPS.push(`${BASE_URL}/sitemaps/countries/${country}/states.xml`);
});

// Add industry category sitemaps
const INDUSTRY_CATEGORIES = [
  'home-maintenance', 'cleaning', 'construction', 'inspection', 'pest-control',
  'waste-recycling', 'landscaping', 'energy', 'security', 'healthcare', 'beauty',
  'automotive', 'childcare', 'elderly-care', 'funeral-religious', 'legal-financial',
  'real-estate', 'food-beverage', 'hospitality-events', 'technology',
  'professional-services', 'manufacturing', 'storage-logistics', 'fitness', 'specialized-trades'
];
INDUSTRY_CATEGORIES.forEach(category => {
  SITEMAPS.push(`${BASE_URL}/sitemaps/industries/${category}.xml`);
});

interface PingResult {
  sitemap: string;
  google: { success: boolean; status?: number; error?: string };
  bing: { success: boolean; status?: number; error?: string };
}

async function pingSearchEngine(engine: 'google' | 'bing', sitemapUrl: string): Promise<{ success: boolean; status?: number; error?: string }> {
  const pingUrl = engine === 'google'
    ? `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    : `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

  try {
    const response = await fetch(pingUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Lovable-Sitemap-Submitter/1.0',
      },
    });

    return {
      success: response.ok,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body to check source
    let source = 'manual';
    let triggeredAt = new Date().toISOString();
    
    try {
      const body = await req.json();
      source = body.source || 'manual';
      triggeredAt = body.triggered_at || triggeredAt;
    } catch {
      // No body or invalid JSON - that's fine for manual triggers
    }
    
    console.log(`🚀 Starting sitemap submission to search engines...`);
    console.log(`📅 Triggered at: ${triggeredAt}`);
    console.log(`🔧 Source: ${source}`);
    console.log(`📊 Total sitemaps to submit: ${SITEMAPS.length}`);
    
    const results: PingResult[] = [];
    let successCount = 0;
    let failCount = 0;

    // Process sitemaps in batches to avoid rate limiting
    for (const sitemap of SITEMAPS) {
      console.log(`📍 Submitting: ${sitemap}`);
      
      const [googleResult, bingResult] = await Promise.all([
        pingSearchEngine('google', sitemap),
        pingSearchEngine('bing', sitemap),
      ]);

      const result: PingResult = {
        sitemap,
        google: googleResult,
        bing: bingResult,
      };

      results.push(result);

      if (googleResult.success) successCount++;
      else failCount++;

      if (bingResult.success) successCount++;
      else failCount++;

      // Small delay between submissions to be respectful
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    const summary = {
      timestamp: new Date().toISOString(),
      source,
      triggeredAt,
      totalSitemaps: SITEMAPS.length,
      totalPings: SITEMAPS.length * 2, // Google + Bing
      successful: successCount,
      failed: failCount,
      results,
    };

    console.log(`✅ Submission complete: ${successCount} successful, ${failCount} failed`);
    const successRate = ((successCount / (SITEMAPS.length * 2)) * 100);
    console.log(`📈 Success rate: ${successRate.toFixed(1)}%`);

    // Log submission to database
    try {
      const { error: dbError } = await supabase
        .from('sitemap_submissions')
        .insert({
          source,
          triggered_at: triggeredAt,
          completed_at: new Date().toISOString(),
          total_sitemaps: SITEMAPS.length,
          successful_pings: successCount,
          failed_pings: failCount,
          success_rate: successRate,
          results: results.slice(0, 10), // Store first 10 results to avoid large payload
        });

      if (dbError) {
        console.error('Failed to log submission to database:', dbError);
      } else {
        console.log('📝 Submission logged to database');
      }
    } catch (logError) {
      console.error('Error logging to database:', logError);
    }

    return new Response(
      JSON.stringify(summary, null, 2),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error('❌ Error submitting sitemaps:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
});
