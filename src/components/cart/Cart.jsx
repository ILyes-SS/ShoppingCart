import { Trash2 } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css"

export default function Cart() {
  const [cart, setCart] = useOutletContext();
  function deleteProduct(id) {
    let index = cart.findIndex((obj) => obj.id == id);
    setCart((prev) => prev.toSpliced(index, 1));
  }
  return (
    <div className={styles.container}>
     {cart.length >= 1 ?
     <>
     <h1>Your Cart</h1>
     {cart.map((prod) => {
        return (
          <div key={prod.id} className={styles.item}>
            <img src={prod.image} alt="" height={"50px"} />
            <h3>
              {prod.title} <span> x{prod.quantity} </span>
            </h3>
            <p>{prod.price * prod.quantity}$</p>
            <button onClick={() => deleteProduct(prod.id)}>
              <Trash2 color="red" />
            </button>
          </div>
        );
      })} 
      <h1 className="namiii">Total Price: {cart.reduce((acc, curr)=> acc + (curr.quantity * curr.price) ,0)}$</h1>
      </>: <p style={{fontSize: "28px"}}>Your cart is empty</p> }
    </div>
  );
}
