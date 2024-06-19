import React from "react";
import { gsap } from "gsap";
import boy from "../Images/the boy.avif";
import girl from "../Images/thegirl.avif";
import watch from "../Images/watch.avif";
import { useGSAP } from "@gsap/react";

const LandingCon = () => {
  useGSAP(() => {
    gsap.from("#image-girl", {
      y: 700,
      duration: 1,
      delay: 2,
    });
    gsap.from("#image-boy", {
      y: 700,
      duration: 1.3,
      delay: 3,
    });
    gsap.from("#image-watch", {
      y: 700,
      duration: 1.5,
      delay: 4,
    });
  }, []);

  return (
    <div className="bg-[#212121] h-screen w-full relative">
      <div className="w-[26rem] p-7 ml-20 h-[39rem] flex flex-col justify-between">
        <div>
          <h1 className="text-slate-300 text-4xl">
            Welcome To the Ecommerce Website Get The Best Product In Cheap
            Price.
          </h1>
          <p className="mt-[6rem] text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            culpa fugit nobis dolores incidunt! Distinctio nemo, at quia quos
            eveniet voluptas?
          </p>
        </div>

        <div>
          <button className="p-3 w-[8rem] border rounded-full text-white hover:bg-black hover:text-slate-300">
            Explore
          </button>
        </div>
      </div>

      <div>
        <img
          src={girl}
          alt="girl"
          className="w-[12%] absolute right-40 top-5"
          id="image-girl"
        />
      </div>
      <div>
        <img
          src={boy}
          alt="boy"
          className="w-[12%] absolute top-[17rem] right-[20rem]"
          id="image-boy"
        />
      </div>
      <div>
        <img
          src={watch}
          alt="watch"
          className="w-[12%] absolute top-5 right-[30rem] h-[15rem]"
          id="image-watch"
        />
      </div>
    </div>
  );
};

export default LandingCon;
