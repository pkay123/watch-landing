import "./navbar.css";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 60,
    });
  };

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-container">
        <div className="app__navbar-mobile">
          <HiOutlineMenuAlt2
            style={{ color: "var(--other-text)", fontSize: "24px" }}
            onClick={() => setClick(true)}
          />

          {click && (
            <div className="app__navbar-mobile-close">
              <MdOutlineClose
                style={{
                  color: "var(--other-text)",
                  fontSize: "24px",
                  margin: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => setClick(false)}
              />
              <ul className="app__navbar-mobile-links">
                <motion.li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.05 }}
                >
                  <a
                    href="#home"
                    className="grayed__out"
                    onClick={() => setClick(false)}
                  >
                    Login / Register
                  </a>
                </motion.li>
                <motion.li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.1 }}
                  onClick={handleClick}
                >
                  <a href="#home" onClick={() => setClick(false)}>
                    Home
                  </a>
                </motion.li>
                <motion.li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.2 }}
                  onClick={handleClick}
                >
                  <a href="#about" onClick={() => setClick(false)}>
                    About
                  </a>
                </motion.li>
                <motion.li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.3 }}
                  onClick={handleClick}
                >
                  <a href="#collection" onClick={() => setClick(false)}>
                    Collections
                  </a>
                </motion.li>
                <motion.li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.4 }}
                  onClick={handleClick}
                >
                  <a href="#gallery" onClick={() => setClick(false)}>
                    Gallery
                  </a>
                </motion.li>
                <motion.li
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.05 }}
                  onClick={handleClick}
                >
                  <a href="#popular" onClick={() => setClick(false)}>
                    Best Sells
                  </a>
                </motion.li>
              </ul>
            </div>
          )}
        </div>
        <div className="app__navbar-logo">
          <h2>
            {" "}
            <a href="/">
              <span>Prime</span>Ambassador
            </a>
          </h2>
        </div>

        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="p__opensans">
            <a href="#about" onClick={handleClick}>
              About
            </a>
          </li>
          <li className="p__opensans">
            <a href="#collection" onClick={handleClick}>
              Collections
            </a>
          </li>
          <li className="p__opensans">
            <a href="#gallery" onClick={handleClick}>
              Gallery
            </a>
          </li>
          <li className="p__opensans">
            <a href="#popular" onClick={handleClick}>
              Best Sells
            </a>
          </li>
        </ul>

        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">
            Log in / Register
          </a>
          <div />

          <BsHandbag style={{ color: "var(--other-text)", fontSize: "24px" }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
