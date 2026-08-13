import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Note } from "@/lib/notes-data"

export function NoteCard({ note }: { note: Note }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm sm:hover:border-primary/40 sm:hover:shadow-md">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
          <FileText className="size-3.5" />
          {note.code}
        </span>
        <span className="text-xs font-medium text-muted-foreground">PDF</span>
      </div>
      <h4 className="mt-3 font-display text-base font-semibold leading-snug text-foreground text-balance">
        {note.title}
      </h4>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {note.description}
      </p>
      <Button className="mt-4 w-full gap-2" size="sm">
        <Download className="size-4" />
        Download PDF
      </Button>
    </article>
  )
}
