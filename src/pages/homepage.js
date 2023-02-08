import React from "react";
import LatestPosts from "../components/latest-posts/LatestPosts";
import Sidenav from "../components/sidenav/Sidenav";
import { useSpring, animated } from "@react-spring/web";
import "./styles.css";

export default function Homepage() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  return (
    <React.Fragment>
      <Sidenav />
      <animated.div style={props} className="home-wrapper">
        <h2>Hey, Hallo, Tjena, Привет!</h2>
        <p className="intro">
          I'm a frontend developer with a business background and a strong FOMO.
        </p>
        <p className="intro">
          After graduating with an MBA, I worked as a BD & sales rep in the IT
          industry for a few years, while exploring web technologies and working
          on personal side projects. Finally, in 2020 I transitioned to a
          fulltime web dev role.
        </p>
        <p className="intro">
          Feel free to poke around, check out what I'm currently working on, and
          if anything catches your eye - reach out!
        </p>
        <p className="latest-title">Latest from the blog:</p>
        <LatestPosts />
      </animated.div>
    </React.Fragment>
  );
}
