import React from 'react';
import Resume from "./Resume.pdf";
import "./Profile.css";
import Fade from 'react-reveal/Fade';
const Profile = () => {
  return (
    <div id="about">
      <div className='about section'>
     <div className='container-fluid  p-5  '>
         <div className="row profile m-4 p-2">
         <Fade left>
             <div className="col-md-6  my-5 py-4  home-img" style={{marginBottom:"40%"}}>
             <img src="Profile.png" className="img-thumbnail rounded-circle home-img" alt="mypic"/>
             </div>
             </Fade>
             <Fade right>
             <div id="user-detail-name" className="col-md-6  my-5 py-5">
               <h1 className='text text-center font-weight-bold'>Hello, I am Parag👋</h1>
               <div id='user-detail-intro'>
                 <p className='text text-center  my-5 h3' >
                 💻Full-Stack web developer with a degree in Bachelor of Science who believes in sharing knowledge, 
                 loves JavaScript and can spare hours talking about it. My experience and learnings in this field have helped me 
                 garner the required skill-set to be a successful web developer.
                 </p>
               </div>
               <a id="resume-button-2"  href={Resume} download="Parag_Resume">
              <center ><button style={{backgroundColor:"#007bff",borderRadius:"10px",color:"white",border:"none", height:"40px",width:"100px"}}>RESUME</button></center> 
               </a>
             </div>
             </Fade>
         </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;