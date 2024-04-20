import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-zinc-800 text-white flex items-center justify-around p-4">
      <div>
        <h1>Ecommerce Store</h1>
      </div>
      <ul className="flex gap-10">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div>cart</div>
    </div>
  );
};
export default Navbar;
