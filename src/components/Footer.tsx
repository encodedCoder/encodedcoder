import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto text-center p-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/encodedcoder"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/encodedcoder"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com/encodedcoder"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p>
          Copyright &copy; {new Date().getFullYear()} encodedCoder · Suresh. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
