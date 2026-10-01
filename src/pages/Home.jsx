import { ArrowRight, Smartphone, Zap, Search, Target, Wrench, Layers } from 'lucide-react'
import SEO from '../components/SEO'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import ProcessStep from '../components/ProcessStep'
import services from '../data/services'
import { projects } from '../data/portfolio'
import siteConfig from '../data/siteConfig'

const trustPoints = [
  { icon: Layers, title: 'Modern design', text: 'Interfaces built with current design standards, not recycled templates.' },
  { icon: Smartphone, title: 'Mobile responsive', text: 'Every layout is built and tested across phones, tablets and desktops.' },
  { icon: Zap, title: 'Fast performance', text: 'Lightweight builds with optimised assets and minimal JavaScript.' },
  { icon: Search, title: 'SEO-ready structure', text: 'Clean URLs, proper headings and metadata from the first commit.' },
  { icon: Target, title: 'Conversion-focused', text: 'Layouts designed to turn visitors into enquiries, not just page views.' },
  { icon: Wrench, title: 'Easy to maintain', text: 'Centralised content and components so updates don\u2019t mean rebuilding pages.' },
]

const whyUs = [
  'Custom-built websites, not repurposed templates',
  'Modern UI/UX grounded in your actual business',
  'Responsive development tested across real devices',
  'Performance-focused builds with Core Web Vitals in mind',
  'Clear, direct communication throughout the project',
  'Scalable architecture that grows as your business does',
]

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.companyName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}${siteConfig.logo}`,
    description: siteConfig.description,
  }

  return (
    <>
      <SEO
        title="Modern Web Development Studio"
        description="NavyaCode builds modern, responsive and conversion-focused websites for businesses, restaurants, hotels, gyms and clinics across India."
        structuredData={structuredData}
      />

      {/* HERO */}
      <Section className="pt-16 md:pt-24" tight>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>{siteConfig.tagline}</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-[3.4rem]">
              Websites built to make your business <span className="text-gradient">stand out.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              We design and build modern, responsive, conversion-focused websites for businesses that want to look
              serious online — not generic.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/contact" variant="primary">
                Start a Project <ArrowRight size={16} />
              </Button>
              <Button to="/work" variant="secondary">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Subtle code-inspired visual */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-navy-light p-6 shadow-2xl shadow-black/40">
              <div className="flex gap-1.5 pb-4">
                <span className="h-3 w-3 rounded-full bg-white/15" />
                <span className="h-3 w-3 rounded-full bg-white/15" />
                <span className="h-3 w-3 rounded-full bg-white/15" />
              </div>
              <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-muted">
<code>{`function buildSite(business) {
  const design = craft(business.brand);
  const site = compose(design, {
    responsive: true,
    fast: true,
    seoReady: true,
  });

  return launch(site);
}`}</code>
              </pre>
            </div>
            <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-2xl bg-brand-gradient opacity-20 blur-2xl" aria-hidden="true" />
          </div>
        </div>
      </Section>

      {/* TRUST / VALUE */}
      <Section tight className="border-t border-white/5">
        <Eyebrow>Why it matters</Eyebrow>
        <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-ink">
          A professional website is your first impression.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl card-border bg-navy-light p-6">
              <Icon size={22} className="text-electric" />
              <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section tight className="border-t border-white/5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>What we build</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">Services</h2>
          </div>
          <Button to="/services" variant="ghost" className="!px-0">
            View all services <ArrowRight size={16} />
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.slug} title={s.title} short={s.short} slug={s.slug} />
          ))}
        </div>
      </Section>

      {/* WORK PREVIEW */}
      <Section tight className="border-t border-white/5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Recent work</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">Featured projects</h2>
          </div>
          <Button to="/work" variant="ghost" className="!px-0">
            View full portfolio <ArrowRight size={16} />
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section tight className="border-t border-white/5">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">Our process</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <ProcessStep number="01" title="Discover" description="Understand the business and requirements." />
          <ProcessStep number="02" title="Design" description="Create the visual direction and user experience." />
          <ProcessStep number="03" title="Build" description="Develop the website using modern technologies." />
          <ProcessStep number="04" title="Launch" description="Deploy, test and prepare the website for the client." />
          <ProcessStep number="05" title="Support" description="Provide post-launch support according to the selected package." />
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section tight className="border-t border-white/5">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>Why choose us</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
              Built for businesses that take their website seriously.
            </h2>
          </div>
          <ul className="space-y-4">
            {whyUs.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="border-t border-white/5">
        <div className="rounded-3xl bg-brand-gradient p-10 text-center sm:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-md text-white/90">
            Tell us what you're building — we'll get back to you within a day.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" className="!bg-white !bg-none !text-navy hover:!brightness-95">
              Start a Conversation
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
