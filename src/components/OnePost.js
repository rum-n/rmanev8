import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import './OnePost.css';

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <h3 className='loading'>Loading...</h3>;

  return (
    <div className='one-post-wrapper'>
      <div>
        <h2>{postData.title}</h2>
        {/* <div>
          <h4>{postData.name}</h4>
        </div> */}
      </div>
      {/* <img src={urlFor(postData.mainImage).url()} alt="" /> */}
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </div>
    </div>
  );
}