import { useEffect, useState } from 'react'

export default function Hero() {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = async () => {
    const email = 'kanbrette@gmail.com'
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
      alert('Failed to copy email. Please copy manually: ' + email)
    }
  }

  return (
    <section id="home" className="hero-section pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="animate-fade-in text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Code with clarity. Build with purpose.
            </h1>
            <p className="text-xl md:text-2xl text-gray-light mb-2">Ship reliable software.</p>
            <p className="text-xl md:text-2xl text-gray-light mb-8">Explain it clearly.</p>
            <p className="text-base md:text-lg text-gray-light mb-8 leading-relaxed">
              Hi, I'm <span className="text-pink">Brett Han</span> — a Melbourne-based Full-Stack Developer
              passionate about clean architecture and thoughtful design. I create scalable, maintainable web
              systems with clear documentation and considerate user experience.
            </p>
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <button className="cursor-pointer btn-pink px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Download CV
              </button>
              <button
                onClick={handleCopyEmail}
                className={`${
                  emailCopied
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gray-800 hover:bg-gray-700'
                } border cursor-pointer border-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
              >
                {emailCopied ? 'Copied!' : 'Copy email'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

