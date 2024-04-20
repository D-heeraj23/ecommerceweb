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

const Store = () => {
  return (
    <>
      <div className="bg-gray-500 p-8">
        <h1 className="text-6xl font-bold text-center text-white">
          The Generics
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10 m-5 p-20">
        {productsArr.map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-center mb-4">
              <p className="font-bold">Album {i + 1}</p>
              <img src={item.imageUrl} alt="product" className="mb-2" />
              <div className="text-center">
                <p className="font-bold">{item.title}</p>
                <p className="text-gray-700">Price :{item.price}</p>
              </div>
              <div>
                <button className="bg-slate-800 p-2 rounded-md text-white">
                  Add to cart
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
