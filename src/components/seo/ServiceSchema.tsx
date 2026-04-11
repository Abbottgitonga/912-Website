import { useEffect } from 'react';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string[];
  id?: string;
}

const BASE_URL = 'https://nineonetwo.co.ke';

/**
 * ServiceSchema — Injects Service structured data so Google understands
 * the specific services offered by 912 on each service page.
 */
export function ServiceSchema({
  name,
  description,
  url,
  image,
  areaServed = ['Kenya', 'Senegal', 'Rwanda', 'Ghana', 'DR Congo', 'Angola', 'Burkina Faso', 'Benin', 'Mali', 'Burundi'],
  id = 'service-schema',
}: ServiceSchemaProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      description,
      url: `${BASE_URL}${url}`,
      ...(image ? { image: `${BASE_URL}${image}` } : {}),
      provider: {
        '@type': 'Organization',
        name: 'Nine One Two (912)',
        url: BASE_URL,
        logo: `${BASE_URL}/images/logo-912.png`,
      },
      areaServed: areaServed.map((country) => ({
        '@type': 'Country',
        name: country,
      })),
      serviceType: 'Managed IT Services',
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
  }, [name, description, url, image, areaServed, id]);

  return null;
}
