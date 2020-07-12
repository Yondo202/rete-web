import React, { Component } from 'react';
import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

class about extends Component {

  render() {
    return (
      <div className="aboutPar">
          <div className="aboutCover" style={{ backgroundImage: `url(${require("../image/bg2.jpg")})` }}>
          </div>
              <div className="textPar">
              <h1>Танилцуулга</h1>
              {/* <h5>{this.props.medeelel.SmallTitle}</h5>
              <p>{this.props.medeelel.Description}</p> */}
            </div>
      </div>
      
    );
  }
}

export default about;
