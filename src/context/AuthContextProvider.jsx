import AuthContext from "./AuthContext";
import { useState } from "react";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const isLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logoutHandler, loginHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
