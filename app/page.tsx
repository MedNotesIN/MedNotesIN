import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BranchSection } from "@/components/branch-section"
import { LoginSection } from "@/components/login-section"
import { SiteFooter } from "@/components/site-footer"
import { branches } from "@/lib/notes-data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://mednotesin.vercel.app"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "MedNotesIN",
  url: siteUrl,
  description:
    "Free, year-wise B-Pharmacy and D-Pharmacy notes, PDFs and previous-year papers for D-Pharm, B-Pharm, M-Pharm and GPAT.",
  sameAs: [] as string[],
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

export default function Page() {
  const bPharm = branches.find((b) => b.id === "b-pharm")!
  const dPharm = branches.find((b) => b.id === "d-pharm")!

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <BranchSection branch={bPharm} />
        <BranchSection branch={dPharm} />
        <LoginSection />
      </main>
      <SiteFooter />
    </>
  )
}
