import SEO from '../components/SEO'
import Section from '../components/Section'
import siteConfig from '../data/siteConfig'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description={`Privacy policy for ${siteConfig.companyName}, covering what information we collect and how it's used.`} />
      <Section className="pt-16 md:pt-20">
        <h1 className="text-4xl font-bold tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose-invert mt-10 max-w-2xl space-y-8 text-muted">
          <p className="leading-relaxed">
            {/* PLACEHOLDER — have this policy reviewed before publishing; this is a starting template, not legal advice */}
            This Privacy Policy explains how {siteConfig.companyName} ("we", "us") collects, uses and protects
            information when you visit this website or contact us about a project.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
            <p className="mt-2 leading-relaxed">
              When you submit our contact form, we collect the details you provide — name, business name, email,
              phone/WhatsApp number, service interest, budget range and project description. We do not collect
              payment or financial information through this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">How we use it</h2>
            <p className="mt-2 leading-relaxed">
              We use the information you submit solely to respond to your enquiry and discuss your project. We do
              not sell or share your information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Cookies & analytics</h2>
            <p className="mt-2 leading-relaxed">
              This site does not use tracking cookies by default. If analytics (such as Google Analytics) is
              enabled in the future, this section will be updated to describe what's collected and how to opt out.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Data retention</h2>
            <p className="mt-2 leading-relaxed">
              We retain enquiry details only as long as needed to respond to your request or, if we work together,
              for the duration of the project engagement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Your rights</h2>
            <p className="mt-2 leading-relaxed">
              You can request that we delete or update information you've submitted at any time by contacting us at{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-electric">{siteConfig.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-2 leading-relaxed">
              Questions about this policy can be sent to <a href={`mailto:${siteConfig.email}`} className="text-electric">{siteConfig.email}</a>.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
