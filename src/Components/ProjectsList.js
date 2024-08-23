import React from 'react'
import ProjectA from './ProjectA';
import ProjectB from './ProjectB';
import projectsJson from '../Projects/projects.json'
const ProjectsList = () => {
  console.log(projectsJson.projects);
	return (
			<div className="w-full">
				<div className="p-5 sm:p-20">
					<p className="text-4xl sm:text-8xl font-bold font-sans tracking-tighter text-green-500 drop-shadow"> Projects </p>
				</div>
				<div className="flex flex-col h-auto w-full items-center">
					{projectsJson.projects.map(function(project,index) {
            if (index % 2 === 0) {
              return <ProjectA
                title= {project.title}
                body= {project.body}
                mediaType= {project.mediaType}
                media= {project.media}
                techUsed= {project.techUsed}
                collab= {project.collab}
                gitHubLink= {project.gitHubLink}
                live= {project.live}
                key= {project.title}
              />
            } else {
              return <ProjectB
                title= {project.title}
                body= {project.body}
                mediaType= {project.mediaType}
                media= {project.media}
                techUsed= {project.techUsed}
                collab= {project.collab}
                gitHubLink= {project.gitHubLink}
                live= {project.live}
                key= {project.title}
              />
            }
					})}
				</div>
		</div>
	)
}

export default ProjectsList