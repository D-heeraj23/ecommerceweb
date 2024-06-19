import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";

const productsArr = [
  {
    id: "1",

    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "2",

    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "3",

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Store = (props) => {
  const [loadingStates, setLoadingStates] = useState({});

  const notify = () => toast.success("added to cart");
  const addToCart = async (item) => {
    setLoadingStates((prevState) => ({
      //for individual button loading state
      ...prevState,
      [item.id]: true,
    }));

    try {
      //this part is for if the product already exist in the firbase and to increase the quantity
      const response = await fetch(
        "https://ecommerce-26aad-default-rtdb.firebaseio.com/items.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      let itemExists = false;
      let existingItemKey = null;

      // Check if item already exists in the cart
      for (const key in data) {
        if (data[key].id === item.id) {
          itemExists = true;
          existingItemKey = key;
          break;
        }
      }

      if (itemExists && existingItemKey) {
        // Update the quantity of the existing item
        const updatedItem = {
          ...data[existingItemKey],
          quantity: data[existingItemKey].quantity + 1,
        };
        const updateResponse = await fetch(
          `https://ecommerce-26aad-default-rtdb.firebaseio.com/items/${existingItemKey}.json`,
          {
            method: "PUT",
            body: JSON.stringify(updatedItem),
          }
        );
        if (!updateResponse.ok) {
          throw new Error("something went wrong");
        }
      } else {
        //this else part is for if there is no product on firebase its gonna add a new product
        const itemWithQuantity = {
          // Add a new key value quantity to the product array
          ...item,
          quantity: 1, // Hardcoded quantity
        };

        const addResponse = await fetch(
          "https://ecommerce-26aad-default-rtdb.firebaseio.com/items.json",
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
      notify();
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="bg-gray-500 p-8 mt-10">
        <h1 className="text-6xl font-bold text-center text-white">
          The Generics
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10 m-5 p-20">
        {productsArr.map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-center mb-4">
              <p className="font-bold">Album {i + 1}</p>
              <Link to={`/store/product-detail/${item.title}`}>
                <img
                  src={item.imageUrl}
                  alt="product"
                  className="mb-2 rounded-xl hover:rounded-none"
                />
              </Link>
              <div className="text-center">
                <p className="font-bold">{item.title}</p>
                <p className="text-gray-700">Price :{item.price}</p>
              </div>
              <div>
                <button
                  className="bg-slate-800 p-2 rounded-md text-white w-48 h-14"
                  onClick={() => addToCart(item)} // item has id ,title ,imageurl,price which is from dummy array
                >
                  {loadingStates[item.id] ? (
                    <div className="flex items center justify-center">
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
