import React, { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

const Cart = ({ refresh }) => {
  const [cart, setCart] = useState([]);
  const [reff, setReff] = useState(false);
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
            key,
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
  }, [refresh, reff]);

  const removeDataHandler = async (key) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://ecommerce-26aad-default-rtdb.firebaseio.com/items/${key}.json`,
        {
          method: "DELETE",
        }
      );

      setReff((prev) => !prev);

      if (!response.ok) {
        throw new Error("cant delete");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
      toast.success("item deleted from cart");
    }
  };

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
                    onClick={() => removeDataHandler(items.key)}
                  >
                    {loading ? <SyncLoader /> : "Remove"}
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
      <ToastContainer />
    </div>
  );
};

export default Cart;
