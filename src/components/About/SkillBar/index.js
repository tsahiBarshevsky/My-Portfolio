import React from 'react';
import styled, { keyframes } from 'styled-components';
import './styles.sass';

const SkillBar = ({ type, level }) => {

    const load = keyframes`
        from {
            width: 0;
        }
        to {
            width: ${level}px;
        }
    `;

    const ProgressBar = styled.div`
        background-color: rgba(255, 255, 255, 0.15);
        width: 0;
        height: 100%;
        animation: ${load} 3s normal forwards;
    `;

    return (
        <div className="container">
            <div className="type">
                <h3>{type}</h3>
            </div>
            <ProgressBar />
            <div className="level">
                <h4>{level}%</h4>
            </div>
        </div>
    )
}

export default SkillBar;