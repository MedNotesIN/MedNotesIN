"use client"

import { useState } from "react"
import { GraduationCap, BookOpen, Clock } from "lucide-react"
import { NoteCard } from "@/components/note-card"
import type { Branch } from "@/lib/notes-data"

const icons = {
  "b-pharm": GraduationCap,
  "d-pharm": BookOpen,
}

export function BranchSection({ branch }: { branch: Branch }) {
  const [activeYear, setActiveYear] = useState(branch.years[0].year)
  const Icon = icons[branch.id]

  const current = branch.years.find((y) => y.year === activeYear) ?? branch.years[0]

  return (
    <section id={branch.id} className="scroll-mt-16 border-b border-border py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {branch.name}
                </h2>
                <p className="text-sm text-muted-foreground">{branch.fullName}</p>
              </div>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{branch.blurb}</p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground">
            <Clock className="size-4 text-primary" />
            {branch.duration}
          </span>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label={`${branch.name} year`}
        >
          {branch.years.map((year) => {
            const selected = year.year === activeYear
            return (
              <button
                key={year.year}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveYear(year.year)}
                className={`year-tab appearance-none rounded-full border px-4 py-2 text-sm font-medium touch-manipulation transition-none ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground sm:hover:border-primary/40 sm:hover:text-foreground"
                }`}
              >
                {year.label}
              </button>
            )
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {current.notes.map((note) => (
            <NoteCard key={note.code} note={note} />
          ))}
        </div>
      </div>
    </section>
  )
}
