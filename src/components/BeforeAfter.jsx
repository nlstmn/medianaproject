import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title'
import { Link } from 'react-scroll'

const BeforeAfter = () => {

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
        <section id="before-after">
            <Container>
                <div className="project-wrapper">
                    <Title title="До / После" />
                    <Row>
                        <Col lg={4} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <img
                                        src="https://i.ibb.co/M1Yn1n8/before-after-1.jpg"
                                        alt="Before After"
                                        className="roundedd shadow-lg ba-img"
                                    />
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <img
                                        src="https://i.ibb.co/sgLZtbs/before-after-2.jpg"
                                        alt="Before After"
                                        className="roundedd shadow-lg ba-img"
                                    >
                                    </img>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <img
                                        src="https://i.ibb.co/q9ZWrSZ/before-after-8.jpg"
                                        alt="Before After"
                                        className="roundedd shadow-lg ba-img"
                                    >
                                    </img>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <img
                                        src="https://i.ibb.co/n6gqWW4/before-after-3.jpg"
                                        alt="Before After"
                                        className="roundedd shadow-lg ba-img"
                                    >
                                    </img>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <img
                                        src="https://i.ibb.co/wzH2PwR/before-after-4.jpg"
                                        alt="Before After"
                                        className="roundedd shadow-lg ba-img"
                                    >
                                    </img>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <img
                                        src="https://i.ibb.co/vjK4ZYc/before-after-5.jpg"
                                        alt="Before After"
                                        className="roundedd shadow-lg ba-img"
                                    >
                                    </img>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <img
                                        src="https://i.ibb.co/Fqfjf1L/before-after-6.jpg"
                                        alt="Before After"
                                        className="roundedd shadow-lg ba-img"
                                    >
                                    </img>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <img
                                        src="https://i.ibb.co/DMb4F8m/before-after-7.jpg"
                                        alt="Before After"
                                        className="roundedd shadow-lg ba-img"
                                    >
                                    </img>
                                </div>
                            </Fade>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Fade bottom duration={1000} delay={600} distance="30px">
                                <div className="about-wrapper__image">
                                    <img
                                        src="https://i.ibb.co/1LL34kh/before-after-9.jpg"
                                        alt="Before After"
                                        className="roundedd shadow-lg ba-img"
                                    >
                                    </img>
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
                                    <h3 className="project-wrapper__text-title beforeaftertext">
                                        Наше агентство работает с
                                        лучшими клиниками Турции, тем самым обеспечивая качество и эффективность для наших
                                        пациентов. Мы сбережем самое ценное — ваше время и здоровье, предоставляя услуги
                                        высококвалифицированных дипломированных врачей–координаторов.
                                    </h3>
                                    <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                                        <p className="hero-cta beforeafterbutton">
                                            <span className="cta-btn-main cta-btn--more">
                                                <Link to="testimonials" smooth duration={1000}>
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
