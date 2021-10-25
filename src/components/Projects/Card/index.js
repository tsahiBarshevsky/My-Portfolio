import React from 'react';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { TiArrowRight } from 'react-icons/ti';
import './styles.sass';

const useStyles = makeStyles({
    title: {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            color: 'black',
            fontWeight: 'bold',
            marginBottom: -5
        }
    },
    subtitle: {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            color: '#628aeb ',
            fontWeight: 'noraml'
        }
    }
});

const Card = ({ project, identifier }) => {

    const classes = useStyles();

    return (
        <div className="card-container">
            <img className="image" src={project.image} alt={project.title} />
            <div className="white" />
            <div className="overlay-up-to-down">
                <Typography variant="h5" className={classes.title}>
                    {project.title}
                </Typography>
                <Typography variant="h6" className={classes.subtitle}>
                    {project.type}
                </Typography>
            </div>
            <div className="overlay-down-to-up">
                <Button
                    component={Link}
                    to={{ pathname: `/${identifier}` }}
                    variant="outlined"
                    endIcon={<TiArrowRight />}
                    className="button btn-color btn-l-r"
                >
                    Read more
                </Button>
            </div>
        </div>
    )
}

export default Card;
