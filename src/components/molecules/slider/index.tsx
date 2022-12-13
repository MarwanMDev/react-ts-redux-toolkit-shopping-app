import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/effect-fade';

import React from 'react';
import { NavigationButton } from '../../atoms';
import { EffectFade } from 'swiper';

type SliderProps = {
  children: React.ReactNode | JSX.Element;
  title?: string;
  className?: string;
} & SwiperProps;

const Slider = ({
  children,
  title,
  className,
  ...rest
}: SliderProps) => {
  const [swiperSlide, setSwiperSlide] = React.useState(null);
  const onNext = () => {
    swiperSlide.slideNext();
  };
  const onPrev = () => {
    swiperSlide.slidePrev();
  };
  return (
    <div className={`px-10 w-full relative ${className}`}>
      {title && (
        <div className="text-2xl my-16 font-bold">{title}</div>
      )}
      <Swiper
        {...rest}
        onSwiper={(e: any) => setSwiperSlide(e)}
        modules={[Navigation, Pagination, EffectFade]}
        effect="fade"
        className="group"
      >
        <NavigationButton type="prev" onClick={onPrev} />
        {children}
        <NavigationButton type="next" onClick={onNext} />
      </Swiper>
    </div>
  );
};

export default Slider;
