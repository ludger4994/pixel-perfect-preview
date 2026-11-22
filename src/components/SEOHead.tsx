import { useEffect } from 'react';

export default function SEOHead({ title, description, canonical }: { title: string; description: string; canonical: string }) {
  useEffect(() => {
    document.title = title;
    for (const [attribute, name, content] of [['name', 'description', description], ['property', 'og:title', title], ['property', 'og:description', description]]) {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attribute, name); document.head.appendChild(tag); }
      tag.content = content;
    }
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
  }, [title, description, canonical]);
  return null;
}