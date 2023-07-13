import React, { useEffect, useState } from "react";
import "./Cards.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
function AccommodationCard({ trip }) {
  const navigate = useNavigate();

  const [formattedDepartureDate, setFormattedDepartureDate] = useState("");
  const [formattedArrivalDate, setFormattedArrivalDate] = useState("");

  useEffect(() => {
    const departureDateTime = new Date(trip.departure_time);
    const formattedDepartureDate = departureDateTime.toLocaleString(undefined, {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    const arrivalDateTime = new Date(trip.arrival_time);
    const formattedArrivalDate = arrivalDateTime.toLocaleString(undefined, {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    // Perform any additional logic or state updates using the formatted dates

    // Example: set the formatted dates to state variables
    setFormattedDepartureDate(formattedDepartureDate);
    setFormattedArrivalDate(formattedArrivalDate);

    // Specify any dependencies if needed, such as `trip.departure_time` and `trip.arrival_time`
  }, [trip.departure_time, trip.arrival_time]);

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
        onClick={() => navigate(`/accommodation-detail/${id}`)}
      >
        <p className="place-name">{trip?.name}</p>
        <div className="card-rating">
          <div className="star-icon">
            <StarRateRoundedIcon />
          </div>

          <div className="c-rating-num">5.0</div>
        </div>
      </div>
      <p className="card-view">{trip?.location}</p>
      <p className="card-date">
        {formattedDepartureDate} - {formattedArrivalDate}
      </p>
      <p className="card-price">{trip?.price}</p>
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

export default AccommodationCard;
