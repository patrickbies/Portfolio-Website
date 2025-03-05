import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-50 poppins-regular text-foreground/80 bg-background border-b items-center border-border h-[8vh] px-[5vw] w-full flex flex-row justify-between">
      <div className="w-[40vw] md:w-[15vw]">
        <Link to="/">Patrick Bies</Link>
      </div>
      <div className="hidden md:flex flex-row justify-between w-[30vw] ">
        <Link
          to="/projects"
          className="hover:text-foreground transition-colors"
        >
          Projects
        </Link>
        <Link to="/about" className="hover:text-foreground transition-colors">
          About
        </Link>
        <Link to="/resume" className="hover:text-foreground transition-colors">
          Resume
        </Link>
      </div>
      <div className="w-[40vw] md:w-[15vw] flex justify-end">
        <button className="cursor-pointer hidden md:block">Contact</button>

      </div>
    </header>
  );
};

export default Header;
