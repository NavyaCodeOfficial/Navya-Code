// ============================================================================
// SITE CONFIGURATION — edit this file to update company details site-wide.
// Nothing here is fabricated: fields marked "// PLACEHOLDER" need your input
// before launch. Everything else reflects the brief you gave us.
// ============================================================================

export const siteConfig = {
  companyName: 'NavyaCode',
  tagline: 'Where Code Meets Creativity',
  legalName: 'NavyaCode', // PLACEHOLDER — replace with registered business name if different

  // Used to build canonical URLs, sitemap.xml, structured data, and OG tags.
  // Falls back to this value if VITE_SITE_URL isn't set in .env
  siteUrl: (import.meta.env && import.meta.env.VITE_SITE_URL) || 'https://www.navyacode.com',

  // Short description used in the Organization schema and default meta description
  description:
    'NavyaCode is a web development studio building modern, responsive, conversion-focused websites for businesses, restaurants, hotels, gyms, clinics and startups across India.',

  // --- Contact details -----------------------------------------------------
  email: 'officialnavyacode@gmail.com', // PLACEHOLDER — replace with your real business email
  phone: '+91 9058699070', // PLACEHOLDER — replace with your real phone number
  whatsapp: '919058699070', // PLACEHOLDER — country code + number, no symbols (used for wa.me links)

  location: {
    city: 'Etah',
    state: 'Uttar Pradesh',
    country: 'India',
    // Full street address — leave blank if you operate without a public office address
    streetAddress: '', // PLACEHOLDER
  },

  // --- Social links ----------------------------------------------------------
  // Leave a value empty ('') to hide that icon from the footer automatically.
  socialLinks: {
    instagram: 'https://instagram.com/navyacode', // PLACEHOLDER e.g. https://instagram.com/navyacode
    linkedin: 'https://www.linkedin.com/in/aryan-singh-985429422', // PLACEHOLDER
    twitter: '', // PLACEHOLDER
    github: '', // PLACEHOLDER
  },

  // --- Brand assets ----------------------------------------------------------
  logo: '/images/logo.png',
  ogImage: '/images/logo-square.png',

  // --- Analytics (optional) ---------------------------------------------------
  gaMeasurementId: (import.meta.env && import.meta.env.VITE_GA_MEASUREMENT_ID) || '',
}

export default siteConfig
