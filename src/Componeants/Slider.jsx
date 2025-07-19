import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import pic1 from "../assets/pictur/donation-1.jpg";
import pic2 from "../assets/pictur/donation-2.jpeg";
import pic3 from "../assets/pictur/donation-3.jpeg";

const Slider = () => {
  return (
    <div className="h-[70vh] w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {[pic1, pic2, pic3].map((pic, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
                src={pic}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
