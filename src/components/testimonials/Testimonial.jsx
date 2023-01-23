import "./testimonial.css";
import { Data } from "./Data";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {

  const sectionRef = useRef(null);
  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(el, {opacity: 0 }, {opacity: 1, duration: 3, scrollTrigger: {
      trigger: el,
      scrub: true,
      start: "top center",
      end: "30px"
    }})
  });
  
  const hItem = useRef(null);
    useEffect(() => {
      const el = hItem.current;
      gsap.fromTo(el, {y: -100}, {y: 0, scrollTrigger: {
        trigger: el,
        scrub: true,
        start: "top center",
        end: "30px"
      }})
    });

    

  return (
    <section ref={sectionRef} className="testimonial container section">
      <h2 ref={hItem} className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />

              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
