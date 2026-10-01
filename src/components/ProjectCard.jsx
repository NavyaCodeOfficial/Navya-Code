import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl card-border bg-navy-light">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-navy-lighter">
        {project.image ? (
          <img src={project.image} alt={`${project.name} screenshot`} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <span className="text-sm text-muted">Screenshot placeholder</span>
        )}
        {project.status === 'concept' && (
          <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-3 py-1 text-xs font-semibold text-electric border border-electric/30">
            Concept
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-ink">{project.name}</h3>
          <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted">{project.category}</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted">{t}</span>
          ))}
        </div>
        <button
          type="button"
          disabled
          title="Live link not available for concept projects"
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-muted/60 cursor-not-allowed"
        >
          View Project <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  )
}
