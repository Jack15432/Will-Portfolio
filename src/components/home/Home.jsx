import React, {useRef, useEffect} from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const Home = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(el, {opacity: 0 }, {opacity: 1, duration: 3, scrollTrigger: {
      trigger: el,
      scrub: true,
      start: "top center"
    }})
  })

  const hItem = useRef(null);

  useEffect(() => {
    const el = hItem.current;
    gsap.fromTo(el, {y: -100}, {y: 0, scrollTrigger: {
      trigger: el,
      scrub: true,
      start: "top center",
      end: "30px"
    }})
  })
  
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown/>
      </div>
    </section>
  );
};

export default Home;

