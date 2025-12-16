import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <Hero />
      <Features />
      <Portfolio />
      <Contact />
    </ThemeProvider>
  )
}

export default App
