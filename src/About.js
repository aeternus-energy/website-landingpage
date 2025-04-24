import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";

import b3 from "./assets/a1.jpg";
import b4 from "./assets/a2.png";

export default function About() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

  if (inView) {
    controls1.start({
      y: [0, 150], // Move down
      x: [0, 50], // Move slightly right
      transition: { duration: 1, ease: "easeInOut" },
    });

    controls2.start({
      y: [0, -150], // Move up
      x: [0, -50], // Move slightly left
      transition: { duration: 1, ease: "easeInOut" },
    });
  }

  return (
    <section id="about" className="about-section" ref={ref} sty>
      <div className="container">
        <h2 className="about-title">Who we are</h2>

        <div className="row align-items-center">
          <div className="col-md-6 position-relative about-images">
            <motion.img
              src={b3}
              alt="About Us 1"
              className="about-img about-img-1"
              animate={controls1}
            />
            <motion.img
              src={b4}
              alt="About Us 2"
              className="about-img about-img-2"
              animate={controls2}
            />
          </div>

          <div className="col-md-6">
            <p className="about-text" style={{ textAlign: "center" }}>
              <strong>Aeternus Energy LLP</strong> is an innovative startup
              dedicated to advancing battery technology through cutting-edge
              battery pack and module enclosure design. Our expertise extends
              beyond hardware, as we also develop battery management software
              (BMS) applications and energy management solutions tailored for
              both small-scale and large utility-scale battery systems.
            </p>
            <p className="about-text" style={{ textAlign: "center" }}>
              By integrating intelligent software with robust hardware, we
              optimize energy storage performance, enhance safety, and drive
              efficiency in battery-powered applications. Whether it's for
              residential, commercial, or grid-scale energy projects, Aeternus
              Energy is committed to delivering next-generation battery
              solutions that power a more sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
