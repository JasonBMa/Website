import React from 'react'
import background from './Graphics/headerBG.svg'

const Header = () => {
  return (
    <div id="MainHeader" style={{backgroundImage: `url(${background})`}} className="flex max-lg:flex-col bg-cover w-full h-96 justify-around items-center">
      <div className="xl:w-1/2 min-w-max text-7xl max-lg:text-6xl text-start">
        <div className="flex drop-shadow font-bold">
          <p className="drop-shadow font-bold">Hi, I'm</p>
          <p className="rotate-12 pl-4">Jason</p>
        </div>
        <p className="blur-0">I squash bugs</p>
        <p className="drop-shadow text-4xl max-lg:text-3xl text-white">
          Studying Computer Science @ 
          <span className="mr-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-yellow-400 inline-block text-transparent bg-clip-text drop-shadow">UC Davis</span>
          </p>
      </div>
      <div className="w-44 h-44">
        <img className="object-contain min-w-full min-h-full w-full h-full" src={null}></img>
      </div>
    </div>
  )
}

export default Header