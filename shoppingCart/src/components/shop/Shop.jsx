import { LoaderCircle } from "lucide-react";
import useProducts from "../useProducts";
import { useOutletContext } from "react-router-dom";
import ShopCard from "./ShopCard";
import styles from "./Shop.module.css"

export default function Shop() {
  const { products, error, loading } = useProducts("20");
  const [cart, setCart] = useOutletContext();

  if (error) return <h1>Oops!</h1>;
  if (loading)
    return (
      <div className={styles.loading}>
        <LoaderCircle color="blue" />
      </div>
    );
  if (products)
    return ( 
      <div className={styles.cards}>
        {products.map((prod) => {
          return (
            <ShopCard {...prod} key={prod.id} cart={cart} setCart={setCart} />
          );
        })}
      </div>
    );
}
