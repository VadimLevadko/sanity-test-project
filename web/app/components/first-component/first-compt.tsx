'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

import './first-comp.css';

export default function FirstGsap() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section--green',
        start: 'top top',
        end: 'bottom -=100%',
        scrub: 1.5,
        pin: true,
      },
    });
    tl2
      .fromTo('.img-1', { opacity: 0, x: -500, rotation: 50 }, { opacity: 1, x: 0, y: 0, rotation: 25 })
      .fromTo('.img-2', { opacity: 0, x: 500, rotation: -50 }, { opacity: 1, x: 0, rotation: -25 })
      .fromTo('.img-3', { opacity: 0, y: -500, rotation: 40 }, { opacity: 1, y: 0, rotation: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section--blue',
        start: 'top top',
        end: 'bottom -100%',
        scrub: true,
        toggleClass: 'square-active',
        pin: true,
        markers: {
          startColor: 'white',
          endColor: 'white',
        },
      },
    });
    tl.from('.square', {
      opacity: 0,
      x: -500,
      duration: 2,
      rotation: -360,
    }).to('.square', {
      backgroundColor: 'red',
      scale: 0.5,
    });
  }, []);

  return (
    <>
      <section className="section section--green">
        <img className="img-test img-1" src="https://staticg.sportskeeda.com/editor/2023/10/b53de-16972159351486-1920.jpg" alt="" />
        <img className="img-test img-2" src="https://staticg.sportskeeda.com/editor/2023/10/72d1c-16982457441954-1920.jpg" alt="" />
        <img className="img-test img-3" src="https://i.pinimg.com/736x/59/82/60/598260239a5b17a917474524fc14dee7.jpg" alt="" />
      </section>
      <section className="section section--blue">
        <div className="square"></div>
      </section>
    </>
  );
}
