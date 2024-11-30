import { LoaderCircle } from "lucide-react";
import useProducts from "./useProducts";
import { useOutletContext } from "react-router-dom";
import ShopCard from "./ShopCard";

export default function Shop() {
  const { products, error, loading } = useProducts("20");
  const [cart, setCart] = useOutletContext();

  if (error) return <h1>Oops!</h1>;
  if (loading)
    return (
      <div>
        <LoaderCircle color="blue" />
      </div>
    );
  if (products)
    return ( 
      <div>
        {products.map((prod) => {
          return (
            <ShopCard {...prod} key={prod.id} cart={cart} setCart={setCart} />
          );
        })}
      </div>
    );
}
