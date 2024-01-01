import React from 'react'

const ProjectA = ({title,body,image,gitHubLink,site}) => {
  return (
    <div className="w-full h-96 py-10 px-80 flex">
      <div className="flex flex-col text-left w-2/3">
        <p className="text-6xl font-bold"> {title} </p>
        <p className="text-2xl"> {body} </p>
        <div className="h-1/3">
          <a href={gitHubLink} className="" target="_blank" alt="">
            <button class="border p-2 text-lg text-white font-bold rounded-2xl bg-slate-800">
              Github
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/2 h-40">
        <a href={site} target="_blank"><img className="object-cover rounded-3xl drop-shadow-lg border" src={require(`./Graphics/${image}`)} alt="" /></a>
      </div>
    </div>
  )
}

export default ProjectA