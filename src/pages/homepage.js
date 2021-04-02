import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidenav from "../components/Sidenav";
import './styles.css';

export default function Homepage() {

  return (
    <React.Fragment>
      <Sidenav/>
      <div className='home-wrapper'>
        <h1>Hey, Hallo, Tjena, Привет!</h1>
      </div>
    </React.Fragment>
  );
}