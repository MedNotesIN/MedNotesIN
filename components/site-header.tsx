"use client"

import { useState } from "react"
import { Cross, Menu, X, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "B-Pharmacy", href: "#b-pharm" },
  { label: "D-Pharmacy", href: "#d-pharm" },
  { label: "All Courses", href: "#course-directory" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5" aria-label="MedNotesIN home">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Cross className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            MedNotes<span className="text-primary">IN</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#login">
            <Button variant="outline" size="sm">
              Log in
            </Button>
          </a>
          <a href="#login">
            <Button size="sm">Sign up free</Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a href="#login" onClick={() => setOpen(false)} className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  Log in
                </Button>
              </a>
              <a href="#login" onClick={() => setOpen(false)} className="flex-1">
                <Button size="sm" className="w-full">
                  Sign up
                </Button>
              </a>
            </div>
            <div className="mt-1 flex gap-2">
              <a
                href="#"
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
              <a
                href="#"
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground"
              >
                <Send className="size-4" /> Telegram
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
