import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import './AllPosts.css';

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  if (!allPostsData) {
    return <h3 className='loading'>Loading...</h3>
  } else {
    console.log(allPostsData)
  }

  return (
    <div className='posts-wrapper'>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <div className='post-card'>
                  <img className='post-img' src={post.mainImage ? post.mainImage.asset.url : ""} alt="" />
                  <h2>{post.title}</h2>
                </div>
              </span>
            </Link>
          ))}
      </div>
  );
}