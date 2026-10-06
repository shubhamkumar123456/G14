import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay ,Navigation} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'

const TrendingProducts = (props) => {
    // console.log(props) //{data:[]}
  return (
    <Swiper spaceBetween={20}
        modules={[Autoplay, Navigation]}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay:5000, disableOnInteraction:false,pauseOnMouseEnter:true}}
      >
      {/* <h1>This is Trending Product Component</h1> */}

        {
            props.data.map((ele,i)=>{
                return <SwiperSlide>
                        <img className='mx-auto' src={ele.thumbnail} alt="" />
                        <p className='text-center'>{ele.title}</p>
                </SwiperSlide>
            })
        }
    </Swiper>
  )
}

export default TrendingProducts
