import React from 'react';
import CV from "../../assets/Sudhir_Nandane.pdf"

const CTA = () => {
  const handleResume = () =>{
    window.open(
      "https://drive.google.com/file/d/1PktwbuFwhlW0XYZFAL03lEK1yaXKDq85/view?usp=sharing"
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
