import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "../../styles/swiperComp/SwiperComp.module.css"


const SwiperComp = ({imgs, type, teemMembers}) => {
  return (
    <div >
      {type === 1 && <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {imgs?.map((item, i) => {
          return(
            <SwiperSlide key={i} className={styles.swiper} >
                <Image class="img-fluid" src={item} alt="My Image" width={300} height={200} />
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
      {
        teemMembers.map((it, index) => {
      imgs.map((item, i) => {
          return(
            <SwiperSlide key={i}>
              <div className={styles.swiper}>
                <Image src={item} alt="My Image" width={300} height={200} />
                <h1 className={styles.name} key={index}> {it.teemMemberName}</h1>
                <p className={styles.position} key={ index + "p"}>{it.position}</p>
              </div>
            </SwiperSlide>  
          );
        })
      })}
      </Swiper>}
    </div>
  );
};
export default SwiperComp;