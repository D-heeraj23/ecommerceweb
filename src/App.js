import { Route, Switch } from "react-router-dom";
import { useContext, useState } from "react";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./components/ProductDetail";

function App() {
  const { isCartOpen } = useContext(CartContext);
  const [refresh, setRefresh] = useState(false);

  const handleAddToCart = () => {
    setRefresh((prev) => !prev);
  };
  return (
    <Layout>
      {isCartOpen && <Cart refresh={refresh} />}
      <Switch>
        <Route path={"/about"}>
          <About />
        </Route>
        <Route path={"/home"}>
          <Home />
        </Route>
        <Route path={"/store"} exact>
          <Store onClick={handleAddToCart} />
        </Route>
        <Route path={"/contactus"}>
          <ContactUs />
        </Route>
        <Route path={"/store/product-detail/:id"}>
          <ProductDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
