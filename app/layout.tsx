import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://mednotesin.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MedNotesIN - Free Medical & Pharmacy Notes Hub',
    template: '%s | MedNotesIN',
  },
  description:
    'Free, year-wise B-Pharmacy and D-Pharmacy notes, PDFs and previous-year papers. D-Pharm, B-Pharm, M-Pharm and GPAT study material in one place.',
  generator: 'v0.app',
  applicationName: 'MedNotesIN',
  keywords: [
    'MedNotesIN',
    'pharmacy notes',
    'B-Pharmacy notes',
    'D-Pharmacy notes',
    'B-Pharm PDF',
    'D-Pharm PDF',
    'M-Pharm notes',
    'GPAT preparation',
    'pharmacy study material',
    'free pharmacy notes',
    'PCI syllabus notes',
    'pharmaceutics notes',
    'pharmacology notes',
  ],
  authors: [{ name: 'MedNotesIN' }],
  creator: 'MedNotesIN',
  publisher: 'MedNotesIN',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'MedNotesIN',
    title: 'MedNotesIN - Free Medical & Pharmacy Notes Hub',
    description:
      'Free, year-wise B-Pharmacy and D-Pharmacy notes, PDFs and previous-year papers for D-Pharm, B-Pharm, M-Pharm and GPAT.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedNotesIN - Free Medical & Pharmacy Notes Hub',
    description:
      'Free, year-wise B-Pharmacy and D-Pharmacy notes, PDFs and previous-year papers for D-Pharm, B-Pharm, M-Pharm and GPAT.',
  },
  category: 'education',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
