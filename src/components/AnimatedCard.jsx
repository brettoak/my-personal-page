import { useEffect, useRef } from 'react'

export default function AnimatedCard({ children, className = '' }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observerOptions = {
      threshold: 0,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    card.style.opacity = '1'
    card.style.transform = 'translateY(0px)'
    card.style.transition = 'opacity 0s ease, transform 0s ease'
    observer.observe(card)

    return () => {
      if (card) {
        observer.unobserve(card)
      }
    }
  }, [])

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  )
}

