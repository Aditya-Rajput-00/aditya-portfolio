import React, {Suspense, useEffect, useRef, useState} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function DisplayLottie({animationData}) {
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      const shouldReduceMotion = mediaQuery.matches;
      setReducedMotion(shouldReduceMotion);
      if (lottieRef.current) {
        if (shouldReduceMotion) {
          lottieRef.current.goToAndStop(0, true);
        } else {
          lottieRef.current.play();
        }
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMotionPreference);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(updateMotionPreference);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateMotionPreference);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(updateMotionPreference);
      }
    };
  }, []);

  const stopAtFirstFrame = () => {
    if (reducedMotion && lottieRef.current) {
      lottieRef.current.goToAndStop(0, true);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <Lottie
        animationData={animationData}
        lottieRef={lottieRef}
        autoplay={!reducedMotion}
        loop={!reducedMotion}
        onDOMLoaded={stopAtFirstFrame}
      />
    </Suspense>
  );
}
