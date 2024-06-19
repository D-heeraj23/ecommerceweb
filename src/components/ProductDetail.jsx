import { useParams } from "react-router-dom";

const productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    description:
      "this is colors in just 100 rupees and good track for party anf for fun the music is created by me and the band is beatals in this music",
  },

  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    description:
      "this is black and white colors which is for elderaly people who loves the classic who just want to listen the song and relax ",
  },

  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    description:
      "yellow and black color is the music for yoga and meditaion this sound is recorded in the rain forest and in the rain so you can meditate to and relax the body by doing the yoga",
  },

  {
    id: "4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    description:
      "blue color is rock hard rock for them who just want to go to club somethig like this",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsArr.find((product) => product.title === id);
  return (
    <div className="w-full h-screen bg-zinc-300 flex items-center justify-center">
      <div className="w-3/4 h-3/4 flex items-center justify-around bg-blue-500 p-9 rounded-lg">
        <div className="w-1/2 h-full overflow-hidden rounded-lg">
          <img src={product.imageUrl} alt="sd" className="rounded-lg" />
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
