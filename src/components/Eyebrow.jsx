/** Small section label used above a heading, e.g. "Services". Not tracked/all-caps by design — keep it readable. */
export default function Eyebrow({ children }) {
  return <p className="text-sm font-semibold text-electric">{children}</p>
}
