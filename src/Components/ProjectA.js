import React from 'react'

const ProjectA = ({ title, body, image, gitHubLink, site, collab, techUsed, video }) => {
  return (
    // max-lg:w-3/4 w-11/12
    <div className="h-96 flex w-2/3"> 
      <div className="flex flex-col text-left min-w-60 max-w-70 w-2/3 mr-5">
        <p className="text-6xl font-bold max-xl:text-4xl"> {title} </p>
        <p className="h-auto max-h-300 text-xl max-xl:text-lg"> {body} </p>
        <p>{collab}</p>
        {techUsed && <ul className="flex space-x-1">
          {techUsed.map((technology) => {
            return (
              <div class="border w-fit p-2 text-lg text-white font-bold rounded-2xl bg-red-400">
                {technology}
              </div>
            )
          })}
        </ul>}
        <div className="h-1/3">
          <a href={gitHubLink} rel="noreferrer" className="" target="_blank" alt="">
            <button class="border p-2 text-lg text-white font-bold rounded-2xl bg-slate-800 hover:outline-dashed hover:outline-2 outline-black">
              Github
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/3">
        {image && <a href={site} target="_blank" rel="noreferrer"><img className="min-w-40 max-h-full object-cover rounded-3xl drop-shadow-lg border hover:outline-dashed hover:outline-2" src={require(`./Graphics/${image}`)} alt="" /></a>}
        {video && <video loop className="min-w-40 max-h-full object-cover rounded-3xl drop-shadow-lg border hover:outline-dashed hover:outline-2" controls autostart autoPlay src={require(`./Graphics/${video}`)} type="video/mp4" />}
      </div>
    </div>
  )
}

export default ProjectA