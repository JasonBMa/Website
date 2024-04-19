import React from 'react'
import ProjectA from './ProjectA';
import projectsJson from '../Projects/projects.json'
const ProjectsList = () => {
	return (
			<div className="w-full border-t-4 border-black">
				<div className="pb-20">
					<p className="text-8xl font-bold font-sans tracking-tighter text-green-500 drop-shadow"> Projects </p>
				</div>
				<div className="flex flex-col w-full items-center">
					{projectsJson.projects.map((project) => {
						return <ProjectA
							title= {project.title}
							body= {project.body}
							mediaType= {project.mediaType}
							media= {project.media}
							techUsed={project.techUsed}
							collab={project.collab}
							gitHubLink= {project.gitHubLink}
							site= {project.site}
							key= {project.title}
						/>
					})}

				</div>
		</div>
	)
}

export default ProjectsList