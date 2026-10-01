import { useState } from 'react'
import { Mail, MessageCircle, MapPin } from 'lucide-react'
import SEO from '../components/SEO'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import siteConfig from '../data/siteConfig'

const serviceOptions = [
  'Custom Website Development',
  'Business Website',
  'Restaurant / Hotel Website',
  'Landing Page',
  'E-commerce / Catalog Website',
  'Website Redesign',
  'Frontend Development',
  'Website Maintenance',
  'Not sure yet',
]

const budgetOptions = ['Under ₹15,000', '₹15,000 – ₹40,000', '₹40,000 – ₹1,00,000', '₹1,00,000+', 'Not sure yet']

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.phone.trim()) errors.phone = 'Please enter a phone or WhatsApp number.'
  if (!values.service) errors.service = 'Please select a service.'
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please describe your project in at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  // Builds a pre-filled WhatsApp message from the form values and returns a wa.me link.
  function buildWhatsAppLink(values) {
    const lines = [
      `New project enquiry — ${siteConfig.companyName}`,
      '',
      `Name: ${values.name}`,
      values.company && `Business: ${values.company}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      values.service && `Service: ${values.service}`,
      values.budget && `Budget: ${values.budget}`,
      '',
      `Project: ${values.message}`,
    ].filter(Boolean)

    return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    try {
      // Optional: also send to a backend/serverless endpoint if configured, so you have
      // a record even if the person doesn't have WhatsApp Web set up. This never blocks
      // the WhatsApp handoff below — if it fails, we still open WhatsApp.
      if (endpoint) {
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        }).catch(() => {})
      }

      // Open WhatsApp in a new tab with the enquiry pre-filled as a message.
      // wa.me links work whether or not the visitor is on mobile (opens WhatsApp Web on desktop).
      window.open(buildWhatsAppLink(values), '_blank', 'noopener,noreferrer')

      setStatus('success')
      setValues(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact NavyaCode"
        description="Get in touch with NavyaCode to start your website project. Reach us by form, email or WhatsApp."
      />

      <Section tight className="pt-16 md:pt-20">
        <Eyebrow>Get in touch</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">Let's talk about your project.</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Tell us a bit about your business and what you need. We typically reply within a day.
        </p>
      </Section>

      <Section tight className="border-t border-white/5">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Direct contact options */}
          <div className="space-y-5 md:col-span-1">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-2xl card-border bg-navy-light p-5 hover:border-white/25"
            >
              <Mail size={20} className="text-electric" />
              <div>
                <p className="text-sm font-semibold text-ink">Email</p>
                <p className="text-sm text-muted">{siteConfig.email}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl card-border bg-navy-light p-5 hover:border-white/25"
            >
              <MessageCircle size={20} className="text-electric" />
              <div>
                <p className="text-sm font-semibold text-ink">WhatsApp</p>
                <p className="text-sm text-muted">Chat with us directly</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-2xl card-border bg-navy-light p-5">
              <MapPin size={20} className="text-electric" />
              <div>
                <p className="text-sm font-semibold text-ink">Based in</p>
                <p className="text-sm text-muted">{siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5 md:col-span-2" aria-label="Project enquiry form">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" value={values.name} onChange={handleChange} error={errors.name} required />
              <Field label="Business / company" name="company" value={values.company} onChange={handleChange} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} required />
              <Field label="Phone / WhatsApp" name="phone" value={values.phone} onChange={handleChange} error={errors.phone} required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                label="Service you're interested in"
                name="service"
                value={values.service}
                onChange={handleChange}
                error={errors.service}
                options={serviceOptions}
                required
              />
              <SelectField
                label="Budget range"
                name="budget"
                value={values.budget}
                onChange={handleChange}
                options={budgetOptions}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Project description <span className="text-pink">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus-visible:border-electric"
                placeholder="What are you building, and what does the site need to do?"
              />
              {errors.message && <p id="message-error" className="mt-1.5 text-sm text-pink">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
            >
              <MessageCircle size={16} />
              {status === 'submitting' ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
            </button>
            <p className="text-xs text-muted">
              This opens WhatsApp with your details pre-filled — just hit send there to reach us.
            </p>

            {status === 'success' && (
              <p role="status" className="text-sm text-electric">
                WhatsApp should have opened in a new tab with your message ready to send. If it didn't open, message
                us directly at <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="underline">wa.me/{siteConfig.whatsapp}</a>.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-sm text-pink">
                Something went wrong opening WhatsApp. Please try again, or email us directly.
              </p>
            )}
          </form>
        </div>
      </Section>
    </>
  )
}

function Field({ label, name, value, onChange, error, type = 'text', required = false }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-pink">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus-visible:border-electric"
      />
      {error && <p id={`${name}-error`} className="mt-1.5 text-sm text-pink">{error}</p>}
    </div>
  )
}

function SelectField({ label, name, value, onChange, error, options, required = false }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-pink">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-sm text-ink focus-visible:border-electric"
      >
        <option value="">Select an option</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {error && <p id={`${name}-error`} className="mt-1.5 text-sm text-pink">{error}</p>}
    </div>
  )
}
