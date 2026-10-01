import SEO from '../components/SEO'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import services from '../data/services'

export default function Services() {
  return (
    <>
      <SEO
        title="Web Development Services"
        description="Explore NavyaCode's web development services: custom websites, business sites, restaurant and hotel sites, landing pages, e-commerce catalogues, redesigns and maintenance."
      />

      <Section tight className="pt-16 md:pt-20">
        <Eyebrow>What we do</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">Services</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          We're a frontend-focused web development studio. Every service below is something we build ourselves —
          we won't sell you an SEO or ad-management package we don't actually deliver.
        </p>
      </Section>

      <Section tight className="border-t border-white/5">
        <div className="space-y-6">
          {services.map((s) => (
            <div key={s.slug} id={s.slug} className="scroll-mt-24 rounded-2xl card-border bg-navy-light p-7 md:p-9">
              <h2 className="text-2xl font-bold text-ink">{s.title}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{s.whatIs}</p>

              <div className="mt-7 grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold text-electric">Who it's for</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.whoFor}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-electric">What's included</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted">
                    {s.included.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-electric">Typical deliverables</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted">
                    {s.deliverables.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-7">
                <Button to="/contact" variant="secondary" className="!py-2.5 !text-sm">
                  Ask about {s.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
