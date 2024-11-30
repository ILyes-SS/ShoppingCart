import { Trash2 } from "lucide-react";
import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useOutletContext();
  function deleteProduct(id) {
    let index = cart.findIndex((obj) => obj.id == id);
    setCart((prev) => prev.toSpliced(index, 1));
  }
  return (
    <>
      <h1>Your Cart</h1>
     {cart.length >= 1 ? cart.map((prod) => {
        return (
          <div key={prod.id}>
            <img src={prod.image} alt="" width={"200px"} />
            <h3>
              {prod.title} x{prod.quantity}
            </h3>
            <p>{prod.price * prod.quantity}</p>
            <button onClick={() => deleteProduct(prod.id)}>
              <Trash2 color="red" />
            </button>
          </div>
        );
      }) : <p>Your cart is empty</p> }
    </>
  );
}
