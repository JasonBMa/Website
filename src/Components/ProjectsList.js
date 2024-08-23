import React from 'react'
import Project from './Project';
import projectsJson from '../Projects/projects.json'
const ProjectsList = () => {
  console.log(projectsJson.projects);
	return (
			<div className="w-full">
				<div className="p-5 sm:p-20">
					<p className="text-center text-4xl sm:text-8xl font-bold font-sans tracking-tighter text-green-500 drop-shadow"> Projects </p>
				</div>
				<div className="flex flex-col h-auto w-full items-center">
					{projectsJson.projects.map(function(project,index) {
            if (index % 2 === 0) {
              return <Project
                title= {project.title}
                body= {project.body}
                mediaType= {project.mediaType}
                media= {project.media}
                techUsed= {project.techUsed}
                collab= {project.collab}
                gitHubLink= {project.gitHubLink}
                live= {project.live}
                key= {project.title}
                reverse= {true}
              />
            } else {
              return <Project
                title= {project.title}
                body= {project.body}
                mediaType= {project.mediaType}
                media= {project.media}
                techUsed= {project.techUsed}
                collab= {project.collab}
                gitHubLink= {project.gitHubLink}
                live= {project.live}
                key= {project.title}
                reverse= {false}
              />
            }
					})}
				</div>
		</div>
	)
}

export default ProjectsList