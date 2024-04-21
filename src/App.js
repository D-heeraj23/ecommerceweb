import { Route } from "react-router-dom";
import { useContext } from "react";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";

function App() {
  const { isCartOpen } = useContext(CartContext);
  return (
    <Layout>
      {isCartOpen && <Cart />}
      <Route path={"/about"}>
        <About />
      </Route>
      <Route path={"/home"}>
        <Home />
      </Route>
      <Route path={"/store"}>
        <Store />
      </Route>
    </Layout>
  );
}

export default App;
