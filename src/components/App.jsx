import React, { useState, useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About'
import Services from './Services/Services'
import Patients from './Patients'
import BeforeAfter from './BeforeAfter'
import Contact from './Contact'
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
      <Patients />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <Footer />
    </PortfolioProvider>
  )
}

export default App