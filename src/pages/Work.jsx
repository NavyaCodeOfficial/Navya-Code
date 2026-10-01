import { useState, useMemo } from 'react'
import SEO from '../components/SEO'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import ProjectCard from '../components/ProjectCard'
import { categories, projects } from '../data/portfolio'

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <>
      <SEO
        title="Web Design & Development Portfolio"
        description="Browse concept and demo projects from NavyaCode across business, restaurant, e-commerce, landing page and UI/UX work."
      />

      <Section tight className="pt-16 md:pt-20">
        <Eyebrow>Our work</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">Portfolio</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          A mix of concept and demo projects showing how we approach different kinds of businesses. Anything not
          yet built for a real client is clearly labelled as a concept.
        </p>
      </Section>

      <Section tight className="border-t border-white/5">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c ? 'bg-brand-gradient text-white' : 'border border-white/10 text-muted hover:text-ink'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-dashed border-white/15 p-12 text-center">
            <p className="text-muted">No projects in this category yet — check back soon.</p>
          </div>
        )}
      </Section>
    </>
  )
}
