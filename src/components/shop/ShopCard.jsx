import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import styles from "./ShopCard.module.css"

const StyledBtn = styled.button`
  background-color: rgb(9, 47, 104);
  color: white;
  padding: 9px 14px;
  border: 1px solid rgb(9, 47, 104);
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: rgb(9, 47, 104);
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
    <div className={styles.card} style={{ width: "200px" }}>
      <img src={image} alt={title} className={styles.image}/>
      <h2>{title}</h2>
      <p style={{ marginTop: "-10px" }}>{price}$</p>
      {isAdded ? (
        <div className={styles.allBtnsContainer}>
          <div className={styles.btnsContainer} >
            <StyledBtn onClick={() => decrementQuantity()}>-</StyledBtn>
            <input
              style={{ textAlign: "center", width: "50px" }}
              min={1}
              type="number"
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
        <StyledBtn style={{ marginTop: "auto" }} onClick={() => addToCart()}>Add to Cart</StyledBtn>
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
