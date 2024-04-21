import React from 'react'
import background from './Graphics/headerBG.svg'

const Header = () => {
  const imageLink = "https://media.licdn.com/dms/image/D5603AQFOIlCi3LDHvQ/profile-displayphoto-shrink_400_400/0/1680680582345?e=1717632000&v=beta&t=TAW-fDZErCa2DIYEPWguJVfMTY1gUY5QrwFdMHmsRXk"
  return (
    <div id="MainHeader" style={{backgroundImage: `url(${background})`}} className="flex max-lg:flex-col bg-cover w-full h-96 justify-around items-center">
      <div className="xl:w-1/2 text-7xl max-lg:text-6xl text-start">
        <div className="flex drop-shadow font-bold">
          <p className="drop-shadow font-bold">Hi, I'm</p>
          <p className="rotate-12 pl-4">Jason</p>
        </div>
        <p className="blur-0">I squash bugs</p>
        <p className="drop-shadow text-4xl max-lg:text-xl text-white">
          Studying Computer Science @ 
          <span className="mr-1 bg-gradient-to-r from-blue-600 via-yellow-500 to-yellow-400 inline-block text-transparent bg-clip-text drop-shadow">UC Davis</span>
          </p>
      </div>
      <div className="w-44 h-44">
        {imageLink && <img className="object-contain min-w-full min-h-full w-full h-full" src={imageLink}></img>}
      </div>
    </div>
  )
}

export default Header