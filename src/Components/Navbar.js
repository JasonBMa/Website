import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full h-24 bg-white border-b-4 border-slate-100 flex justify-between">
      <div className="mx-1 md:mx-4 w-1/12 flex items-center">
        <Link to="/" className="text-green-500 text-3xl font-bold font hover:animate-pulse"> Jason</Link>
      </div>
      <div className="w-5/12 flex items-center justify-around invisible md:visible">
        <Link to="/" className="mx-1 w-1/3 text-m sm:text-xl font-medium hover:underline hover:animate-pulse">Home</Link>
        <Link to="/Designs" className="mx-1 w-1/3 text-m sm:text-xl font-medium hover:underline hover:animate-pulse">Designs</Link>
        <Link to="/Contact" className="mx-1 w-1/3 text-m sm:text-xl font-medium hover:underline hover:animate-pulse">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar