import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import config from "../config";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header fixed top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-4 content-width">
        <div>
          <Link href="/" className="flex items-center main-link">
            <Image
              src="/favicon.ico"
              alt="favicon"
              width={32}
              height={32}
              className="w-8 h-8 mr-2"
            />
            encodedCoder · Suresh
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link href="/web-dev" className="nav-link">
            WebDev
          </Link>
          <Link href="/game-dev" className="nav-link">
            GameDev
          </Link>
          {config.showBlog && (
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          )}
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/portfolio" className="nav-link" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link href="/web-dev" className="nav-link" onClick={toggleMenu}>
              WebDev
            </Link>
            <Link href="/game-dev" className="nav-link" onClick={toggleMenu}>
              GameDev
            </Link>
            {config.showBlog && (
              <Link href="/blog" className="nav-link" onClick={toggleMenu}>
                Blog
              </Link>
            )}
            <Link href="/about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
