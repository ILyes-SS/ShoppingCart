import styles from "./Button.module.css";
export default function Button({ type }) {
  return <button className={styles[type]}>yes!</button>; //composes aint working so just use multiple classes
}
