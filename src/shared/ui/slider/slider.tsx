'use client';
import React, { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import styles from './slider.module.css';

import 'swiper/css';
import { SliderProps } from './slider.types';
import 'swiper/css/free-mode';

export const Slider: FC<SliderProps> = ({ slidesElements }) => {
  const swiperRef = useRef<SwiperType>();

  const slides = slidesElements.map((slide, index) => (
    <SwiperSlide className={styles['swiper-slide']} key={index}>
      {slide}
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        mousewheel={true}
        freeMode={true}
        slidesPerView={'auto'}
        spaceBetween={0}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Mousewheel, FreeMode]}
      >
        {slides}
      </Swiper>
      <div className={styles.navigation + ' wrapper'}>
        <button
          aria-label="Предыдущий слайд"
          className={styles.button}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="23"
            viewBox="0 0 173 23"
            fill="none"
          >
            <line x1="1" y1="11.5" x2="173" y2="11.5" strokeWidth="3" />
            <path
              d="M12 0V0C12 6.07513 7.07513 11 0.999998 11L-1.33918e-06 11"
              strokeWidth="3"
            />
            <path
              d="M12 23V23C12 16.9249 7.07513 12 1 12L6.11999e-07 12"
              strokeWidth="3"
            />
          </svg>
        </button>
        <button
          className={styles.button}
          aria-label="Следующий слайд"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="23"
            viewBox="0 0 173 23"
            fill="none"
          >
            <line x1="0" y1="11.5" x2="173" y2="11.5" strokeWidth="3" />
            <path
              d="M161 0V0C161 6.07513 165.925 11 172 11L173 11"
              strokeWidth="3"
            />
            <path
              d="M161 23V23C161 16.9249 165.925 12 172 12L173 12"
              strokeWidth="3"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
