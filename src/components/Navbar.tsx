import Button from "./Button";
import ThemeToggle from "./ThemeToogle";

export default function Navbar() {
  return (
    <header className="flex fixxed top-0 relative items-center w-full h-auto bg-gray-300 justify-between p-4 text-white font-bold">
      <figure>
        <figcaption className="text-gray-600">
          Fenny | Personal Website
        </figcaption>
      </figure>
      <nav className="flex gap-4 text-gray-600 items-center">
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
          Contact
        </a>
      </nav>
      <ThemeToggle />
    </header>
  );
}
