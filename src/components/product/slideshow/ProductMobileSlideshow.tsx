/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';



interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideshow = ({images, title, className}:Props) => {

  return (

    <div className={className}>
      <Swiper
        style={{
          width: "100vw",
          height: "500px",
        }}
        pagination
        navigation={true}
        autoplay={{delay: 2500}}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {
          images.map(image => (
              
            <SwiperSlide key={image}>
              <Image src={`/products/${image}`} width={600} height={500} alt={title} className='object-fill'/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
