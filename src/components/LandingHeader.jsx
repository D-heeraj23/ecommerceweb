import Button from "../UI/Button";
import { useGSAP } from "@gsap/react";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

const LandingHeader = () => {
  const history = useHistory();
  useGSAP(() => {
    gsap.from("#images", {
      y: -100,
      duration: 1,
      delay: 1,
    });
    gsap.from("#name", {
      y: -100,
      duration: 1.3,
      delay: 1,
    });
    gsap.from("#btn", {
      y: -100,
      duration: 1.5,
      delay: 1,
    });
  });
  return (
    <>
      <div className="w-[15rem] flex items-center">
        <img
          src="https://images-platform.99static.com//sadxxV7P3vjDus8EbkHBIXm8l6o=/0x0:1969x1969/fit-in/500x500/99designs-contests-attachments/100/100102/attachment_100102190"
          alt="logo"
          className="w-[250px] h-[90px] object-cover p-3 mix-blend-screen"
          id="images"
        />
        <div className="text-zinc-500 border-b text-2xl" id="name">
          M.E.W
        </div>
      </div>
      <div className="flex gap-5 mr-10" id="btn">
        <Button name={"Sign In"} onClick={() => history.push("/signin")} />
        <Button name={"Sign Up"} onClick={() => history.push("/signup")} />
      </div>
    </>
  );
};

export default LandingHeader;
