import React from "react";
import AllProjects from "../components/allprojects/AllProjects";
import { useSpring, animated } from "@react-spring/web";

export default function Projects() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );
  return (
    <animated.div style={props} className="projects-wrapper">
      <AllProjects />
    </animated.div>
  );
}
