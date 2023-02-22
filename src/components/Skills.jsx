import React from 'react';
import './portfolio.css'
import Swing from 'react-reveal/Swing';

const Skills = () => {
  return (
    <>
       <div id="skills">
       <h1 className="text text-center h1 m-5"> <u>SKILLS</u></h1>
       <Swing >
       <div className="box">
         <div>
         <img src="html.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="css.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="js.jpg" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="React.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="TS.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="nextjs.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="bootstrap.png" className="img-fluid" alt="Responsive"/>
         </div>
       </div>
       </Swing>
    </div>
    </>
  );
}

export default Skills;
