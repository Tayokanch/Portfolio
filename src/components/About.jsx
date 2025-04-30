import React from "react";
import { useContext } from "react";
import { MyContext } from "../App";
import aboutme from "../assets/Images/about.avif";

function About() {
  const { aboutRef } = useContext(MyContext);

  return (
    <section class="about section-light" ref={aboutRef}>
      <div>
        <h2>About </h2>
      </div>
      <div>
        <p>
          A <span>Full-Stack Engineer</span> specializing in modern software
          applications. I architect scalable frontends using React with
          TypeScript and JavaScript, and develop robust backends with Express
          and Node.js, while expanding my expertise in Java for enterprise
          solutions. My cloud engineering capabilities include designing secure,
          scalable, and cost optimized architectures on AWS. I have production
          experience with EC2, S3, Lambda, RDS, DynamoDB, VPC, and
          CloudFormation, implementing solutions aligned with AWS
          Well-Architected and Cloud Adoption Framework best practices.
        </p>

        <figure>
          <img src={aboutme} alt="about" />
        </figure>
      </div>
    </section>
  );
}

export default About;
