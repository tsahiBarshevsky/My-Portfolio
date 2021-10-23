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
        <div className="card-container">
            <div className="read-more">
                <h3>{project.title}</h3>
                <Button
                    component={Link}
                    to={{ pathname: `/${identifier}` }}
                    className="link-button"
                >
                    Read more
                </Button>
            </div>
        </div>
    )
}

export default Card;
