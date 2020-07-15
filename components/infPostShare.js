import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { RiArrowGoBackLine } from 'react-icons/ri'
import { FcBusinessman } from 'react-icons/fc'
import {
    FacebookShareButton,
    TwitterShareButton,
    EmailShareButton,
} from 'react-share';

import {
    FacebookShareCount,
} from 'react-share';

import {
    FacebookIcon,
    EmailIcon,
    TwitterIcon,
} from 'react-share';
import Iframe from 'react-iframe'

import { FacebookProvider, LoginButton, Login, ShareButton, CommentsCount, Comments, EmbeddedPost, MessageUs, SendToMessenger } from 'react-facebook';



export class infPostShare extends Component {

    state = {
        name: '',
        url: '',
        email: ''

    }

    handleResponse = (data) => {
        console.log(data);
        this.setState({
            name: data.profile.name,
            email: data.profile.email,
            url: data.profile.picture.data.url
        });
    }

    handleError = (error) => {
        this.setState({ error });
    }




    render() {
        return (
            <div className="BackInfPar">
                <div className="headerPar">
                    <div className="header">
                        <div className="flex1">
                            <Link href="/influencer">
                                <RiArrowGoBackLine />
                            </Link>
                            <div className="flex1Child"  >
                                <h3>Хянах самбар</h3>
                                <p>Инфлюнсэр маркетинг</p>
                            </div>
                        </div>
                        <div className="flex2">
                            <div className="flex2Child2">
                                <h6>Ak Yondo</h6>
                                <p>Инфлюнсэр</p>
                            </div>
                            <div>
                                <img src={require('../image/pro1.jpg')} />
                            </div>
                        </div>

                    </div>
                </div>
                <Container fluid className="BodyPar">
                    <Row style={{ marginTop: 30 }} >
                        <Col md={4} >
                            <Row style={{ marginBottom: 10 }}>
                                <Col md={6} sm={6} xs={6} className="smMenu">
                                    <h6 style={{ cursor: 'pointer', float: "right", borderRight: "solid 2px rgba(0,0 ,0 ,0.4)", paddingRight: 30 }}>Ажлын саналууд</h6>
                                </Col>
                                <Col md={6} sm={6} xs={6} className="smMenu">
                                    <h6 style={{ cursor: 'pointer' }}>Контент саналууд</h6>
                                </Col>

                            </Row>

                            <div className="ScrollPar">


                                <div className="contentPar" >
                                    <span>Эм Си Эс ХХК</span>
                                    <div className="flexPar">
                                        <div className="flex1">
                                            <FcBusinessman />
                                            <div className="flex1Text">
                                                <h6>Ундаа</h6>
                                                <span>10.000.00₮</span>
                                            </div>
                                        </div>
                                        <div className="flex2">
                                            {/* <RiArrowGoBackLine /> */}
                                            <button style={{ backgroundColor: "#22AC8A" }}>Дэлгэрэнгүй</button>
                                            <button style={{ backgroundColor: "#C42F63" }}>Цуцлах</button>
                                        </div>
                                    </div>
                                </div>


                                <div className="contentPar" >
                                    <span>Эм Си Эс ХХК</span>
                                    <div className="flexPar">
                                        <div className="flex1">
                                            <FcBusinessman />
                                            <div className="flex1Text">
                                                <h6>Ундаа</h6>
                                                <span>10.000.00₮</span>
                                            </div>
                                        </div>
                                        <div className="flex2">
                                            {/* <RiArrowGoBackLine /> */}
                                            <button style={{ backgroundColor: "#22AC8A" }}>Дэлгэрэнгүй</button>
                                            <button style={{ backgroundColor: "#C42F63" }}>Цуцлах</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="contentPar" >
                                    <span>Эм Си Эс ХХК</span>
                                    <div className="flexPar">
                                        <div className="flex1">
                                            <FcBusinessman />
                                            <div className="flex1Text">
                                                <h6>Ундаа</h6>
                                                <span>10.000.00₮</span>
                                            </div>
                                        </div>
                                        <div className="flex2">
                                            {/* <RiArrowGoBackLine /> */}
                                            <button style={{ backgroundColor: "#22AC8A" }}>Дэлгэрэнгүй</button>
                                            <button style={{ backgroundColor: "#C42F63" }}>Цуцлах</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Col>
                        <Col md={1} sm={1} xs={1} style={{ padding: "0px 0px" }}>
                            <div className="NextMenu">

                            </div>
                        </Col>
                        <Col md={7} >
                            <div>
                                {/* <FacebookShareButton url="https://web.facebook.com/zurhaizodiac/photos/a.759974834741483/759974864741480/?type=3&theater" style={{ width: 50, height: 50 }} >
                                    <FacebookIcon size={30} />
                                    <FacebookShareCount url="https://web.facebook.com/zurhaizodiac/photos/a.759974834741483/759974864741480/?type=3&theater">
                                        {shareCount => <h1 className="myShareCountWrapper">{shareCount}</h1>}
                                    </FacebookShareCount>
                                </FacebookShareButton> */}


                                {/* <Iframe url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTheUnlockPodcast%2Fvideos%2F1914610742009776%2F&show_text=0"
                                    width="450px"
                                    height="800px"
                                    id="myId"
                                    className="myClassname"
                                    display="initial"
                                    position="relative" /> */}


                                <FacebookProvider appId="321477018868791">
                                    <LoginButton
                                        scope="email"
                                        onCompleted={this.handleResponse}
                                        onError={this.handleError}
                                    >
                                        <span>Login via Facebook</span>
                                    </LoginButton>
                                    <MessageUs messengerAppId="321477018868791" pageId="109664220778001" />
                                    <h1>{this.state.name}</h1>

                                </FacebookProvider>

                                {/* <FacebookProvider appId="321477018868791">
                                    <Login
                                        scope="email"
                                        onCompleted={this.handleResponse}
                                        onError={this.handleError}
                                    >
                                        {({ loading, handleClick, error, data }) => (
                                            <span onClick={handleClick}>
                                                Login via Facebook
                                                {loading && (
                                                    <span>Loading...</span>
                                                )}
                                            </span>
                                        )}
                                    </Login>
                                </FacebookProvider> */}


                                <FacebookProvider appId="321477018868791">
                                    <EmbeddedPost href="https://www.facebook.com/dota2/videos/623816754906269/" width="500" />
                                </FacebookProvider>


                            </div>

                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}

export default infPostShare
