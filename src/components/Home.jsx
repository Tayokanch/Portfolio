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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

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
        <section>
          <main>
            <p className="my_name pb-4">
              👋 Hi, I'm <span>Omotayo.</span>
            </p>
            <ul className="text-amber-50 flex flex-col gap-4">
              <p className="text-3xl lg:text-4xl py-3">
                I build fast, resilient software apps with:
              </p>
              <li className="text-xl">
                <span className="text-teal-700 font-bold text-3xl">
                  Frontend:{" "}
                </span>
                React, JavaScript, and TypeScript
              </li>
              <li className="text-xl">
                {" "}
                <span className="text-teal-700 font-bold text-3xl">
                  Backend:{" "}
                </span>{" "}
                Java, Express, Node.js
              </li>
              <li className="text-xl">
                {" "}
                <span className="text-teal-700 font-bold text-3xl">
                  Cloud:{" "}
                </span>{" "}
                AWS (Lambda, S3, EC2)
              </li>
            </ul>
          </main>
        </section>

        <footer>
          <div>
            <p className="text-2xl text-white">STACKS</p>
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
          </div>

          <div className="">
            <p className="text-2xl text-white pb-1">PROFILE</p>
            <div className="page flex flex-col justify-evenly">
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/kazeem-omotayo-quadri-b240291a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="size-6"
                    style={{ color: "#0A66C2" }}
                  />
                </a>
              </div>
              <div className="github">
                <a
                  href="https://github.com/Tayokanch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="size-6 text-white"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </figure>
    </>
  );
}

export default Home;
