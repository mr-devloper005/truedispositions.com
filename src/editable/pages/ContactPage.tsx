'use client'

import { FileCheck2, Library, Mail, ShieldCheck, UploadCloud } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: UploadCloud, title: 'PDF submissions', body: 'Send questions about uploading ebooks, reports, manuals, templates, or study materials.' },
  { icon: FileCheck2, title: 'Document corrections', body: 'Request title, author, category, file, tag, or metadata updates for an existing PDF.' },
  { icon: Library, title: 'Collection partnerships', body: 'Build research shelves, educational resource hubs, and professional document collections.' },
  { icon: ShieldCheck, title: 'Rights and takedowns', body: 'Contact us about permissions, attribution, broken files, or removal requests.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#AACCD6)] text-[var(--editable-page-text,#112E81)]">
        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-4 max-w-2xl text-5xl font-black leading-tight tracking-[-0.05em]">{pagesContent.contact.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {lanes.map((lane) => (
                  <div key={lane.title} className="pdf-card-hover rounded-2xl border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                    <lane.icon className="h-6 w-6 text-[var(--slot4-accent)]" />
                    <h2 className="mt-3 text-xl font-black tracking-[-0.04em]">{lane.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--editable-border)] bg-white/80 p-4 shadow-[0_24px_70px_rgba(17,46,129,0.12)] sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]"><Mail className="h-5 w-5" /></span>
                <h2 className="text-2xl font-black tracking-[-0.04em]">{pagesContent.contact.formTitle}</h2>
              </div>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
