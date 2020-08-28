import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { GiSupersonicArrow, GiStairsGoal, GiMirrorMirror, GiTakeMyMoney, GiOrbDirection } from 'react-icons/gi';
import { AiFillDashboard, AiOutlineAreaChart } from 'react-icons/ai';
import { MdPhotoSizeSelectLarge, MdGroupAdd, MdSecurity } from 'react-icons/md';
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { FcStatistics } from 'react-icons/fc'
import { FaHandsHelping } from 'react-icons/fa'

// const myData = [
//     {
//         title: ' Мөнгө олох1',
//         desc: "Өөрийн сошиал хуудсаар дамжуулан нэмэлт мөнгө олох боломж"
//     },
//     {
//         title: ' Мөнгө олох2',
//         desc: "Өөрийн сошиал хуудсаар дамжуулан нэмэлт мөнгө олох боломж"
//     },
//     {
//         title: ' Мөнгө олох3',
//         desc: "Өөрийн сошиал хуудсаар дамжуулан нэмэлт мөнгө олох боломж"
//     },
// ]


export class MyColumns extends Component {

    // myClick = (e) => {
    //     console.log(e,'eeeee')
    // }

    render() {
        // console.log(console.log('kikiki'),'here')
        return (
            <>
                {/* {myData.map((element, i) => {
                    return (
                        <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }} data-mydata="hehe" key={i} onClick={()=>this.myClick('apple')} >
                            <div className="Box">
                                <GiTakeMyMoney />
                                <p className="smTitle">{element.title}</p>
                                <p className="smDesc">{element.desc}</p>
                            </div>
                        </Col>
                    )
                })} */}
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
            </>
        )
    }
}

export default MyColumns
