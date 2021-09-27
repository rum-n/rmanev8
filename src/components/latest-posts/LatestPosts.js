import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import './LatestPosts.css';
import Moment from 'moment';

export default function LatestPosts() {
  const [latestPostsData, setLatestPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt desc)[0..2]{
        title,
        slug,
        publishedAt,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setLatestPosts(data))
      .catch(console.error);
  }, []);
  console.log(latestPostsData);

  return (
    <div className='latest-posts-wrapper'>
        {latestPostsData &&
          latestPostsData.map((post, index) => (
            <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                <div className='one-latest-post'>
                  <h2>{post.title}</h2>
                  <p className='date'>{Moment(post.publishedAt).format('MMM DD, YYYY')}</p>
                </div>
              </span>
            </Link>
          ))}
    </div>
  );
}