import React from 'react';
import {Carousel} from 'antd';
import carr from '../../assets/carr.png'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export default function Carrusel() {
  return (
    <Carousel autoplay>
    <div>
    <img src={carr} alt="no" />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
  )
}
