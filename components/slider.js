import React, { Component } from 'react'
import SliderSlick from "react-slick";
import Link from 'next/link';
import { motion } from 'framer-motion'


let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { y: -100, opacity: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};
const textVariants2 = {
    exit: { y: 100, opacity: 0, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};



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

                    {this.props.SlideData.map((el, i) => {
                        return (
                            <div key={i}>
                                <div className="slideText">
                                    <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
                                        <h1>{el.Title}</h1>
                                    </motion.div>
                                    <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants2}>
                                        <Link href="/influencer">
                                            <button>Цааш нь...</button>
                                        </Link>
                                    </motion.div>

                                </div>
                                <img src={`http://rete-admin.herokuapp.com${el.SliderImg.url}`} />
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