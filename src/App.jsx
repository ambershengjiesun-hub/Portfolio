import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PasswordGate from './components/PasswordGate'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SideNav from './components/SideNav'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CareerDirections from './components/CareerDirections'
import AboutSite from './components/AboutSite'
import Footer from './components/Footer'

export default function App() {
  const [unlocked, setUnlocked] = useState(() => {
    return sessionStorage.getItem('_pw') === '1'
  })

  return (
    <>
      <AnimatePresence>
        {!unlocked && <PasswordGate onUnlock={() => setUnlocked(true)} />}
      </AnimatePresence>

      {unlocked && (
        <div className="min-h-screen bg-surface-900 text-white">
          <Navbar />
          <Hero />
          <SideNav />
          <About />
          <Timeline />
          <Projects />
          <Skills />
          <CareerDirections />
          <AboutSite />
          <Footer />
        </div>
      )}
    </>
  )
}
