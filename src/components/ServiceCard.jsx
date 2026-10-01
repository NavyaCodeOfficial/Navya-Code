import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({ title, short, slug }) {
  return (
    <Link
      to={`/services#${slug}`}
      className="group flex flex-col justify-between rounded-2xl card-border bg-navy-light p-6 transition-colors hover:border-white/25"
    >
      <div>
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{short}</p>
      </div>
      <div className="mt-6 flex items-center gap-1 text-sm font-medium text-electric">
        Learn more
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  )
}
