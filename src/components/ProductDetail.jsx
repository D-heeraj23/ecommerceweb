import { useParams } from "react-router-dom";

const productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore maiores culpa, ex id quibusdam possimus exercitationem! Culpa, ut adipisci!",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore maiores culpa, ex id quibusdam possimus exercitationem! Culpa, ut adipisci!",
    imageUrl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore maiores culpa, ex id quibusdam possimus exercitationem! Culpa, ut adipisci!",
    imageUrl:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Blue Color",
    price: 100,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore maiores culpa, ex id quibusdam possimus exercitationem! Culpa, ut adipisci!",
    imageUrl:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "black shoes",
    price: 250,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore maiores culpa, ex id quibusdam possimus exercitationem! Culpa, ut adipisci!",
    imageUrl:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    title: "white shoes",
    price: 350,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore maiores culpa, ex id quibusdam possimus exercitationem! Culpa, ut adipisci!",
    imageUrl:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww ",
  },
  {
    id: "7",
    title: "lady shoes",
    price: 260,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolore maiores culpa, ex id quibusdam possimus exercitationem! Culpa, ut adipisci!",
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fHww",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsArr.find((product) => product.title === id);
  return (
    <div className="w-full h-screen bg-zinc-300 flex items-center justify-center">
      <div className="w-3/4 h-3/4 flex items-center justify-around bg-blue-500 p-9 rounded-lg">
        <div className="w-1/2 h-full overflow-hidden rounded-lg">
          <img
            src={product.imageUrl}
            alt="sd"
            className="rounded-lg size-80 object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-between pt-16 pb-16">
          <div className="font-bold text-white text-4xl border-b-2 ">
            {product.title}: ${product.price}
          </div>
          <div className="text-white">{product.description}</div>
          <button className="mt-[20rem] bg-gradient-to-r from-zinc-800 to-zinc-900 w-36 p-2 rounded-lg text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
