import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import './styles.sass';

const Card = ({ project, identifier }) => {

    // const CardContainer = styled.div`
    //     width: 390px;
    //     height: 300px;
    //     background-image: url(${project.image});
    //     background-size: 100% 100%;

    //     /* &:hover {
    //         background-color: white;
    //     } */
    // `;

    return (
        // <div className="card-container">
        //     <div className="read-more">
        //         <h3>{project.title}</h3>
        //         <h6>{project.type}</h6>
        //         <Button
        //             component={Link}
        //             to={{ pathname: `/${identifier}` }}
        //             className="link-button"
        //         >
        //             Read more
        //         </Button>
        //     </div>
        // </div>
        <div className="card-container">
            <img className="image" src={project.image} alt={project.title} />
            <div className="white" />
            <div className="overlay-up-to-down">
                <h3>{project.title}</h3>
            </div>
            <div className="overlay-down-to-up">
                <h3>{project.type}</h3>
            </div>
        </div>
    )
}

export default Card;
