import React, { Component } from 'react'

export class Slider extends Component {
    render() {
        return (
            <div id="Swiper" style={{marginBottom:120}}>
                    <div> 
                        <img style={this.props.sliderHeight}  src={require('../image/slider1.jpg')} />
                        {/* <img style={this.props.sliderHeight || {}}  src={require(`../img/slider2.jpg`)} />
                        <img style={this.props.sliderHeight || {}}  src={require(`../img/slider3.jpg`)} /> */}
                            {/* <div className="absolute-this">
                            <h3>хйхйхйхйх</h3>
                            <p>Бидэнтэй нэгдэх</p>
                            <button>Дэлгэрэнгүй</button>
                     </div> */}
                    </div>
            </div>
        )
    }
}


const params = {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
}


export default Slider