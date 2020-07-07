import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GiSupersonicArrow, GiStairsGoal,GiMirrorMirror,GiTakeMyMoney,GiOrbDirection } from 'react-icons/gi';
import { AiFillDashboard,AiOutlineAreaChart } from 'react-icons/Ai';
import {MdPhotoSizeSelectLarge, MdGroupAdd, MdSecurity} from 'react-icons/md';
import {TiSocialYoutubeCircular} from 'react-icons/ti'
import {FcStatistics} from 'react-icons/fc'
import {FaHandsHelping} from 'react-icons/fa'






class influencer extends Component {
  render() {
    return (
      <div className="infTopPar">
        <div className="infPar">
          <div className="infCover" style={{ backgroundImage: `url(${require("../image/bg2.jpg")})` }}>
          </div>
          <div className="textPar">
            <h1>Бид бүтээгчдийг хамгийн их дэмждэг</h1>
            <h5>Сошиалд олон дагагчтай ч хэрхэн мөнгө олохоо мэдэхгүй байна уу?</h5>
          </div>
        </div>
        <Container style={{ textAlign: "center" }}>
          <Row style={{ marginBottom: 80 }}>
            <Col md={12} >
              <h2>Санал болгож буй боломжууд</h2>
            </Col>
          </Row>
          <Row style={{ marginBottom: 100 }}>
            <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="Box">
                <GiTakeMyMoney />
                <p className="smTitle">Мөнгө олох</p>
                <p className="smDesc">Өөрийн сошиал хуудсаар дамжуулан нэмэлт мөнгө олох боломж</p>
              </div>
            </Col>
            <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="Box">
                <MdGroupAdd />
                <p className="smTitle">Өөртэйгөө адил хөдөлмөрч нэгнийг олох</p>
                <p className="smDesc">Өөрийн салбарт болон бусад салбарт ажиллаж буй хөдөлмөрч нэгнийг олж, танилын хүрээгээ тэлэх, хамтран ажиллах боломж</p>
              </div>
            </Col>
            <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="Box">
                <AiOutlineAreaChart />
                <p className="smTitle">Хандалтаа өсгөх</p>
                <p className="smDesc">There are many variations of passages of Lorem load Ipsum available, predefined but the majority have suffe alteration in some form, by injected humour.</p>
              </div>
            </Col>




            <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="Box">
                <FaHandsHelping />
                <p className="smTitle">Хамтран ажиллагчтай болох</p>
                <p className="smDesc">There are many variations of passages of Lorem load Ipsum available, predefined but the majority have suffe alteration in some form, by injected humour.</p>
              </div>
            </Col>
            <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="Box">
                <GiOrbDirection />
                <p className="smTitle">Брэндүүдтэй шууд холбогдох</p>
                <p className="smDesc">There are many variations of passages of Lorem load Ipsum available, predefined but the majority have suffe alteration in some form, by injected humour.</p>
              </div>
            </Col>
            <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div className="Box">
                <MdSecurity />
                <p className="smTitle">Төлбөрийн найдвартай систем</p>
                <p className="smDesc">There are many variations of passages of Lorem load Ipsum available, predefined but the majority have suffe alteration in some form, by injected humour.</p>
              </div>
            </Col>
          </Row>



          <Row style={{ marginBottom: 80 }}>
            <Col md={12} >
              <h2>Манай инфлюнсерүүд</h2>
              <p style={{letterSpacing:'1px', fontWeight:'600',opacity:"0.7" }}>Бид хамгийн шилдэгүүдийг танд санал болгоно</p>
            </Col>
          </Row>
          <div>
            <Row style={{ marginBottom: 80 }}>
              <Col md={4} >
                  <div className="infImg">
                    <img src={require('../image/main1.jpg')}/>
                    <div className="myAbs">
                          <h6>КОНТЕНТ ШЭЙР </h6>
                          <p> Танай байгууллагын бэлдсэн сурталчилгаа, сошиал контентийг зорилтот бүлгийн хүмүүст нөлөө бүхий инфлюнсерүүдээр сурталчлах </p>
                    </div>
                  </div>
              </Col>
            </Row>
          </div>
          
        </Container>



      </div>

    );
  }
}

export default influencer;
