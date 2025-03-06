import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-50 poppins-regular text-foreground/80 bg-background border-b items-center border-border h-[8vh] px-[5vw] w-full flex flex-row justify-between">
      <div className="w-[40vw] md:w-[15vw]">
        <Link to="/">Patrick Bies</Link>
      </div>
      <div className="hidden md:flex flex-row justify-between w-[30vw] ">
        <Link
          to="/#projects"
          className="hover:text-foreground transition-colors"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("projects");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", "/#projects");
            }
          }}
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
        <button className="cursor-pointer hidden md:block hover:text-foreground transition-colors">Contact</button>
        <button className="md:hidden" onMouseDown={() => setOpen(!open)}>
          <AlignJustify />
        </button>
      </div>
      <div
        className={`absolute z-10 inset-0 w-full top-[8vh] bg-background transition-all ${
          open ? "h-[92vh]" : "h-0"
        }`}
      >
        <div
          className={`w-full h-full flex flex-col ${open ? "block" : "hidden"}`}
        >
          <Link
            to="/#projects"
            className="hover:text-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("projects");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "/#projects");
              }
            }}
          >
            Projects
          </Link>
          <Link to="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link
            to="/resume"
            className="hover:text-foreground transition-colors"
          >
            Resume
          </Link>
          <button className="hover:text-foreground transition-colors">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
