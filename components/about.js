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
              <h5>Цахим эринд инфлюнсер болон брэнд, агентлагуудыг холбож тэднийг дэмжихэд бидний гол зорилго оршино</h5>
              <p>Инфлюнсэр маркетинг нь уламжлалт сурталчилгааны арга дээр орчин үеийн контент суурьтай маркетингийг ашигланщдаг бөгөөд инфлюснэр болон олон нийтийн цахим
                  сүлжээнд олон дагагчтай, тухайн салбартаа эксперт гэж тооцогддог хүмүүсээр бараа бүтээгдэхүүн,
                    үйлчилгээгээ сурталчлах, дэмжлэг авах замаар ажилладаг олон нийтийн цахим сүлжээний маркетингийн нэг төрөл юм.</p>
            </div>
      </div>
      
    );
  }
}

export default about;
