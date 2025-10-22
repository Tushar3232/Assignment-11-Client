import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useNavigate } from "react-router";
import pic1 from "../../assets/pictur/donation-1.jpg";
import pic2 from "../../assets/pictur/donation-2.jpeg";
import pic3 from "../../assets/pictur/donation-4.png";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/register");
  };

const slides = [
  {
    image: pic1,
    title: "Share Food Bite",
    text: "Let's move forward together — sharing love and food so that no one stays hungry.",
  },
  {
    image: pic2,
    title: "Share Food, Spread Smiles",
    text: "A single plate of extra food can become a ray of hope for someone in need. Let's share.",
  },
  {
    image: pic3,
    title: "The Taste of Humanity — In Every Bite",
    text: "Share Food Bite is a mission to serve humanity by reducing food waste and spreading kindness.",
  },
];


  return (
    <div className="relative h-[80vh] text-white overflow-hidden">
      {/* ✅ Swiper Section */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[80vh] bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* ✅ Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

              {/* ✅ Text Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl max-w-2xl text-gray-200 mb-8 drop-shadow-md leading-relaxed">
                  {slide.text}
                </p>
                <button
                  onClick={handleJoinClick}
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white text-lg transition-all duration-300 shadow-lg"
                >
                  Join as Food Donor
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
