import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Sidenav.css';

export default function Sidenav() {

  return (
    <div className='sidenav'>
        <div>
            <h2>Focusing on</h2>
            <p className='status-details'>Learning Angular, building ArtQ, and spending time with my son.</p>
        </div>
        <div>
            <h2>Preparing for</h2>
            <p className='status-details'>A half-marathon after more than a year of hiatus from running.</p>
        </div>
        <div>
            <h2>Curious about</h2>
            <p className='status-details'>NFTs and alternative investment opportunities.</p>
        </div>
        <div>
            <h2>Currently in</h2>
            <p className='status-details'>Sofia, Bulgaria (GMT+2)</p>
        </div>
    </div>
  );
}