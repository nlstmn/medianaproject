import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Title from '../Title/Title'
import AboutImg from '../Image/AboutImg'
import { Container, Row, Col } from 'react-bootstrap'
import PortfolioContext from '../../context/context'

const Contact = () => {
  const { about } = useContext(PortfolioContext)
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about

  return (
    <section id="contact">
      <Container>
        <Title title="Наши пациенты" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Текст о пациентах
            </p>
            <Row className="row-wrapper">
              <Col lg={4} sm={12}>
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <div className="about-wrapper__image">
                    <AboutImg alt="profile picture" filename={img} />
                  </div>
                </Fade>
              </Col>
              <Col lg={4} sm={12}>
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <div className="about-wrapper__image">
                    <AboutImg alt="profile picture" filename={img} />
                  </div>
                </Fade>
              </Col>
              <Col lg={4} sm={12}>
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <div className="about-wrapper__image">
                    <AboutImg alt="profile picture" filename={img} />
                  </div>
                </Fade>
              </Col>
            </Row>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              //href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              Посмотреть До / После
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  )
}

export default Contact
