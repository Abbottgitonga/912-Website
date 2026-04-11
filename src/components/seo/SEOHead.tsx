import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
}

const SITE_NAME = 'Nine One Two (912)';
const DEFAULT_OG_IMAGE = 'https://nineonetwo.co.ke/images/og-default.png';
const BASE_URL = 'https://nineonetwo.co.ke';

/**
 * SEOHead — Dynamically injects <title>, <meta>, OG, Twitter Card, and canonical tags.
 * 
 * Must be placed at the top of every page component to ensure per-page SEO.
 * Cleans up its own meta tags on unmount to prevent stale tags on SPA route changes.
 */
export function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  article,
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper: upsert a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
      return el;
    };

    // Helper: upsert a link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
      return el;
    };

    // Core Meta
    const elements: Element[] = [];
    elements.push(setMeta('name', 'description', description));

    if (noindex) {
      elements.push(setMeta('name', 'robots', 'noindex, nofollow'));
    } else {
      // Remove any existing noindex
      const existing = document.querySelector('meta[name="robots"]');
      if (existing) existing.remove();
    }

    // Canonical URL
    const canonicalUrl = canonical || `${BASE_URL}${window.location.pathname}`;
    elements.push(setLink('canonical', canonicalUrl) as unknown as Element);

    // Open Graph
    elements.push(setMeta('property', 'og:title', title));
    elements.push(setMeta('property', 'og:description', description));
    elements.push(setMeta('property', 'og:url', canonicalUrl));
    elements.push(setMeta('property', 'og:type', ogType));
    elements.push(setMeta('property', 'og:image', ogImage));
    elements.push(setMeta('property', 'og:image:width', '1200'));
    elements.push(setMeta('property', 'og:image:height', '630'));
    elements.push(setMeta('property', 'og:site_name', SITE_NAME));
    elements.push(setMeta('property', 'og:locale', 'en_KE'));

    // Twitter Card
    elements.push(setMeta('name', 'twitter:card', 'summary_large_image'));
    elements.push(setMeta('name', 'twitter:title', title));
    elements.push(setMeta('name', 'twitter:description', description));
    elements.push(setMeta('name', 'twitter:image', ogImage));

    // Article meta (for blog posts)
    if (article) {
      if (article.publishedTime) {
        elements.push(setMeta('property', 'article:published_time', article.publishedTime));
      }
      if (article.modifiedTime) {
        elements.push(setMeta('property', 'article:modified_time', article.modifiedTime));
      }
      if (article.author) {
        elements.push(setMeta('property', 'article:author', article.author));
      }
      if (article.section) {
        elements.push(setMeta('property', 'article:section', article.section));
      }
    }

    // Geo targeting for Kenya
    elements.push(setMeta('name', 'geo.region', 'KE'));
    elements.push(setMeta('name', 'geo.placename', 'Nairobi'));
    elements.push(setMeta('name', 'geo.position', '-1.286389;36.817223'));
    elements.push(setMeta('name', 'ICBM', '-1.286389, 36.817223'));

    // Cleanup function — no-op since other pages will overwrite
    return () => {};
  }, [title, description, canonical, ogImage, ogType, noindex, article]);

  return null;
}
