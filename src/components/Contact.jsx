import AnimatedCard from './AnimatedCard'

export default function Contact() {
  return (
    <section id="contact" className="contact-section py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-title-small mb-2">CONTACTS</p>
          <h2 className="section-title-large">Get In Touch</h2>
          <p className="text-gray-light mt-4 max-w-2xl mx-auto">
            I'd love to hear your ideas, discuss projects, or explore collaboration opportunities. Feel free to reach
            out to me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <AnimatedCard>
            <div className="contact-item text-center">
              <div className="skill-icon text-pink mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-light">kanbrette@gmail.com</p>
            </div>
          </AnimatedCard>
          <AnimatedCard>
            <a href="https://www.linkedin.com/in/brett-han-melbourne" target="_blank" rel="noopener noreferrer">
              <div className="contact-item text-center">
                <div className="skill-icon text-pink mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-gray-light">linkedin.com/in/brett-han-melbourne</p>
              </div>
            </a>
          </AnimatedCard>
          <AnimatedCard>
            <div className="contact-item text-center">
              <div className="skill-icon text-pink mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-light">Melbourne, Australia</p>
            </div>
          </AnimatedCard>
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/brett-han-melbourne" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </div>
          </a>
          <a href="https://github.com/brettoak" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 0 0 8.207 11.385c.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.73.083-.73 1.205.086 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.494.997.108-.776.418-1.305.761-1.606-2.665-.304-5.467-1.333-5.467-5.931 0-1.31.469-2.382 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.839 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.8.576A12.004 12.004 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-light text-sm">© 2025 Brett Han. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

