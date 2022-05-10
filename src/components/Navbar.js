import React from "react";
import { Link } from "react-scroll";
import "./style/Navbar.scss";

import logo from "../assets/logo/dice2.svg";

const Navbar = ({ setRand }) => {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
       <a href="/"><img src={logo} className="nav__logo" alt="controller" /></a> 

        <ul className="nav__list">
          {/* <li className="nav__item">
            <Link
              activeClass="active"
              to="start"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Start!
            </Link>
          </li> */}
          <li
            className="nav__item"
            onClick={() => {
              setRand(true);
            }}
          >
            <Link
              activeClass="active"
              to="result"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                setRand(true);
              }}
            >
              <span className="nav__luckycolor">I'm Feeling Lucky!</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
