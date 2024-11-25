import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBtn = styled.button`
  background-color: blue;
  color: white;
  padding: 9px 14px;
  border: none;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: blue;
  }
`;
function ShopCard({ title, image, price, cart, id, setCart }) {
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
            <StyledBtn onClick={() => decrementQuantity()}>-</StyledBtn>
            <input
              type="number"
              min={1}
              onChange={changeHandler}
              value={
                value ||
                cart[cart.findIndex((obj) => obj.title == title)].quantity
              }
            />
            <StyledBtn onClick={() => incrementQuantity()}>+</StyledBtn>
          </div>
          <StyledBtn onClick={() => submitHandler()}>Submit quantity</StyledBtn>
        </div>
      ) : (
        <StyledBtn onClick={() => addToCart()}>Add to Cart</StyledBtn>
      )}
    </div>
  );
}
ShopCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  id: PropTypes.number.isRequired,
  setCart: PropTypes.func.isRequired,
};
export default ShopCard;
