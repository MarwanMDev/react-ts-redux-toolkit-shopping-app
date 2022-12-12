import { Slider } from '../../molecules';
import { SwiperSlide } from 'swiper/react';

const HeroSection = () => {
  return (
    <Slider slidesPerView={1}>
      <SwiperSlide>
        <div className="h-96 bg-red-400">yo</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-green-400">yo</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-blue-400">yo</div>
      </SwiperSlide>
    </Slider>
  );
};

export default HeroSection;
