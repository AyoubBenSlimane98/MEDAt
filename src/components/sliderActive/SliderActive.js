import React, { useEffect, useState } from 'react';
import CardDoc from '../CardDoctor/CardDoc';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination} from 'swiper/modules';

const SliderActive = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://ayoube2323.github.io/dataDoctors/dataBase.json')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div className='flex items-center  mb-20  '>
      <Swiper
        initialSlide={3}
        breakpoints={{
          374: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1023: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}
        freeMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper max-w-[95%] lg:max-w-[80%]'
      >
        {user.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='mb-20 flex items-center justify-center gap-x-2'>
              <CardDoc
                photo={item.url}
                specialty={item.specialty}
                name={item.name}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderActive;
