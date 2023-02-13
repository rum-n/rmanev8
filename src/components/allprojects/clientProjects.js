import daves from "../../img/daves.png";
import bv from "../../img/bv.png";

export default [
  {
    id: 21,
    link: "https://brightvision.com/",
    title: "Brightvision homepage",
    image: bv,
    blurb:
      "The homepage of Brightvision - a marketing company based in Gotherburg, Sweden. The website is built using modules created in Payload CMS that allows employees to build pages and add content.",
    techstack: "Tech Stack: Next.js, Payload CMS",
  },
  {
    id: 22,
    link: "https://mint.daves.family",
    title: "Dave's Family NFT mint page",
    image: daves,
    blurb:
      "A mint landing page for an NFT project. It wasn't heavy on design, but there were a lot of conditions to implement - users see a different UI and have different permission, based on the wallet address they connect with.",
    techstack: "Tech Stack: React, Solidity",
  },
];
