import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
// import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';


class chances extends Component {

    render() {
        console.log(this.props.ChanceData, 'kakak');
        console.log(this.props.ChanceData2, 'daadad22');
        const data1 = this.props.ChanceData
        const data2 = this.props.ChanceData2
        return (
            <div className="ChancePar">
                <Container >
                    <Row style={{ marginBottom: 60 }}>
                        <Col>
                            <h2 className="Title">Танд олгож буй боломжууд</h2>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: 100 }}>


                        <Col md={6}>
                            <ScrollAnimation animateIn='bounceInLeft'
                            >
                                <div className="content">
                                    <h3>{data1.Title}</h3>
                                    <div className="line"></div>
                                    <p>{data1.Desc}</p>
                                    <Link href="/company">
                                        <button type="button">Цааш нь...</button>
                                    </Link>
                                </div>
                            </ScrollAnimation>

                        </Col>

                        <Col md={6} style={{ paddingLeft: 0 }}>
                            <ScrollAnimation
                                animateIn='fadeIn'
                                animateOut='fadeOut'>
                                <img src={`http://rete-admin.herokuapp.com${data1.Img.url}`} />
                            </ScrollAnimation>
                        </Col>




                        <Col md={6} style={{ paddingRight: 0 }}>
                            <ScrollAnimation
                                animateIn='fadeIn'
                            >
                                <img src={`http://rete-admin.herokuapp.com${data2.Img.url}`} />
                            </ScrollAnimation>
                        </Col>
                        <Col md={6}>
                            <ScrollAnimation animateIn='bounceInRight'
                            >
                                <div className="content">
                                    <h3>{data2.Title}</h3>
                                    <div className="line"></div>
                                    <p>{data2.Desc}</p>

                                    <Link href="/company">
                                        <button type="button">Цааш нь...</button>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default chances;
