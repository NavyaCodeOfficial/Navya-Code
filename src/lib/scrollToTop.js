// Scrolls to top on every route change (SPA navigation doesn't reload the page)
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
}
