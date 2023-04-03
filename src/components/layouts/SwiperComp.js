import React from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "../../styles/swiperComp/SwiperComp.module.css"

const SwiperComp = ({imgs, type}) => {
  return (
    <div style={{display: 'flex'}}>
      {type === 1 && <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {imgs.map(item => {
          return(
            <SwiperSlide>
              <div className={styles.swiper}>
                <Image src={item} alt="My Image" width={300} height={200} />
              </div>
            </SwiperSlide>  
          );
        })}
      </Swiper>}

      {type === 2 && <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={4}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
      {imgs.map(item => {
        return(
          <SwiperSlide>
            <div className={styles.swiper}>
              <Image src={item} alt="My Image" width={300} height={200} />
            </div>
          </SwiperSlide>  
        );
      })}
      </Swiper>}
    </div>
  );
};
export default SwiperComp;