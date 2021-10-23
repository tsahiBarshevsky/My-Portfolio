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
            color: 'green',
            fontWeight: 'noraml'
        }
    },
    button: {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            textTransform: 'capitalize',
            backgroundColor: 'transparent',
            border: '2px solid #2e7d32',
            color: '#2e7d32',
            borderRadius: 25,
            fontSize: 18,
            width: 145,
            height: 40,
            '&:hover': {
                backgroundColor: '#2e7d32',
                color: 'white'
            }
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
                    variant="contained"
                    endIcon={<TiArrowRight />}
                    className={classes.button}
                >
                    Read more
                </Button>
            </div>
        </div>
    )
}

export default Card;
