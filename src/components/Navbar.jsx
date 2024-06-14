import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { openCart, isCartOpen } = useContext(CartContext);

  const cartHandler = () => {
    openCart();
  };

  return (
    <div className="bg-zinc-800 text-white flex items-center justify-around p-4 w-full fixed top-0">
      <div>
        <h1>Ecommerce Store</h1>
      </div>
      <ul className="flex gap-10">
        <li>
          <NavLink to="/home" activeClassName={classes.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" activeClassName={classes.active}>
            Store
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={classes.active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactus" activeClassName={classes.active}>
            ContactUs
          </NavLink>
        </li>
      </ul>
      <button
        onClick={cartHandler}
        className="border p-2 w-20 rounded-full hover:bg-black"
      >
        {isCartOpen ? "X" : "Cart"}
      </button>
    </div>
  );
};
export default Navbar;
