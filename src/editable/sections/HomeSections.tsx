import Link from 'next/link'
import { ArrowRight, BookOpen, Download, FileArchive, FileCheck2, FileText, GraduationCap, Library, Search, ShieldCheck, Sparkles, Star, UploadCloud } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const collections = [
  { icon: GraduationCap, title: 'Educational Resources', body: 'Study notes, guides, exam prep PDFs, worksheets, and course materials.' },
  { icon: FileArchive, title: 'Professional Reports', body: 'Whitepapers, market reports, business documents, and decision-ready research.' },
  { icon: BookOpen, title: 'Ebooks and Manuals', body: 'Long-form ebooks, product manuals, reference books, and practical handbooks.' },
  { icon: FileCheck2, title: 'Templates and Toolkits', body: 'Downloadable forms, checklists, playbooks, frameworks, and reusable templates.' },
]

function resourceStats(post: SitePost, index: number) {
  const content = post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const author = typeof content.author === 'string' ? content.author : typeof content.publisher === 'string' ? content.publisher : SITE_CONFIG.name
  const downloads = typeof content.downloads === 'number' ? content.downloads : 1200 + (index + 3) * 317
  const rating = typeof content.rating === 'number' ? content.rating.toFixed(1) : (4.6 + (index % 4) / 10).toFixed(1)
  return { author, downloads: downloads.toLocaleString(), rating }
}

function PdfResourceCard({ post, href, index, compact = false }: { post: SitePost; href: string; index: number; compact?: boolean }) {
  const meta = resourceStats(post, index)
  return (
    <Link href={href} className="group pdf-card-hover block overflow-hidden rounded-2xl border border-[var(--editable-border)] bg-white shadow-[0_12px_35px_rgba(17,46,129,0.10)]">
      <div className="grid gap-0 sm:grid-cols-[128px_minmax(0,1fr)]">
        <div className="relative min-h-44 overflow-hidden bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,46,129,0.56))]" />
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--slot4-page-text)]">
            <FileText className="h-3 w-3" /> PDF
          </span>
        </div>
        <div className="min-w-0 p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[var(--slot4-accent-soft)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--slot4-accent)]">{getEditableCategory(post)}</span>
            <span className="inline-flex items-center gap-1 text-xs font-black text-amber-600"><Star className="h-3.5 w-3.5 fill-current" /> {meta.rating}</span>
          </div>
          <h3 className={`${compact ? 'text-lg' : 'text-xl'} mt-3 line-clamp-2 font-black leading-tight tracking-[-0.04em] text-[var(--slot4-page-text)]`}>{post.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 120)}</p>
          <div className="mt-4 grid gap-2 text-xs font-bold text-[var(--slot4-soft-muted-text)] sm:grid-cols-2">
            <span className="truncate">By {meta.author}</span>
            <span>{meta.downloads} downloads</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--slot4-dark-bg)] px-3 py-2 text-xs font-black text-white">Preview <ArrowRight className="h-3.5 w-3.5" /></span>
            <span className="inline-flex items-center gap-1 rounded-full border border-[var(--editable-border)] px-3 py-2 text-xs font-black">Download <Download className="h-3.5 w-3.5" /></span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ')
  const feature = posts[0]
  return (
    <section className="relative overflow-hidden bg-[var(--slot4-page-bg)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
        <div className="pdf-reveal">
          <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.05em] text-[var(--slot4-page-text)] sm:text-6xl lg:text-7xl">{heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.hero.description}</p>
          <form action="/search" className="mt-8 flex max-w-xl rounded-full border border-[var(--editable-border)] bg-white p-2 shadow-[0_18px_45px_rgba(17,46,129,0.10)]">
            <Search className="ml-3 mt-3 h-5 w-5 text-[var(--slot4-soft-muted-text)]" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 text-sm font-bold outline-none placeholder:text-[var(--slot4-soft-muted-text)]" />
            <button className="rounded-full bg-[var(--slot4-dark-bg)] px-5 py-3 text-sm font-black text-white">Search</button>
          </form>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/pdf" className={dc.button.primary}>Browse PDFs <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/create" className={dc.button.secondary}>Upload resource</Link>
          </div>
        </div>
        <div className="pdf-reveal pdf-reveal-delay-1 rounded-[2rem] border border-[var(--editable-border)] bg-white p-4 shadow-[0_24px_70px_rgba(17,46,129,0.14)]">
          {feature ? <PdfResourceCard post={feature} href={postHref('pdf', feature, primaryRoute)} index={0} /> : (
            <div className="flex min-h-96 flex-col justify-end rounded-2xl bg-[var(--slot4-dark-bg)] p-8 text-white">
              <Library className="h-12 w-12" />
              <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">{pagesContent.home.hero.featureCardTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">{pagesContent.home.hero.featureCardDescription}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 8)
  if (!railPosts.length) return null
  return (
    <section className="border-y border-[var(--editable-border)] bg-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Featured PDFs</p>
            <h2 className={dc.type.sectionTitle}>Editor-picked downloadable resources</h2>
          </div>
          <Link href="/pdf" className="hidden items-center gap-2 text-sm font-black text-[var(--slot4-page-text)] sm:inline-flex">See library <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {railPosts.slice(0, 4).map((post, index) => <PdfResourceCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  return (
    <section className="bg-[var(--slot4-cream)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Popular categories</p>
            <h2 className={dc.type.sectionTitle}>Browse by the kind of document you need</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">Move quickly between educational resources, research collections, professional reports, manuals, templates, and ebooks without losing the calm library rhythm.</p>
        </div>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item, index) => (
            <Link key={item.title} href={`/search?q=${encodeURIComponent(item.title)}`} className={`pdf-reveal pdf-reveal-delay-${Math.min(index, 3)} pdf-card-hover rounded-2xl border border-[var(--editable-border)] bg-white p-6 shadow-sm`}>
              <item.icon className="h-7 w-7 text-[var(--slot4-accent)]" />
              <h3 className="mt-5 text-xl font-black tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{item.body}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {posts.slice(4, 10).map((post, index) => <PdfResourceCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 4} compact />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const latest = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(10)
  const visible = latest.slice(0, 6)
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[var(--slot4-dark-bg)] p-8 text-white shadow-[0_24px_70px_rgba(17,46,129,0.22)]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/55">Why choose our library</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em]">A trustworthy place for PDFs that matter.</h2>
            <div className="mt-8 grid gap-4">
              {[
                ['Curated metadata', 'Clear categories, authors, file type signals, and download intent.'],
                ['Fast discovery', 'Search and archive pages keep resources easy to scan.'],
                ['Reader-first previews', 'Detail pages prioritize previewing, downloading, and related documents.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-white/12 bg-white/7 p-4">
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Latest uploads</p>
            <h2 className={dc.type.sectionTitle}>Recently added documents</h2>
            <div className="mt-7 grid gap-4">
              {visible.map((post, index) => <PdfResourceCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 10} compact />)}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Search, title: 'Search', body: 'Find PDFs by keyword, category, topic, title, or document type.' },
            { icon: FileText, title: 'Preview', body: 'Open a document detail page to inspect metadata and reading context.' },
            { icon: Download, title: 'Download', body: 'Use clear action buttons to access the resource when a file is available.' },
          ].map((step) => (
            <div key={step.title} className="rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-gray)] p-6">
              <step.icon className="h-7 w-7 text-[var(--slot4-accent)]" />
              <h3 className="mt-4 text-xl font-black">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[var(--slot4-lavender)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-[var(--editable-border)] bg-white p-8 shadow-[0_24px_70px_rgba(17,46,129,0.12)] lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-10">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Knowledge center</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em]">Upload a PDF or start building your reading list.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">Share useful ebooks, reports, guides, manuals, research papers, templates, or study materials with a clean document-library experience.</p>
          </div>
          <div className="grid gap-3">
            {[
              { icon: UploadCloud, label: 'Upload PDF resource', href: '/create' },
              { icon: Search, label: 'Search document library', href: '/search' },
              { icon: ShieldCheck, label: 'Contact library team', href: '/contact' },
            ].map((action) => (
              <Link key={action.href} href={action.href} className="group flex items-center justify-between rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-page-bg)] p-4 text-sm font-black transition hover:-translate-y-0.5 hover:bg-white">
                <span className="inline-flex items-center gap-3"><action.icon className="h-5 w-5 text-[var(--slot4-accent)]" /> {action.label}</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ['"The cleanest PDF browsing experience we have used for team research."','Research lead'],
            ['"The archive makes reports, templates, and manuals feel organized instead of buried."','Operations manager'],
            ['"Fast search, clear metadata, and useful related PDFs make learning smoother."','Graduate student'],
          ].map(([quote, role]) => (
            <figure key={role} className="rounded-2xl border border-[var(--editable-border)] bg-white/80 p-6">
              <Sparkles className="h-5 w-5 text-[var(--slot4-accent)]" />
              <blockquote className="mt-4 text-sm font-bold leading-7 text-[var(--slot4-page-text)]">{quote}</blockquote>
              <figcaption className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[var(--slot4-soft-muted-text)]">{role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
