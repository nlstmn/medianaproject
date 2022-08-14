import React, { useContext, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title/Title'
import { Link } from 'react-scroll'

const Contact = () => {

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
                    <Title title="АНКЕТА" />
                    <Row>
                        <Col lg={2}>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Fade
                                left={isDesktop}
                                bottom={isMobile}
                                duration={1000}
                                delay={500}
                                distance="30px"
                            >
                                <form id="contact-form" role="form">
                                    <div className="controls">
                                        <div className="form-group-contact">
                                            <label for="form_name">
                                                <h3 className="beforeaftertext">
                                                    Ваше имя
                                                </h3>
                                            </label>
                                            <input id="form_name" type="text" name="name" className="form-control contactinput" placeholder="Пожалуйста, заполните поле с вашим именем" required="required" data-error="Firstname is required." />
                                        </div>
                                        <div className="form-group-contact">
                                            <label for="form_phone">
                                                <h3 className="beforeaftertext">
                                                    Ваш номер телефона
                                                </h3>
                                            </label>
                                            <input id="form_phone" type="phone" name="phone" className="form-control contactinput" placeholder="Пожалуйста, заполните поле с вашим телефоном" required="required" data-error="Valid phone is required." />
                                        </div>
                                        <div className="form-group-contact">
                                            <label for="form_username">
                                                <h3 className="beforeaftertext">
                                                    Ник в Instagram или Telegram
                                                </h3>
                                            </label>
                                            <input id="form_username" type="username" name="username" className="form-control contactinput" placeholder="Пожалуйста, заполните поле с вашим ником" required="required" data-error="Valid email is required." />
                                        </div>
                                        <div className="form-group-contact">
                                            <label for="form_need">
                                                <h3 className="beforeaftertext">
                                                    Какая операция вас интересует?
                                                </h3>
                                            </label>
                                            <select id="form_need" name="need" className="form-control contactinput" required="required" data-error="Please specify your need.">
                                                <option value="" selected disabled>-- Выберите интересующую вас операцию --</option>
                                                <option >Ринопластика</option>
                                                <option >Маммопластика</option>
                                                <option >Блефаропластика</option>
                                                <option >Абдоминопластика</option>
                                                <option >Липосакция</option>
                                                <option >Подтяжка лица</option>
                                                <option >Пересадка волос</option>
                                                <option >Липоскульптурирование</option>
                                                <option >Другое</option>
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group-contact">
                                                    <label for="form_message">
                                                        <h3 className="beforeaftertext">
                                                            Были ли ранее операции? Какие?
                                                        </h3>
                                                    </label>
                                                    <textarea id="form_message" name="message" className="form-control contactinput" placeholder="Пожалуйста, заполните поле с вашими ответами" rows="4" required="required" data-error="Please, leave us a message." />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <p className="hero-cta">
                                                    <span className="cta-btn-main cta-btn--more">
                                                        <input type="submit" className="btn btn-send btn-block contactinputbutton" value="Отправить" />
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Fade>
                        </Col>
                        <Col lg={2}>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Contact