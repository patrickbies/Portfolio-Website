import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-background w-full h-screen">
      <header className="flex sticky inset-0 py-[3vh] px-[15vw] row items-center backdrop-blur-xl">
        <h1 className="text-3xl poppins-semibold text-foreground w-[25vw]">
          Patrick Bies
        </h1>
        <div className="flex row w-[30vw] poppins-regular justify-around">
          <Link
            to="about"
            className="hover:text-muted-foreground transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="projects"
            className="hover:text-muted-foreground transition-colors duration-300"
          >
            Projects
          </Link>
          <button className="hover:text-muted-foreground transition-colors duration-300">
            Resume
          </button>
        </div>
        <div className="flex row w-[25vw] justify-end poppins-regular">
          <button className="hover:text-muted-foreground transition-colors duration-300">
            Contact
          </button>
        </div>
      </header>
      <div className="px-[10vw]">
        <div className="bg-accent h-[90vh] w-full rounded-2xl shadow-xl border flex row overflow-hidden px-[5vw]">
          <div className="w-[60%] py-[20vh]">
            <h1 className="text-5xl poppins-bold text-foreground">
              Building innovative software solutions
            </h1>
            <h6 className="text-xl poppins-regular text-muted-foreground py-[3vh]">
              Computer science and mathematics student at the University of
              Ottawa.
            </h6>

          </div>
          <div className="bg-red-500 w-[40%] h-full flex flex-row justify-between">
            <div className="w-[30%] flex justify-around h-full flex-col py-[10vh]">
              <div className="bg-blue-500 w-full aspect-square" />
              <div className="bg-blue-500 w-full aspect-square" />
              <div className="bg-blue-500 w-full aspect-square" />
            </div>
            <div className="w-[30%] flex justify-around h-full flex-col py-[5vh]">
              <div className="bg-blue-500 w-full aspect-square" />
              <div className="bg-blue-500 w-full aspect-square" />
              <div className="bg-blue-500 w-full aspect-square" />
              <div className="bg-blue-500 w-full aspect-square" />
            </div>
            <div className="w-[30%] flex justify-around h-full flex-col py-[10vh]">
              <div className="bg-blue-500 w-full aspect-square" />
              <div className="bg-blue-500 w-full aspect-square" />
              <div className="bg-blue-500 w-full aspect-square" />
            </div>
          </div>
        </div>
        <h1 className="text-3xl poppins-semibold text-foreground w-[25vw] pt-[4vh] pl-[5vw]">
          Recent Projects
        </h1>

      </div>
    </div>
  );
};

export default Home;
