"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

const Cards = (props) => {

  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  const handleResize = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getResponsiveStyle = () => {
    if (dimensions.width <= 350) {
      return { width: '190px', height: '350px' };
    }
   else {
    return {
       width: '260px', height: '350px' 
    };
   }
  };
    
    return (
        <>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={getResponsiveStyle()}
          >
            <SwiperSlide>
            <div class="py-8 px-8 max-w-sm mx-auto rounded-xl shadow-sm shadow-[#7DF9FF]  space-y-2">
              <img class="block mx-auto h-24 rounded-full" src="/anshu_image.jpg" alt="Anshu" />
              <div class="text-center space-y-2 ">
                <div class="space-y-0.5">
                  <p class="text-lg text-[#FDF5E6] font-semibold">
                    Anshu Bhakat
                  </p>
                  <p class="text-[#F5FEFD] font-medium ">
                    Frontend <br /> Developer
                  </p>
                </div>
                <Link href='/resume/resumeAnshu'>
                  <button className="px-4 py-1 text-sm text-[#7DF9FF] font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-[#203e41] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Work Experience</button>
                </Link>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="py-8 px-8 max-w-sm mx-auto rounded-xl shadow-sm shadow-[#1877F2] space-y-2">
              <img class="block mx-auto h-24 rounded-full" src="/krishna_image.jpg" alt="Krishna" />
              <div class="text-center space-y-2 ">
                <div class="space-y-0.5">
                  <p class="text-lg text-[#FDF5E6] font-semibold">
                    Krishna Singh
                  </p>
                  <p class="text-[#F5FEFD] font-medium ">
                    Management
                  </p>
                </div>
                <Link href='/resume/resumeKrishna'>
                <button class="px-4 py-1 text-sm text-[#1877F2] font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-[#1877F2] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Work Experience</button>
                </Link>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="py-8 px-8 max-w-sm mx-auto  rounded-xl shadow-sm shadow-[#073980] space-y-2">
              <img class="block mx-auto h-24 rounded-full" src="/aradhya_image.jpg" alt="Aradhya" />
              <div class="text-center space-y-2 ">
                <div class="space-y-0.5">
                  <p class="text-lg text-[#FDF5E6] font-semibold">
                    Aradhya 
                  </p>
                  <p class="text-[#F5FEFD] font-medium ">
                    UI/UX
                  </p>
                </div>
                <Link href='/resume/resumeAradhya'>
                  <button class="px-4 py-1 text-sm text-[#073980] font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-[#073980] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Work Experience</button>
                </Link>
              </div>
            </div>
            </SwiperSlide>
          </Swiper>
        </>
      );
}
  
export default Cards
