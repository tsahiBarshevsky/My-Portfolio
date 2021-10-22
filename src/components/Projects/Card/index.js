import React from 'react';
import styled from 'styled-components';
import './styles.sass';

const Card = ({ project }) => {

    const CardContainer = styled.div`
        width: 390px;
        height: 300px;
        background-image: url(${project.image});
        background-size: 100% 100%;
        
        /* &:hover {
            background-color: white;
        } */
    `;

    return (
        <CardContainer>
        </CardContainer>
    )
}

export default Card;
