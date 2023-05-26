import { useState } from "react";
import logo from "../../assets/SVG/logo-dike-hitam.svg";
import Button from "../UI/Button";
import { Spiral as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const aboutHandler = () => {
    const targetElement = document.getElementById("about");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projectHandler = () => {
    const targetElement = document.getElementById("projects");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactHandler = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navMobile = (
    <nav class="absolute bg-white shadow-lg rounded-lg w-full top-24 right-0 p-8 z-50">
      <ul className="flex flex-col gap-8 w-full">
        <li>
          <a href="#about" onClick={aboutHandler}>
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" onClick={projectHandler}>
            Projects
          </a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <Button href="#contact" onClick={contactHandler} className="!w-full">
            Contact Me
          </Button>
        </li>
      </ul>
    </nav>
  );
  return (
    <header className="flex container mx-auto gap-1 mt-4 relative">
      <div className="w-1/4 flex text-text-color justify-center items-center gap-1 p-4 bg-white rounded-xl">
        <img src={logo} alt="Logo DedeKurnn" className="w-10 h-10" />
        <span className="hidden md:block font-plusJakarta font-bold text-xl">
          DedeKurnn.
        </span>
      </div>
      <div className="w-3/4 p-4 bg-white rounded-xl flex items-center justify-end pr-8 md:pr-16">
        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction="right"
            color="black"
          />
          {isOpen && navMobile}
        </div>
        {<ul className="hidden block md:flex items-center gap-8 lg:gap-16 font-plusJakarta font-semibold">
          <li>
            <a href="#about" onClick={aboutHandler} className="hover:text-primary-darker transition-all">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={projectHandler} className="hover:text-primary-darker transition-all">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-500 cursor-not-allowed">Blog</a>
          </li>
          <li>
            <Button href="#contact" onClick={contactHandler}>
              Contact Me
            </Button>
          </li>
        </ul>}
      </div>
    </header>
  );
};

export default Header;
