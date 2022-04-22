import "./inquiry.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Inquiry() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="app__inquiry">
      <div
        data-aos="fade-in"
        data-aos-offset="200"
        className="app__inquiry-container"
      >
        <div className="app__inquiry-grid">
          <div data-aos="flip-left" className="app__inquiry-content">
            <h2 className="title">Do You Have Any Inquiry?</h2>

            <p className="subtitle">
              Kindly drop your inquiries and we will get back to you ASAP!!!{" "}
              <br />
              It is design to keep working despite the motion cause by the
              person.
            </p>

            <div className="content__input-container">
              <input type="email" placeholder="Enter Your Email Address " />

              <button className="btn">Send</button>
            </div>
          </div>

          <div data-aos="flip-right" className="app__inquiry-imgcontainer">
            <img src="assets/1863-2.png" alt="" className="inquiry__img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inquiry;
