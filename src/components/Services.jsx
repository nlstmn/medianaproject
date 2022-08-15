import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title'
import ProjectImg from './Image/ProjectImg'
import { Link } from 'react-scroll'

const Services = () => {

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Услуги" />
          <Row>
            <Col lg={4} sm={12}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">▹ Бронирование операции</h3><br />
                  <h3 className="project-wrapper__text-title">▹ Помощь в бронировании билетов на самолет и отеля</h3>
                </div>
              </Fade>
            </Col>
            <Col lg={4} sm={12}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">▹ 8 трансферов (аэропорт-отель-больница)</h3><br />
                  <h3 className="project-wrapper__text-title">▹ Помощь с переводом (русский-турецкий)</h3>
                </div>
              </Fade>
            </Col>
            <Col lg={4} sm={12}>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">▹ Сопровождение в день проведения консультации, операции и в день контроля</h3>
                  <h3 className="project-wrapper__text-title">▹ Покупка медикаментов</h3>
                </div>
              </Fade>
            </Col>
            <Col lg={12} sm={12} className="project-also">
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div className="project-wrapper">
                  <h3 className="project-wrapper__text-title">А также: русскоязычная информационная поддержка и помощь во всех вопросах</h3>
                  <div>
                    <p className='project-wrapper-contact'>
                      Хочешь, чтобы мы связались с тобой? Тогда заполни анкету.
                    </p>
                  </div>
                  <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                    <p className="hero-cta">
                      <span className="cta-btn-main cta-btn--more">
                        <Link to="contactt" smooth duration={1000}>
                          Заполнить анкету
                        </Link>
                      </span>
                    </p>
                  </Fade>
                  {/*<a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                  >
                    See Live
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main"
                  >
                    Source Code
                  </a>*/}
                </div>
              </Fade>
            </Col>
            {/*<Col lg={8} sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <div className="project-wrapper__image">
                        <a
                          href={url || '#!'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <ProjectImg alt={title} filename={img} />
                            </div>
                          </Tilt>
                        </a>
                      </div>
                    </Fade>
                    </Col>*/}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Services
