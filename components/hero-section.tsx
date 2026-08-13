"use client"

import type React from "react"
import { useState } from "react"
import { Search, GraduationCap, BookOpen, ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { stats } from "@/lib/notes-data"

export function HeroSection() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const target = document.querySelector("#b-pharm")
    target?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="size-3.5 text-primary" />
            100% Free - PCI &amp; ER-2020 aligned
          </span>
          <h1 className="mt-5 text-pretty font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            All your Pharmacy notes, <span className="text-primary">in one place.</span>
          </h1>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Free, year-wise study notes, PDFs and previous-year papers for B-Pharmacy and D-Pharmacy
            students. No sign-up required to browse - download and start studying in seconds.
          </p>

          <form onSubmit={handleSearch} className="mt-6 flex max-w-md gap-2" role="search">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a subject, e.g. Pharmacology"
                aria-label="Search notes"
                className="h-11 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
              />
            </div>
            <Button type="submit" className="h-11 shrink-0">
              Browse
            </Button>
          </form>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#b-pharm">
              <Button variant="secondary" className="gap-2">
                <GraduationCap className="size-4" /> B-Pharmacy notes
              </Button>
            </a>
            <a href="#d-pharm">
              <Button variant="secondary" className="gap-2">
                <BookOpen className="size-4" /> D-Pharmacy notes
              </Button>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <a
            href="#login"
            className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-border bg-primary p-5 text-primary-foreground transition-transform hover:-translate-y-0.5 sm:mt-4"
          >
            <div>
              <div className="font-display text-base font-semibold">Create a free account</div>
              <div className="text-sm opacity-90">Save notes and track what you&apos;ve read.</div>
            </div>
            <ArrowRight className="size-5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  )
}
