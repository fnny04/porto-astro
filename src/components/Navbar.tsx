import ThemeToggle from "./ThemeToogle";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx/index.js";

export default function Navbar() {
  const [hamburgerOpen, sethamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    sethamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <header className="flex absolute top-100 relative items-center w-full h-auto bg-blue-400 dark:bg-gray-700 justify-between p-2 text-white font-bold">
        <RxHamburgerMenu
          onClick={toggleHamburger}
          className="md:hidden text-3xl cursor-pointer"
        />

        <figure>
          <figcaption className="text-cyan-800 p-4 dark:text-white ">
            Fenny | Personal Website
          </figcaption>
        </figure>
        <nav className="md:flex hidden gap-4  text-cyan-800 dark:text-gray-200 items-center">
          <a
            className="hover:text-pink-400 hover:border-b-2 hover:border-pink-400 "
            href="/"
          >
            Profile
          </a>
          <a className="hover:text-pink-400  " href="/about">
            About
          </a>
          <a className="hover:text-pink-400  " href="/project">
            Project
          </a>
        </nav>
        <ThemeToggle />
      </header>
      {hamburgerOpen && (
        <nav className="flex flex-col md:hidden bg-blue-300 dark:bg-gray-700 p-2 gap-4  text-gray-600 dark:text-gray-200 items-center">
          <a
            className="hover:text-pink-400 border-b-2 hover:border-b-2 hover:border-pink-400 "
            href="/"
          >
            Profile
          </a>
          <a className="hover:text-pink-400  " href="/about">
            About
          </a>
          <a className="hover:text-pink-400  " href="/project">
            Project
          </a>
        </nav>
      )}
    </>
  );
}
