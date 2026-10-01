export default function ProcessStep({ number, title, description }) {
  return (
    <div className="flex gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 font-mono text-sm text-electric">
        {number}
      </div>
      <div>
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  )
}
