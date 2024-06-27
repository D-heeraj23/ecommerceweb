import { Route, Switch } from "react-router-dom";
import { useContext, useState, Suspense, lazy } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";
import AuthContext from "./context/AuthContext";
import ContactUs from "./pages/ContactUs";
// import ProductDetail from "./components/ProductDetail";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Some from "./pages/Some";
import { SyncLoader } from "react-spinners";

const LazyProductDetail = lazy(() => import("./components/ProductDetail"));

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
          <Suspense
            fallback={
              <div className="h-screen w-full flex items-center justify-center">
                <SyncLoader />
              </div>
            }
          >
            <Route path={"/store/product-detail/:id"}>
              <LazyProductDetail />
            </Route>
          </Suspense>
        )}
        <Route path={"/some"}>
          <Some />
        </Route>
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
