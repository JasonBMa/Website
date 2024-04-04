import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-24 bg-white border-b-4 border-slate-100 flex justify-between">
      <div className="mx-1 md:mx-4 w-1/12 flex items-center">
        <a href="/" className="text-green-500 text-3xl font-bold font hover:animate-pulse"> Jason</a>
      </div>
      <div className="w-5/12 flex items-center justify-around">
        <a href="/" className="w-1/3 text-xl md:text-2xl font-medium hover:underline hover:animate-pulse">Home</a>
        <a href="/" className="w-1/3 text-xl md:text-2xl font-medium hover:underline hover:animate-pulse">Projects</a>
        <a href="/" className="w-1/3 text-xl md:text-2xl font-medium hover:underline hover:animate-pulse">Contact</a>
      </div>
    </div>
  )
}

export default Navbar