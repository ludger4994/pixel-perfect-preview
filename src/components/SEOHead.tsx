import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
  breadcrumbs?: BreadcrumbItem[];
}

const SEOHead = ({ title, description, canonical, schema, breadcrumbs }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // JSON-LD schema
    let script = document.getElementById("page-schema") as HTMLScriptElement | null;
    if (schema) {
      if (!script) {
        script = document.createElement("script");
        script.id = "page-schema";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    // BreadcrumbList schema
    let bcScript = document.getElementById("breadcrumb-schema") as HTMLScriptElement | null;
    if (breadcrumbs && breadcrumbs.length > 0) {
      if (!bcScript) {
        bcScript = document.createElement("script");
        bcScript.id = "breadcrumb-schema";
        bcScript.type = "application/ld+json";
        document.head.appendChild(bcScript);
      }
      bcScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": item.name,
          "item": `https://photoboothlegends.com${item.href}`,
        })),
      });
    }

    return () => {
      const s = document.getElementById("page-schema");
      if (s) s.remove();
      const bc = document.getElementById("breadcrumb-schema");
      if (bc) bc.remove();
    };
  }, [title, description, canonical, schema, breadcrumbs]);

  return null;
};

export default SEOHead;
