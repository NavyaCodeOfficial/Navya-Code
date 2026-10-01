/**
 * Layout wrapper for a page section: consistent max-width, horizontal padding,
 * and vertical rhythm. `tight` reduces vertical padding for denser sections.
 */
export default function Section({ children, className = '', tight = false, id }) {
  return (
    <section id={id} className={`container-page ${tight ? 'py-12 md:py-16' : 'py-16 md:py-24'} ${className}`}>
      {children}
    </section>
  )
}
