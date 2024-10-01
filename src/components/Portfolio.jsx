import React from "react";
import { MyContext } from "../App";
import { useContext } from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Portfolio.css";
import explorelag from "../assets/Images/explorelag.png";
import trainapp from "../assets/Images/trainapp.png";
import vogue from "../assets/Images/vogue.png";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";

function Porfolio() {
  const { portfolioRef } = useContext(MyContext);
  return (
    <>
      <figure class="pimg2">
        <div class="ptext">
          <span class="border">My Project</span>
        </div>
      </figure>

      <section className="portfolio">
        <h5>Project 1</h5>
        <div className="project_container">
          <figure>
            <img src={vogue} alt="" />
          </figure>
          <div>
            <h4>VogueNest</h4>
            <p>
              VogueNest is a modern e-commerce platform for fashion, featuring
              secure authentication authorization, an admin panel for managing
              daily sales and order statuses, and standard CRUD operations.
              Users can sign up, log in, search for products, filter products,
              add or update items in their cart, and make payments via Stripe.
              Admins have exclusive access to sales data and order management
              tools.
            </p>
            <div className="technologies">
              <p>Tech used:</p>
              <div>
                <p>TypeScript</p>
                <p>React</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>Stripe</p>
                <p>Tailwind</p>
              </div>
            </div>

            <div className="project_link">
              <div className="github box">
                <a
                  href="https://github.com/Tayokanch/VogueNest-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <div className="live box">
                <a
                  href="https://voguenesst.netlify.app/"
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
              The web application facilitates the resale of valid train tickets
              across the UK, helping users avoid losses from non-refundable
              train tickets. Sellers can post tickets with details, while buyers
              can browse and filter listings by location. A live chat feature
              allows real-time communication between buyers and sellers for
              inquiries and negotiations. Users can create accounts, and manage
              listings with CRUD functionalities. This app aims to provide a
              reliable and user-friendly platform for reselling train tickets.
            </p>
            <div className="technologies">
              <p>Tech used:</p>
              <div>
                <p>React</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>Prisma</p>
              </div>
            </div>

            <div className="project_link">
              <div className="github box">
                <a
                  href="https://github.com/Tayokanch/Ticket-Traders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <div className="live box">
                <a
                  href="https://cheapticket.netlify.app/"
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
      <section className="portfolio" ref={portfolioRef}>
        <h5>Project 3</h5>
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
              <div className="github box">
                <a
                  href="https://github.com/Tayokanch/ExploreLagos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <div className="live box">
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
    </>
  );
}

export default Porfolio;
