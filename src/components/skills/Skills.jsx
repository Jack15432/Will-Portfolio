import React, {useRef, useEffect} from "react";
import "./skill.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(el, {opacity: 0 }, {opacity: 1, duration: 3, scrollTrigger: {
      trigger: el,
      scrub: true,
      start: "top center",
      end: "10px"
    }})
  })

  const hItem = useRef(null);

  useEffect(() => {
    const el = hItem.current;
    gsap.fromTo(el, {y: -30}, {y: 0, scrollTrigger: {
      trigger: el,
      scrub: true,
      start: "top center",
      end: "10px",
      toggleActions: "restart complete reverse pause"
    }})
  })

  return (
    <section ref={sectionRef} className="skills section" id="skills">
      <h2 ref={hItem} className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend/>
        <Backend/>

      </div>
    </section>
  );
};

export default Skills;
