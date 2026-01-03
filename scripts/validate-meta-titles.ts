/**
 * Meta Title Validation Script
 * 
 * Validates all meta titles across country, state, city, and industry pages for:
 * - Uniqueness (no duplicate titles)
 * - Character length (80-90 characters)
 * - Proper format (starts with intent modifier + "Local SEO Services")
 * 
 * Run with: npx tsx scripts/validate-meta-titles.ts
 */

import { 
  generateCountryMetaTitle, 
  generateCountryMetaDescription,
  generateStateMetaTitle,
  generateStateMetaDescription,
  generateCityMetaTitle,
  generateCityMetaDescription,
  generateIndustryMetaTitle,
  generateIndustryMetaDescription
} from '../src/lib/seo-metadata-generator';

import { COUNTRIES } from '../src/lib/countries-config';
import { US_STATES } from '../src/lib/states-config';
import { UK_STATES } from '../src/lib/uk-states-config';
import { AU_STATES } from '../src/lib/au-states-config';
import { CA_STATES } from '../src/lib/ca-states-config';
import { DE_STATES } from '../src/lib/de-states-config';
import { FR_STATES } from '../src/lib/fr-states-config';
import { IT_STATES } from '../src/lib/it-states-config';
import { ES_STATES } from '../src/lib/es-states-config';
import { CITIES } from '../src/lib/cities-config';
import { INDUSTRY_CATEGORIES } from '../src/lib/industries-config';

interface ValidationResult {
  type: 'country' | 'state' | 'city' | 'industry';
  name: string;
  title: string;
  titleLength: number;
  description: string;
  descLength: number;
  issues: string[];
}

interface ValidationSummary {
  totalPages: number;
  titleIssues: {
    tooShort: number;
    tooLong: number;
    duplicates: number;
    missingFormat: number;
  };
  descIssues: {
    tooShort: number;
    tooLong: number;
    duplicates: number;
  };
  allTitles: Map<string, string[]>;
  allDescriptions: Map<string, string[]>;
}

const TITLE_MIN_LENGTH = 50;
const TITLE_MAX_LENGTH = 90;
const DESC_MIN_LENGTH = 150;
const DESC_MAX_LENGTH = 200;

const INTENT_MODIFIERS = [
  "Best", "Top", "Professional", "Trusted", "Expert", "Affordable", "Proven",
  "Leading", "Premier", "Certified", "Elite", "Reliable", "Strategic"
];

function validateTitle(title: string): string[] {
  const issues: string[] = [];
  
  if (title.length < TITLE_MIN_LENGTH) {
    issues.push(`Title too short: ${title.length} chars (min: ${TITLE_MIN_LENGTH})`);
  }
  if (title.length > TITLE_MAX_LENGTH) {
    issues.push(`Title too long: ${title.length} chars (max: ${TITLE_MAX_LENGTH})`);
  }
  
  const startsWithModifier = INTENT_MODIFIERS.some(mod => 
    title.startsWith(mod + " Local SEO Services")
  );
  if (!startsWithModifier) {
    issues.push("Title doesn't start with [Modifier] Local SEO Services");
  }
  
  if (!title.endsWith("– Syed Hadi Hussain")) {
    issues.push("Title doesn't end with '– Syed Hadi Hussain'");
  }
  
  return issues;
}

function validateDescription(desc: string): string[] {
  const issues: string[] = [];
  
  if (desc.length < DESC_MIN_LENGTH) {
    issues.push(`Description too short: ${desc.length} chars (min: ${DESC_MIN_LENGTH})`);
  }
  if (desc.length > DESC_MAX_LENGTH) {
    issues.push(`Description too long: ${desc.length} chars (max: ${DESC_MAX_LENGTH})`);
  }
  
  return issues;
}

function getAllStates(): Array<{ code: string; name: string; countryCode: string; cities: string[] }> {
  const allStates: Array<{ code: string; name: string; countryCode: string; cities: string[] }> = [];
  
  // US States
  US_STATES.forEach(state => {
    allStates.push({
      code: state.code,
      name: state.name,
      countryCode: 'us',
      cities: state.majorCities || []
    });
  });
  
  // UK States
  UK_STATES.forEach(state => {
    allStates.push({
      code: state.code,
      name: state.name,
      countryCode: 'gb',
      cities: state.majorCities || []
    });
  });
  
  // AU States
  AU_STATES.forEach(state => {
    allStates.push({
      code: state.code,
      name: state.name,
      countryCode: 'au',
      cities: state.majorCities || []
    });
  });
  
  // CA States
  CA_STATES.forEach(state => {
    allStates.push({
      code: state.code,
      name: state.name,
      countryCode: 'ca',
      cities: state.majorCities || []
    });
  });
  
  // DE States
  DE_STATES.forEach(state => {
    allStates.push({
      code: state.code,
      name: state.name,
      countryCode: 'de',
      cities: state.majorCities || []
    });
  });
  
  // FR States
  FR_STATES.forEach(state => {
    allStates.push({
      code: state.code,
      name: state.name,
      countryCode: 'fr',
      cities: state.majorCities || []
    });
  });
  
  // IT States
  IT_STATES.forEach(state => {
    allStates.push({
      code: state.code,
      name: state.name,
      countryCode: 'it',
      cities: state.majorCities || []
    });
  });
  
  // ES States
  ES_STATES.forEach(state => {
    allStates.push({
      code: state.code,
      name: state.name,
      countryCode: 'es',
      cities: state.majorCities || []
    });
  });
  
  return allStates;
}

function getAllIndustries(): Array<{ slug: string; name: string }> {
  const industries: Array<{ slug: string; name: string }> = [];
  
  INDUSTRY_CATEGORIES.forEach(category => {
    category.industries.forEach(slug => {
      const name = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      industries.push({ slug, name });
    });
  });
  
  return industries;
}

async function runValidation(): Promise<void> {
  console.log('\n🔍 META TITLE & DESCRIPTION VALIDATION\n');
  console.log('='.repeat(60));
  
  const results: ValidationResult[] = [];
  const summary: ValidationSummary = {
    totalPages: 0,
    titleIssues: { tooShort: 0, tooLong: 0, duplicates: 0, missingFormat: 0 },
    descIssues: { tooShort: 0, tooLong: 0, duplicates: 0 },
    allTitles: new Map(),
    allDescriptions: new Map()
  };
  
  // Validate Countries
  console.log('\n📍 Validating Countries...');
  COUNTRIES.forEach(country => {
    const title = generateCountryMetaTitle(country.name, country.code);
    const description = generateCountryMetaDescription(country.name, country.code, country.statesCount);
    const titleIssues = validateTitle(title);
    const descIssues = validateDescription(description);
    
    results.push({
      type: 'country',
      name: country.name,
      title,
      titleLength: title.length,
      description,
      descLength: description.length,
      issues: [...titleIssues, ...descIssues]
    });
    
    // Track for duplicates
    if (!summary.allTitles.has(title)) {
      summary.allTitles.set(title, []);
    }
    summary.allTitles.get(title)!.push(`Country: ${country.name}`);
    
    if (!summary.allDescriptions.has(description)) {
      summary.allDescriptions.set(description, []);
    }
    summary.allDescriptions.get(description)!.push(`Country: ${country.name}`);
  });
  console.log(`  ✓ ${COUNTRIES.length} countries validated`);
  
  // Validate States
  console.log('\n📍 Validating States...');
  const allStates = getAllStates();
  allStates.forEach(state => {
    const title = generateStateMetaTitle(state.name, state.code);
    const description = generateStateMetaDescription(state.name, state.code, state.cities, state.cities.length);
    const titleIssues = validateTitle(title);
    const descIssues = validateDescription(description);
    
    results.push({
      type: 'state',
      name: `${state.name} (${state.countryCode.toUpperCase()})`,
      title,
      titleLength: title.length,
      description,
      descLength: description.length,
      issues: [...titleIssues, ...descIssues]
    });
    
    if (!summary.allTitles.has(title)) {
      summary.allTitles.set(title, []);
    }
    summary.allTitles.get(title)!.push(`State: ${state.name}`);
    
    if (!summary.allDescriptions.has(description)) {
      summary.allDescriptions.set(description, []);
    }
    summary.allDescriptions.get(description)!.push(`State: ${state.name}`);
  });
  console.log(`  ✓ ${allStates.length} states validated`);
  
  // Validate Cities
  console.log('\n📍 Validating Cities...');
  let cityCount = 0;
  Object.entries(CITIES).forEach(([stateCode, cities]) => {
    const state = allStates.find(s => s.code.toLowerCase() === stateCode.toLowerCase());
    const stateName = state?.name || stateCode;
    const stateAbbr = stateCode.toUpperCase();
    
    cities.forEach(city => {
      const title = generateCityMetaTitle(city.name, stateCode, stateAbbr);
      const description = generateCityMetaDescription(city.name, stateCode, stateName);
      const titleIssues = validateTitle(title);
      const descIssues = validateDescription(description);
      
      results.push({
        type: 'city',
        name: `${city.name}, ${stateAbbr}`,
        title,
        titleLength: title.length,
        description,
        descLength: description.length,
        issues: [...titleIssues, ...descIssues]
      });
      
      if (!summary.allTitles.has(title)) {
        summary.allTitles.set(title, []);
      }
      summary.allTitles.get(title)!.push(`City: ${city.name}, ${stateAbbr}`);
      
      if (!summary.allDescriptions.has(description)) {
        summary.allDescriptions.set(description, []);
      }
      summary.allDescriptions.get(description)!.push(`City: ${city.name}, ${stateAbbr}`);
      
      cityCount++;
    });
  });
  console.log(`  ✓ ${cityCount} cities validated`);
  
  // Validate Industries
  console.log('\n📍 Validating Industries...');
  const industries = getAllIndustries();
  industries.forEach(industry => {
    const title = generateIndustryMetaTitle(industry.name, industry.slug);
    const description = generateIndustryMetaDescription(industry.name, industry.slug);
    const titleIssues = validateTitle(title);
    const descIssues = validateDescription(description);
    
    results.push({
      type: 'industry',
      name: industry.name,
      title,
      titleLength: title.length,
      description,
      descLength: description.length,
      issues: [...titleIssues, ...descIssues]
    });
    
    if (!summary.allTitles.has(title)) {
      summary.allTitles.set(title, []);
    }
    summary.allTitles.get(title)!.push(`Industry: ${industry.name}`);
    
    if (!summary.allDescriptions.has(description)) {
      summary.allDescriptions.set(description, []);
    }
    summary.allDescriptions.get(description)!.push(`Industry: ${industry.name}`);
  });
  console.log(`  ✓ ${industries.length} industries validated`);
  
  // Calculate summary
  summary.totalPages = results.length;
  
  // Count issues
  results.forEach(result => {
    result.issues.forEach(issue => {
      if (issue.includes('Title too short')) summary.titleIssues.tooShort++;
      if (issue.includes('Title too long')) summary.titleIssues.tooLong++;
      if (issue.includes("doesn't start with")) summary.titleIssues.missingFormat++;
      if (issue.includes("doesn't end with")) summary.titleIssues.missingFormat++;
      if (issue.includes('Description too short')) summary.descIssues.tooShort++;
      if (issue.includes('Description too long')) summary.descIssues.tooLong++;
    });
  });
  
  // Count duplicates
  summary.allTitles.forEach((pages, title) => {
    if (pages.length > 1) {
      summary.titleIssues.duplicates += pages.length - 1;
    }
  });
  
  summary.allDescriptions.forEach((pages, desc) => {
    if (pages.length > 1) {
      summary.descIssues.duplicates += pages.length - 1;
    }
  });
  
  // Print Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 VALIDATION SUMMARY\n');
  console.log(`Total Pages Validated: ${summary.totalPages}`);
  console.log(`  - Countries: ${COUNTRIES.length}`);
  console.log(`  - States: ${allStates.length}`);
  console.log(`  - Cities: ${cityCount}`);
  console.log(`  - Industries: ${industries.length}`);
  
  console.log('\n📝 TITLE ISSUES:');
  console.log(`  - Too Short (<${TITLE_MIN_LENGTH} chars): ${summary.titleIssues.tooShort}`);
  console.log(`  - Too Long (>${TITLE_MAX_LENGTH} chars): ${summary.titleIssues.tooLong}`);
  console.log(`  - Missing Format: ${summary.titleIssues.missingFormat}`);
  console.log(`  - Duplicates: ${summary.titleIssues.duplicates}`);
  
  console.log('\n📝 DESCRIPTION ISSUES:');
  console.log(`  - Too Short (<${DESC_MIN_LENGTH} chars): ${summary.descIssues.tooShort}`);
  console.log(`  - Too Long (>${DESC_MAX_LENGTH} chars): ${summary.descIssues.tooLong}`);
  console.log(`  - Duplicates: ${summary.descIssues.duplicates}`);
  
  // Print duplicate titles
  const duplicateTitles = Array.from(summary.allTitles.entries()).filter(([, pages]) => pages.length > 1);
  if (duplicateTitles.length > 0) {
    console.log('\n⚠️  DUPLICATE TITLES FOUND:');
    duplicateTitles.slice(0, 10).forEach(([title, pages]) => {
      console.log(`\n  "${title.substring(0, 60)}..."`);
      pages.forEach(page => console.log(`    - ${page}`));
    });
    if (duplicateTitles.length > 10) {
      console.log(`\n  ... and ${duplicateTitles.length - 10} more duplicate groups`);
    }
  }
  
  // Print pages with issues
  const pagesWithIssues = results.filter(r => r.issues.length > 0);
  if (pagesWithIssues.length > 0) {
    console.log('\n⚠️  PAGES WITH ISSUES:');
    pagesWithIssues.slice(0, 20).forEach(result => {
      console.log(`\n  ${result.type.toUpperCase()}: ${result.name}`);
      console.log(`  Title (${result.titleLength} chars): ${result.title.substring(0, 70)}...`);
      result.issues.forEach(issue => console.log(`    ❌ ${issue}`));
    });
    if (pagesWithIssues.length > 20) {
      console.log(`\n  ... and ${pagesWithIssues.length - 20} more pages with issues`);
    }
  }
  
  // Final status
  const totalIssues = 
    summary.titleIssues.tooShort + 
    summary.titleIssues.tooLong + 
    summary.titleIssues.missingFormat + 
    summary.titleIssues.duplicates +
    summary.descIssues.tooShort + 
    summary.descIssues.tooLong + 
    summary.descIssues.duplicates;
  
  console.log('\n' + '='.repeat(60));
  if (totalIssues === 0) {
    console.log('✅ ALL VALIDATIONS PASSED! No issues found.\n');
  } else {
    console.log(`❌ VALIDATION COMPLETE: ${totalIssues} total issues found.\n`);
  }
  
  // Sample outputs
  console.log('\n📋 SAMPLE META TITLES:');
  const samples = results.filter((_, i) => i % Math.floor(results.length / 8) === 0).slice(0, 8);
  samples.forEach(sample => {
    console.log(`\n  [${sample.type.toUpperCase()}] ${sample.name}`);
    console.log(`  Title (${sample.titleLength} chars): ${sample.title}`);
    console.log(`  Desc (${sample.descLength} chars): ${sample.description.substring(0, 80)}...`);
  });
}

runValidation().catch(console.error);
