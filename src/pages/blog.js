import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllPosts from "../components/AllPosts";

export default function Blog() {

  return (
    <div className='blog-wrapper'>
      <AllPosts/>
    </div>
  );
}