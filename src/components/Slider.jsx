// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import RankContents from "./RankContents";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const Slider = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <RankContents ranking={1} title={"harrypotter"} writer={"keyeong"} />
      </SwiperSlide>
      <SwiperSlide>
        <RankContents ranking={2} title={"harrtter"} writer={"keuyeo"} />
      </SwiperSlide>
      <SwiperSlide>
        <RankContents ranking={3} title={"hatter"} writer={"keneong"} />
      </SwiperSlide>
      <SwiperSlide>
        <RankContents ranking={4} title={"harrypoter"} writer={"keuneong"} />
      </SwiperSlide>
      <SwiperSlide>
        <RankContents ranking={5} title={"hattr"} writer={"keunyeng"} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
