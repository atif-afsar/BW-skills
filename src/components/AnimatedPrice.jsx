import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

export default function AnimatedPrice({ value, className = "" }) {
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const currentRef = useRef(value);

  useEffect(() => {
    if (reducedMotion) {
      currentRef.current = value;
      setDisplay(value);
      return;
    }

    const controls = animate(currentRef.current, value, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (latest) => {
        const rounded = Math.round(latest);
        currentRef.current = rounded;
        setDisplay(rounded);
      },
      onComplete: () => {
        currentRef.current = value;
      },
    });

    return () => controls.stop();
  }, [value, reducedMotion]);

  return (
    <span className={className}>
      ₹{display.toLocaleString("en-IN")}
    </span>
  );
}
