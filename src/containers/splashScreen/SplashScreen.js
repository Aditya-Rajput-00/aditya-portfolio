import React, { useContext } from "react";
import "./SplashScreen.css";
import spideyLogo from "../../assets/images/spidey-logo.png";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <div className="spidey-logo-motion">
          <div className="spidey-logo-shell">
            <img src={spideyLogo} alt="Spider-Man emblem" />
          </div>
        </div>
      </div>

      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}