import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const mastheadRef = useRef(null);
  const proxyRef = useRef(null);
  let mastheadWidth = 0;

  useEffect(() => {
    const $masthead = mastheadRef.current;
    const $proxy = proxyRef.current;

    const getMastheadWidth = () => {
      mastheadWidth = $masthead.scrollWidth;
    };

    getMastheadWidth();
    ScrollTrigger.addEventListener("refreshInit", getMastheadWidth);

    const updateProxy = () => {
      if (mastheadScrollTrigger) {
        gsap.set($proxy, { x: -mastheadScrollTrigger.scroll() });
      }
    };

    const mastheadScrollTrigger = ScrollTrigger.create({
      id: "masthead",
      animation: gsap.to(".masthead", {
        x: () => -(mastheadWidth - window.innerWidth),
        ease: "none",
      }),
      trigger: ".masthead",
      end: () => mastheadWidth,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: updateProxy,
    });

    const draggable = Draggable.create($proxy, {
      trigger: ".masthead",
      type: "x",
      inertia: true,
      throwProps: true,
      bounds: {
        maxX: 0,
      },
      onThrowUpdate: function () {
        mastheadScrollTrigger.scroll(-this.x);
      },
      onDrag: function () {
        mastheadScrollTrigger.scroll(-this.x);
      },
    })[0];

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", getMastheadWidth);
      mastheadScrollTrigger.kill();
      draggable.kill();
    };
  }, []);

  return (
    <div className="masthead" ref={mastheadRef}>
      <div className="masthead__item"></div>
      <div className="masthead__item"></div>
      <div className="masthead__item"></div>
      <div className="masthead__item"></div>
      <div
        ref={proxyRef}
        style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
      ></div>
    </div>
  );
};

export default Test;
