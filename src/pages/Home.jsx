const Home = () => {
  return (
    <>
      <div className="bg-slate-400 text-center">
        <h1 className="text-6xl font-bold p-5 ">The Genereics</h1>
        <h2 className="mt-6 p-7 border-solid">Get our latest Album</h2>
      </div>
      <div>
        <h1 className="text-center mt-9 font-bold text-2xl">Tours</h1>
        <div className="flex align-center justify-center gap-20 mt-20 ">
          <p>july 16</p>
          <p>MP</p>
          <p>DET enery mucic center</p>
          <button className="bg-sky-300 rounded p-1 w-40">Buy ticket</button>
        </div>
        <div className="flex align-center justify-center gap-20 mt-20 ">
          <p>july 26</p>
          <p>Delhi</p>
          <p>Power house dwps cen</p>
          <button className="bg-sky-300 rounded p-1 w-40">Buy ticket</button>
        </div>
      </div>
    </>
  );
};

export default Home;
