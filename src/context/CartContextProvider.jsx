import CartContext from "./CartContext";
import { useState } from "react";

const CartContextProvider = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const openCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ isCartOpen, openCart, addToCart, cart, removeFromCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
