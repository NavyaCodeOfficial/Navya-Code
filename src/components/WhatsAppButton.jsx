import { MessageCircle } from 'lucide-react'
import siteConfig from '../data/siteConfig'

/**
 * Floating WhatsApp CTA, fixed to the bottom-right corner on every page.
 * Uses the wa.me deep link — no backend required.
 */
export default function WhatsAppButton() {
  const message = encodeURIComponent(`Hi ${siteConfig.companyName}, I'd like to talk about a website project.`)
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 focus-visible:outline-2"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  )
}
