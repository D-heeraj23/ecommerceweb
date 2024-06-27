import { useEffect, useState } from "react";

const Some = () => {
  const [para, setPara] = useState(null);
  console.log("app running");
  const timer = useEffect(() => {
    setTimeout(() => {
      setPara("ok my name is dheeraj");
    }, 2000);

    const newTimer = setTimeout(() => {
      setPara("now changed again");
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(newTimer);
    };
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="rounded-md w-1/4 h-[8rem] flex justify-center items-center flex-col shadow-lg bg-[#f3f3f3]">
        hi there
        <div>{para}</div>
      </div>
    </div>
  );
};

export default Some;
