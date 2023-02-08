import React from "react";
import AllPosts from "../components/allposts/AllPosts";
import SideNav from "../components/sidenav/Sidenav";
import { useSpring, animated } from "@react-spring/web";

export default function Blog() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );
  return (
    <React.Fragment>
      <SideNav />
      <animated.div style={props} className="blog-wrapper">
        <AllPosts />
      </animated.div>
    </React.Fragment>
  );
}
