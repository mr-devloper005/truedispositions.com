export const revalidate = 3
export const dynamic = 'force-dynamic'

// Route contract only. All visible PDF detail UI lives in src/editable.
export { default, generateMetadata, generateStaticParams } from '@/editable/pages/PdfDetailPage'
