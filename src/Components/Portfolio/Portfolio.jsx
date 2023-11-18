import React from "react";
import "./portfolio.css";
import projectimg1 from "../../assets/1.png";
import projectimg2 from "../../assets/2.png";
import projectimg3 from "../../assets/3.png";
// import projectimg4 from "../../assets/4.png";
import projectimg5 from "../../assets/5.png";
import projectimg6 from "../../assets/6.png";
import projectimg7 from "../../assets/7.png";
const data = [
  {
    id: 1,
    image: projectimg6,
    title: "Streamer : It Is An Video And Audio straming Website.",
    tech : "HTML | CSS | JavaScript | Next.js | BootStrap | Node.js | Express.js | Mongo DB | Firebase | Cyclic Sh | AWS-SDK ",
    github: "https://github.com/codersudhir/CastleProject",
    demo: "https://castle-project-codersudhir.vercel.app/",
  },
  {
    id: 2,
    image: projectimg7,
    title: "Attierly : It Is E-COMMERCE Electronics Shopping Websites.",
    tech : "HTML | CSS | JavaScript | React | Redux | Chakra UI || Firebase || Netify ",
    github: "https://github.com/HANUMAT-SHARAN/bright-noise-2667/tree/master/cw-rct201",
    demo: "https://myntra-attirely-rct201.vercel.app/",
  },
   {
    id: 3,
    image: projectimg1,
    title: "DailyNeeds : It Is E-COMMERCE Electronics Shopping Websites.",
    tech : "HTML | CSS | TypeScript | React | Redux | Chakra UI",
    github: "https://github.com/HANUMAT-SHARAN/bright-noise-2667/tree/master/cw-rct201",
    demo: "https://cw-rct201.vercel.app/",
  },
  {
    id: 4,
    image: projectimg2,
    title: "ZARA.COM  : It is E-COMMERCE Fashion Website",
    tech : "HTML | CSS | Javasript | React | Redux",
    github: "https://github.com/rajkumarsahu89/lean-ticket-7646",
    demo: "https://cerulean-blancmange-9d2121.netlify.app/",
  },
  {
    id: 5,
    image: projectimg3,
    title:"MYMART.com : it is An Dairyneeds product Website",
    tech : "HTML | CSS | Javasript | React",
    github: "https://github.com/codersudhir/steady-name-340",
    demo: "https://chipper-khapse-233f71.netlify.app/",
  },
  {
    id: 6,
    image: projectimg5,
    title: "Skintore is beauty products E_COOMERCE Website",
    tech : "HTML | CSS | ReactJS | ChakraUI",
    github: "https://github.com/codersudhir/supreme-honey-5251",
    demo: "https://soft-muffin-a0826a.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, tech, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <p>{title}</p>
              <h4 className="tech_stack"><b>{tech}</b></h4>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
