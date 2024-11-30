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
import useProducts from "./useProducts";
import { LoaderCircle } from "lucide-react";

export default function Home() {
  const { products, loading } = useProducts("4");
  return (
    <div>
      <div className={styles.hero}>
      <div className={styles.hero_text}>
        <h1> Welcome To Hanoti!</h1>
        <p>Click the link down below to <br /> start your shopping</p>
        <Link to={"shop"} className={styles.link}>
          shop <ArrowRight />
        </Link>
      </div>
      <img src={img} alt="e store" className={styles.img} />
      </div>
      <div className={styles.slider_section}>
        <h1 className={styles.best}>Best sellers</h1>
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
          className={styles.swiper}
        >
          {loading ? (
            <LoaderCircle color="blue" />
          ) : (
            <>
              {products.map((prod) => {
                return (
                  <SwiperSlide
                    className={styles.swiper_slide}
                    key={prod.id}
                  >
                    <div>
                      <img src={prod.image} alt="" />
                      <p style={{marginBottom: "30px" }}>{prod.price}$</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
}
