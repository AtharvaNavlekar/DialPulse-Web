import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  robots?: string;
}

export function useSEO({ title, description, ogType = 'website', canonical, robots }: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph metadata
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
    
    let ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute('content', ogType);
    }

    // Update robots meta if provided
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (robots) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', robots);
    } else if (metaRobots) {
      metaRobots.removeAttribute('content');
    }

    // Update or remove canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    } else if (linkCanonical) {
      linkCanonical.remove();
    }
  }, [title, description, ogType, canonical, robots]);
}
