import "./Home.css";

const Home = () => {
  return (
    <div className="bg-[#CBD0B9] w-full h-screen flex flex-col">
      <div className="text-[#514B23] poppins-black leading-none text-[13.5vw] flex justify-between">
        <span>PATRICK</span> <span>BIES</span>
      </div>
      <div className="text-5xl md:text-6xl flex flex-col w-fit">
        <span className="text-[#514B23] poppins-bold text-left">SOFTWARE</span>
        <span className="text-[#656839] poppins-bold text-left">DEVELOPER</span>
      </div>
    </div>
  );
};

export default Home;
