import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthContextProvider = (props) => {
  const initailToken = localStorage.getItem("token");
  const [token, setToken] = useState(initailToken);
  const isLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logoutHandler, loginHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
