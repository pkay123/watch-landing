import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

function BackToTop() {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 64,
      behaviour: "smooth",
    });
  };

  return (
    <div>
      {scrollToTop && (
        <p className="subtitle scroll" onClick={scrollTop}>
          Back To Top <BsArrowUp style={{ fontSize: "48" }} />
        </p>
      )}
    </div>
  );
}

export default BackToTop;
