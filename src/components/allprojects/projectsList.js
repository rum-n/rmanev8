import fk from "../../img/fk.png";
import artpage from "../../img/artpage.png";
import grip from "../../img/grip.png";
import pod from "../../img/podcast1.png";
import res from "../../img/results1.png";
import vault from "../../img/vault.png";

export default [
  {
    id: 1,
    link: "https://podcastchatterbox.netlify.app",
    title: "Podcast Chatterbox",
    image: pod,
    blurb:
      "The easiest way for podcast hosts to find guests for their next podcast interview.",
    techstack: "Tech Stack: React, AWS",
  },
  {
    id: 2,
    link: "https://finderskeepers.netlify.app",
    title: "Finders/Keepers 2.0",
    image: fk,
    blurb:
      "A platform for freelancers and agencies, where subscribers can go through a daily updated list of remote contract projects.",
    techstack: "Tech Stack: React, Ghost",
  },
  {
    id: 3,
    link: "https://reactvault.com/",
    title: "React Vault",
    image: vault,
    blurb:
      "A curated list of React resources for everything you want to build.",
    techstack:
      "Tech Stack: React, Boostrap, Node.js, Express, GraphQL, MongoDB",
  },
  {
    id: 4,
    link: "https://gripindoor.com",
    title: "Gripindoor 2.0",
    image: grip,
    blurb:
      "Second version of the indoor climbing gym list, I decided to lose the map and focus on a detailed list with a filter.",
    techstack: "Tech Stack: React, Material UI",
  },
  {
    id: 5,
    link: "https://artpage.netlify.app",
    title: "Artpage",
    image: artpage,
    blurb: "A simple landing page builder for artists.",
    techstack: "Tech Stack: React",
  },
  {
    id: 6,
    link: "https://results.netlify.com/",
    title: "Race Results",
    image: res,
    blurb:
      "Visualizing race results from various running events. I wanted to play around with data visualizations using Highcharts, so I used it for something I like - running.",
    techstack: "Tech Stack: HTML/CSS/JS, Highcharts, R",
  },
];
