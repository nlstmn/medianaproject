import React, { useState, useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import BeforeAfter from './BeforeAfter/BeforeAfter'
import Testimonials from './Testimonials/Testimonials'
import Footer from './Footer/Footer'
import { PortfolioProvider } from '../context/context'
import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data'

function App() {

  const [hero, setHero] = useState({})
  const [about, setAbout] = useState({})
  const [projects, setProjects] = useState([])
  const [contact, setContact] = useState({})
  const [footer, setFooter] = useState({})

  useEffect(() => {
    setHero({ ...heroData })
    setAbout({ ...aboutData })
    setProjects([...projectsData])
    setContact({ ...contactData })
    setFooter({ ...footerData })
  }, [])

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Services />
      <Contact />
      <BeforeAfter />
      <Testimonials />
      <Footer />
    </PortfolioProvider>
  )
}

export default App