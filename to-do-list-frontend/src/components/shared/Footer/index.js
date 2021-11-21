import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          Copyright:
          <a
            className="Github"
            href="https://github.com/PedroCod?tab=repositories"
            rel="noreferrer"
            target="_blank"
          >
            Pedro Cod©
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
