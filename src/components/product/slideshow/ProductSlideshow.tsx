/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper as SwiperObject} from "swiper";
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from 'next/image';


interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductSlideshow = ({images, title, className}:Props) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (

    <div className={className}>
<Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          images.map(image => (
              
            <SwiperSlide key={image}>
              <Image src={`/products/${image}`} width={1024} height={800} alt={title} className='rounded-lg object-fill'/>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>

  )
}
