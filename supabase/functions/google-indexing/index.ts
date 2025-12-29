import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Google Indexing API endpoint
const GOOGLE_INDEXING_API = "https://indexing.googleapis.com/v3/urlNotifications:publish";
const GOOGLE_BATCH_API = "https://indexing.googleapis.com/batch";

interface ServiceAccountCredentials {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
}

interface IndexingResult {
  url: string;
  success: boolean;
  type: string;
  notifyTime?: string;
  error?: string;
}

// Create JWT for Google OAuth2
async function createJWT(credentials: ServiceAccountCredentials): Promise<string> {
  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600, // 1 hour
  };

  const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  const signatureInput = `${encodedHeader}.${encodedPayload}`;

  // Import the private key
  const privateKey = credentials.private_key.replace(/\\n/g, '\n');
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  const pemContents = privateKey.replace(pemHeader, '').replace(pemFooter, '').replace(/\s/g, '');
  
  const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));
  
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(signatureInput)
  );

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  return `${signatureInput}.${encodedSignature}`;
}

// Exchange JWT for access token
async function getAccessToken(credentials: ServiceAccountCredentials): Promise<string> {
  const jwt = await createJWT(credentials);

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to get access token: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Submit a single URL to Google Indexing API
async function submitUrl(
  url: string, 
  accessToken: string, 
  type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED"
): Promise<IndexingResult> {
  try {
    console.log(`📤 Submitting to Google: ${url} (${type})`);

    const response = await fetch(GOOGLE_INDEXING_API, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        type: type,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(`   ✅ Success: ${data.urlNotificationMetadata?.latestUpdate?.notifyTime || 'Submitted'}`);
      return {
        url,
        success: true,
        type,
        notifyTime: data.urlNotificationMetadata?.latestUpdate?.notifyTime,
      };
    } else {
      console.log(`   ❌ Error: ${data.error?.message || response.statusText}`);
      return {
        url,
        success: false,
        type,
        error: data.error?.message || response.statusText,
      };
    }
  } catch (error) {
    console.error(`   ❌ Exception: ${error}`);
    return {
      url,
      success: false,
      type,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Generate priority URLs for Google indexing
function generatePriorityUrls(): string[] {
  const urls: string[] = [];
  const host = "syedhadihussain.com";
  const lang = "en";

  // High-priority pages (conversion/core pages)
  const priorityPages = [
    "", "about", "services", "portfolio", "case-studies", "faq", "contact",
    "pricing", "web-development", "content-writing", "graphic-design", 
    "social-media", "local-service-ads", "project-management"
  ];

  priorityPages.forEach(page => {
    urls.push(`https://${host}/${lang}${page ? '/' + page : ''}`);
  });

  // Top countries
  const topCountries = ['us', 'ca', 'au', 'uk', 'ae', 'de'];
  topCountries.forEach(country => {
    urls.push(`https://${host}/${lang}/${country}`);
  });

  // Top industries
  const topIndustries = [
    'plumbers', 'electricians', 'hvac-services', 'restaurants', 'dentists',
    'law-firms', 'real-estate-agencies', 'car-repair-shops'
  ];
  topIndustries.forEach(industry => {
    urls.push(`https://${host}/${lang}/local-seo-services-for-${industry}`);
  });

  return urls;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get service account credentials from environment
    const credentialsJson = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_JSON');
    if (!credentialsJson) {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON environment variable not set');
    }

    const credentials: ServiceAccountCredentials = JSON.parse(credentialsJson);
    console.log(`🔐 Using service account: ${credentials.client_email}`);

    // Get access token
    console.log('🔑 Obtaining access token...');
    const accessToken = await getAccessToken(credentials);
    console.log('✅ Access token obtained');

    // Parse request for URLs
    let urlsToSubmit: string[] = [];
    let notificationType: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED";

    if (req.method === 'POST') {
      const body = await req.json().catch(() => ({}));
      if (body.urls && Array.isArray(body.urls)) {
        urlsToSubmit = body.urls;
      } else if (body.url) {
        urlsToSubmit = [body.url];
      }
      if (body.type === "URL_DELETED") {
        notificationType = "URL_DELETED";
      }
    }

    // If no specific URLs, use priority URLs
    if (urlsToSubmit.length === 0) {
      urlsToSubmit = generatePriorityUrls();
    }

    console.log(`🚀 Google Indexing API submission starting...`);
    console.log(`📊 Total URLs to submit: ${urlsToSubmit.length}`);

    // Google has a quota of 200 requests per day for most sites
    // Submit URLs with a small delay to avoid rate limiting
    const results: IndexingResult[] = [];
    const BATCH_SIZE = 10;
    const DELAY_MS = 100;

    for (let i = 0; i < urlsToSubmit.length; i += BATCH_SIZE) {
      const batch = urlsToSubmit.slice(i, i + BATCH_SIZE);
      
      const batchResults = await Promise.all(
        batch.map(url => submitUrl(url, accessToken, notificationType))
      );
      
      results.push(...batchResults);

      // Small delay between batches
      if (i + BATCH_SIZE < urlsToSubmit.length) {
        await new Promise(resolve => setTimeout(resolve, DELAY_MS));
      }
    }

    const successCount = results.filter(r => r.success).length;
    const failCount = results.filter(r => !r.success).length;

    const summary = {
      timestamp: new Date().toISOString(),
      serviceAccount: credentials.client_email,
      urlsSubmitted: urlsToSubmit.length,
      successful: successCount,
      failed: failCount,
      notificationType,
      results,
      quotaNote: "Google Indexing API has a daily quota of ~200 requests for most sites. Request quota increase if needed.",
    };

    console.log(`✅ Google Indexing complete: ${successCount} successful, ${failCount} failed`);

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
    console.error('❌ Error in Google Indexing:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
        setup: {
          step1: "Create a Google Cloud project at https://console.cloud.google.com",
          step2: "Enable the Indexing API at https://console.cloud.google.com/apis/library/indexing.googleapis.com",
          step3: "Create a service account with Indexing API permissions",
          step4: "Download the JSON key and add it as GOOGLE_SERVICE_ACCOUNT_JSON secret",
          step5: "Add the service account email as an owner in Google Search Console",
        }
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
