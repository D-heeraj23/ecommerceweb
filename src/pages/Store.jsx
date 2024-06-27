import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";

const productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Blue Color",
    price: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "black shoes",
    price: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    title: "white shoes",
    price: 350,
    imageUrl:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww ",
  },
  {
    id: "7",
    title: "lady shoes",
    price: 260,
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fHww",
  },
];

const Store = (props) => {
  const [loadingStates, setLoadingStates] = useState({});
  const email = localStorage.getItem("email").replace(".", ",");

  const addToCart = async (item) => {
    setLoadingStates((prevState) => ({
      ...prevState,
      [item.id]: true,
    }));

    try {
      const response = await fetch(
        `https://ecommerce-26aad-default-rtdb.firebaseio.com/${email}.json`
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      let itemExists = false;
      let existingItemKey = null;

      for (const key in data) {
        if (data[key].id === item.id) {
          itemExists = true;
          existingItemKey = key;
          break;
        }
      }

      if (itemExists && existingItemKey) {
        const updatedItem = {
          ...data[existingItemKey],
          quantity: data[existingItemKey].quantity + 1,
        };
        const updateResponse = await fetch(
          `https://ecommerce-26aad-default-rtdb.firebaseio.com/${email}/${existingItemKey}.json`,
          {
            method: "PUT",
            body: JSON.stringify(updatedItem),
          }
        );
        if (!updateResponse.ok) {
          throw new Error("something went wrong");
        }
      } else {
        const itemWithQuantity = {
          ...item,
          quantity: 1,
        };

        const addResponse = await fetch(
          `https://ecommerce-26aad-default-rtdb.firebaseio.com/${email}.json`,
          {
            method: "POST",
            body: JSON.stringify(itemWithQuantity),
          }
        );
        if (!addResponse.ok) {
          throw new Error("something went wrong");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      props.onClick();
      setLoadingStates((prevState) => ({
        ...prevState,
        [item.id]: false,
      }));
    }
  };

  return (
    <>
      <div className="bg-gray-500 p-8 mt-10">
        <h1 className="text-6xl font-bold text-center text-white">
          The Generics
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 m-5 p-5 md:grid-cols-2 lg:grid-cols-3">
        {productsArr.map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-center mb-10">
              <p className="font-bold">Album {i + 1}</p>
              <Link to={`/store/product-detail/${item.title}`}>
                <div>
                  <img
                    src={item.imageUrl}
                    alt="product"
                    className="mb-2 rounded-xl hover:rounded-none size-72 object-cover"
                  />
                </div>
              </Link>
              <div className="text-center">
                <p className="font-bold">{item.title}</p>
                <p className="text-gray-700">Price: ${item.price}</p>
              </div>
              <div>
                <button
                  className="bg-slate-800 p-2 rounded-md text-white w-48 h-14"
                  onClick={() => addToCart(item)}
                >
                  {loadingStates[item.id] ? (
                    <div className="flex items-center justify-center">
                      <SyncLoader color="white" />
                    </div>
                  ) : (
                    "Add to cart"
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Store;
