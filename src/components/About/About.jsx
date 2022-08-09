import React, { useContext, useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../Title/Title'
import AboutImg from '../Image/AboutImg'
import PortfolioContext from '../../context/context'
import { Link } from 'react-scroll'

const About = () => {
  const { about } = useContext(PortfolioContext)
  const { img, resume } = about

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
    <section id="about">
      <Container>
        <Title title="О Нас" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Одной из наиболее частых запросов, которые выбирают наши пациенты - является ринопластика. И совершенно объяснимо, почему, ведь структура и внешний вид носа это один из основных факторов красоты. Помимо ринопластики наша компания может предложить вам многофункциональный и разнообразный спектр эстетических операций:
                </p>
                <p className="about-wrapper__info-text">
                  • Маммопластика
                </p>
                <p className="about-wrapper__info-text">
                  • Блефаропластика
                </p>
                <p className="about-wrapper__info-text">
                  • Абдоминопластика
                </p>
                <p className="about-wrapper__info-text">
                  • Липосакция
                </p>
                <p className="about-wrapper__info-text">
                  • Подтяжка лица
                </p>
                <p className="about-wrapper__info-text">
                  • Пересадка волос
                </p>
                <p className="about-wrapper__info-text">
                  • Липоскульптурирование
                </p>
                <span className="d-flex mt-3">
                  <Link
                    to="projects"
                    smooth duration={1000}
                    className="cta-btn cta-btn--resume"
                  >
                    Что входит в наши услуги?
                  </Link>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default About
