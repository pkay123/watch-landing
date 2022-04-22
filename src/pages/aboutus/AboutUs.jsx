import "./aboutus.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="app__aboutus" id="about">
      <div
        data-aos="fade-in"
        data-aos-offset="200"
        className="app__aboutus-container"
      >
        <div className="app__subheading">
          <h2 className="title">About Us</h2>

          <p className="subtitle">
            It is design to keep working despite the motion cause by the person.
          </p>
        </div>

        <div className="app__aboutus-grid">
          <div data-aos="flip-right" className="app__aboutus-imgcontainer">
            <div />
            <img src="assets/aboutus.jpg" alt="" className="aboutus__img" />
          </div>

          <div data-aos="flip-left" className="app__aboutus-history">
            <h2 className="title">Our History</h2>

            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem esse blanditiis odit a rem. Sapiente expedita
              consequuntur eum, eos iusto iure nihil obcaecati doloribus
              corrupti maxime libero nisi nemo numquam fugiat illo sed. Natus
              voluptatibus expedita, neque esse a assumenda tempora dolore earum
              <br />
              <br />
              magni eum sapiente eveniet illo doloremque temporibus atque ea
              numquam rerum repellendus aperiam? Odio quae sunt neque, ea
              explicabo inventore, in tempore ex pariatur qui distinctio omnis
              vel obcaecati maxime ipsa fugiat sed quidem culpa aliquid ullam
              blanditiis assumenda.
            </p>

            <button className="btn">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
