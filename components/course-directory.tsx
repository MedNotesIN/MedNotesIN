"use client"

import { useState } from "react"
import { BookOpen, ChevronDown, ExternalLink, FileText, Link2, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { CourseEntry } from "@/lib/notes-data"

export function CourseDirectory({ courses }: { courses: CourseEntry[] }) {
  const [openCourse, setOpenCourse] = useState(courses[0]?.id ?? "")
  const [query, setQuery] = useState("")

  const filtered = courses.filter((course) => {
    const value = `${course.course} ${course.subtitle}`.toLowerCase()
    return value.includes(query.toLowerCase())
  })

  return (
    <section id="course-directory" className="scroll-mt-16 border-b border-border py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <BookOpen className="size-3.5" aria-hidden="true" />
              Course directory
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Year, semester and unit-wise notes
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Choose a course to open its syllabus tree. Each subject is ready for a Google Drive PDF link once the official CSV or CSVTU syllabus is provided.
            </p>
          </div>
          <label className="flex w-full items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 lg:max-w-xs">
            <Search className="size-4 text-muted-foreground" aria-hidden="true" />
            <span className="sr-only">Search courses</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search courses"
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </label>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {filtered.map((course) => {
            const isOpen = course.id === openCourse
            return (
              <div key={course.id} className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenCourse(isOpen ? "" : course.id)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-secondary/60 sm:px-5"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FileText className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-lg font-bold text-foreground">{course.course}</span>
                      <span className="block truncate text-sm text-muted-foreground">{course.subtitle} · {course.duration}</span>
                    </span>
                  </span>
                  <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>

                {isOpen && (
                  <div className="border-t border-border px-4 py-5 sm:px-5">
                    <div className="mb-5 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">Sample structure</Badge>
                      <span className="text-sm text-muted-foreground">Official syllabus and Drive links pending CSV upload.</span>
                    </div>
                    <div className="flex flex-col gap-6">
                      {course.years.map((year) => (
                        <div key={year.year}>
                          <h3 className="mb-3 font-display text-lg font-bold text-foreground">{year.year}</h3>
                          <div className="grid gap-3 lg:grid-cols-2">
                            {year.semesters.map((semester) => (
                              <div key={semester.semester} className="rounded-xl border border-border bg-background/50 p-4">
                                <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">{semester.semester}</h4>
                                <div className="flex flex-col gap-3">
                                  {semester.subjects.map((subject) => (
                                    <div key={subject.name} className="rounded-lg border border-border bg-card p-3">
                                      <div className="flex items-start justify-between gap-3">
                                        <div>
                                          <p className="font-semibold text-foreground">{subject.name}</p>
                                          <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={`${subject.name} units`}>
                                            {subject.units.map((unit) => <li key={unit} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">{unit}</li>)}
                                          </ul>
                                        </div>
                                        {subject.driveUrl ? (
                                          <Button asChild size="sm" variant="outline">
                                            <a href={subject.driveUrl} target="_blank" rel="noreferrer"><ExternalLink data-icon="inline-start" /> PDF</a>
                                          </Button>
                                        ) : (
                                          <span className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground"><Link2 className="size-3.5" aria-hidden="true" /> Pending</span>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          {filtered.length === 0 && <p className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground">No matching course found.</p>}
        </div>
      </div>
    </section>
  )
}
