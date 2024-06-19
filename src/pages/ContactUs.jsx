import { useState } from "react";
import { Prompt } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isEntering, setIsEntering] = useState(false);

  const [formData, setFormData] = useState(null);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChnageHandler = (e) => {
    setEmail(e.target.value);
  };

  const numberChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      number,
    };
    setFormData(data);
    setName("");
    setEmail("");
    setNumber("");
  };

  const contactUsHandler = async () => {
    setIsEntering(false);
    try {
      const res = await fetch(
        "https://ecommerce-26aad-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error("cant send the data");
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      alert("data send success");
    }
  };

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  return (
    <>
      <Prompt when={isEntering} message={(location) => "you want to leave?"} />
      <div className="h-screen w-full flex items-center justify-center">
        <form
          className="bg-purple-400 p-4 w-96 h-96 flex flex-col gap-8 rounded-xl"
          onSubmit={formSubmitHandler}
          onFocus={formFocusHandler}
        >
          <input
            type="text"
            placeholder="name"
            className="p-2 w-full rounded-md"
            onChange={nameChangeHandler}
            value={name}
          />
          <input
            type="email"
            placeholder="email"
            className="p-2 w-full rounded-md"
            onChange={emailChnageHandler}
            value={email}
          />
          <input
            type="number"
            placeholder="phone"
            className="p-2 w-full rounded-md"
            onChange={numberChangeHandler}
            value={number}
          />
          <div className="flex justify-end items-end h-full">
            <button
              className="p-3 bg-blue-600 rounded-xl m-4 text-white font-bold w-24"
              type="submit"
              onClick={contactUsHandler}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
