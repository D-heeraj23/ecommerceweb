import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { openCart, isCartOpen } = useContext(CartContext);
  const { logoutHandler } = useContext(AuthContext);
  const history = useHistory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartHandler = () => {
    openCart();
  };

  const logoutButtonHandler = () => {
    logoutHandler();
    history.replace("/");
  };

  const toggleMenuHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-zinc-800 text-white flex items-center justify-between p-4 w-full fixed top-0 z-50">
      <div>
        <h1 className="lg:text-3xl border-b">M.E.S</h1>
      </div>

      <ul
        className={`md:flex gap-10 ${isMenuOpen ? "block" : "hidden"} md:block`}
      >
        <li className="mt-2 md:mt-0">
          <NavLink to="/home" activeClassName={classes.active}>
            Home
          </NavLink>
        </li>
        <li className="mt-2 md:mt-0">
          <NavLink to="/store" activeClassName={classes.active}>
            Store
          </NavLink>
        </li>
        <li className="mt-2 md:mt-0">
          <NavLink to="/about" activeClassName={classes.active}>
            About
          </NavLink>
        </li>
        <li className="mt-2 md:mt-0">
          <NavLink to="/contactus" activeClassName={classes.active}>
            ContactUs
          </NavLink>
        </li>
        <li className="mt-2 md:mt-0">
          <NavLink to="/some" activeClassName={classes.active}>
            Some
          </NavLink>
        </li>
      </ul>
      {/* //border p-2 w-20 rounded-full hover:bg-black */}
      <div className="space-x-5">
        <button
          onClick={cartHandler}
          className="w-1/4 lg:border lg:p-2 lg:w-20 lg:rounded-full lg:hover:bg-black"
        >
          {isCartOpen ? "X" : "Cart"}
        </button>
        <button
          className="w-1/4 lg:border lg:p-2 lg:w-20 lg:rounded-full lg:hover:bg-black"
          onClick={logoutButtonHandler}
        >
          Logout
        </button>
        <button
          className="md:hidden w-1/4 lg:border lg:p-2 lg:w-20 lg:rounded-full lg:hover:bg-black"
          onClick={toggleMenuHandler}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
