import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// IndexNow configuration
const INDEXNOW_KEY = "syedhadihussain-indexnow-key";
const HOST = "syedhadihussain.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// IndexNow endpoints (all participating search engines)
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",     // IndexNow API (routes to all)
  "https://www.bing.com/indexnow",          // Bing
  "https://yandex.com/indexnow",            // Yandex
  "https://search.seznam.cz/indexnow",      // Seznam
];

interface IndexNowRequest {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

interface SubmissionResult {
  endpoint: string;
  success: boolean;
  status?: number;
  statusText?: string;
  error?: string;
}

async function submitToIndexNow(endpoint: string, payload: IndexNowRequest): Promise<SubmissionResult> {
  try {
    console.log(`📤 Submitting to ${endpoint}...`);
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log(`   Response: ${response.status} ${response.statusText}`);

    return {
      endpoint,
      success: response.ok || response.status === 202, // 202 = Accepted
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    console.error(`   Error: ${error}`);
    return {
      endpoint,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Generate all indexable URLs
function generateAllUrls(): string[] {
  const urls: string[] = [];
  const lang = "en"; // Primary language for canonical URLs

  // Quick links / conversion pages
  const quickLinks = [
    "", "about", "services", "portfolio", "case-studies", "faq", "contact",
    "blog", "blog/how-to-fill-contact-form", "project-management",
    "local-service-ads", "pricing", "web-development", "content-writing",
    "graphic-design", "social-media", "privacy", "terms", "serving-industries"
  ];

  quickLinks.forEach(page => {
    urls.push(`https://${HOST}/${lang}${page ? '/' + page : ''}`);
  });

  // Countries
  const countries = ['us', 'ca', 'au', 'uk', 'de', 'ae', 'mx', 'my', 'it', 'nz', 'br', 'ie', 'sg', 'za', 'nl', 'fr', 'es', 'se', 'no', 'dk', 'fi', 'ch', 'be', 'sa', 'qa', 'eg', 'pt', 'om', 'kw', 'lu', 'jo'];
  countries.forEach(country => {
    urls.push(`https://${HOST}/${lang}/${country}`);
  });

  // US States (as example - most active geo pages)
  const usStates = ['fl', 'tx', 'ny', 'ca', 'wa', 'az', 'ga', 'nc', 'oh', 'pa', 'il', 'nj', 'mi', 'co', 'tn', 'va'];
  usStates.forEach(state => {
    urls.push(`https://${HOST}/${lang}/us/${state}`);
  });

  // Top industry pages
  const topIndustries = [
    'plumbers', 'electricians', 'hvac-services', 'restaurants', 'dentists',
    'law-firms', 'real-estate-agencies', 'car-repair-shops', 'gyms',
    'hair-salons', 'hotels', 'doctors-clinics', 'landscaping-services',
    'roofing-companies', 'pest-control-services', 'solar-panel-installers',
    'mobile-phone-repair-shops', 'laptop-repair-shops'
  ];
  topIndustries.forEach(industry => {
    urls.push(`https://${HOST}/${lang}/local-seo-services-for-${industry}`);
  });

  return urls;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let urlsToSubmit: string[] = [];

    // Check if specific URLs were provided
    if (req.method === 'POST') {
      const body = await req.json().catch(() => ({}));
      if (body.urls && Array.isArray(body.urls)) {
        urlsToSubmit = body.urls;
      } else if (body.url) {
        urlsToSubmit = [body.url];
      }
    }

    // If no specific URLs, generate all indexable URLs
    if (urlsToSubmit.length === 0) {
      urlsToSubmit = generateAllUrls();
    }

    console.log(`🚀 IndexNow submission starting...`);
    console.log(`📊 Total URLs to submit: ${urlsToSubmit.length}`);

    // IndexNow has a limit of 10,000 URLs per request
    const MAX_URLS_PER_BATCH = 10000;
    const batches: string[][] = [];
    
    for (let i = 0; i < urlsToSubmit.length; i += MAX_URLS_PER_BATCH) {
      batches.push(urlsToSubmit.slice(i, i + MAX_URLS_PER_BATCH));
    }

    const allResults: SubmissionResult[] = [];

    for (const batch of batches) {
      const payload: IndexNowRequest = {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: batch,
      };

      // Submit to all IndexNow endpoints in parallel
      const results = await Promise.all(
        INDEXNOW_ENDPOINTS.map(endpoint => submitToIndexNow(endpoint, payload))
      );

      allResults.push(...results);
    }

    const successCount = allResults.filter(r => r.success).length;
    const failCount = allResults.filter(r => !r.success).length;

    const summary = {
      timestamp: new Date().toISOString(),
      urlsSubmitted: urlsToSubmit.length,
      endpoints: INDEXNOW_ENDPOINTS.length,
      batches: batches.length,
      successful: successCount,
      failed: failCount,
      results: allResults,
      supportedEngines: ['Bing', 'Yandex', 'Seznam', 'Naver'],
      note: 'Google does not support IndexNow. Use Google Search Console or Indexing API for Google.',
    };

    console.log(`✅ IndexNow submission complete: ${successCount} successful, ${failCount} failed`);

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
    console.error('❌ Error in IndexNow submission:', error);
    
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
