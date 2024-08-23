import React from 'react'

function Media(mediaType, media, live){
  let content;
  switch(mediaType) {
    case 'image':
      content = 
        <a href={live} target="_blank" rel="noreferrer">
          <img className=" shadow-slate-900 object-contain rounded-xl drop-shadow-lg border hover:outline-dashed hover:outline-2" src={require(`./Graphics/${media}`)} alt="" />
        </a>
        break;
    case 'video':
      content = 
        <a href={live} target="_blank" rel="noreferrer">
          <video loop className="object-contain shadow-slate-900 rounded-xl drop-shadow-lg border hover:outline-dashed hover:outline-2" controls autoPlay src={require(`./Graphics/${media}`)} type="video/mp4" />
        </a>
        break;
    case 'youtube':
      content =
        <div className="aspect-video shadow-lg ">
          <iframe
            className="w-full h-full rounded-xl shadow-slate-900 drop-shadow-lg border hover:outline-dashed hover:outline-2"
            src={media}
            title="YouTube video"
            allowFullScreen
          />
        </div>
        break;
    default:
      break;
    };
    return(<div className="">{content}</div>);
  }

/**
 * Renders a project component with title, body, GitHub link, site link, collaboration information, technologies used, and media.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the project.
 * @param {string} props.body - The body/content of the project.
 * @param {string} props.gitHubLink - The GitHub link of the project.
 * @param {string} props.live - The live link of the project.
 * @param {string} props.collab - The collaboration information of the project.
 * @param {string[]} props.techUsed - The technologies used in the project.
 * @param {string} props.media - The media file name of the project.
 * @param {string} props.mediaType - The type of media (either 'image' or 'video').
 * @returns {JSX.Element} The rendered ProjectB component.
 */
const ProjectB = ({ title, body, gitHubLink, live, collab, techUsed, media, mediaType }) => {
  return (
    // max-lg:w-3/4 w-11/12
    <div className="h-auto w-full p-1 lg:w-2/3 lg:flex mb-4 justify-center">
      <div className="h-auto w-full lg:w-2/3 mr-5">
        {media ? Media(mediaType, media, live) : null}
      </div>
      <div className="flex flex-col text-left w-full lg:w-2/4">
        <p className="text-6xl font-bold max-xl:text-4xl"> {title} </p>
        <p className="h-auto max-h-300 text-xl max-xl:text-lg"> {body} </p>
        {techUsed && <div className="grid grid-flow-col auto-cols-max">
          {techUsed.map((technology, index) => {
            return (
              <div key={index} className="text-sm lg:text-lg border h-fit p-2 text-white font-bold rounded-2xl bg-red-400">
                {technology}
              </div>
            )
          })}
        </div>}
        <div className="h-auto w-1/3">
          <a href={gitHubLink} rel="noreferrer" className="" target="_blank" alt="">
            <button className="border p-2 text-lg text-white font-bold rounded-2xl bg-slate-800 hover:outline-dashed hover:outline-2 outline-black">
              Github
            </button>
          </a>
          {live && <a href={live} rel="noreferrer" className="" target="_blank" alt="">
            <button className="border p-2 text-lg text-white font-bold rounded-2xl bg-slate-800 hover:outline-dashed hover:outline-2 outline-black">
              Live Demo
            </button>
          </a>}
        </div>
      </div>
    </div>
  )
}

export default ProjectB