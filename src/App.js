import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
function App() {
  return (
    <Layout>
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
