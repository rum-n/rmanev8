import React from "react";
import LatestPosts from "../components/latest-posts/LatestPosts";
import Sidenav from "../components/sidenav/Sidenav";
import './styles.css';

export default function Homepage() {

  return (
    <React.Fragment>
      <Sidenav/>
      <div className='home-wrapper'>
        <h2>Hey, Hallo, Tjena, Привет!</h2>
        <p className='intro'>I'm a frontend developer with a business background and a strong FOMO.</p>
        <p className='intro'>After graduating with an MBA, I worked as a BD & sales rep in the IT industry for a few years, while exploring web technologies and working on personal side projects. Finally, in 2020 I transitioned to a fulltime web dev role.</p>
        <p className='intro'>Feel free to poke around, check out what I'm currently working on, and if anything catches your eye - reach out!</p>
      <p className='latest-title'>Latest from the blog:</p>
      <LatestPosts/>
      </div>
    </React.Fragment>
  );
}