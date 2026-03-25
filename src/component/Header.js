import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <nav className="bg-gradient-to-r from-black via-blue-600 to-blue-400 text-white shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
          GS
        </h1>

        {/* Icons Section */}
        <div className="flex items-center space-x-6 text-xl">

        

<FaEnvelope
  onClick={() =>
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=sumanth.prt@gmail.com",
      "_blank"
    )
  }
  className="cursor-pointer text-2xl"
/>

          {/* GitHub Icon */}
          <a
            href="https://github.com/issumanth"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition transform hover:scale-110"
          >
            <FaGithub />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/sumanth-g-0a5501306/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-900 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Header;