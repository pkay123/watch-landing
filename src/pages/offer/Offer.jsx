import { useEffect } from "react";
import "./offer.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Offer() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="app__offer">
      <div
        data-aos="fade-in"
        data-aos-offset="200"
        className="app__offer-container"
      >
        <div className="app__subheading">
          <h2 className="title">Our Best Deals</h2>

          <p className="subtitle">
            It is design to keep working despite the motion cause by the person.
          </p>
        </div>

        <div className="app__offer-grid">
          <div data-aos="flip-left" className="app__offer-content">
            <h2 className="title">
              Get <span> 40% off</span> every <span>Black Friday</span>
            </h2>

            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum
              consectetur quisquam praesentium consequuntur quos.
            </p>

            <button className="btn">SHOP NOW</button>
          </div>

          <div data-aos="flip-left" className="app__offer-imgcontainer">
            <img src="assets/1921-1.png" alt="" className="offer__img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
