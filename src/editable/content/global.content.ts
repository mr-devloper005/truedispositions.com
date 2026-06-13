import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Curated PDF library',
    primaryLinks: [
      { label: 'PDF Library', href: '/pdf' },
      { label: 'Search', href: '/search' },
      { label: 'Upload PDF', href: '/create' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Browse PDFs', href: '/pdf' },
      secondary: { label: 'Upload', href: '/create' },
    },
  },
  footer: {
    tagline: 'PDFs, ebooks, reports, and resources',
    description: 'A curated document library for downloadable PDFs, guides, reports, manuals, whitepapers, research papers, study materials, and templates.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'PDF Library', href: '/pdf' },
          { label: 'Search Documents', href: '/search' },
          { label: 'Upload PDF', href: '/create' },
          { label: 'About Library', href: '/about' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean PDF discovery and trustworthy downloads.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
