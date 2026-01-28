import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://neptune.suryamidde.com';

/**
 * Generates sitemap.xml for better SEO crawling.
 * Includes all static pages and project entries.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/triquetra`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Individual project pages (if they exist in the future)
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/projects#${project.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
