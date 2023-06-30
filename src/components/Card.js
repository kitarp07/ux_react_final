import React from "react";
import "./Cards.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
function Card() {
  return (
    <div className="card">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        style={{ width: "321px", height: "305px" }}
        className="mySwiper"
        
      >
        <SwiperSlide>
          {" "}
          <img
            className="card-img"
            src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="card-img"
            src="https://a0.muscache.com/im/pictures/aa822e37-8848-4ba9-b5d3-c6804fe0d615.jpg?im_w=720"
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <img
            className="card-img"
            src="https://a0.muscache.com/im/pictures/aac94e93-2d23-4138-b8d1-059d5f482cca.jpg?im_w=320"
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <img
            className="card-img"
            src="https://a0.muscache.com/im/pictures/5c3e2b09-99ef-494f-9bc4-ddf2899dcccc.jpg?im_w=720"
          />{" "}
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <img
            className="card-img"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg?im_w=720"
          />{" "}
        </SwiperSlide>
      </Swiper>

      <div className="card-details">
        <p className="place-name">Cheomdangwahak-ro</p>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <div className="rating-num">5.0</div>
        </div>
      </div>
      <p className="card-view">Views</p>
      <p className="card-date">1-3 Aug</p>
      <p className="card-price">Price</p>
    </div>
  );

  // return (
  //   <div className="card">
  //     <Swiper
  //     slidesPerView={1}
  //     loop={true}
  //     spaceBetween={10}
  //       pagination={{
  //         dynamicBullets: true,
  //       }}
  //       modules={[Pagination, Navigation]}
  //       style={{height:"300px", width: "300px"}}
  //       className="mySwiper"
  //     >
  //       <SwiperSlide > <img className="card-img" src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720" /> </SwiperSlide>
  //       <SwiperSlide > <img className="card-img" src="https://a0.muscache.com/im/pictures/aa822e37-8848-4ba9-b5d3-c6804fe0d615.jpg?im_w=720" /> </SwiperSlide>

  //     </Swiper>
  //   </div>
  // );
}

export default Card;
