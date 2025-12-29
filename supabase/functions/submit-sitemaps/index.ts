import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const BASE_URL = "https://syedhadihussain.com";

// All sitemaps to submit
const SITEMAPS = [
  `${BASE_URL}/sitemap.xml`,
  `${BASE_URL}/sitemaps/quick-links.xml`,
  `${BASE_URL}/sitemaps/industries/sitemap.xml`,
];

// Add country sitemap indexes
const COUNTRIES = ['us', 'ca', 'au', 'uk', 'de', 'ae', 'mx', 'my', 'it', 'nz', 'br', 'ie', 'sg', 'za', 'nl', 'fr', 'es', 'se', 'no', 'dk', 'fi', 'ch', 'be', 'sa', 'qa', 'eg', 'pt', 'om', 'kw', 'lu', 'jo'];
COUNTRIES.forEach(country => {
  SITEMAPS.push(`${BASE_URL}/sitemaps/countries/${country}/sitemap.xml`);
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
    console.log('🚀 Starting sitemap submission to search engines...');
    
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
      totalSitemaps: SITEMAPS.length,
      totalPings: SITEMAPS.length * 2, // Google + Bing
      successful: successCount,
      failed: failCount,
      results,
    };

    console.log(`✅ Submission complete: ${successCount} successful, ${failCount} failed`);

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
