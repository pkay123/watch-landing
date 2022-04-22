import "./gallery.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="app__gallery" id="gallery">
      <div
        data-aos="fade-in"
        data-aos-offset="200"
        className="app__gallery-container"
      >
        <div className="app__subheading">
          <h2 className="title">Our Gallery</h2>

          <p className="subtitle">
            It is design to keep working despite the motion cause by the person.
          </p>
        </div>

        <motion.div
          className="app__gallery-grid"
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="app__gallery-carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            <div
              data-aos="flip-right"
              className="app__gallery-content grid-col-span-2"
            >
              <img
                src="assets/gallery01.jpg"
                alt=""
                className="gallery__img "
              />
            </div>
            <div data-aos="flip-right" className="app__gallery-content">
              <img src="assets/gallery03.jpg" alt="" className="gallery__img" />
            </div>
            <div data-aos="flip-right" className="app__gallery-content">
              <img src="assets/gallery04.jpg" alt="" className="gallery__img" />
            </div>
            <div
              data-aos="flip-right"
              className="app__gallery-content grid-col-span-2"
            >
              <img src="assets/gallery05.jpg" alt="" className="gallery__img" />
            </div>
            <div data-aos="flip-right" className="app__gallery-content">
              <img src="assets/gallery06.jpg" alt="" className="gallery__img" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Gallery;
