import Button from "./Button";
import ThemeToggle from "./ThemeToogle";

export default function Navbar() {
  return (
    <header className="flex fixxed top-0 relative items-center w-full h-auto bg-gray-400 dark:bg-gray-700 justify-between p-4 text-white font-bold">
      <figure>
        <figcaption className="text-gray-600 dark:text-white ">
          Fenny | Personal Website
        </figcaption>
      </figure>
      <nav className="md:flex hidden gap-4  text-gray-600 dark:text-gray-200 items-center">
        <a
          className="hover:text-pink-400 hover:border-b-2 hover:border-pink-400 "
          href="/"
        >
          Profile
        </a>
        <a className="hover:text-pink-400  " href="/about">
          About
        </a>
        <a className="hover:text-pink-400  " href="/contact">
          Project
        </a>
      </nav>
      <ThemeToggle />
    </header>
  );
}
