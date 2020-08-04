import React, { Component } from 'react'
import SliderSlick from "react-slick";
import Link from 'next/link';




export class Slider extends Component {
    render() {
            var settings = {
                dots: true,
                infinite: true,
                speed: 900,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
            };

            console.log(this.props.SlideData[0].SliderImg.url, 'hahahah')
        return (
            <div className="sliderPar">
                 <SliderSlick {...settings} id="SliderSlick">

                    {this.props.SlideData.map((el, i)=>{
                        return(
                            <div key={i}>
                                <div className="slideText">
                                    <h1>{el.Title}</h1>
                                    <Link href="/influencer">
                                         <button>Цааш нь...</button>
                                    </Link>
                                </div>
                                <img src={`http://localhost:1337${el.SliderImg.url}`}  />
                            </div>
                        )
                    })}

                    


                    {/* <div>
                    <div className="slideText">
                            <h1>Бид таны бизнесийг өсгөнө</h1>
                            <button>Цааш нь...</button>
                        </div>
                    <img src={require('../image/bg2.jpg')} />
                    </div>


                    <div>
                        <div className="slideText">
                            <h1>Бид таны бизнесийг өсгөнө</h1>
                            <button>Цааш нь...</button>
                        </div>
                          <img src={require('../image/bg1.jpg')} />
                    </div> */}
                  </SliderSlick>
            </div>
           
        )
    }
}




export default Slider