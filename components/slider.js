import React, { Component } from 'react'
import SliderSlick from "react-slick";




export class Slider extends Component {
    render() {
            var settings = {
                dots: true,
                infinite: true,
                speed: 400,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            };
        return (
            <div className="sliderPar">
                 <SliderSlick {...settings} id="SliderSlick">
                 
                    <div>
                        <div className="slideText">
                            <h1>Бид таны бизнесийг өсгөнө</h1>
                            <button>Цааш нь...</button>
                        </div>
                        <img src={require('../image/bg1.jpg')}  />
                    </div>


                    <div>
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
                    {/* <h3>3</h3> */}
                    </div>
                  </SliderSlick>
            </div>
           
        )
    }
}




export default Slider