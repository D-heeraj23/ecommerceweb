import { useRef } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

const Signin = () => {
  const emailInputRef = useRef();
  const history = useHistory();
  const passwordInputRef = useRef();
  const { loginHandler } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const signinHandler = async (e) => {
    e.preventDefault();
    localStorage.setItem("email", emailInputRef.current.value);

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1q4BC-f7awd0_WwBgVU-gq0eF_CC0g_Y",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        let errorMessage = "Authentication failed!";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }

      loginHandler(data.idToken);
      history.replace("/store");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-slate-600 flex items-center justify-center">
      <div className="bg-blue-300 flex items-center justify-center w-2/3 rounded-full p-20">
        <div>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-shopping-online-using-e-commerce-app-7129328-5791999.png?f=webp"
            alt="ok"
            className="w-1/2"
          />
        </div>
        <form
          className="flex items-center flex-col gap-6"
          onSubmit={signinHandler}
        >
          <input
            type="email"
            placeholder="email"
            className="p-2 rounded-full w-[21rem]"
            ref={emailInputRef}
          />
          <input
            type="password"
            placeholder="password"
            className="p-2 rounded-full w-[21rem]"
            ref={passwordInputRef}
          />

          <div className="flex items-center gap-4">
            <button className="bg-blue-950 text-blue-50 p-2 w-28 rounded-full">
              {isLoading ? <SyncLoader /> : "Signin"}
            </button>
            <button
              className="bg-blue-950 text-blue-50 p-2 w-[10rem] rounded-full"
              type="submit"
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signin;
