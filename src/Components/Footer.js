import React from 'react'
import github from "./Graphics/Socials/Github_icon.png"
import linkedin from "./Graphics/Socials/Black_Linkedin_icon.png"

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-24 pt-6 bg-gray-800 text-white">
      <div className="flex w-20 justify-around">
        <a href="https://github.com/JasonBMa" target="_blank" rel="noreferrer">
          <img src={github} alt="github" className="w-8 h-8 invert"/>
        </a>
        <a href="https://www.linkedin.com/in/jason-b-ma/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" className="w-8 h-8 invert"/>
        </a>
      </div>
      <div className="h-1/2">
        <p>© 2023 - <a href="https://www.linkedin.com/in/jason-b-ma/" target="_blank" rel="noreferrer">Jason Ma</a></p>

      </div>

    </div>
  )
}

export default Footer