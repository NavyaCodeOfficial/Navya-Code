import { Link } from 'react-router-dom'

/**
 * Shared button/link component.
 * variant: 'primary' (gradient fill) | 'secondary' (outline) | 'ghost' (text only)
 * Renders a <Link> for internal `to`, an <a> for external `href`, or a <button> otherwise.
 */
export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 focus-visible:outline-2 active:scale-[0.98]'

  const styles = {
    primary: 'bg-brand-gradient text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:brightness-110',
    secondary: 'border border-white/20 text-ink hover:border-white/40 hover:bg-white/5',
    ghost: 'text-ink/80 hover:text-ink',
  }

  const classes = `${base} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
