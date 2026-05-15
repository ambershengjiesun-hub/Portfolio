import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PasswordGate from './components/PasswordGate'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CareerDirections from './components/CareerDirections'
import AboutSite from './components/AboutSite'
import Footer from './components/Footer'
import { sitePassword } from './data'

export default function App() {
  const [unlocked, setUnlocked] = useState(() => {
    // URL 参数中带密码，直接放行（面试官点击简历中的完整链接无需手动输入）
    const params = new URLSearchParams(window.location.search)
    if (params.get('pw') === sitePassword) {
      sessionStorage.setItem('_pw', '1')
      return true
    }
    // session 中有记录，说明本次会话已验证过
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
