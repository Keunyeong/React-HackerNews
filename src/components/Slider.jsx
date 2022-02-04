import RankContents from "./RankContents";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Slider = () => {
  const list = useSelector((state) => state.top.json.slice(0, 5));
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {list.map((obj, rank) => {
        return (
          <SwiperSlide key={obj}>
            <RankContents ranking={rank + 1} id={obj} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
