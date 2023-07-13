import React, { useEffect, useState } from "react";
import "./Cards.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
function Card({ trip }) {
  const navigate = useNavigate();

  const [formattedDate, setFormattedDate] = useState("");
  const [formattedDate2, setFormattedDate2] = useState("");

  useEffect(() => {
    if (trip && trip.startDate) {
      const startDate = trip.startDate;
      const [year, month, day] = startDate.split("/");
      // Create a new Date object using the extracted values
      const date = new Date(year, month - 1, day);
      // Format the date to display only month and day
      const formattedDate = date.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
      });

      setFormattedDate(formattedDate);
    }

    if (trip && trip.endDate) {
      const endDate = trip.endDate;
      const [year2, month2, day2] = endDate.split("/");

      // Create a new Date object using the extracted values
      const date2 = new Date(year2, month2 - 1, day2);

      // Format the date to display only month and day
      const formattedDate2 = date2.toLocaleDateString(undefined, {
        month: "long",
        day: "numeric",
      });

      setFormattedDate2(formattedDate2);
    }
  });

  const imagess = trip.img;

  const baseUrl = "http://localhost:3001";

  const id = trip._id;

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
        {imagess.map((img, index) => {
          return (
            <SwiperSlide>
              {" "}
              <img
                className="card-img"
                src={`${baseUrl}/${img}`}
                alt={`Slide ${index + 1}`}
              />{" "}
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
          {" "}
          <img
            className="card-img"
            src="https://a0.muscache.com/im/pictures/aa822e37-8848-4ba9-b5d3-c6804fe0d615.jpg?im_w=720"
          />{" "}
        </SwiperSlide> */}

        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>

      <div
        className="card-details"
        onClick={() => navigate(`/trip-detail/${id}`)}
      >
        <p className="place-name">{trip.title}</p>
        <div className="card-rating">
          <div className="star-icon">
            <StarRateRoundedIcon />
          </div>

          <div className="c-rating-num">5.0</div>
        </div>
      </div>
      <p className="card-view">Views</p>
      <p className="card-date">
        {formattedDate} - {formattedDate2}
      </p>
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
