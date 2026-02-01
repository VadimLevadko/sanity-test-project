'use client';

import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { useLayoutEffect } from 'react';

import comet from '../../../public/comet.svg';
import planet1 from '../../../public/planet1.svg';
import planet2 from '../../../public/planet2.svg';
import planet3 from '../../../public/planet3.svg';

import './path-planet.css';

gsap.registerPlugin(MotionPathPlugin);

export default function PathPlanet() {
  useLayoutEffect(() => {
    gsap.to('#planet1', {
      duration: 10,
      ease: 'none',
      repeat: -1,
      motionPath: {
        path: '#path1',
        align: '#path1',
        alignOrigin: [0.5, 0.5],
      },
    });
    gsap.to('#planet2', {
      duration: 20,
      ease: 'none',
      repeat: -1,
      motionPath: {
        path: '#path2',
        align: '#path2',
        alignOrigin: [0.5, 0.5],
      },
    });
    gsap.to('#planet3', {
      duration: 30,
      ease: 'none',
      repeat: -1,
      motionPath: {
        path: '#path3',
        align: '#path3',
        alignOrigin: [0.5, 0.5],
      },
    });
    gsap.to('#comet', {
      duration: 44,
      ease: 'none',
      repeat: -1,
      motionPath: {
        path: '#path4',
        align: '#path4',
        alignOrigin: [0.8, 0.5],
        autoRotate: true,
      },
      onUpdate: () => {
        gsap.set('#comet', { rotation: '+=90' });
      },
    });
  }, []);

  return (
    <section className="path-section">
      <svg width="719" height="652" viewBox="0 0 719 652" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="353.612" cy="329.616" r="30" fill="#F7A72F" />
        <path
          id="pп"
          d="M349.562 261.852C377.689 265.728 401.943 276.262 418.426 290.081C434.93 303.916 443.468 320.866 440.748 337.652C438.027 354.439 424.489 368.347 404.32 377.128C384.176 385.898 357.642 389.432 329.515 385.555C301.388 381.678 277.133 371.144 260.65 357.326C244.146 343.491 235.608 326.54 238.328 309.753C241.049 292.967 254.587 279.06 274.756 270.279C294.9 261.509 321.435 257.975 349.562 261.852Z"
          stroke="#E0E0E0"
          strokeWidth="3"
        />
        <path
          id="path2"
          d="M330.892 204.754C383.784 196.153 434.225 202.111 473.002 218.619C511.797 235.135 538.725 262.106 545.103 295.465C551.481 328.825 536.18 362.662 505.85 390.419C475.534 418.163 430.344 439.672 377.453 448.273C324.561 456.874 274.12 450.915 235.343 434.407C196.548 417.891 169.62 390.92 163.242 357.56C156.864 324.201 172.165 290.363 202.495 262.607C232.811 234.863 278.001 213.354 330.892 204.754Z"
          stroke="#E0E0E0"
          strokeWidth="3"
        />
        <path
          id="path3"
          d="M429.029 154.965C507.567 182.046 570.547 226.411 608.91 276.174C647.285 325.953 660.909 380.945 641.238 429.467C621.566 477.988 572.162 511.249 507.788 525.599C443.435 539.945 364.342 535.322 285.804 508.242C207.265 481.162 144.285 436.797 105.922 387.035C67.5472 337.256 53.9229 282.263 73.5942 233.741C93.2657 185.22 142.67 151.96 207.044 137.609C271.397 123.263 350.49 127.885 429.029 154.965Z"
          stroke="#E0E0E0"
          strokeWidth="3"
        />
        <path
          id="path4"
          d="M363.322 1.5C559.056 1.5 717.5 146.769 717.5 325.696C717.5 504.623 559.056 649.893 363.322 649.893C167.588 649.893 9.14447 504.623 9.14435 325.696C9.14435 146.769 167.588 1.50005 363.322 1.5Z"
          stroke="#E0E0E0"
          strokeWidth="3"
        />
      </svg>

      <img src={planet1.src} id="planet1" className="planet" alt="" />
      <img src={planet2.src} id="planet2" className="planet" alt="" />
      <img src={planet3.src} id="planet3" className="planet" alt="" />
      <img src={comet.src} id="comet" className="comet" alt="" />
    </section>
  );
}
