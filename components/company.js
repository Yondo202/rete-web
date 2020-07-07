import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GiSupersonicArrow, GiStairsGoal,GiMirrorMirror,GiSwordsPower } from 'react-icons/gi';
import { AiFillDashboard } from 'react-icons/Ai';
import {MdPhotoSizeSelectLarge} from 'react-icons/md';
import {TiSocialYoutubeCircular} from 'react-icons/ti'


class company extends Component {
    render() {
        return (
            <div className="companyTopPar">
                <div className="companyPar">
                    <div className="companyCover" style={{ backgroundImage: `url(${require("../image/bg2.jpg")})` }}>


                    </div>
                    <div className="textPar">
                        <h1>Бизнесээ рекламдах амархан боллоо</h1>
                        <h5>20 жилийн дараа Та өнөөдөр илүү хичээгээгүйд л харамсана. Тиймээс, эрэл хий, мөрөөд, нээж илрүүл - Mark Twain-</h5>
                        <p>Инфлюнсэр маркетинг нь уламжлалт сурталчилгааны арга дээр орчин үеийн контент суурьтай маркетингийг ашигланщдаг бөгөөд инфлюснэр болон олон нийтийн
                        цахим сүлжээнд олон дагагчтай, тухайн салбартаа эксперт гэж тооцогддог хүмүүсээр бараа бүтээгдэхүүн, үйлчилгээгээ сурталчлах, дэмжлэг авах замаар ажилладаг олон нийтийн цахим
                          сүлжээний маркетингийн нэг төрөл юм.</p>
                    </div>

                </div>
                <Container style={{ textAlign: "center" }}>
                    <Row style={{ marginBottom: 80 }}>
                        <Col md={12} >
                            <h2>Санал болгож буй боломжууд</h2>
                        </Col>
                    </Row>
                    <Row style={{marginBottom:100}}>
                        <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <div className="Box">
                                <GiSupersonicArrow />
                                <p className="smTitle">СУРТАЛЧИЛГААНЫ ХАМГИЙН ЗӨВ ШИЙДЭЛ</p>
                                <p className="smDesc">Телевиз, Фм зэрэг хуучирсан сурталчилгааны арга биш илүү шинэлэг, илүү сонирхолтой, илүү оновчтой сурталчлах боломж</p>
                            </div>
                        </Col>
                        <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <div className="Box">
                                <GiStairsGoal />
                                <p className="smTitle">ИНФЛЮНСЭРЭЭ СОНГОХ</p>
                                <p className="smDesc">Өөрийн бүтээгдэхүүний онцлог, цар хүрээнд тохируулан сурталчлах инфлюнсэрийг сонгох боломж</p>
                            </div>
                        </Col>
                        <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <div className="Box">
                                <AiFillDashboard />
                                <p className="smTitle">ХЭРЭГЛЭХЭД ХЯЛБАР ДАШБОАРД</p>
                                <p className="smDesc">Бүх сурталчилгаа, контент саналуудын статистик, зарцуулсан мөнгөн дүнг нийтэд нь болон сурталчилгаа тус бүрээр хянах боломжтой</p>
                            </div>
                        </Col>




                        <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <div className="Box">
                                <MdPhotoSizeSelectLarge />
                                <p className="smTitle">ҮЗЭГЧДЭЭ АНГИЛЖ ИЛҮҮ НАРИЙН СОНГОХ</p>
                                <p className="smDesc">Бүтээгдэхүүний онцлогтоо тохируулан үзэгчдээ ангилж, илүү хүртээмжтэй, чанартай сурталчилгааг явуулах боломж</p>
                            </div>
                        </Col>
                        <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <div className="Box">
                                <GiMirrorMirror />
                                <p className="smTitle">ШИЛЭН БАЙДАЛ</p>
                                <p className="smDesc">Сурталчилгааны хандалт, үзэлт, сэтгэгдэлийн тоог шууд харах, хянах боломж</p>
                            </div>
                        </Col>
                        <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <div className="Box">
                                <TiSocialYoutubeCircular />
                                <p className="smTitle">СУРТАЛЧЛАХ СОШИАЛ СУВГАА СОНГОХ </p>
                                <p className="smDesc">Хэрэглэгдийнхээ хамгийн их төвлөрсөн сошиал сувгийг сонгон сурталчлах боломж</p>
                            </div>
                        </Col>
                    </Row>

                    
                             <Row style={{ marginBottom: 80 }}>
                                <Col md={12} >
                                    <h2>Үр дүнгээс хамаарсан төлбөр төлөлт</h2>
                                </Col>
                            </Row>
                </Container>

                
                <div className="imagePar" >
                    <Container>
                            <Row style={{marginBottom:100, paddingBottom:100}}>
                                <Col md={4}>
                                        <div className="imgBorder" style={{ textAlign: "center" }}>
                                            <img src={require('../image/inf2.jpg')} />
                                        </div>
                                        <div>
                                            <p className="title">Дагагчийн тоо</p>
                                            <p className="desc">Инфлюнсерийн дагагчийн тооноос хамаарч төлбөр бодогдох систем өөрчлөгдөх</p>
                                        </div>
                                </Col>
                                <Col md={4}>
                                        <div className="imgBorder" style={{ textAlign: "center" }}>
                                            <img src={require('../image/inf2.png')} />
                                        </div>
                                        <div>
                                            <p className="title">Engagement тоо</p>
                                            <p className="desc">Инфлюнсерийн оруулсан постын хандалтаас хамаарч төлбөр бодогдох систем</p>
                                        </div>
                                </Col>
                                <Col md={4}>
                                        <div className="imgBorder" style={{ textAlign: "center" }}>
                                            <img src={require('../image/inf2.jpg')} />
                                        </div>
                                        <div>
                                            <p className="title">Дагагчийн тоо</p>
                                            <p className="desc">Контент захиалгын дагуу хийсэн контентийн тоогоор төлбөр бодогдох систем</p>
                                        </div>
                                </Col>
                            </Row>
                           
                    </Container>
                     
                </div>

                    <Container className="start">
                              <Row style={{marginBottom:100}}>
                                <Col style={{textAlign:"center"}}>
                                    <p>Та доорх эхлэх товчыг дарж шууд бүртгүүлэх болон манай маркетинг багтай дараах утсаар холбогдох боломжтой - 99119911</p>
                                <button ><GiSwordsPower /> Эхлэх</button>
                                </Col>
                            </Row>
                     </Container>
                          
            </div>

        );
    }
}

export default company;
