import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Title from './Title/Title'
import AboutImg from './Image/AboutImg'
import { Container, Row, Col } from 'react-bootstrap'
import PortfolioContext from '../context/context'
import { Link } from 'react-scroll'

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
              Мы являемся агенством медицинского туризма, которое предоставляет полное сопровождение и
              официальную информацию о клиниках для того, чтобы наши пациенты могли найти лучшие
              медицинские решения в сфере пластической хирургии в Турции. Наши пациенты всегда уходят от нас с улыбками на лицах 🤍
            </p>
            <Row className="row-wrapper">
              <Col lg={4} sm={12}>
                <Fade bottom duration={1000} delay={600} distance="30px">
                  <div className="about-wrapper__image">
                    <AboutImg alt="profile picture" filename={img} />
                    {/*<video width="320" height="240" controls>
                      <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
  <source src="https://www.veed.io/view/b503bab3-046d-44f5-99c1-dceabb0a2c19?sharingWidget=true" type="video/mp4" />
                    </video>*/}
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
            <Link
              to="before-after"
              smooth duration={1000}
              className="cta-btn cta-btn--resume"
            >
              Посмотреть До / После
            </Link>
          </div>
        </Fade>
      </Container>
    </section>
  )
}

export default Contact
