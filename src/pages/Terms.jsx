import SEO from '../components/SEO'
import Section from '../components/Section'
import siteConfig from '../data/siteConfig'

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description={`Terms and conditions for using ${siteConfig.companyName}'s website and services.`} />
      <Section className="pt-16 md:pt-20">
        <h1 className="text-4xl font-bold tracking-tight text-ink">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-muted">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="mt-10 max-w-2xl space-y-8 text-muted">
          <p className="leading-relaxed">
            {/* PLACEHOLDER — have these terms reviewed before publishing; this is a starting template, not legal advice */}
            These Terms & Conditions govern your use of this website and any project engagement with{' '}
            {siteConfig.companyName}.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-ink">Use of this website</h2>
            <p className="mt-2 leading-relaxed">
              This website and its content are provided for informational purposes to help you understand our
              services and get in touch. You may not copy, redistribute or misrepresent this content as your own.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Project engagements</h2>
            <p className="mt-2 leading-relaxed">
              Any actual website project is governed by a separate agreement or scope of work agreed directly
              between {siteConfig.companyName} and the client, covering pricing, timeline, revisions and
              deliverables. Nothing on this website constitutes a binding quote.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Portfolio & concept work</h2>
            <p className="mt-2 leading-relaxed">
              Projects on our Work page labelled "Concept" or "Demo" are illustrative examples of our capability and
              are not live client engagements unless stated otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Limitation of liability</h2>
            <p className="mt-2 leading-relaxed">
              We make no guarantee of specific business outcomes, search engine rankings, or traffic from any
              website we build. We aim to follow current best practices for performance, accessibility and SEO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Changes to these terms</h2>
            <p className="mt-2 leading-relaxed">
              We may update these terms from time to time. Continued use of this website after changes means you
              accept the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-2 leading-relaxed">
              Questions about these terms can be sent to <a href={`mailto:${siteConfig.email}`} className="text-electric">{siteConfig.email}</a>.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
