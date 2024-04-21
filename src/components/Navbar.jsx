import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Navbar = () => {
  const { openCart, isCartOpen } = useContext(CartContext);

  const cartHandler = () => {
    openCart();
  };

  console.log(openCart);
  return (
    <div className="bg-zinc-800 text-white flex items-center justify-around p-4">
      <div>
        <h1>Ecommerce Store</h1>
      </div>
      <ul className="flex gap-10">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button onClick={cartHandler}>{isCartOpen ? "X" : "Cart"}</button>
    </div>
  );
};
export default Navbar;
