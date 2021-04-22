import React from "react";
import AllPosts from "../components/AllPosts";
import SideNav from "../components/Sidenav";

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