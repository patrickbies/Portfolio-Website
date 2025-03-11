import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-50 roboto-mono-medium backdrop-blur-xl text-foreground/80 bg-background/70 items-center border-border h-[10vh] px-[5vw] w-full flex flex-row justify-between">
      <div className="w-[40vw] md:w-[15vw]">
        <Link to="/">Patrick Bies</Link>
      </div>
      <div className="hidden md:flex flex-row justify-between w-[30vw] ">
        <Link
          to="/#projects"
          className="hover:text-foreground transition-colors"
          onClick={() => {
            const element = document.getElementById("projects");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", "/#projects");
            }
          }}
        >
          Projects
        </Link>
        <Link
          to="/#about"
          className="hover:text-foreground transition-colors hidden md:block"
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", "/#about");
            }
          }}
        >
          About
        </Link>
        <Link to="/resume" className="hover:text-foreground transition-colors">
          Resume
        </Link>
      </div>
      <div className="w-[40vw] md:w-[15vw] flex justify-end">
      <Link
          to="/#contact"
          className="hover:text-foreground transition-colors hidden md:block"
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", "/#contact");
            }
          }}
        >
          Contact
        </Link>
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
          onClick={() => {
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
          <Link
          to="/#projects"
          className="hover:text-foreground transition-colors"
          onClick={() => {
            const element = document.getElementById("projects");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", "/#projects");
            }
          }}
        >
          Contact
        </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
