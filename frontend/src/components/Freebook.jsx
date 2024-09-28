import React from 'react';
import List from "../assets/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    console.log(List);
    const filerData=  List.filter((data)=>data.category==="Free");
    //console.log(filerData)
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <h1 className='font-semibold text-xl pb-1 mt-3'>Free Offered Courses</h1>
    
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    </div>
    <div className="slider-container max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <Slider {...settings}>
      {filerData.map((item)=>(
        <Cards item= {item} key={item.id} />
      ))}

      </Slider>
    </div>
    
    </>
  )
}

export default Freebook