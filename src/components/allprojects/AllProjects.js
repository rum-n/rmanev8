import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AllProjects.css';
import projectsData from './projectsList';
import Moment from 'moment';
import fk from '../../img/fk.png';
import artpage from '../../img/artpage.png';
import grip from '../../img/grip.png';
import pod from '../../img/podcast1.png';
import res from '../../img/results1.png';
import vault from '../../img/vault.png';

export default function AllPosts() {
  const [ data ] = useState(projectsData);
  const [ clicked, setClicked ] = useState(pod);

  const shownImage = (id) => {
    // console.log(id)
    switch(id){
      case 1:
        setClicked(pod);
        break;
      case 2:
        setClicked(fk);
        break;
      case 3:
        setClicked(vault);
        break;
      case 4:
        setClicked(grip);
        break;
      case 5:
        setClicked(artpage);
        break;
      case 6:
        setClicked(res);
        break;
      case 7:
        setClicked(fk);
        break;
    }
  }

  return (
    <div className="project-full">
      <div className='allprojects-wrapper'>
        {data.map((project) => (
          <div className='project-card' onClick={() => shownImage(project.id)}>
              <h2>{project.title}</h2>
              <p>{project.blurb}</p>
              <p className='date'>{project.techstack}</p>
              <a href={project.link}>{project.link}</a>
          </div>
          ))}
      </div>
      <div className="project-image-wrapper">
        <img className="project-image" src={clicked}/>
      </div>
    </div>
  
  );
}