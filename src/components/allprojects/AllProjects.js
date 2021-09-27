import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AllProjects.css';
import projectsData from './projectsList';
import Moment from 'moment';

export default function AllPosts() {
  const [data] = useState(projectsData);

  return (
    <React.Fragment>
    <div className='allprojects-wrapper'>
      {data.map((project) => (
        <div className='project-card'>
            <h2>{project.title}</h2>
            <p>{project.blurb}</p>
            <p className='date'>{project.techstack}</p>
            <a href={project.link}>{project.link}</a>
        </div>
        ))}
    </div>
    {/* <div className="project-image">There will be images here, just chill.</div> */}
    </React.Fragment>
  );
}