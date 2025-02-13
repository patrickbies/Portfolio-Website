import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg-background w-full h-screen px-[10vw]">
      <div className="flex sticky inset-0 py-[3vh] px-[5vw] row items-center">
        <h1 className="text-3xl poppins-semibold text-foreground w-[25vw]">Patrick Bies</h1>
        <div className="flex row w-[30vw] poppins-regular justify-around">
          <Link to="about" className="hover:text-muted-foreground transition-colors duration-300">
            About
          </Link>
          <Link to="projects" className="hover:text-muted-foreground transition-colors duration-300">
            Projects
          </Link>
          <h6>Resume</h6>
        </div>
        <div className="flex row w-[25vw] justify-end poppins-regular">
          <h6>Contact</h6>
        </div>
      </div>
      <div className="bg-accent my-[3vh] h-[100vh] w-full rounded-2xl shadow-xl border py-[20vh]">
        <div className="w-[60%] px-[5vw]">
        <h1 className="text-5xl poppins-bold text-foreground">  
          Building innovative software solutions
        </h1>
        <h6 className="text-xl poppins-regular text-muted-foreground py-[3vh]">
          Computer science and mathematics student at the University of Ottawa. 
        </h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
