const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} EncodedCoder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
