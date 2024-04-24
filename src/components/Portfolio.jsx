import React from "react";
import { MyContext } from "../App";
import { useContext } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Portfolio.css";
import explorelag from "../assets/Images/explorelag.png";
import trainapp from "../assets/Images/trainapp.png";

function Porfolio() {
  const { portfolioRef } = useContext(MyContext);
  return (
    <>
      <figure class="pimg2">
        <div class="ptext">
          <span class="border">My Project</span>
        </div>
      </figure>
      <section className="portfolio" ref={portfolioRef}>
        <h5>Project 1</h5>
        <div className="project_container">
          <figure>
            <img src={explorelag} alt="" />
          </figure>
          <div>
            <h4>Explore Lagos</h4>
            <p>
              This is a full stack web application designed for easy ticket
              bookings to various attractions in Lagos, Nigeria. It features
              three main categories: Art and Gallery, Recreational Centre, and
              Beach. Users can register, filter locations by categories, explore
              each spot, book multiple tickets, view valid and expired tickets,
              write reviews, while tour guides and admins have specialized
              logins for scheduling and management.
            </p>
            <div className="technologies">
              <p>Tech used:</p>
              <div>
                <p>React</p>
                <p>Express</p>
                <p>PostgreSQL</p>
                <p>Prisma</p>
              </div>
            </div>

            <div className="project_link">
              <div className="github">
                <a
                  href="https://github.com/Tayokanch/ExploreLagos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <div className="live">
                <a
                  href="https://explorelagos.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <h5>Project 2</h5>
        <div className="project_container">
          <figure>
            <img src={trainapp} alt="" />
          </figure>
          <div>
            <h4>Train Ticket Selling App</h4>
            <p>
              The proposed web application facilitates the resale of valid train
              tickets across the UK, providing a platform for sellers to post
              their tickets for sale. Buyers can access a comprehensive list of
              available tickets and filter them based on their preferred
              location. Additionally, buyers can chat with the sellers to
              inquire about ticket details or initiate the purchase process.
              This platform serves as a convenient solution for individuals
              looking to resell their train tickets before their expiration,
              thereby avoiding potential loss without the option for refunds
              from the original purchase.
            </p>
            <div className="technologies">
              <p>Tech used:</p>
              <div>
                <p>React</p>
              </div>
            </div>

            <div className="project_link">
              <div className="github">
                <a
                  href="https://github.com/Tayokanch/Ticket-Traders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <div className="live">
                <a
                  href="https://superlative-eclair-6a2967.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Porfolio;
