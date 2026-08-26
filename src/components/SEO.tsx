import { useEffect } from "react";
import { updateSEO } from "../utils/seo";
import type { PageMetadata } from "../utils/seo";

interface SEOProps extends PageMetadata {
  schema?: object;
}

export default function SEO({ title, description, canonicalUrl, keywords, ogImage, schema }: SEOProps) {
  useEffect(() => {
    updateSEO({
      title,
      description,
      canonicalUrl,
      keywords,
      ogImage: ogImage || "https://rcrown.in/favicon.svg" // fallback to brand icon
    });

    // Dynamic JSON-LD injection
    const scriptId = "seo-jsonld-schema";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = scriptId;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else {
      if (scriptTag) {
        scriptTag.remove();
      }
    }

    return () => {
      // Clean up script on page unmount
      const activeScript = document.getElementById(scriptId);
      if (activeScript) {
        activeScript.remove();
      }
    };
  }, [title, description, canonicalUrl, keywords, ogImage, schema]);

  return null; // Declarative logic only
}
