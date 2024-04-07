import { Link } from "react-router-dom";
import SearchBar from "../seachBar/SeachBar";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header className={`flex items-center justify-center desktop:gap-40 px-7 py-3 w-full fixed top-0 z-50 shadow-sm backdrop-blur-sm bg-opacity-50 border-b border-slate-900/10 dark:border-slate-50/[0.06]`}>
      {/* Logo and Title */}
      <Link
        to="/"
        className="mr-3 gap-2 backdrop-blur-0 justify-center items-center md:w-auto flex"
        href="/"
      >
        <img src="src/assets/fongolab.png" alt="" className="w-10 h-10" />
        <span className="text-2xl sm:text-xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">FongolaUI</span>
      </Link>

      {/* Search Bar */}
      <div className="w-full desktop:ml-10">
        <SearchBar />
      </div>

      {/* Navigation Menu (responsive with toggle button) */}
      <nav className={`text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 desktop:mr-[-100px] backdrop-blur-0 
                        tablet:flex ${isOpen ? "flex" : "hidden"}  mobile:absolute mobile:flex-col desktop:flex-row mobile:top-16 mobile:left-0 mobile:bg-red-300 mobile:flex-1 mobile:h-[300vh]`}> {/* Corrected media query for desktop */}
        <div className="flex gap-3">
          <ul className="flex tablet:space-x-8  mobile:flex-col desktop:flex-row">
            <li>
              <Link to={"/docs"}>Documentation</Link>
            </li>
            <li>
              <Link to={"/component"}>Components</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-4 mobile:flex-col desktop:flex-row">
            <strong className=" mobile:hidden desktop:flex">|</strong>
            <Link className="flex gap-2" to={"https://github.com/princelulinda"} >
              <i className="bi bi-github"></i>
              <span className="mobile:flex desktop:hidden">Github</span>
            </Link>
            <Link className="flex gap-2">
            <i className="bi bi-linkedin"></i>
            <span className="mobile:flex desktop:hidden">Github</span>


            </Link>
            <Link className="flex gap-2">
            <i className="bi bi-twitter-x"></i>
            <span className="mobile:flex desktop:hidden">Github</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Toggle Button (visible only on smaller screens) */}
      <button
        className="desktop:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 tablet:hidden focus:ring-sky-500 hover:bg-gray-100 rounded-full p-2 ml-auto"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <i className="bi bi-x-lg"></i> // Close icon when menu is open
        ) : (
          <i className="bi bi-list"></i> // Menu icon when menu is closed
        )}
      </button>

      {/* Additional Links (optional) */}
      <div className="flex items-center ml-auto">
        {/* <a href="" className="ml-3 text-xs leading-5 font-medium text-sky-600 dark:text-sky-400">
          Login
        </a> */}  {/* Add your links here */}
      </div>
    </header>
  );
};

export default Navbar;
