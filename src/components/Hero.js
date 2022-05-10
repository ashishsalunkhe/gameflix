import React from "react";
import "./style/Hero.scss";
import Button from "./Button";
import logo from "../assets/logo/dice2.svg";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    
    <div className="hero">
      <img src={logo} className="bgimage animate" alt="controller" />

      
      <header className="hero__header  animate">
      
      
      
      
       
        <h1 className="hero__maintitle hero__title">GameFlix</h1>
        <h2 class="hero__subtitle hero__title ">
        Showcasing free-to-play games at one place!
        </h2>
        
      </header>
      
      <div className="hero__btn">
        <Link
          to={"about"}
          activeClass="active"
          spy={true}
          smooth={true}
          duration={300}
          delay={300}
          offset={-100}
        >
          {/* <Button text="Learn more" handleClick={() => {}} /> */}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
