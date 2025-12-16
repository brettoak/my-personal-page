import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const target = document.querySelector(anchor.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setIsOpen(false) // Close mobile menu on click
        }
      }
    }
    
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <nav className="nav-bar fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full"></div>
          Brett Han
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#features" className="nav-link">FEATURES</a>
          <a href="#portfolio" className="nav-link">PORTFOLIO</a>
          <a href="#contact" className="nav-link">CONTACTS</a>
          <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
             <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 right-0 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col px-6 py-4 space-y-4">
          <a href="#home" className="nav-link text-lg">HOME</a>
          <a href="#features" className="nav-link text-lg">FEATURES</a>
          <a href="#portfolio" className="nav-link text-lg">PORTFOLIO</a>
          <a href="#contact" className="nav-link text-lg">CONTACTS</a>
        </div>
      </div>
    </nav>
  )
}