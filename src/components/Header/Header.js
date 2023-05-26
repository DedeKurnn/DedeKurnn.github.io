import { useState } from "react";
import logoLight from "../../assets/SVG/logo-dike-hitam.svg";
import logoDark from "../../assets/SVG/logo-dike-putih.svg";
import Button from "../UI/Button";
import { Spiral as Hamburger } from "hamburger-react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  
  isDarkMode ? document.documentElement.classList.add('dark') 
    : document.documentElement.classList.remove('dark');
    
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
    <nav class="absolute bg-white dark:bg-container-dark shadow-lg rounded-lg w-full top-24 right-0 p-8 z-50">
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
          <div className="flex gap-4 items-center">
            <Button href="#contact" onClick={contactHandler} className="w-full">
              Contact Me
            </Button>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={40}
            />
          </div>
        </li>
      </ul>
    </nav>
  );
  return (
    <header className="flex container mx-auto gap-1 mt-4 relative">
      <div className="w-1/4 flex text-text-color dark:text-white justify-center items-center gap-1 p-4 bg-white dark:bg-container-dark rounded-xl">
        <img src={isDarkMode ? logoDark : logoLight} alt="Logo DedeKurnn" className="w-10 h-10" />
        <span className="hidden md:block font-plusJakarta font-bold text-xl">
          DedeKurnn.
        </span>
      </div>
      <nav className="w-3/4 p-4 bg-white dark:bg-container-dark rounded-xl flex items-center justify-end pr-8 md:pr-16">
        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction="right"
            color="black"
          />
          {isOpen && navMobile}
        </div>
        {
          <ul className="hidden block md:flex items-center gap-8 lg:gap-16 font-plusJakarta font-semibold">
            <li>
              <a
                href="#about"
                onClick={aboutHandler}
                className="hover:text-primary-darker transition-all"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={projectHandler}
                className="hover:text-primary-darker transition-all"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-500 cursor-not-allowed">
                Blog
              </a>
            </li>
            <li>
              <div className="flex gap-8 lg:gap-16 items-center justify-center">
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={32}
                />
                <Button href="#contact" onClick={contactHandler}>
                  Contact Me
                </Button>
              </div>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
