import React from 'react'

const ProjectA = ({ title, body, image, gitHubLink, site, collab, techUsed }) => {
  return (
    <div className="w-full h-96 py-10 px-80 flex">
      <div className="flex flex-col text-left w-2/3 mr-5">
        <p className="text-6xl font-bold"> {title} </p>
        <p className="h-auto max-h-300 text-xl"> {body} </p>
        <p>{collab}</p>
        {techUsed && <ul className="flex space-x-1">
          {techUsed.map((technology) => {
            return (
              <div class="border max-w-70 w-fit h-11 p-2 text-lg text-white font-bold rounded-2xl bg-red-400">
                {technology}
              </div>
            )
          })}
        </ul>}
        <div className="h-1/3">
          <a href={gitHubLink} className="" target="_blank" alt="">
            <button class="border p-2 text-lg text-white font-bold rounded-2xl bg-slate-800 hover:outline-dashed hover:outline-2 hover:outline outline-black">
              Github
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/2 h-full">
        {image && <a href={site} target="_blank"><img className="object-cover rounded-3xl drop-shadow-lg border hover:outline-dashed hover:outline-2 hover:outline" src={require(`./Graphics/${image}`)} alt="" /></a>}
      </div>
    </div>
  )
}

export default ProjectA