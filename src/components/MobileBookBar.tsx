import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MobileBookBar = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      id="mobile-book-bar"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease'
      }}
    >
      <a
        href="tel:9545485809"
        className="text-primary/80 text-[13px] no-underline tracking-wider"
      >
        📞 786-384-4038
      </a>
      <Link
        to="/book"
        className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-[13px] font-medium tracking-widest uppercase no-underline flex-shrink-0"
      >
        Book Now
      </Link>
    </div>
  )
}

export default MobileBookBar
