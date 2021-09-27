import React from "react";
import AllPosts from "../components/allposts/AllPosts";
import SideNav from "../components/sidenav/Sidenav";

export default function Blog() {

  return (
    <React.Fragment>
      <SideNav />
      <div className='blog-wrapper'>
        <AllPosts/>
      </div>
    </React.Fragment>
  );
}