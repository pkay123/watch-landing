import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Images } from "../../data";
import "./popular.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Popular() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="app__popular" id="popular">
      <div
        data-aos="fade-in"
        data-aos-offset="200"
        className="app__popular-container"
      >
        <div className="app__subheading">
          <h2 className="title">Best Sells</h2>

          <p className="subtitle">
            It is design to keep working despite the motion cause by the person.
          </p>
        </div>

        <motion.div
          ref={carousel}
          className="app__carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="app__inner-carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {Images.map((item) => {
              return (
                <motion.div
                  data-aos="flip-right"
                  className="app__popular-content"
                  key={item.id}
                >
                  <img src={item.img} alt="" className="popular__img" />
                  <p className="subtitle">{item.desc}</p>
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

export default Popular;
