import React from "react";

const Footer = () => {
  return (
    <div>
      <>
        <footer className="flex flex-col space-y-10 justify-center m-10">
          <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
            <a className="hover:text-gray-900" href="#">
              Home
            </a>
            <a className="hover:text-gray-900" href="#">
              Shop
            </a>
            <a className="hover:text-gray-900" href="#">
              About Us
            </a>
            <a className="hover:text-gray-900" href="#">
              Our Cakes
            </a>
            
            <a className="hover:text-gray-900" href="#">
              Contact Us
            </a>
          </nav>
          <div className="flex justify-center space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
            </a>
            <a
              href="https://messenger.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
            </a>
          </div>
          <p className="text-center text-gray-700 font-medium">
            © 2022 Company Ltd. All rights reservered.
          </p>
        </footer>
      </>
    </div>
  );
};

export default Footer;
