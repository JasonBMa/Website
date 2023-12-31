import React from 'react'
import background from './Graphics/headerBG.svg'

const Header = () => {
  return (
    <div id="MainHeader" style={{backgroundImage: `url(${background})`}} className=" bg-cover w-full h- py-52 px-72 flex items-start justify-between">
      <div className="w-1/2 text-7xl text-start">
        <div className="flex drop-shadow font-bold">
          <p className="drop-shadow font-bold">Hi, I'm</p>
          <p className="rotate-12 pl-4">Jason</p>
        </div>
        <p className="blur-0">I squash bugs</p>
        <p className="drop-shadow text-4xl text-white">
          Studying Computer Science @ 
          <span className="bg-gradient-to-r from-blue-600 via-yellow-500 to-yellow-400 inline-block text-transparent bg-clip-text drop-shadow">UC Davis</span>
          </p>
      </div>
    </div>
  )
}

export default Header