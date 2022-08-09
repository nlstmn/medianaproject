import React, { useContext, useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../Title/Title'
import PortfolioContext from '../../context/context'
import { Link } from 'react-scroll'

const Testimonials = () => {
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
        <section id="testimonials">
            <Container>
                <Title title="Отзывы:" />
                <Row className="testim-wrapper">
                    <div class="cardsingle">
                        <div class="card">
                            <div class="face front-face">
                                <div class="testimonial">
                                    « я ещё хотела сказать огромное спасибо за вашу работу!🤍все прошло даже лучше, чем я могла представить) очень тёплый и профессиональный
                                    приём, поддержка постоянно и ответственный выбор врача. спасииибо за помощь в осуществлении мечты❤️🔥 »
                                </div>
                            </div>
                            <div class="face back-face">
                                <div class="pt-3 text-uppercase name">
                                    — Аня
                                </div>
                                <div class="designation">Маммопластика</div>
                            </div>
                        </div>
                    </div>
                    <div class="cardsingle">
                        <div class="card">
                            <div class="face front-face">
                                <div class="testimonial">
                                    « я ещё хотела сказать огромное спасибо за вашу работу!🤍все прошло даже лучше, чем я могла представить) очень тёплый и профессиональный
                                    приём, поддержка постоянно и ответственный выбор врача. спасииибо за помощь в осуществлении мечты❤️🔥 »
                                </div>
                            </div>
                            <div class="face back-face">
                                <div class="pt-3 text-uppercase name">
                                    — Аня
                                </div>
                                <div class="designation">Маммопластика</div>
                            </div>
                        </div>
                    </div>
                    <div class="cardsingle">
                        <div class="card">
                            <div class="face front-face">
                                <div class="testimonial">
                                    « Большое вам спасибо! Вы осуществили мою мечту за одну неделю🔥 Хочу поблагодарить команду за то, что вы очень оперативно
                                    решали все вопросы! Ну и, конечно, хочу поблагодарить своего хирурга, золотые руки - взялся за мой случай несмотря на сложность! »
                                </div>
                            </div>
                            <div class="face back-face">
                                <div class="pt-3 text-uppercase name">
                                    — Ева
                                </div>
                                <div class="designation">Ринопластика</div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section >
    )
}

export default Testimonials
