// /components/Header.tsx
import Link from "next/link";
import config from "../config";

const Header = () => {
  return (
    <header className="header">
      <nav className="container mx-auto flex justify-between items-center p-4 content-width">
        <div>
          <Link href="/" className="text-2xl font-bold">
            encodedCoder · Suresh
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <Link href="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
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
      </nav>
    </header>
  );
};

export default Header;
