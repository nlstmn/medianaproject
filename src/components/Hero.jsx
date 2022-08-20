import React, { useContext, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'

const Header = () => {

  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <div class="waviy">
          <span>M</span>
          <span>E</span>
          <span>D</span>
          <span>I</span>
          <span>A</span>
          <span>N</span>
          <span>A</span>
        </div>
          <img
            src="https://i.ibb.co/1TVcXQW/instagram.png"
            alt="Before After"
            className="instimg"
          >
          </img>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            Мы — агентство по организации и сопровождению на пластические операции
            <br /><span className="text-color-main"> в Турции.</span>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn-main cta-btn--more">
              <Link to="about" smooth duration={1000}>
                Узнать больше
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  )
}

export default Header
