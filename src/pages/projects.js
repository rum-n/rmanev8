import React, { useEffect, useState } from "react";
import AllProjects from "../components/allprojects/AllProjects";
import { Link } from "react-router-dom";

export default function Projects() {

  return (
    <div className="projects-wrapper">
      <AllProjects/>
    </div>
  );
}