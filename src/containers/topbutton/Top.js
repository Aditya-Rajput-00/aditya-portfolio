
import React, { useEffect, useState } from "react";
import "./Top.scss";

import spideyWeb from "../../assets/images/spidey-web-white.png";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      type="button"
      id="topButton"
      className={isVisible ? "is-visible" : ""}
      onClick={handleTopClick}
      title="Back to top"
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <img
        src={spideyWeb}
        alt=""
        aria-hidden="true"
        draggable="false"
      />
    </button>
  );
}
