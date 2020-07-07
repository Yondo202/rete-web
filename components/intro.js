import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class intro extends Component {
    render() {
        return (
            <Container className="introPar">
                <Row style={{marginBottom: 60}}>
                    <Col md={12}>
                        <div className="introText">
                             <h1>Танилцуулга</h1>
                            <p className="title">Цахим эринд инфлюнсер болон брэнд, агентлагуудыг холбож тэднийг дэмжихэд бидний гол зорилго оршино</p>
                            <p className="desc">Инфлюнсэр маркетинг нь уламжлалт сурталчилгааны арга дээр орчин үеийн контент суурьтай маркетингийг ашигланщдаг бөгөөд инфлюснэр болон олон нийтийн 
                            цахим сүлжээнд олон дагагчтай, тухайн салбартаа эксперт гэж тооцогддог хүмүүсээр бараа бүтээгдэхүүн, үйлчилгээгээ сурталчлах, дэмжлэг авах замаар ажилладаг олон нийтийн цахим сүлжээний маркетингийн нэг төрөл юм.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="introNum" style={{marginBottom:150}}>
                        <Col md={3}>
                             <h1>11.000</h1>
                             <p>Нийт ажлууд.</p>
                        </Col>
                       
                        <Col md={3}>
                             <h1>12.200</h1>
                             <p>Инфлюнсерүүд.</p>
                        </Col>
                       
                        <Col md={3}>
                             <h1>3.000</h1>
                             <p>Байгууллагууд.</p>
                        </Col>
                       
                        <Col md={3}>
                             <h1>14.000</h1>
                             <p>Контент бүтээгчид.</p>
                        </Col>
                </Row>
            </Container>
        )
    }
}

export default intro
