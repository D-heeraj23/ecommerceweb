import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
const Signup = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (
      passwordInputRef.current.value !== confirmPasswordInputRef.current.value
    ) {
      toast.error("Password is not matching");
      return;
    }

    if (passwordInputRef.current.value.length < 8) {
      toast.error("password should be more then 8 words");
      return;
    }

    try {
      setIsLoading(true);
      const resposne = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1q4BC-f7awd0_WwBgVU-gq0eF_CC0g_Y",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            returnSecureToken: true,
          }),
        }
      );

      if (!resposne.ok) {
        let data = await resposne.json();
        let errorMessage = "";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }

      const data = await resposne.json();
      toast.success("now you can signin to your account");
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
      alert("Signup success now you can signin to your account");
      history.push("/signin");
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
          onSubmit={formSubmitHandler}
        >
          <input
            type="text"
            placeholder="name"
            className="p-2 rounded-full w-[21rem]"
            ref={nameInputRef}
          />
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
          <input
            type="password"
            placeholder="confirm password"
            className="p-2 rounded-full w-[21rem]"
            ref={confirmPasswordInputRef}
          />
          <button
            className="bg-blue-950 text-blue-50 p-2 w-28 rounded-full"
            type="submit"
          >
            {isLoading ? <SyncLoader color="#0f5dbd" /> : "Signup"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
