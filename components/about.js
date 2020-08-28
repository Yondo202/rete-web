import React, { Component } from 'react';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
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


class about extends Component {

  render() {
    return (
      <div className="aboutPar">
        <div className="aboutCover" style={{ backgroundImage: `url(${require("../image/bg2.jpg")})` }}>
        </div>
        <div className="textPar">
          <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants}>
            <h1>Танилцуулга</h1>
          </motion.div>
          <motion.div initial="exit" animate="enter" exit="exit" variants={textVariants2}>
            <h5>{this.props.medeelel.SmallTitle}</h5>
            <p>{this.props.medeelel.Description}</p>
          </motion.div>

        </div>
      </div>

    );
  }
}

export default about;
