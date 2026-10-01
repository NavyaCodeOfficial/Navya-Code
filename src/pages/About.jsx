import SEO from '../components/SEO'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'

export default function About() {
  return (
    <>
      <SEO
        title="About NavyaCode"
        description="NavyaCode is a web development studio building modern, responsive websites for businesses. Learn who we are, what we believe, and how we work."
      />

      <Section tight className="pt-16 md:pt-20">
        <Eyebrow>About us</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">Where code meets creativity.</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          NavyaCode is a web development studio. We build websites for businesses that want to look as serious
          online as they are in person.
        </p>
      </Section>

      <Section tight className="border-t border-white/5">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-ink">Who we are</h2>
              <p className="mt-3 leading-relaxed text-muted">
                We're a focused web development studio working with businesses, restaurants, hotels, gyms, clinics,
                shops, startups and freelancers who need a professional online presence — built properly, not
                templated.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">What we believe</h2>
              <p className="mt-3 leading-relaxed text-muted">
                A website should do a job: communicate what a business does, build trust in seconds, and make it
                easy to get in touch. Anything that doesn't serve that — decoration for its own sake, bloated
                animation, unnecessary complexity — gets left out.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">What we build</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Custom-coded, responsive websites using modern frontend technology — React, Tailwind CSS, and
                lightweight tooling chosen to keep sites fast and maintainable, not to chase trends.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">Our approach</h2>
              <p className="mt-3 leading-relaxed text-muted">
                We start by understanding the business before opening a design tool. Every project moves through
                the same five stages — discover, design, build, launch, support — so nothing gets skipped.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink">Our mission</h2>
              <p className="mt-3 leading-relaxed text-muted">
                To give businesses that don't have an in-house tech team access to the same quality of website as
                companies that do.
              </p>
            </div>
          </div>

          <div className="rounded-2xl card-border bg-navy-light p-6">
            <img
              src="/images/founder-1.jpeg"
              alt="Founder and CEO of NavyaCode at his desk"
              className="w-full rounded-xl object-cover"
              loading="lazy"
            />
            <div className="mt-5">
              <p className="text-sm font-semibold text-ink">Founder & CEO</p>
              <p className="mt-1 text-sm text-muted">
                {/* PLACEHOLDER — add the founder's name and a short bio line here */}
                Aryan Singh
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-white/5">
        <div className="rounded-3xl bg-brand-gradient p-10 text-center sm:p-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's build something together.</h2>
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
