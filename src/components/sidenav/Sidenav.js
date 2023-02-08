import React from "react";
import "./Sidenav.css";
import { RiFocus3Line } from "react-icons/ri";
import { VscLoading } from "react-icons/vsc";
import { BiGlassesAlt } from "react-icons/bi";
import { RiMapPinLine } from "react-icons/ri";

export default function Sidenav() {
  return (
    <div className="sidenav">
      <div>
        <h2>
          <span className="icon">
            <RiFocus3Line />
          </span>
          Focusing on
        </h2>
        <p className="status-details">React & React Native and some Node.js</p>
      </div>
      <div>
        <h2>
          <span className="icon">
            <VscLoading />
          </span>
          Preparing for
        </h2>
        <p className="status-details">Winter season.</p>
      </div>
      <div>
        <h2>
          <span className="icon">
            <BiGlassesAlt />
          </span>
          Curious about
        </h2>
        <p className="status-details">
          Generative art with Processing and p5.js
        </p>
      </div>
      <div>
        <h2>
          <span className="icon">
            <RiMapPinLine />
          </span>
          Currently in
        </h2>
        <p className="status-details">Sofia, Bulgaria (GMT+2)</p>
      </div>
    </div>
  );
}
