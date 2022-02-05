import RankContents from "./RankContents";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import styled from "styled-components";

const Slider = () => {
  const list = useSelector((state) => state.top.json.slice(0, 5));
  return (
    <Box>
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
    </Box>
  );
};

const Box = styled.div`
  .swiper-pagination-horizontal {
    bottom: 32px;
    .swiper-pagination-bullet {
      background-color: #e5e5ec;
      margin: 0 2px;
      width: 5px;
      height: 5px;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: #ff6600;
      border-radius: 5px;
    }
  }
`;

export default Slider;
