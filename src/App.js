import { Route, Switch } from "react-router-dom";
import { useContext, useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";
import AuthContext from "./context/AuthContext";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./components/ProductDetail";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  const { isCartOpen } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const [refresh, setRefresh] = useState(false);

  const handleAddToCart = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <>
      {isCartOpen && <Cart refresh={refresh} />}
      {isLoggedIn && <Navbar />}
      <Switch>
        {isLoggedIn && (
          <Route path={"/about"}>
            <About />
          </Route>
        )}
        {isLoggedIn && (
          <Route path={"/home"}>
            <Home />
          </Route>
        )}
        {isLoggedIn && (
          <Route path={"/store"} exact>
            <Store onClick={handleAddToCart} />
          </Route>
        )}
        {isLoggedIn && (
          <Route path={"/contactus"}>
            <ContactUs />
          </Route>
        )}
        {isLoggedIn && (
          <Route path={"/store/product-detail/:id"}>
            <ProductDetail />
          </Route>
        )}
        <Route path={"/signup"}>
          <Signup />
        </Route>
        <Route path={"/signin"}>
          <Signin />
        </Route>
        <Route path={"/"}>
          <LandingPage exact />
        </Route>
        <Route path="*" exact>
          <Signin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
