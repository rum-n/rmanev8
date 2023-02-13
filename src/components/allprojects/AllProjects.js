import React, { useEffect, useState } from "react";
import "./AllProjects.css";
import projectsData from "./projectsList";
import clientProjects from "./clientProjects";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function AllProjects() {
  const [clicked, setClicked] = useState();
  const [selected, setSelected] = useState({});

  useEffect(() => {
    setLoading(true);
    setClicked(selected.image);
  }, [selected]);

  return (
    <div className="project-full">
      <div className="tabs">
        <Tabs>
          <TabList style={{ border: "none" }}>
            <Tab
              style={{ color: "#FF7373" }}
              onClick={() => setClicked(selected.image)}
            >
              Personal
            </Tab>
            <Tab
              style={{ color: "#FF7373" }}
              onClick={() => setClicked(selected.image)}
            >
              Clients
            </Tab>
          </TabList>

          <TabPanel>
            <div className="allprojects-wrapper">
              {projectsData.map((project) => (
                <div
                  className="project-card"
                  onClick={() => setSelected(project)}
                >
                  <h2>{project.title}</h2>
                  <p>{project.blurb}</p>
                  <p className="date">{project.techstack}</p>
                  <a href={project.link}>{project.link}</a>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="allprojects-wrapper">
              {clientProjects.map((project) => (
                <div
                  className="project-card"
                  onClick={() => setSelected(project)}
                >
                  <h2>{project.title}</h2>
                  <p>{project.blurb}</p>
                  <p className="date">{project.techstack}</p>
                  <a href={project.link}>{project.link}</a>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="project-image-wrapper">
        <img className="project-image" src={clicked} />
      </div>
    </div>
  );
}
