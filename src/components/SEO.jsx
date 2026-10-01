import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import siteConfig from '../data/siteConfig'

/**
 * Reusable SEO component. Drop <SEO title="..." description="..." /> at the
 * top of any page component to set that page's title, meta description,
 * canonical URL, Open Graph / Twitter tags, and optional JSON-LD.
 *
 * No routing library integration needed — it manages document.head directly,
 * which keeps things framework-light and works with plain react-router.
 */
export default function SEO({ title, description, structuredData, noindex = false }) {
  const location = useLocation()
  const url = `${siteConfig.siteUrl}${location.pathname}`
  const fullTitle = title ? `${title} | ${siteConfig.companyName}` : siteConfig.companyName
  const desc = description || siteConfig.description

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (attr, key, content) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel, href) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    setMeta('name', 'description', desc)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setLink('canonical', url)

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', siteConfig.companyName)
    setMeta('property', 'og:image', `${siteConfig.siteUrl}${siteConfig.ogImage}`)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image', `${siteConfig.siteUrl}${siteConfig.ogImage}`)

    // Structured data (JSON-LD)
    const existing = document.getElementById('page-structured-data')
    if (existing) existing.remove()
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'page-structured-data'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [fullTitle, desc, url, structuredData, noindex])

  return null
}
