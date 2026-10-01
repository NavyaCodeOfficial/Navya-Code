import SEO from '../components/SEO'
import Section from '../components/Section'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" noindex />
      <Section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="font-mono text-sm text-electric">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">This page doesn't exist.</h1>
        <p className="mt-4 max-w-sm text-muted">
          The page you're looking for may have been moved or the link might be incorrect.
        </p>
        <div className="mt-8 flex gap-4">
          <Button to="/" variant="primary">Back to home</Button>
          <Button to="/contact" variant="secondary">Contact us</Button>
        </div>
      </Section>
    </>
  )
}
