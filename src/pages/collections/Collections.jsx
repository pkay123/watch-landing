import collection from "../../data";
import { motion } from "framer-motion";
import "./collections.css";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Collections() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="app__collections" id="collection">
      <div
        data-aos="fade-in"
        data-aos-offset="200"
        className="app__collections-container"
      >
        <div className="app__subheading">
          <h2 className="title">Our Collections</h2>

          <p className="subtitle">
            It is design to keep working despite the motion cause by the person.
          </p>
        </div>

        <motion.div
          ref={carousel}
          className="app__collections-grid"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="app__collections-carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {collection.map((item) => {
              return (
                <motion.div
                  data-aos="flip-left"
                  className="app__collections-content"
                >
                  <p className="subtitle">{item.desc}</p>
                  <img src={item.img} alt="" className="collections__img" />
                  <button className="btn">{item.btn}</button>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Collections;
