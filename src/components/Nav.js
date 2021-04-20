import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';
import pic from './../assets/img/profile.png';

export default function Navbar() {

  return (
    <div className='navbar'>
      <div className='logo'>
          <div className='avatar'>
          <Link to='/'><img src={pic} alt='Rumen Manev'/></Link>
          </div>
          <div>
            <h2>Rumen Manev</h2>
            <a href='https://twitter.com/room_n'>@room_n</a>
          </div>
      </div>
      <div className='menu'>
        <ul>
            <li>Projects</li>
            <Link to='/blog'><li>Blog</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  );
}