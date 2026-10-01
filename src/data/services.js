// Service catalogue — shown on the Home preview and the full Services page.
// Add a new service by adding another object here; nothing else needs to change.

export const services = [
  {
    slug: 'custom-website-development',
    title: 'Custom Website Development',
    short: 'A website built around how your business actually works, not a recycled template.',
    whoFor: 'Businesses that need a site tailored to a specific workflow, catalogue or brand system rather than a one-size-fits-all layout.',
    whatIs:
      'We design and build your website from a blank canvas — structure, components and content are planned around your business rather than adapted from a template.',
    included: [
      'Discovery call to understand your business and goals',
      'Custom UI/UX design',
      'Fully responsive build (mobile, tablet, desktop)',
      'On-page SEO foundations',
      'Deployment and launch support',
    ],
    deliverables: ['Live, production-ready website', 'Source code', 'Basic usage documentation'],
  },
  {
    slug: 'business-websites',
    title: 'Business Websites',
    short: 'A clear, professional online presence for shops, clinics, agencies and service providers.',
    whoFor: 'Local and regional businesses that need visitors to understand what they do and how to get in touch within seconds.',
    whatIs:
      'A focused multi-page site — home, services, about, contact — built to present your business clearly and generate enquiries.',
    included: ['Up to 5 core pages', 'Contact form with validation', 'Mobile-first layout', 'Google Business-ready structure'],
    deliverables: ['Live website', 'Editable content sections', 'Contact form wired to your email/WhatsApp'],
  },
  {
    slug: 'restaurant-hotel-websites',
    title: 'Restaurant & Hotel Websites',
    short: 'Menus, galleries, bookings and location details, designed for how guests actually browse.',
    whoFor: 'Restaurants, cafes, hotels and stays that want an appealing, easy-to-navigate digital front door.',
    whatIs:
      'A visually led site built around your menu or rooms, photography, and a clear path to reservation or contact.',
    included: ['Menu / room showcase layout', 'Image gallery', 'Location & hours section', 'Reservation/contact CTA'],
    deliverables: ['Live website', 'Structure ready for photos you provide', 'Google Maps integration'],
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    short: 'A single, focused page built to convert visitors from one specific campaign or offer.',
    whoFor: 'Product launches, ad campaigns, events, or a single service you want to promote on its own.',
    whatIs: 'A one-page, conversion-focused site with a single clear call-to-action and no distractions.',
    included: ['Single-page build', 'Conversion-focused layout', 'Fast load time', 'Mobile optimisation'],
    deliverables: ['Live landing page', 'Source code'],
  },
  {
    slug: 'ecommerce-catalog-websites',
    title: 'E-commerce / Catalog Websites',
    short: 'Showcase and sell your products online, from a simple catalogue to a full storefront.',
    whoFor: 'Shops and product-based businesses that want customers to browse — and optionally buy — online.',
    whatIs:
      'A product catalogue with clear categories and detail pages; checkout/payment integration is scoped separately depending on your needs.',
    included: ['Product listing & detail pages', 'Category filtering', 'Mobile-optimised browsing', 'Contact/enquiry or checkout flow (scoped per project)'],
    deliverables: ['Live catalogue/store', 'Source code', 'Guidance on adding products'],
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    short: 'Rebuild an outdated or underperforming website without losing what already works.',
    whoFor: 'Businesses with an existing site that looks dated, loads slowly, or doesn\u2019t work well on mobile.',
    whatIs: 'We audit your current site, keep what\u2019s effective, and rebuild the rest with modern design and performance standards.',
    included: ['Current site audit', 'Modernised design', 'Performance improvements', 'Content migration'],
    deliverables: ['Redesigned, live website', 'Before/after performance notes'],
  },
  {
    slug: 'frontend-development',
    title: 'Frontend Development',
    short: 'Implementation-only work if you already have a design or need a specific interface built.',
    whoFor: 'Teams or designers who already have mockups and need clean, working frontend code.',
    whatIs: 'We build the interface to match your design system or Figma file using modern frontend tooling.',
    included: ['Component-based build', 'Responsive implementation', 'Cross-browser testing'],
    deliverables: ['Working frontend code', 'Component documentation'],
  },
  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    short: 'Ongoing updates, fixes and small changes after your site is live.',
    whoFor: 'Businesses that want their site kept up to date without hiring an in-house developer.',
    whatIs: 'A support arrangement for content updates, bug fixes, and small feature additions after launch.',
    included: ['Content/copy updates', 'Bug fixes', 'Minor feature additions', 'Uptime & security checks'],
    deliverables: ['Agreed monthly scope of changes (package details discussed directly)'],
  },
]

export default services
