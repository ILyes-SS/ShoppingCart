import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <header>
        <h1>Hanouti</h1>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/cart"}>
            {" "}
            <ShoppingCart color="white" height={"18px"} />
            {cart.length}
          </Link>
        </nav>
      </header>
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
      <footer>Made by ilyes </footer>
    </>
  );
}

export default App;
