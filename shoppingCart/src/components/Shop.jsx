import { LoaderCircle } from "lucide-react";
import useProducts from "./useProducts";

export default function Shop() {
  const { products, error, loading } = useProducts("5");

  if (error) return <h1>Oops!</h1>;
  if (loading)
    return (
      <div>
        <LoaderCircle color="red" />
      </div>
    );
  if (products)
    return (
      <>
        {products.map((prod) => {
          return (
            <div className="card" key={prod.id} style={{ width: "200px" }}>
              <img
                src={prod.image}
                alt={prod.title}
                style={{ width: "200px" }}
              />
              <h2>{prod.title}</h2>
              <p>{prod.price}</p>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </>
    );
}
