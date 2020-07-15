import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class footer extends Component {
  render() {
    return (
        <div className="foodPar" style={{paddingRight:0, paddingLeft:0, backgroundColor:"#171717", height:"90%"}}>
                <Container>
                    <Row style={{marginBottom:50}}>
                        <Col md={3} sm={6} xs={12}>
                            <h6 className="title" >ABOUT US</h6>
                            <p className="title2">ABOUT US</p>
                            <p className="text" style={{marginBottom:0}}>Temuujin Sukhbaatar</p>
                            <p className="text">Co-founder</p>

                            <p className="title3">OUR ADDRESS</p>
                            <p className="text">#201, 48 apartment, Baga toirog
                                    14200, 6 th khoroo, Sukhbaatar
                                    disrict, Ulaanbaatar, MONGOLIA</p>
                            
                            <p className="title3">CONTACT US</p>
                            <p className="text" style={{marginBottom:0}}>+976 99091911</p>
                            <p className="text">temuujin@rete.agency</p>
                        </Col>


                        <Col md={3} sm={6} xs={12}>
                            <h6 className="title" >MENU</h6>
                            <p className="text" style={{marginTop:"60px"}}>Нүүр</p>
                            <p className="text" >Бидний тухай</p>
                            <p className="text" >Байгууллага / Агентлаг</p>
                            <p className="text" >Инфлюнсер / Контент бүтээгч</p>
                        </Col>


                        <Col md={3} sm={6} xs={12}>
                            <h6 className="title" >HOME</h6>
                            <p className="text" style={{marginTop:"60px"}}>Эхлэл</p>
                            <p className="text" >Бидний тухай</p>
                            <p className="text" >Боломжууд</p>
                            <p className="text" >Хамтрагчид</p>
                        </Col>
                        <Col md={3} sm={6} xs={12}>
                            <div className="Subs">
                                <h6 className="title" >SUBSCRIBE US</h6>
                                <p className="title2">ЭХЛЭХ</p>
                                <p className="text" >Танд илүү их боломжууд нээгдэнэ.</p>
                                <input type="email"  placeholder="Mail хаягаа оруулна уу"/>
                                <button>SUBSCRIBE</button>
                                <p className="title2" style={{marginTop:45, fontSize:13}}>FOLLOW US</p>
                            </div>
                        </Col>
                    </Row>

                   
                </Container>
                <div className="footEnd">
                    <Container>
                         <Row>
                            <Col sm={6} xs={12} table-im t-left height-auto-mobile t-center-xs>
                                <img src={require('../image/logo.png')} />     
                            </Col>
                            <Col sm={6} xs={12} table-im t-right height-auto-mobile t-center-xs xxs-mt-mobile>
                                <div className="Par">
                                    <p> Term and Condition | Privacy Policy  </p><br />
                                    <p>© 2020. Powered By rete agency.</p>
                                </div>
                                
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

    );
  }
}

export default footer;
