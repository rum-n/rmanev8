import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/nav/Nav.js";
import OnePost from "./components/one-post/OnePost.js";
import Blog from "./pages/blog.js";
import Projects from "./pages/projects.js";
import Contact from "./pages/contact.js";
import Homepage from "./pages/homepage.js";

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <div>
      <Navbar/>
        <Route component={Homepage} path="/" exact />
        <Route component={Blog} path="/blog" exact />
        <Route component={Projects} path="/projects" exact />
        <Route component={Contact} path="/contact" exact />
        <Route component={OnePost} path="/blog/:slug" />
      </div>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
