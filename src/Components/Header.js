import React from 'react'
import background from './Graphics/headerBG.svg'
import Me from './Graphics/Images/Silly.jpg'

const Header = () => {
  return (
    <div id="MainHeader" style={{backgroundImage: `url(${background})`}} className="bg-center scroll-smooth flex max-lg:flex-col bg-cover w-11/12 h-96 justify-center items-center shadow-lg shadow-green-400 m-auto mt-5 rounded">
      <div className="xl:w-1/2 text-7xl max-lg:text-6xl text-start">
        <div className="flex drop-shadow font-bold">
          <p className="drop-shadow font-bold">Hi, I'm</p>
          <p className="rotate-12 pl-4">Jason</p>
        </div>
        <p className="blur-0">I squash bugs</p>
        <p className="drop-shadow text-4xl max-lg:text-xl text-white">
          BS in Computer Science @ 
          <span className="mr-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-yellow-400 inline-block text-transparent bg-clip-text drop-shadow">UC Davis</span>
          </p>
      </div>
      <div className="w-40 lg:w-64 h-auto">
        {Me && <img className="shadow shadow-green-700 h-auto object-contain rounded-tl-3xl rounded-br-3xl" src={Me}>
        </img>}
      </div>
    </div>
  )
}

export default Header