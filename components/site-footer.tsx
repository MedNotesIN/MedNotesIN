import { Cross, MessageCircle, Send, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Cross className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold">
              MedNotes<span className="text-primary">IN</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/70">
            Free medical and pharmacy notes hub for D-Pharm, B-Pharm, M-Pharm and GPAT aspirants
            across India. Built by students, for students.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="size-5" />
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="flex size-10 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Send className="size-5" />
            </a>
            <a
              href="mailto:hello@mednotesin.in"
              aria-label="Email"
              className="flex size-10 items-center justify-center rounded-lg bg-background/10 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Courses">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-background/60">
            Courses
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {["B-Pharmacy", "D-Pharmacy", "M-Pharmacy", "GPAT Prep"].map((item) => (
              <li key={item}>
                <a href="#home" className="text-background/80 transition-colors hover:text-background">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-background/60">
            Request a note
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-background/70">
            Can&apos;t find a subject? Send us the name and we&apos;ll add the PDF.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="text"
              aria-label="Subject name"
              placeholder="Subject name"
              className="h-10 w-full rounded-lg border border-background/20 bg-background/10 px-3 text-sm text-background outline-none transition-colors placeholder:text-background/50 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
            />
            <button
              type="submit"
              className="h-10 shrink-0 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-background/60 sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} MedNotesIN. All notes are free to use.</p>
          <p>Made with care for pharmacy students.</p>
        </div>
      </div>
    </footer>
  )
}
