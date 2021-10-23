import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './styles.sass';

const Card = ({ project, identifier }) => {

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
            <Link to={{ pathname: `/${identifier}` }}>
                Go to project
            </Link>
        </CardContainer>
    )
}

export default Card;
