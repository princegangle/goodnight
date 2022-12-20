import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'


import React from "react";

import { styled } from "@mui/material/styles";

import { bannerData } from "../../constants/data";
import { height } from "@mui/system";



const Imge =styled('img')({
    width:'100%',
    height:240
    

})

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Banner() {
  return (
    <Carousel responsive={responsive} 
    swipeable={false}
    draggable={false}
    keyBoardControl={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    
    
    >
      {bannerData.map( data => (
        <Imge src={data.url} alt="banner" />
           ))}
    </Carousel>
  );
}
