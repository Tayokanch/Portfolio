import React from "react";
import About from "./About";
import { useState } from "react";
import "./Home.css";
import { FaBars, FaTimes } from "react-icons/fa";
import js from "../assets/Images/js.png";
import html from "../assets/Images/html.png";
import css from "../assets/Images/css.png";
import react from "../assets/Images/react.png";
import nodejs from "../assets/Images/nodejs.png";
import linkedin from "../assets/Images/linkedin.png";
import github from "../assets/Images/github.png";
import postgresql from "../assets/Images/postgresql.png";
import expressjs from "../assets/Images/expressjs.ico";
import { useContext } from "react";
import { MyContext } from "../App";

function Home() {
  const {
    scrollToSelection,
    homeRef,
    aboutRef,
    portfolioRef,
    contactRef,
    unDisplayNav,
  } = useContext(MyContext);
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <figure class="pimg1" ref={homeRef}>
        <div class="header">
          <h2>
            Dev<span id="dev">Tayo</span>
          </h2>
          <nav
            className={`${openNav ? "open" : ""} ${
              unDisplayNav ? "undisplay" : ""
            }`}
          >
            <li onClick={() => scrollToSelection(homeRef)}>Home</li>
            <li onClick={() => scrollToSelection(aboutRef)}>About</li>
            <li onClick={() => scrollToSelection(portfolioRef)}>Projects</li>
            <li onClick={() => scrollToSelection(contactRef)}>Contact</li>
            <button onClick={handleNav} className="close">
              <FaTimes />
            </button>
          </nav>
          <button className={`bar`} onClick={handleNav}>
            <FaBars />
          </button>
        </div>
        <main>
          <p className="my_name">
            Hi, I'm <span>Omotayo</span>
          </p>
          <h3>I turn users stories into tailored software solutions</h3>
        </main>

        <footer>
          <div className="mystacks">
            <div>
              <img src={js} alt="" />
            </div>
            <div>
              <img src={html} alt="" />
            </div>
            <div>
              <img src={css} alt="" />
            </div>

            <div>
              <img src={react} alt="" />
            </div>
            <div>
              <img src={expressjs} alt="" />
            </div>
            <div>
              <img src={postgresql} alt="" />
            </div>
          </div>
          <div className="page">
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/kazeem-omotayo-quadri-b240291a3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </div>
            <div className="github">
              <a
                href="https://github.com/Tayokanch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
            </div>
          </div>
        </footer>
      </figure>
    </>
  );
}

export default Home;
