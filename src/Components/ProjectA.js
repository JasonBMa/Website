import React from 'react'

const ProjectA = ({title,body,image,gitHubLink,site}) => {
  return (
    <div className="w-full h-96 py-10 px-40 flex">
      <div className="flex flex-col text-left w-2/3">
        <p className="text-5xl"> {title} </p>
        <p className="text-xl"> {body} </p>
        <a href={gitHubLink} target="_blank" alt="">Github</a>
      </div>
      <div className="w-1/3 h-40">
        <a href={site} target="_blank"><img className="object-cover rounded-3xl drop-shadow-lg" src={require(`./Graphics/${image}`)} alt="" /></a>
      </div>
    </div>
  )
}

export default ProjectA