import React, { useEffect } from 'react';

interface SchemaManagerProps {
  schema: Record<string, any>;
  id?: string;
}

/**
 * Dynamically injects JSON-LD Structured Data into the Document Head
 * for Answer Engine Optimization (AEO) and Google Rich Snippet parsing.
 */
export function SchemaManager({ schema, id = "global-schema" }: SchemaManagerProps) {
  useEffect(() => {
    // Check if the script exists
    let script = document.getElementById(id) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      document.head.appendChild(script);
    }
    
    script.innerHTML = JSON.stringify(schema);
    
    return () => {
      // Cleanup on unmount to prevent duplicate schemas on hydration/routing
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [schema, id]);

  return null;
}
