import React from 'react';
import { projects } from '../../data/projects';
import Card from './Card/index';
import './styles.sass';

const ProjectsSection = () => {

    const projectsArray = Array.from(projects, ([key, properties]) => ({ key, properties }));

    return (
        <div id="projects">
            <div className="title-container">
                <h1 className="title">Projects</h1>
                <div className="divider" />
            </div>
            <div className="cards">
                {projectsArray.map((project) => {
                    return (
                        <Card
                            key={project.key}
                            project={project.properties}
                            identifier={project.key}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsSection;
