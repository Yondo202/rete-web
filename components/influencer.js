import React, { Component } from 'react';
import MyColumns from '../components/MyColumns'
import { Container, Row, Col } from 'react-bootstrap';
import FacebooklLogin from './facebookLogin'
import { MdPhotoSizeSelectLarge,MdContentCopy } from 'react-icons/md';
import { FcCameraAddon,FcCollaboration,FcBullish } from 'react-icons/fc';


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
            {/* <FacebooklLogin /> */}
          </div>
        </div>
        <Container style={{ textAlign: "center" }}>
        <div className="userCardPar">
          <Row style={{ marginBottom: 20, marginTop:20 }}>
              <Col md={4} >
                  <div className="userCard">
                    <h5>Контент санал</h5>
                    <FcBullish /><br />
                    <button className="button">Нэвтрэх</button>
                  </div>
              </Col>
              <Col md={4} >
                  <div className="userCard">
                    <h5>Сурталчилгаа оруулах</h5>
                    <FcCollaboration /><br />
                    <button className="button">Нэвтрэх</button>
                  </div>
              </Col>
              <Col md={4} >
                    <FacebooklLogin />
              </Col>
          </Row>
        </div>
       


          <Row style={{ marginBottom: 80 }}>
            <Col md={12} >
              <h2>Санал болгож буй боломжууд</h2>
            </Col>
          </Row>

          <Row style={{ marginBottom: 100 }}>
            <MyColumns/>
          </Row>



          <Row style={{ marginBottom: 80 }}>
            <Col md={12} >
              <h2>Манай инфлюнсерүүд</h2>
              <p style={{ fontWeight: '600', opacity: "0.7" }}>Бид хамгийн шилдэгүүдийг танд санал болгоно</p>
            </Col>
          </Row>
          <div>
            <Row style={{ marginBottom: 80 }}>


              <Col md={4} >
                <div className="infImg" >
                  <div className="imgBack">
                    <div className="img" style={{ backgroundImage: `url(${require("../image/social3.jpg")})` }}>

                    </div>
                  </div>
                  {/* <img src={require('../image/main1.jpg')}/> */}
                  <div className="myAbs">
                    <h6>КОНТЕНТ ШЭЙР </h6>
                    <p> Танай байгууллагын бэлдсэн сурталчилгаа, сошиал контентийг зорилтот бүлгийн хүмүүст нөлөө бүхий инфлюнсерүүдээр сурталчлах </p>
                  </div>
                </div>
              </Col>



              <Col md={4} >
                <div className="infImg" >
                  <div className="imgBack">
                    <div className="img" style={{ backgroundImage: `url(${require("../image/social1.jpg")})` }}>

                    </div>
                  </div>
                  {/* <img src={require('../image/main1.jpg')}/> */}
                  <div className="myAbs">
                    <h6>КОНТЕНТ БҮТЭЭХ</h6>
                    <p>Таны бүтээгдэхүүн, үйлчилгээг орчин үеийн хэв маяг, бүтээгдэхүүний онцлогт тохируулан шинэлэг сурталчилгаа, сошиал контент бэлтгэж өгөх </p>
                  </div>
                </div>
              </Col>


              <Col md={4} >
                <div className="infImg" >
                  <div className="imgBack">
                    <div className="img" style={{ backgroundImage: `url(${require("../image/social5.jpg")})` }}>

                    </div>
                  </div>
                  {/* <img src={require('../image/main1.jpg')}/> */}
                  <div className="myAbs" style={{ marginLeft: "80px", textAlign: "start" }}>
                    <h6>БАГЦИЙН ҮЙЛЧИЛГЭЭ</h6>
                    <p>Learn your audience</p>
                    <p>Product spring</p>
                    <p>Growth management</p>
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
