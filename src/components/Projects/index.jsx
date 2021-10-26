import React from 'react';
import { projects } from '../../data/projects';
import Card from './Card/index';
import SectionTitle from '../Section Title';
import './styles.sass';

const ProjectsSection = () => {

    const projectsArray = Array.from(projects, ([key, properties]) => ({ key, properties }));

    return (
        <div id="projects">
            <SectionTitle title="projects" subtitle="What I've been working on lately" />
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
