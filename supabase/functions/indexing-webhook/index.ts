import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Configuration
const INDEXNOW_KEY = "syedhadihussain-indexnow-key";
const HOST = "syedhadihussain.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// IndexNow endpoints
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
  "https://search.seznam.cz/indexnow",
];

// Google Indexing API endpoint
const GOOGLE_INDEXING_API = "https://indexing.googleapis.com/v3/urlNotifications:publish";

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

interface WebhookPayload {
  urls: string[];
  type?: "URL_UPDATED" | "URL_DELETED";
  source?: string;
  triggerGoogle?: boolean;
  triggerIndexNow?: boolean;
}

interface SubmissionResult {
  service: string;
  success: boolean;
  details?: any;
  error?: string;
}

// Create JWT for Google OAuth2
async function createGoogleJWT(credentials: ServiceAccountCredentials): Promise<string> {
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const signatureInput = `${encodedHeader}.${encodedPayload}`;

  const privateKey = credentials.private_key.replace(/\\n/g, '\n');
  const pemContents = privateKey
    .replace("-----BEGIN PRIVATE KEY-----", '')
    .replace("-----END PRIVATE KEY-----", '')
    .replace(/\s/g, '');
  
  const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));
  
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8", binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false, ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5", cryptoKey,
    new TextEncoder().encode(signatureInput)
  );

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  return `${signatureInput}.${encodedSignature}`;
}

// Get Google access token
async function getGoogleAccessToken(credentials: ServiceAccountCredentials): Promise<string> {
  const jwt = await createGoogleJWT(credentials);
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get Google access token: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Submit to Google Indexing API
async function submitToGoogle(urls: string[], type: "URL_UPDATED" | "URL_DELETED"): Promise<SubmissionResult> {
  try {
    const credentialsJson = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_JSON');
    if (!credentialsJson) {
      return { service: "Google", success: false, error: "GOOGLE_SERVICE_ACCOUNT_JSON not configured" };
    }

    const credentials: ServiceAccountCredentials = JSON.parse(credentialsJson);
    const accessToken = await getGoogleAccessToken(credentials);

    const results = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(GOOGLE_INDEXING_API, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url, type }),
        });
        return { url, success: response.ok, status: response.status };
      })
    );

    const successCount = results.filter(r => r.success).length;
    return {
      service: "Google",
      success: successCount > 0,
      details: { submitted: urls.length, successful: successCount, results },
    };
  } catch (error) {
    return { service: "Google", success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// Submit to IndexNow
async function submitToIndexNow(urls: string[]): Promise<SubmissionResult> {
  try {
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    };

    const results = await Promise.all(
      INDEXNOW_ENDPOINTS.map(async (endpoint) => {
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(payload),
          });
          return { endpoint, success: response.ok || response.status === 202, status: response.status };
        } catch (error) {
          return { endpoint, success: false, error: String(error) };
        }
      })
    );

    const successCount = results.filter(r => r.success).length;
    return {
      service: "IndexNow",
      success: successCount > 0,
      details: { 
        endpoints: INDEXNOW_ENDPOINTS.length, 
        successful: successCount,
        engines: ['Bing', 'Yandex', 'Seznam', 'Naver'],
        results 
      },
    };
  } catch (error) {
    return { service: "IndexNow", success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: "Only POST requests are supported" }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body: WebhookPayload = await req.json();
    
    if (!body.urls || !Array.isArray(body.urls) || body.urls.length === 0) {
      return new Response(
        JSON.stringify({ 
          error: "Missing or invalid 'urls' array in request body",
          example: {
            urls: ["https://syedhadihussain.com/en/new-page"],
            type: "URL_UPDATED",
            triggerGoogle: true,
            triggerIndexNow: true
          }
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const {
      urls,
      type = "URL_UPDATED",
      source = "webhook",
      triggerGoogle = true,
      triggerIndexNow = true,
    } = body;

    console.log(`🔔 Webhook triggered from: ${source}`);
    console.log(`📊 URLs to index: ${urls.length}`);
    console.log(`📌 Type: ${type}`);

    const results: SubmissionResult[] = [];

    // Submit to IndexNow (Bing, Yandex, etc.)
    if (triggerIndexNow) {
      console.log('📤 Submitting to IndexNow...');
      const indexNowResult = await submitToIndexNow(urls);
      results.push(indexNowResult);
      console.log(`   IndexNow: ${indexNowResult.success ? '✅' : '❌'}`);
    }

    // Submit to Google
    if (triggerGoogle) {
      console.log('📤 Submitting to Google Indexing API...');
      const googleResult = await submitToGoogle(urls, type);
      results.push(googleResult);
      console.log(`   Google: ${googleResult.success ? '✅' : '❌'}`);
    }

    const summary = {
      timestamp: new Date().toISOString(),
      source,
      urlsProcessed: urls.length,
      type,
      results,
      overallSuccess: results.some(r => r.success),
    };

    console.log(`✅ Webhook processing complete`);

    return new Response(
      JSON.stringify(summary, null, 2),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('❌ Webhook error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
