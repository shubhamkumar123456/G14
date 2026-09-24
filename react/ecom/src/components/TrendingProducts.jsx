import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';

const TrendingProducts = (props) => {
    console.log(props) //{data:[]}
  return (
    <Swiper spaceBetween={50}
        modules={{Autoplay}}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay:300,pauseOnMouseEnter:true}}
      >
      {/* <h1>This is Trending Product Component</h1> */}

        {
            props.data.map((ele,i)=>{
                return <SwiperSlide>
                        <img src={ele.thumbnail} alt="" />
                        <p>{ele.title}</p>
                </SwiperSlide>
            })
        }
    </Swiper>
  )
}

export default TrendingProducts
