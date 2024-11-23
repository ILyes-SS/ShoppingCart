import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Home.module.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img from "../assets/eStore.jpg";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Welcome To Hanoti!</h1>
        <p>Click the link down below to start your shopping</p>
        <Link to={"shop"}>
          shop <ArrowRight />
        </Link>
      </div>
      <img src={img} alt="e store" style={{ width: "200px" }} />
      <div>
        <h1>Best sellers</h1>
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
          className={styles.Swiper}
        >
          <SwiperSlide className={styles.swiper_slide}>Slide 1</SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>Slide 2</SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>Slide 4</SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>Slide 5</SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>Slide 6</SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>Slide 7</SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>Slide 8</SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
