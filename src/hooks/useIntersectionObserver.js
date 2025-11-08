import { useEffect, useRef } from 'react'

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return elementRef
}

