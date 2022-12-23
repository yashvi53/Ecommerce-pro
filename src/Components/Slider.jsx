import React,{useState} from "react";

import Carousel from 'react-elastic-carousel';
import styled from 'styled-components'
import "./Slider.css";
import { sliderItems } from "../data";
const Slider = () => {
     
  return (
    <div className="container">
    
   <Carousel className="slider">
        {sliderItems.map((item)=>(

        
        <div className="slide" >
          <div className="img-container">
            <img
              src={item.img}
              alt=""
            />
          </div>
          <div className="info-container">
            <h1 className="title">{item.title}</h1>
            <p className="description">
            {item.description}
            </p>
            <button className="shop-btn">Shop Now</button>
          </div>
        </div>
       ))}
   </Carousel>
    
    </div>
  );
};

export default Slider;
