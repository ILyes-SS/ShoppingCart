import { useEffect, useState } from "react";

export default function useProducts(numOfProds) {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetch = true;
    fetch(`https://fakestoreapi.com/products?limit=${numOfProds}`, {
      mode: "cors",
    })
      .then((res) => {
        if (res.status != 200 || !fetch)
          throw new Error("oops! an error has occured");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setProducts(null);
      })
      .finally(setLoading(false));

    return () => (fetch = false);
  }, []);

  return { products, error, loading };
}
