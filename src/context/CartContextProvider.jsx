import CartContext from "./CartContext";
import { useState } from "react";

const CartContextProvider = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider value={{ isCartOpen, openCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
