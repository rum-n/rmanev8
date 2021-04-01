import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import Navbar from "./components/Nav.js";
import OnePost from "./components/OnePost.js";
import Blog from "./pages/blog.js";
import Homepage from "./pages/homepage.js";

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <div>
      <Navbar/>
        <Route component={Homepage} path="/" exact />
        <Route component={Blog} path="/blog" exact />
        <Route component={OnePost} path="/blog/:slug" />
      </div>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
