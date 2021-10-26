import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useStyles } from './styles';
import './ErrorPage.sass';

const ErrorPage = () => {
    const classes = useStyles();

    return (
        <div className="error-page-container">
            <Typography variant="h1" className={clsx(classes.text, classes.title)}>404</Typography>
            <Typography variant="h4" className={clsx(classes.text, classes.subtitle)}>
                Oops! The page you were looking for doesn't Exist.
            </Typography>
            <Button className={classes.button} variant="contained" component={Link} to='/'>Back Home</Button>
        </div>
    )
}

export default ErrorPage;
