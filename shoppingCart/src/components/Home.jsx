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
import ShopCard from "./ShopCard";

export default function Home() {
  const { products, error, loading } = useProducts("5");
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
          {loading ? (
            <LoaderCircle color="red" />
          ) : (
            <>
              {products.map((prod) => {
                return (
                  <SwiperSlide
                    className={styles.swiper_slide}
                    key={prod.id}
                    style={{ width: "200px" }}
                  >
                    <div style={{ width: "200px" }}>
                      <img src={prod.image} alt="" />
                      <h2>{prod.title}</h2>
                      <p>{prod.price}</p>
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
