import LandingCon from "../components/LandingCon";
import LandingHeader from "../components/LandingHeader";

const LandingPage = () => {
  return (
    <>
      <div className="bg-[#212121] flex justify-between items-center p-3">
        <LandingHeader />
      </div>
      <div>
        <LandingCon />
      </div>
    </>
  );
};

export default LandingPage;
