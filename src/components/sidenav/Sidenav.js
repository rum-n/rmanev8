import React from "react";
import './Sidenav.css';
import { RiFocus3Line } from 'react-icons/ri';
import { VscLoading } from 'react-icons/vsc';
import { BiGlassesAlt } from 'react-icons/bi';
import { RiMapPinLine } from 'react-icons/ri';

export default function Sidenav() {

  return (
    <div className='sidenav'>
        <div>
            <h2><span className='icon'><RiFocus3Line/></span>Focusing on</h2>
            <p className='status-details'>Learning Angular, building ArtQ, and spending time with my son.</p>
        </div>
        <div>
            <h2><span className='icon'><VscLoading/></span>Preparing for</h2>
            <p className='status-details'>A half-marathon after more than a year of hiatus from running.</p>
        </div>
        <div>
            <h2><span className='icon'><BiGlassesAlt/></span>Curious about</h2>
            <p className='status-details'>NFTs and alternative investment opportunities.</p>
        </div>
        <div>
            <h2><span className='icon'><RiMapPinLine/></span>Currently in</h2>
            <p className='status-details'>Sofia, Bulgaria (GMT+2)</p>
        </div>
    </div>
  );
}