import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'PDF library, ebooks, reports, and downloadable resources',
      description: 'Discover curated PDFs, ebooks, reports, research papers, guides, manuals, templates, and study materials.',
      openGraphTitle: 'Premium PDF Library and Downloadable Resources',
      openGraphDescription: 'Browse a curated digital library of PDFs, reports, guides, manuals, templates, and learning resources.',
      keywords: ['pdf library', 'downloadable documents', 'ebooks', 'research papers', 'business reports', 'study materials'],
    },
    hero: {
      badge: 'Curated PDF library',
      title: ['Discover knowledge in', 'downloadable document form.'],
      description: 'Browse high-quality PDFs, ebooks, research papers, manuals, reports, templates, and study resources through a fast, trustworthy digital library.',
      primaryCta: { label: 'Browse PDF library', href: '/pdf' },
      secondaryCta: { label: 'Upload a PDF', href: '/create' },
      searchPlaceholder: 'Search PDFs, ebooks, reports, guides, templates',
      focusLabel: 'Library focus',
      featureCardBadge: 'featured document shelf',
      featureCardTitle: 'A premium reading shelf for serious PDFs and downloadable resources.',
      featureCardDescription: 'Every document is presented with clear metadata, categories, quick actions, and readable previews.',
    },
    intro: {
      badge: 'About the library',
      title: 'Built for researchers, students, professionals, and lifelong learners.',
      paragraphs: [
        'This platform organizes PDFs, ebooks, reports, manuals, templates, whitepapers, and study materials into a clean document discovery experience.',
        'Instead of burying downloads behind cluttered pages, each resource is presented with useful context, category signals, and direct actions.',
        'Whether someone starts with a research paper, business report, workbook, or guide, they can keep discovering related documents without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with strong PDF discovery paths.',
        'Curated sections for ebooks, reports, guides, manuals, and templates.',
        'Clean archive browsing with document metadata and quick actions.',
        'Fast, polished interactions that keep the library easy to scan.',
      ],
      primaryLink: { label: 'Browse PDFs', href: '/pdf' },
      secondaryLink: { label: 'Search library', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Build your reading list from a focused PDF library.',
      description: 'Move between educational resources, research collections, professional reports, and downloadable templates through one polished document experience.',
      primaryCta: { label: 'Browse PDFs', href: '/pdf' },
      secondaryCta: { label: 'Contact Library Team', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest downloadable resources in this section.',
    },
  },
  about: {
    badge: 'Our Library',
    title: 'A clearer way to discover useful PDFs.',
    description: `${slot4BrandConfig.siteName} helps people find digital documents, ebooks, reports, guides, manuals, research papers, templates, and learning resources without clutter.`,
    paragraphs: [
      'We believe a digital library should feel organized, trustworthy, and fast. Every resource page is designed to make the document, download path, and related materials easy to understand.',
      'The platform supports learners, researchers, founders, teams, and professionals who need practical PDFs they can preview, save, and download.',
    ],
    values: [
      {
        title: 'Document-first discovery',
        description: 'We prioritize clear titles, categories, previews, and metadata so people can evaluate a PDF quickly.',
      },
      {
        title: 'Curated resource paths',
        description: 'Reports, ebooks, templates, guides, manuals, and research collections stay connected through related-document browsing.',
      },
      {
        title: 'Clean and trustworthy',
        description: 'We focus on readable forms, consistent layouts, and calm visual hierarchy so downloading documents feels safe and professional.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Contact the document library team.',
    description: 'Ask about PDF submissions, document updates, research collections, bulk uploads, takedown requests, partnerships, or help finding a specific resource.',
    formTitle: 'Send a library request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search PDFs, ebooks, reports, guides, manuals, templates, and research resources across the library.',
    },
    hero: {
      badge: 'Search the PDF library',
      title: 'Find PDFs, reports, guides, and templates faster.',
      description: 'Use keywords, categories, and document types to discover downloadable resources from every active section of the library.',
      placeholder: 'Search by title, author, topic, document type',
    },
    resultsTitle: 'Latest searchable documents',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Upload or submit a new PDF, ebook, report, guide, manual, or template.',
    },
    locked: {
      badge: 'Contributor access',
      title: 'Login to upload PDF resources.',
      description: 'Use your account to open the upload workspace and submit PDFs, ebooks, reports, guides, manuals, templates, or study materials.',
    },
    hero: {
      badge: 'PDF upload workspace',
      title: 'Submit a polished document resource.',
      description: 'Add a title, category, source link, cover image, document notes, and a helpful description so readers can evaluate the PDF before downloading.',
    },
    formTitle: 'Document details',
    submitLabel: 'Submit resource',
    successTitle: 'Document submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login to access PDF library contributor tools.',
      badge: 'Library member access',
      title: 'Welcome back to your document library.',
      description: 'Login to continue browsing, uploading resources, and managing PDF submissions from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Create a PDF library account.',
      badge: 'Library access',
      title: 'Create your account and start building the library.',
      description: 'Create an account to upload PDF resources, submit document details, and keep your contribution workflow organized.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
