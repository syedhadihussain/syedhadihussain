/**
 * Sitemap Validation Script
 * 
 * Validates all generated sitemaps for:
 * - Valid XML structure
 * - Correct URL formats
 * - No duplicate URLs across sitemaps
 * - Proper sitemap index references
 * - URL accessibility (format check)
 * 
 * Run with: npx tsx scripts/validate-sitemaps.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// ==================== CONFIGURATION ====================

const BASE_URL = "https://syedhadihussain.com";
const SITEMAPS_DIR = "public/sitemaps";
const ROOT_SITEMAP = "public/sitemap.xml";

interface ValidationResult {
  file: string;
  valid: boolean;
  errors: string[];
  warnings: string[];
  urlCount: number;
  sitemapRefs: number;
}

interface ValidationSummary {
  totalFiles: number;
  validFiles: number;
  invalidFiles: number;
  totalUrls: number;
  totalErrors: number;
  totalWarnings: number;
  duplicateUrls: string[];
  results: ValidationResult[];
}

// ==================== XML PARSING HELPERS ====================

function extractUrls(xmlContent: string): string[] {
  const urls: string[] = [];
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xmlContent)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

function extractSitemapRefs(xmlContent: string): string[] {
  const refs: string[] = [];
  // Match sitemap references in sitemapindex
  const sitemapRegex = /<sitemap>\s*<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = sitemapRegex.exec(xmlContent)) !== null) {
    refs.push(match[1].trim());
  }
  return refs;
}

function isValidXml(content: string): { valid: boolean; error?: string } {
  // Basic XML validation checks
  const trimmed = content.trim();
  
  // Check for XML declaration
  if (!trimmed.startsWith('<?xml')) {
    return { valid: false, error: 'Missing XML declaration' };
  }
  
  // Check for proper root element
  if (!trimmed.includes('<urlset') && !trimmed.includes('<sitemapindex')) {
    return { valid: false, error: 'Missing root element (urlset or sitemapindex)' };
  }
  
  // Check for closing tags
  if (trimmed.includes('<urlset') && !trimmed.includes('</urlset>')) {
    return { valid: false, error: 'Missing closing </urlset> tag' };
  }
  if (trimmed.includes('<sitemapindex') && !trimmed.includes('</sitemapindex>')) {
    return { valid: false, error: 'Missing closing </sitemapindex> tag' };
  }
  
  // Check for balanced tags (basic check)
  const openTags = (trimmed.match(/<url>/g) || []).length;
  const closeTags = (trimmed.match(/<\/url>/g) || []).length;
  if (openTags !== closeTags) {
    return { valid: false, error: `Unbalanced <url> tags: ${openTags} open, ${closeTags} close` };
  }
  
  const openSitemaps = (trimmed.match(/<sitemap>/g) || []).length;
  const closeSitemaps = (trimmed.match(/<\/sitemap>/g) || []).length;
  if (openSitemaps !== closeSitemaps) {
    return { valid: false, error: `Unbalanced <sitemap> tags: ${openSitemaps} open, ${closeSitemaps} close` };
  }
  
  return { valid: true };
}

function isValidUrl(url: string): { valid: boolean; error?: string } {
  // Check URL format
  if (!url.startsWith('https://')) {
    return { valid: false, error: `URL must use HTTPS: ${url}` };
  }
  
  if (!url.startsWith(BASE_URL)) {
    return { valid: false, error: `URL must start with ${BASE_URL}: ${url}` };
  }
  
  // Check for common URL issues
  if (url.includes(' ')) {
    return { valid: false, error: `URL contains spaces: ${url}` };
  }
  
  if (url.includes('..')) {
    return { valid: false, error: `URL contains path traversal: ${url}` };
  }
  
  // Check for double slashes (except in https://)
  const pathPart = url.replace('https://', '');
  if (pathPart.includes('//')) {
    return { valid: false, error: `URL contains double slashes: ${url}` };
  }
  
  return { valid: true };
}

// ==================== VALIDATION FUNCTIONS ====================

function validateSitemapFile(filePath: string): ValidationResult {
  const result: ValidationResult = {
    file: filePath,
    valid: true,
    errors: [],
    warnings: [],
    urlCount: 0,
    sitemapRefs: 0
  };
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    result.valid = false;
    result.errors.push(`File does not exist: ${filePath}`);
    return result;
  }
  
  // Read file content
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Validate XML structure
  const xmlValidation = isValidXml(content);
  if (!xmlValidation.valid) {
    result.valid = false;
    result.errors.push(xmlValidation.error!);
    return result;
  }
  
  // Check if it's a sitemap index or urlset
  const isSitemapIndex = content.includes('<sitemapindex');
  
  if (isSitemapIndex) {
    // Validate sitemap index
    const refs = extractSitemapRefs(content);
    result.sitemapRefs = refs.length;
    
    if (refs.length === 0) {
      result.warnings.push('Sitemap index contains no sitemap references');
    }
    
    // Validate each reference URL
    refs.forEach(ref => {
      const urlValidation = isValidUrl(ref);
      if (!urlValidation.valid) {
        result.errors.push(urlValidation.error!);
        result.valid = false;
      }
      
      // Check if referenced sitemap file exists (convert URL to file path)
      const refPath = ref.replace(BASE_URL, 'public');
      if (!fs.existsSync(refPath)) {
        result.warnings.push(`Referenced sitemap does not exist: ${ref}`);
      }
    });
  } else {
    // Validate URL set
    const urls = extractUrls(content);
    result.urlCount = urls.length;
    
    if (urls.length === 0) {
      result.warnings.push('Sitemap contains no URLs');
    }
    
    // Validate each URL
    urls.forEach(url => {
      const urlValidation = isValidUrl(url);
      if (!urlValidation.valid) {
        result.errors.push(urlValidation.error!);
        result.valid = false;
      }
    });
    
    // Check for required elements
    if (!content.includes('<lastmod>')) {
      result.warnings.push('Missing <lastmod> elements');
    }
    if (!content.includes('<changefreq>')) {
      result.warnings.push('Missing <changefreq> elements');
    }
    if (!content.includes('<priority>')) {
      result.warnings.push('Missing <priority> elements');
    }
  }
  
  return result;
}

function findAllSitemaps(dir: string): string[] {
  const sitemaps: string[] = [];
  
  if (!fs.existsSync(dir)) {
    return sitemaps;
  }
  
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      sitemaps.push(...findAllSitemaps(fullPath));
    } else if (item.name.endsWith('.xml')) {
      sitemaps.push(fullPath);
    }
  }
  
  return sitemaps;
}

function collectAllUrls(results: ValidationResult[]): Map<string, string[]> {
  const urlToFiles = new Map<string, string[]>();
  
  for (const result of results) {
    if (!fs.existsSync(result.file)) continue;
    
    const content = fs.readFileSync(result.file, 'utf-8');
    const urls = extractUrls(content);
    
    for (const url of urls) {
      // Skip sitemap URLs (they're references, not page URLs)
      if (url.includes('/sitemaps/') && url.endsWith('.xml')) continue;
      
      const files = urlToFiles.get(url) || [];
      files.push(result.file);
      urlToFiles.set(url, files);
    }
  }
  
  return urlToFiles;
}

// ==================== MAIN VALIDATION ====================

function validateAllSitemaps(): ValidationSummary {
  console.log('🔍 Starting Sitemap Validation...\n');
  
  const summary: ValidationSummary = {
    totalFiles: 0,
    validFiles: 0,
    invalidFiles: 0,
    totalUrls: 0,
    totalErrors: 0,
    totalWarnings: 0,
    duplicateUrls: [],
    results: []
  };
  
  // Find all sitemap files
  const sitemapFiles: string[] = [];
  
  // Add root sitemap
  if (fs.existsSync(ROOT_SITEMAP)) {
    sitemapFiles.push(ROOT_SITEMAP);
  } else {
    console.log('⚠️  Root sitemap not found: ' + ROOT_SITEMAP);
  }
  
  // Add all sitemaps in the sitemaps directory
  sitemapFiles.push(...findAllSitemaps(SITEMAPS_DIR));
  
  summary.totalFiles = sitemapFiles.length;
  
  if (summary.totalFiles === 0) {
    console.log('❌ No sitemap files found!');
    return summary;
  }
  
  console.log(`📁 Found ${summary.totalFiles} sitemap files\n`);
  
  // Validate each sitemap
  for (const file of sitemapFiles) {
    const result = validateSitemapFile(file);
    summary.results.push(result);
    
    if (result.valid) {
      summary.validFiles++;
    } else {
      summary.invalidFiles++;
    }
    
    summary.totalUrls += result.urlCount;
    summary.totalErrors += result.errors.length;
    summary.totalWarnings += result.warnings.length;
    
    // Print result
    const icon = result.valid ? '✅' : '❌';
    const urlInfo = result.urlCount > 0 ? `${result.urlCount} URLs` : '';
    const refInfo = result.sitemapRefs > 0 ? `${result.sitemapRefs} refs` : '';
    const countInfo = [urlInfo, refInfo].filter(Boolean).join(', ');
    
    console.log(`${icon} ${file} ${countInfo ? `(${countInfo})` : ''}`);
    
    if (result.errors.length > 0) {
      result.errors.forEach(err => console.log(`   ❌ ERROR: ${err}`));
    }
    if (result.warnings.length > 0) {
      result.warnings.forEach(warn => console.log(`   ⚠️  WARNING: ${warn}`));
    }
  }
  
  // Check for duplicate URLs across sitemaps
  console.log('\n🔎 Checking for duplicate URLs...');
  const urlToFiles = collectAllUrls(summary.results);
  
  for (const [url, files] of urlToFiles) {
    if (files.length > 1) {
      summary.duplicateUrls.push(url);
      console.log(`   ⚠️  DUPLICATE: ${url}`);
      console.log(`      Found in: ${files.join(', ')}`);
    }
  }
  
  if (summary.duplicateUrls.length === 0) {
    console.log('   ✅ No duplicate URLs found');
  }
  
  // Print summary
  console.log('\n' + '═'.repeat(60));
  console.log('📊 VALIDATION SUMMARY');
  console.log('═'.repeat(60));
  console.log(`Total sitemap files: ${summary.totalFiles}`);
  console.log(`Valid files: ${summary.validFiles}`);
  console.log(`Invalid files: ${summary.invalidFiles}`);
  console.log(`Total page URLs indexed: ${summary.totalUrls}`);
  console.log(`Total errors: ${summary.totalErrors}`);
  console.log(`Total warnings: ${summary.totalWarnings}`);
  console.log(`Duplicate URLs: ${summary.duplicateUrls.length}`);
  console.log('═'.repeat(60));
  
  if (summary.invalidFiles === 0 && summary.duplicateUrls.length === 0) {
    console.log('✅ All sitemaps are valid!');
  } else {
    console.log('❌ Validation failed - please fix the issues above');
  }
  
  return summary;
}

// ==================== URL STRUCTURE VALIDATION ====================

function validateUrlStructure(): void {
  console.log('\n' + '═'.repeat(60));
  console.log('🏗️  URL STRUCTURE VALIDATION');
  console.log('═'.repeat(60));
  
  const expectedPatterns = [
    { pattern: /^https:\/\/syedhadihussain\.com\/en$/, description: 'Homepage', example: 'https://syedhadihussain.com/en' },
    { pattern: /^https:\/\/syedhadihussain\.com\/en\/[a-z]{2}$/, description: 'Country pages', example: 'https://syedhadihussain.com/en/us' },
    { pattern: /^https:\/\/syedhadihussain\.com\/en\/[a-z]{2}\/[a-z0-9-]+$/, description: 'State pages', example: 'https://syedhadihussain.com/en/us/tx' },
    { pattern: /^https:\/\/syedhadihussain\.com\/en\/[a-z]{2}\/[a-z0-9-]+\/local-seo-[a-z0-9-]+$/, description: 'City pages', example: 'https://syedhadihussain.com/en/us/tx/local-seo-houston' },
    { pattern: /^https:\/\/syedhadihussain\.com\/en\/industries\/[a-z-]+$/, description: 'Industry category pages', example: 'https://syedhadihussain.com/en/industries/home-maintenance' },
    { pattern: /^https:\/\/syedhadihussain\.com\/en\/local-seo-services-for-[a-z-]+$/, description: 'Industry pages', example: 'https://syedhadihussain.com/en/local-seo-services-for-plumbers' },
    { pattern: /^https:\/\/syedhadihussain\.com\/en\/blog\/[a-z0-9-]+$/, description: 'Blog posts', example: 'https://syedhadihussain.com/en/blog/complete-local-seo-guide' },
  ];
  
  // Collect all URLs from all sitemaps
  const allUrls = new Set<string>();
  const sitemapFiles = [ROOT_SITEMAP, ...findAllSitemaps(SITEMAPS_DIR)];
  
  for (const file of sitemapFiles) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf-8');
    const urls = extractUrls(content);
    urls.forEach(url => {
      // Skip sitemap references
      if (!url.includes('/sitemaps/')) {
        allUrls.add(url);
      }
    });
  }
  
  console.log(`\nTotal unique page URLs: ${allUrls.size}\n`);
  
  // Categorize URLs
  const categorized: Record<string, string[]> = {};
  const uncategorized: string[] = [];
  
  for (const url of allUrls) {
    let matched = false;
    for (const { pattern, description } of expectedPatterns) {
      if (pattern.test(url)) {
        if (!categorized[description]) {
          categorized[description] = [];
        }
        categorized[description].push(url);
        matched = true;
        break;
      }
    }
    if (!matched) {
      uncategorized.push(url);
    }
  }
  
  // Print categorization
  for (const { description, example } of expectedPatterns) {
    const count = categorized[description]?.length || 0;
    const icon = count > 0 ? '✅' : '⚠️';
    console.log(`${icon} ${description}: ${count} URLs`);
    if (count > 0 && count <= 3) {
      categorized[description].forEach(url => console.log(`   - ${url}`));
    } else if (count > 3) {
      console.log(`   - ${categorized[description][0]}`);
      console.log(`   - ... and ${count - 1} more`);
    }
  }
  
  if (uncategorized.length > 0) {
    console.log(`\n⚠️  Uncategorized URLs: ${uncategorized.length}`);
    uncategorized.slice(0, 10).forEach(url => console.log(`   - ${url}`));
    if (uncategorized.length > 10) {
      console.log(`   ... and ${uncategorized.length - 10} more`);
    }
  }
}

// ==================== MAIN EXECUTION ====================

const summary = validateAllSitemaps();
validateUrlStructure();

// Exit with error code if validation failed
if (summary.invalidFiles > 0 || summary.duplicateUrls.length > 0) {
  process.exit(1);
}
