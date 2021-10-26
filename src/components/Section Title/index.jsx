import React from 'react';
import './styles.sass';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="section-title-container">
            <div className="section-title-container">
                <div className="divider left" />
                <h1 className="title">{title}</h1>
                <div className="divider right" />
            </div>
            <h2 className="section-subtitle">{subtitle}</h2>
        </div>
    )
}

export default SectionTitle;
