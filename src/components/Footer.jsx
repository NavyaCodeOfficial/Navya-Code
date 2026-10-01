import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Twitter, Github, Mail, Phone } from 'lucide-react'
import siteConfig from '../data/siteConfig'

const socialIcons = {
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
}

export default function Footer() {
  const year = new Date().getFullYear()
  const activeSocials = Object.entries(siteConfig.socialLinks).filter(([, url]) => url)

  return (
    <footer className="border-t border-white/10 bg-navy-light">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={siteConfig.logo} alt={`${siteConfig.companyName} logo`} className="h-8 w-8 rounded-md" width="32" height="32" />
            <span className="text-base font-bold">{siteConfig.companyName}</span>
          </Link>
          <p className="mt-3 text-sm text-muted">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Navigation</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li><Link to="/" className="hover:text-ink">Home</Link></li>
            <li><Link to="/services" className="hover:text-ink">Services</Link></li>
            <li><Link to="/work" className="hover:text-ink">Work</Link></li>
            <li><Link to="/about" className="hover:text-ink">About</Link></li>
            <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li><Link to="/services" className="hover:text-ink">Custom Website Development</Link></li>
            <li><Link to="/services" className="hover:text-ink">Business Websites</Link></li>
            <li><Link to="/services" className="hover:text-ink">Restaurant & Hotel Websites</Link></li>
            <li><Link to="/services" className="hover:text-ink">Website Redesign</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Mail size={15} />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">{siteConfig.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-ink">{siteConfig.phone}</a>
            </li>
            <li className="text-muted">{siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}</li>
          </ul>

          {activeSocials.length > 0 && (
            <div className="mt-5 flex gap-3">
              {activeSocials.map(([key, url]) => {
                const Icon = socialIcons[key]
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted hover:text-ink hover:border-white/30"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-ink">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ink">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
