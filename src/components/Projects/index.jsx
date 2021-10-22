import React from 'react';
import Card from './Card/index';
import './styles.sass';

const ProjectsSection = () => {
    return (
        <div id="projects-section">
            <div className="title-container">
                <h1 className="title">Projects</h1>
                <div className="divider" />
            </div>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default ProjectsSection;
