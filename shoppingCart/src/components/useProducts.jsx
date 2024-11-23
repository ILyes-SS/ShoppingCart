import { useEffect, useState } from "react";

export default function useProducts(numOfProds) {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isfetch = true;
    setLoading(true);
    fetch(`https://fakestoreapi.com/products?limit=${numOfProds}`, {
      mode: "cors",
    })
      .then((res) => {
        if (res.status !== 200 || !isfetch) {
          throw new Error("oops! an error has occurred");
        }
        return res.json();
      })
      .then((data) => {
        if (isfetch) {
          setProducts(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isfetch) {
          setError(err);
          setProducts(null);
        }
      })
      .finally(() => {
        if (isfetch) setLoading(false);
      });

    return () => (isfetch = false);
  }, [numOfProds]);

  return { products, error, loading };
}
