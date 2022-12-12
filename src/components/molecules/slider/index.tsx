import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import React from 'react';
import { NavigationButton } from '../../atoms';

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
    <div className="px-10 w-full relative">
      <div className={className}>{title}</div>
      <Swiper {...rest} onSwiper={(e: any) => setSwiperSlide(e)}>
        <NavigationButton type="prev" onClick={onPrev} />
        {children}
        <NavigationButton type="next" onClick={onNext} />
      </Swiper>
    </div>
  );
};

export default Slider;
