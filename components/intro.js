import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class intro extends Component {
    render() {
        const data = this.props.introData
        return (
            <Container className="introPar">
                <Row style={{ marginBottom: 60 }}>
                    <Col md={12}>
                        <div className="introText">
                            <h1>Танилцуулга</h1>
                            <p className="title">{data.SmTitle}</p>
                            <p className="desc">{data.Desc}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="introNum" style={{ marginBottom: 150 }}>
                    <Col md={3}>
                        <h1>{data.TotalworkCount}</h1>
                        <p>Нийт ажлууд.</p>
                    </Col>

                    <Col md={3}>
                        <h1>{data.TotalInfCount}</h1>
                        <p>Инфлюнсерүүд.</p>
                    </Col>

                    <Col md={3}>
                        <h1>{data.TotalCorpCount}</h1>
                        <p>Байгууллагууд.</p>
                    </Col>

                    <Col md={3}>
                        <h1>{data.ContentBuildersCount}</h1>
                        <p>Контент бүтээгчид.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default intro
