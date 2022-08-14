import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import PortfolioContext from '../../context/context'
import Fade from 'react-reveal/Fade'

import { githubButtons } from '../../mock/data'

const Footer = () => {
  const { footer } = useContext(PortfolioContext)
  const { networks } = footer
  const { isEnabled } = githubButtons

  return (
    <section id="contact">
      <Container>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <span className="back-to-top">
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-angle-up fa-4x" aria-hidden="true" />
            </Link>
          </span>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text footertext">
              © {new Date().getFullYear()} • MEDIANA • Все права защищены
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  )
}

export default Footer
