// Portfolio / work data — edit or add projects here.
// Set `status: 'concept'` for demo/concept work so the UI labels it clearly.
// Never mark a project as a real client unless it actually is one.

export const categories = ['All', 'Business', 'Restaurant', 'E-commerce', 'Landing Page', 'UI/UX']

export const projects = [
  {
    slug: 'Velora-Studio',
    name: 'Velora-Studio',
    category: 'Business',
    status: 'concept', // 'concept' | 'live'
    description: 'A concept Studio Website. For Bussineses and agency to grow.',
    tech: ['React', 'Tailwind CSS'],
    image: "/images/work/VeloraStudio.png", // PLACEHOLDER — add a screenshot to /public/images/work/ and reference it here
  },
  {
    slug: 'Mitti & Matti',
    name: 'Mitti & Matti',
    category: 'E-commerce',
    status: 'concept',
    description: 'A concept handmade goods catalogue with category browsing and product detail pages.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    image: "/images/work/Mitti&Maati.png", // PLACEHOLDER
  },
  {
    slug: 'Portfolio-Website',
    name: 'Portfolio',
    category: 'UI/UX',
    status: 'concept',
    description: 'A Website for Individuals to showcase their Portfolio, work, abilities and etc.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    image: "/images/work/Portfolio.png", // PLACEHOLDER
  },
  {
    slug: 'Nexus-Studio',
    name: 'Nexus-Studio',
    category: 'Landing Page',
    status: 'concept',
    description: 'A single-page product launch concept built around one clear call-to-action.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    image: "/images/work/NexusStudio.png", // PLACEHOLDER
  },
  {
    slug: 'Aesthetic Shop',
    name: 'Aesthetic Shop',
    category: 'E-commerce',
    status: 'concept',
    description: 'A concept Store website for e-commerce bussiness. with Categories to explore, enquiry form and add-to-cart function.',
    tech: ['React', 'Tailwind CSS'],
    image: "/images/work/VeloraDesign.png", // PLACEHOLDER
  },
  {
    slug: 'Velora-Restro',
    name: 'Velora-Restro',
    category: 'Restaurant',
    status: 'concept',
    description: 'A concept restaurant site with a digital menu, photo gallery and reservation contact section.',
    tech: ['React', 'Three.js'],
    image: "/images/work/VeloraRestro.png", // PLACEHOLDER
  },
]

export default projects