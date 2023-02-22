import React from "react";
import "./portfolio.css";
import Fade from "react-reveal/Fade";

const project = [
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl28_D_K9FR5LV1xPk6MH-Fz3MTR19fmYn4bizsKMDXuv6H8YElaUI7cc630PJxasgW-4&usqp=CAU",
  cardTitle:"Animoto.com",
  cardText:"Animoto is an online, cloud-based video creation platform. It can be used to create videos, not only from video content, but also from photos.",
  github:"https://github.com/Parag2510/spotless-thumb-400",
  deploy:"https://bucolic-klepon-f3702a.netlify.app/",
  teckStack:"html , css , javascript"},

  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-175iK9oRvHsYngk0ZFyhACApfmIKQbvHMWfmAObZJzGkDCObGuWwiyc-K5HXWRsRTxw&usqp=CAU",
  cardTitle:"campaignmonitor.com",
  cardText:"Campaign Monitor is a global technology company that provides an email marketing platform that’s easy to use yet extremely powerful.",
  github:"https://github.com/PriyanshuPatil/native-order-609",
  deploy:"https://incandescent-dusk-dc6fe6.netlify.app/home.html",
  teckStack:"html , css , javascript"},

  {img:"./Engagebay.png",
  cardTitle:"Engagebay.com",
  cardText:"This is the world most all in one marketing sales and automation platform.This website mission is help to small busioness grow.",
  github:"https://github.com/Parag2510/able-laborer-3546",
  deploy:"https://legendary-begonia-9165c0.netlify.app/",
  teckStack:"html , css , js , react , chakra-ui "},

  {img:"./monday.png",
  cardTitle:"Scheduler.com",
  cardText:"Schdeular  is an all-in-one work management platform that helps teams streamline their workflow,and manage complex projects effectively.",
  github:"https://github.com/dhiraj19999/energized-trick-9718",
  deploy:"https://schedulermonday.netlify.app/",
  teckStack:"html , css , js , react , chakra-ui "},

  {img:"./AJIO.png",
  cardTitle:"AJIO.com",
  cardText:"AJIO, a fashion and lifestyle brand and is the ultimate fashion on trend and at prices that are the best you'll find anywhere.",
  github:"https://github.com/piyushkhurana8744/-prompt-wilderness-693",
  deploy:"https://ajio-app.vercel.app/",
  teckStack:"html , css , js , react , chakra-ui "},
];

const Projects = () => {
  return (
    <>
      <div id="projects">
        <h1 className="text text-center h1">
          <u>ABOUT PROJECTS</u>
        </h1>
        <div className="container">
          <div className="row  mx-auto project-card">
            <Fade left>
              {project.map((el)=>(
                <div className=" col-xl-4 col-md-6 my-4">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "35rem" }}
                >
                  <div className="embed-responsive embed-responsive-4by3 ">
                    <iframe
                      class="embed-responsive-item"
                      src={el.img}
                      style={{width:"100%", height: "100"}}
                    >
                    </iframe>
                  </div>

                  <div className="card-body">
                    <h5 className="project-title">{el.cardTitle}</h5>
                    <p className="card-text text-justify my-0 project-description">
                      {el.cardText}
                    </p>
                    
                    <div className="px-2 my-1">
                      <p className="my-0 font-weight-bold">TECH STACK</p>
                      <p className='font-weight-bolder  project-tech-stack'> {el.teckStack}</p>
                    </div>
                    <div className="container d-flex justify-content-between containerBox">
                      <button className="btn ">
                        <a className="project-github-link" href={el.github} target="_blank">
                          <span>Click Me!!</span>
                          <span>code</span>
                        </a>
                      </button>
                      <button className="btn">
                        <a className="project-deployed-link" href={el.deploy} target="_blank">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </Fade>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

