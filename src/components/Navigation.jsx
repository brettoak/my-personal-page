import { useEffect } from 'react'

export default function Navigation() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const target = document.querySelector(anchor.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <nav className="nav-bar fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full"></div>
          Brett Han
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#features" className="nav-link">FEATURES</a>
          <a href="#portfolio" className="nav-link">PORTFOLIO</a>
          <a href="#contact" className="nav-link">CONTACTS</a>
        </div>
      </div>
    </nav>
  )
}

