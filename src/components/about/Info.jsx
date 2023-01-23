import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {

  const boxItem = useRef(null);

  useEffect(() => {
    const el = boxItem.current;
    gsap.fromTo(el, {y: -100}, {y: 0, scrollTrigger: {
      trigger: el,
      scrub: true,
      start: "top center",
      end: "30px"
    }})
  });


  return (
    <div ref={boxItem} className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 Years Coding</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt-2 about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">20+ Projects</span>
        </div>

        <div className="about__box">
        <i class='bx bxl-graphql about__icon' ></i>

            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info