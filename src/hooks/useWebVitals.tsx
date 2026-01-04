import { useEffect, useCallback } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Thresholds based on Google's Core Web Vitals recommendations
const thresholds = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
};

const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const threshold = thresholds[name as keyof typeof thresholds];
  if (!threshold) return 'good';
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
};

export const useWebVitals = (onReport?: (metric: WebVitalsMetric) => void) => {
  const reportMetric = useCallback((metric: WebVitalsMetric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      const color = metric.rating === 'good' ? '🟢' : metric.rating === 'needs-improvement' ? '🟡' : '🔴';
      console.log(`${color} ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`);
    }
    
    // Call custom reporter if provided
    onReport?.(metric);
  }, [onReport]);

  useEffect(() => {
    // Largest Contentful Paint (LCP)
    const observeLCP = () => {
      if (!('PerformanceObserver' in window)) return;
      
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
          
          if (lastEntry) {
            const value = lastEntry.startTime;
            reportMetric({
              name: 'LCP',
              value,
              rating: getRating('LCP', value),
              delta: value,
              id: `lcp-${Date.now()}`,
            });
          }
        });
        
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
        return observer;
      } catch (e) {
        return null;
      }
    };

    // First Input Delay (FID) / Interaction to Next Paint (INP)
    const observeFID = () => {
      if (!('PerformanceObserver' in window)) return;
      
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { processingStart?: number; startTime: number }) => {
            if (entry.processingStart) {
              const value = entry.processingStart - entry.startTime;
              reportMetric({
                name: 'FID',
                value,
                rating: getRating('FID', value),
                delta: value,
                id: `fid-${Date.now()}`,
              });
            }
          });
        });
        
        observer.observe({ type: 'first-input', buffered: true });
        return observer;
      } catch (e) {
        return null;
      }
    };

    // Cumulative Layout Shift (CLS)
    const observeCLS = () => {
      if (!('PerformanceObserver' in window)) return;
      
      let clsValue = 0;
      let sessionValue = 0;
      let sessionEntries: PerformanceEntry[] = [];
      
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries() as (PerformanceEntry & { hadRecentInput?: boolean; value?: number })[];
          
          entries.forEach((entry) => {
            if (!entry.hadRecentInput && entry.value) {
              const firstSessionEntry = sessionEntries[0] as PerformanceEntry | undefined;
              const lastSessionEntry = sessionEntries[sessionEntries.length - 1] as PerformanceEntry | undefined;
              
              if (
                sessionValue &&
                firstSessionEntry &&
                lastSessionEntry &&
                entry.startTime - lastSessionEntry.startTime < 1000 &&
                entry.startTime - firstSessionEntry.startTime < 5000
              ) {
                sessionValue += entry.value;
                sessionEntries.push(entry);
              } else {
                sessionValue = entry.value;
                sessionEntries = [entry];
              }
              
              if (sessionValue > clsValue) {
                clsValue = sessionValue;
                reportMetric({
                  name: 'CLS',
                  value: clsValue,
                  rating: getRating('CLS', clsValue),
                  delta: entry.value,
                  id: `cls-${Date.now()}`,
                });
              }
            }
          });
        });
        
        observer.observe({ type: 'layout-shift', buffered: true });
        return observer;
      } catch (e) {
        return null;
      }
    };

    // First Contentful Paint (FCP)
    const observeFCP = () => {
      if (!('PerformanceObserver' in window)) return;
      
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              const value = entry.startTime;
              reportMetric({
                name: 'FCP',
                value,
                rating: getRating('FCP', value),
                delta: value,
                id: `fcp-${Date.now()}`,
              });
            }
          });
        });
        
        observer.observe({ type: 'paint', buffered: true });
        return observer;
      } catch (e) {
        return null;
      }
    };

    // Time to First Byte (TTFB)
    const measureTTFB = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        if (navigation) {
          const value = navigation.responseStart - navigation.requestStart;
          reportMetric({
            name: 'TTFB',
            value,
            rating: getRating('TTFB', value),
            delta: value,
            id: `ttfb-${Date.now()}`,
          });
        }
      } catch (e) {
        // Ignore errors
      }
    };

    // Start observing
    const lcpObserver = observeLCP();
    const fidObserver = observeFID();
    const clsObserver = observeCLS();
    const fcpObserver = observeFCP();
    
    // Measure TTFB after a short delay to ensure navigation timing is available
    const ttfbTimeout = setTimeout(measureTTFB, 0);

    return () => {
      lcpObserver?.disconnect();
      fidObserver?.disconnect();
      clsObserver?.disconnect();
      fcpObserver?.disconnect();
      clearTimeout(ttfbTimeout);
    };
  }, [reportMetric]);
};

export default useWebVitals;
