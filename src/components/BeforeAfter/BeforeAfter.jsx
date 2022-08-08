import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../Title/Title'
import ProjectImg from '../Image/ProjectImg'
import { Link } from 'react-scroll'
import AboutImg from '../Image/AboutImg'
import PortfolioContext from '../../context/context'

const BeforeAfter = () => {

    const { about } = useContext(PortfolioContext)
    const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about

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
                    <Title title="До / После" />
                    <Row>
                        <Col lg={6} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <AboutImg alt="profile picture" filename={img} />
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <AboutImg alt="profile picture" filename={img} />
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
                                                <Link to="about" smooth duration={1000}>
                                                    Увидеть отзывы
                                                </Link>
                                            </span>
                                        </p>
                                    </Fade>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default BeforeAfter
