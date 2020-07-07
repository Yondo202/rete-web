import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap'

class chances extends Component {
  render() {
    return (
              <div className="ChancePar">
                <Container>
                        <Row style={{marginBottom:60}}>
                            <Col>
                               <h2 className="Title">Танд олгож буй боломжууд</h2>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:100}}>
                            <Col md={6}>
                                <div className="content">

                                <h3>Контент бүтээлгэх</h3>
                                <div className="line"></div>
                                <p>ow use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover many web 
                                    sites still in their infancy. 
                                    Various versions have evolved over the years, sometimes by accident, sometimes.</p>

                                    <button type="button">Цааш нь...</button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <img src={require('../image/main1.jpg')} />
                            </Col>

                            
                            <Col md={6}>
                                  <img src={require('../image/main1.jpg')} />
                            </Col>
                            <Col md={6}>
                                <div className="content">

                                <h3>Контент бүтээлгэх</h3>
                                <div className="line"></div>
                                <p>ow use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover many web 
                                    sites still in their infancy. 
                                    Various versions have evolved over the years, sometimes by accident, sometimes.</p>

                                    <button type="button">Цааш нь...</button>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </div>
    );
  }
}

export default chances;
