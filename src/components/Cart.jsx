// import CartContext from "../context/CartContext";
// import { useContext } from "react";
import React, { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";

const Cart = ({ refresh }) => {
  // const { cart, removeFromCart } = useContext(CartContext);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCartData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://ecommerce-26aad-default-rtdb.firebaseio.com/items.json"
        );
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        const data = await res.json();
        const loadedProduct = [];
        for (const key in data) {
          loadedProduct.push({
            id: data[key].id,
            title: data[key].title,
            price: data[key].price,
            quantity: data[key].quantity,
            imageUrl: data[key].imageUrl,
          });
        }
        setCart(loadedProduct);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCartData();
  }, [refresh]);

  return (
    <div className="w-1/4 h-screen bg-zinc-50 fixed top-[3.6rem] right-0 z-10 mt-4">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <SyncLoader />
        </div>
      ) : (
        <div>
          <div className="flex justify-center">
            {cart.length === 0 && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                className="w-[50%] mt-32"
              />
            )}
          </div>
          <div>
            {cart.map((items, i) => (
              <div className="flex justify-around items-center" key={i}>
                <div className="w-1/4 mt-10 ">
                  <img src={items.imageUrl} alt="cartimage" />
                </div>
                <div className="w-1/2">
                  <p>Name:{items.title}</p>
                  <p>Price:{items.price}</p>
                  <p> quantity:{items.quantity}</p>
                  <button
                    className="bg-red-500 p-1 rounded-md"
                    // onClick={() => removeFromCart(items.id)}
                  >
                    Remove
                  </button>
                  <div
                    className="w-full bg-zinc-900"
                    style={{ height: "1px" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
