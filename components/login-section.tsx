"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Lock, User, CheckCircle2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

type Mode = "login" | "signup"

const perks = [
  "Bookmark notes and build your own study list",
  "Track which subjects you've completed",
  "Get notified when new PDFs are added",
  "Request notes for any subject, free",
]

export function LoginSection() {
  const [mode, setMode] = useState<Mode>("login")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="login" className="scroll-mt-16 border-b border-border bg-secondary/40 py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Free student account
          </span>
          <h2 className="mt-4 text-pretty font-display text-3xl font-bold tracking-tight text-foreground">
            Join thousands of pharmacy students
          </h2>
          <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Browsing is always free and open. Create an account only if you want to save your
            progress and personalise your notes.
          </p>
          <ul className="mt-6 space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="leading-relaxed">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div
            className="grid grid-cols-2 gap-1 rounded-lg bg-secondary p-1"
            role="tablist"
            aria-label="Authentication mode"
          >
            {(["login", "signup"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={mode === m}
                onClick={() => {
                  setMode(m)
                  setSubmitted(false)
                }}
                className={`rounded-md px-3 py-2 text-sm font-medium capitalize transition-colors ${
                  mode === m
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {m === "login" ? "Log in" : "Sign up"}
              </button>
            ))}
          </div>

          {submitted ? (
            <div className="mt-8 flex flex-col items-center gap-3 py-6 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="size-6" />
              </span>
              <p className="font-display text-lg font-semibold text-foreground">
                {mode === "login" ? "Welcome back!" : "Account created (demo)"}
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                This is a UI preview - authentication isn&apos;t connected yet, so no data was
                saved.
              </p>
              <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                Back to form
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {mode === "signup" && (
                <Field id="name" label="Full name" icon={User} type="text" placeholder="Riya Sharma" />
              )}
              <Field
                id="email"
                label="Email address"
                icon={Mail}
                type="email"
                placeholder="you@example.com"
              />
              <Field
                id="password"
                label="Password"
                icon={Lock}
                type="password"
                placeholder="Enter your password"
              />

              {mode === "login" && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-muted-foreground">
                    <input type="checkbox" className="size-4 rounded border-input accent-primary" />
                    Remember me
                  </label>
                  <a href="#" className="font-medium text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button type="submit" className="w-full">
                {mode === "login" ? "Log in" : "Create free account"}
              </Button>

              <p className="text-center text-xs leading-relaxed text-muted-foreground">
                By continuing you agree to our Terms and Privacy Policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  icon: Icon,
  type,
  placeholder,
}: {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  type: string
  placeholder: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          id={id}
          name={id}
          type={type}
          required
          placeholder={placeholder}
          className="h-11 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
        />
      </div>
    </div>
  )
}
