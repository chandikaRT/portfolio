import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Analytics />
    </>
  )
}
