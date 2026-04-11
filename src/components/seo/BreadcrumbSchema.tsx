import { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  id?: string;
}

const BASE_URL = 'https://nineonetwo.co.ke';

/**
 * BreadcrumbSchema — Injects BreadcrumbList structured data for Google rich results.
 * Accepts an array of breadcrumb items. The last item is treated as the current page (no URL needed).
 */
export function BreadcrumbSchema({ items, id = 'breadcrumb-schema' }: BreadcrumbSchemaProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        ...(item.url ? { item: `${BASE_URL}${item.url}` } : {}),
      })),
    };

    let script = document.getElementById(id) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(schema);

    return () => {
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [items, id]);

  return null;
}
