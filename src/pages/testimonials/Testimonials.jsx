import { testimonial } from "../../data";
import "./testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="app__testimonials">
      <div
        data-aos="fade-in"
        data-aos-offset="200"
        className="app__testimonials-container"
      >
        <div className="app__subheading">
          <h2 className="title">What People Say</h2>

          <p className="subtitle">
            It is design to keep working despite the motion cause by the person.
          </p>
        </div>

        <div className="app__testimonials-grid">
          {testimonial.map((item) => (
            <>
              <div data-aos="flip-left" className="app__testimonial-content">
                <img src={item.img} alt="" />
                <p className="subtitle">{item.desc}</p>
                <p className="subtitle">{item.name}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
