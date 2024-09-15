import React from "react";
import { Link } from "react-router-dom";

// images
import truckLogo from "../assets/images/logos/truck.svg";

const Header = ({ className = "" }) => {
  return (
    <header className={`py-5 ${className}`}>
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <nav className="flex items-center gap-12 animate__animated animate__fadeInDown">
            {/* logo */}
            <Link to="/" className="flex items-center gap-3.5">
              <img
                width={64}
                height={64}
                src={truckLogo}
                alt="truck logo svg"
                className="size-16"
              />

              {/* logo text */}
              <h1 className="font-medium uppercase text-lg">K20 TEAM</h1>
            </Link>

            {/* nav list */}
            <ul className="flex items-center gap-3.5">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* header btn */}
          <Link
            to="/join"
            className="animate__animated animate__fadeInRight bg-primary backdrop-blur px-10 py-2.5 text-secondary rounded-full font-medium transition-colors duration-300 hover:bg-primary/70"
          >
            Join us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
