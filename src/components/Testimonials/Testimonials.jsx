import React, { useContext, useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Container, Row, Col } from 'react-bootstrap'
import Title from '../Title/Title'
import AboutImg from '../Image/AboutImg'
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
                                <div class="pt-3 text-uppercase name">
                                    Robert Garrison
                                </div>
                                <div class="designation">Android Developer</div>
                            </div>
                            <div class="face back-face">
                                <span class="fas fa-quote-left"></span>
                                <div class="testimonial">
                                    I made bacck the purchase price in just 48 hours! Thank you for making it pain less,
                                    pleasant.
                                    The service was execellent. I will refer everyone I know.
                                </div>
                                <span class="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                    <div class="cardsingle">
                        <div class="card">
                            <div class="face front-face">
                                <div class="pt-3 text-uppercase name">
                                    Jeffery Kennan
                                </div>
                                <div class="designation">Full Stack Developer</div>
                            </div>
                            <div class="face back-face">
                                <span class="fas fa-quote-left"></span>
                                <div class="testimonial">
                                    Really good, you have saved our business! I made bacck the purchase price in just 48 hours!
                                    man, this thing is getting better and better as I learn more about it.
                                </div>
                                <span class="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                    <div class="cardsingle">
                        <div class="card">
                            <div class="face front-face">
                                <div class="pt-3 text-uppercase name">
                                    Issac Maxwell
                                </div>
                                <div class="designation">Finance Director</div>
                            </div>
                            <div class="face back-face">
                                <span class="fas fa-quote-left"></span>
                                <div class="testimonial">
                                    Account keeper is the most valuable business research we have EVER purchased. Without
                                    electrician, we would ahave gone bankrupt by now.
                                </div>
                                <span class="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section >
    )
}

export default Testimonials
