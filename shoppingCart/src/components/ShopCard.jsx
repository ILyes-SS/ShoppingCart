import { useState } from "react";
export default function ShopCard({ title, image, price, cart, id, setCart }) {
  const [value, setValue] = useState(0);

  let isAdded = false;
  if (cart.some((obj) => obj.title == title)) {
    isAdded = true;
  }
  function changeHandler(e) {
    setValue(e.target.value);
  }
  function submitHandler() {
    let index = cart.findIndex((obj) => obj.title == title);
    const newQuantity = Number(value);
    setValue(newQuantity);
    setCart((prev) =>
      prev.toSpliced(
        index,
        1,
        Object.assign({}, cart[index], { quantity: newQuantity })
      )
    );
  }
  function addToCart() {
    setValue(1);
    setCart((prev) => [...prev, { title, image, price, id, quantity: 1 }]);
  }
  function decrementQuantity() {
    let index = cart.findIndex((obj) => obj.title == title);
    const newQuantity = cart[index].quantity - 1;
    setValue(newQuantity);
    setCart((prev) =>
      cart[index].quantity - 1 == 0
        ? prev.toSpliced(index, 1)
        : prev.toSpliced(
            index,
            1,
            Object.assign({}, cart[index], { quantity: newQuantity })
          )
    );
  }
  function incrementQuantity() {
    let index = cart.findIndex((obj) => obj.title == title);
    const newQuantity = cart[index].quantity + 1;
    setValue(newQuantity);
    setCart((prev) =>
      prev.toSpliced(
        index,
        1,
        Object.assign({}, cart[index], { quantity: newQuantity })
      )
    );
  }
  return (
    <div className="card" style={{ width: "200px" }}>
      <img src={image} alt={title} style={{ width: "200px" }} />
      <h2>{title}</h2>
      <p>{price}</p>
      {isAdded ? (
        <div>
          <div>
            <button onClick={() => decrementQuantity()}>-</button>
            <input
              type="number"
              min={1}
              onChange={changeHandler}
              value={
                value ||
                cart[cart.findIndex((obj) => obj.title == title)].quantity
              }
            />
            <button onClick={() => incrementQuantity()}>+</button>
          </div>
          <button onClick={() => submitHandler()}>Submit quantity</button>
        </div>
      ) : (
        <button onClick={() => addToCart()}>Add to Cart</button>
      )}
    </div>
  );
}
