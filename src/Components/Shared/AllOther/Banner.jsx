import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div
          className="hero min-h-[600px]"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <div className="">
                <p className="text-center text-2xl">
                  Welcome to Springdale Public School <br /> we nurture young
                  minds for a brighter future
                </p>
                <h1 className="text-4xl">
                  Annual Sports Day  <br /> Celebrating Excellence in Sports
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero min-h-[600px]"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <div className="">
                <p className="text-center text-2xl">
                  Welcome to Springdale Public School <br /> we nurture young
                  minds for a brighter future
                </p>
                <h1 className="text-4xl">
                  Science Exhibition  <br /> Showcasing Student Innovations
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero min-h-[600px]"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-xl">
              <div className="">
                <p className="text-center text-2xl">
                  Welcome to Springdale Public School <br /> we nurture young
                  minds for a brighter future
                </p>
                <h1 className="text-4xl">
                  Cultural Fest <br /> Embracing Diversity and Creativity
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
