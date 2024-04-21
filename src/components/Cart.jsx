const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Cart = () => {
  return (
    <div className="w-1/4 h-screen p bg-slate-300 absolute top-15 right-0 z-10">
      <div>
        {productsArr.map((items, i) => (
          <div className="flex justify-around items-center">
            <div className="w-1/4 mt-10">
              <img src={items.imageUrl} alt="cartimage" />
            </div>
            <div className="w-1/2">
              <p>Name:{items.title}</p>
              <p>Price:{items.price}</p>
              <p>Quantity:1</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
