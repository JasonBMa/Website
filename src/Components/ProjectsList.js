import React from 'react'
import ProjectA from './ProjectA';
import projects from '../Projects/projects.json'
const ProjectsList = () => {
  return (
    <div>
			<div className="w-full h-28 p-7 border-t-4 border-black pb-32">
				<p className="text-8xl font-bold font-sans tracking-tighter text-green-500 drop-shadow"> Projects </p>
			</div>
			{projects.projects.map((project) => {
				return <ProjectA
					title= {project.title}
					body= {project.body}
					image= {project.image}
					video= {project.video}
					techUsed={project.techUsed}
					collab={project.collab}
					gitHubLink= {project.gitHubLink}
					site= {project.site}
				/>
			})}
    </div>
  )
}

export default ProjectsList