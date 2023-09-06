import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const SwiperComponent = () => {
    return (
        <Swiper
            spaceBetween={10}
            navigation={true}
            slidesPerView={1}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
        >
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
            </SwiperSlide>
            {/* Diğer SwiperSlide bileşenlerini buraya ekleyin */}
        </Swiper>
    );
}

export default SwiperComponent;
