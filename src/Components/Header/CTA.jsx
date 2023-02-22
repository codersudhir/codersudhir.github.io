import React from 'react';
import CV from "../../assets/cv.pdf"

const CTA = () => {
  const handleResume = () =>{
    window.open(
      "https://drive.google.com/file/d/1ytkYgHNV2YpCXZgnTRPe7_OllLy0NmnH/view?usp=share_link"
    )
  }
  return (
    <div className='cta'>
      <a onClick={handleResume} href={CV} className="btn" download={"Sudhir-Nandane-Resume.pdf"} target="_blank" >Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
