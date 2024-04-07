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
          A <span>Junior Software Developer</span> with comprehensive experience
          from Boolean UK's full-time software development boot camp, I'm
          passionate about using programming languages to create impactful
          solutions for real-world challenges and make a significant impact in
          the tech space at large. During my time at Boolean UK, I completed a
          6-month full-stack development program, gaining hands-on experience in
          translating user stories into high-quality software solutions and
          collaborating on diverse projects, including codebase enhancements.
          Proficient in agile methodologies like Kanban, I actively engage in
          daily stand-ups and retrospectives for efficient project management.
          I've also mastered version control, including branching, merge
          conflict resolution, and pull requests. Eager to contribute to
          innovative projects and collaborate with like-minded professionals,
          I'm excited about joining dynamic teams where creativity and
          technology intersect to drive meaningful change.
        </p>

        <figure>
          <img src={aboutme} alt="about" />
        </figure>
      </div>
    </section>
  );
}

export default About;
