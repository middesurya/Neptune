import { projects } from '@/lib/projects';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://neptune.suryamidde.com';

/**
 * Person schema for the portfolio owner.
 * Note: JSON-LD content is static/trusted data, not user input.
 */
export function PersonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Surya Midde',
    url: siteUrl,
    image: `${siteUrl}/og-image.svg`,
    sameAs: [
      'https://github.com/middesurya',
      'https://linkedin.com/in/surya-midde',
    ],
    jobTitle: 'AI/ML Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Self-employed',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Large Language Models',
      'RAG Pipelines',
      'Multi-Agent Systems',
      'Python',
      'TypeScript',
      'React',
      'Next.js',
    ],
    description:
      'AI/ML Engineer specializing in production-grade RAG pipelines, multi-agent systems, and LLM applications.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Website schema for the portfolio.
 */
export function WebsiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Neptune',
    alternateName: 'Neptune AI Portfolio',
    url: siteUrl,
    description:
      'Dark sci-fi AI portfolio showcasing production-grade RAG pipelines, multi-agent systems, and LLM applications.',
    author: {
      '@type': 'Person',
      name: 'Surya Midde',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/projects?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Portfolio/Creative Work schema for the projects collection.
 */
export function PortfolioJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Projects Portfolio',
    description:
      'A collection of production-grade AI systems, from RAG pipelines to multi-agent orchestration platforms.',
    url: `${siteUrl}/projects`,
    author: {
      '@type': 'Person',
      name: 'Surya Midde',
    },
    hasPart: projects.map((project) => ({
      '@type': 'SoftwareApplication',
      name: project.title,
      description: project.description,
      applicationCategory: 'AI/ML Application',
      operatingSystem: 'Web',
      author: {
        '@type': 'Person',
        name: 'Surya Midde',
      },
      ...(project.liveUrl && { url: project.liveUrl }),
      ...(project.githubUrl && {
        codeRepository: project.githubUrl,
      }),
      keywords: project.tech.join(', '),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * BreadcrumbList schema for navigation.
 */
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Combined JSON-LD for the homepage.
 */
export function HomePageJsonLd() {
  return (
    <>
      <PersonJsonLd />
      <WebsiteJsonLd />
    </>
  );
}
