import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FiGithub, GrLinkedinOption, FiMail, FaFacebookF } from 'react-icons/all';
import './styles.sass';

const useStyles = makeStyles({
    copyright: {
        '&&': {
            fontFamily: `'Josefin Sans', sasn-serif`,
            color: '#8a96b3',
            fontWeight: 'bold',
            position: 'relative'
        }
    }
});

const Footer = () => {

    const classes = useStyles();

    return (
        <footer>
            <div className="links">
                <a
                    href="https://github.com/tsahiBarshevsky"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                    title="TsahiB on GitHub"
                >
                    <FiGithub className="icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/tsahi-barshavsky-frontend-developer/"
                    target="_blank"
                    rel="noreferrer"
                    title="TsahiB on Linkedin"
                    className="link"
                >
                    <GrLinkedinOption className="icon" />
                </a>
                <a
                    href="mailto:tsahi.13@gmail.com"
                    className="link"
                    title="Tsahi's email"
                >
                    <FiMail className="icon transform" />
                </a>
                <a
                    href="https://www.facebook.com/tsahi.barshavsky/"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                    title="TsahiB on Facebook"
                >
                    <FaFacebookF className="icon" />
                </a>
            </div>
            <Typography variant="h6" className={classes.copyright}>
                Tsahi Barshavsky &copy; {new Date().getFullYear()}
            </Typography>
        </footer>
    )
}

export default Footer;
