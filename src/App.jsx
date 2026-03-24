import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <Hero />
      <Features />
      <Portfolio />
      <Contact />
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default App
