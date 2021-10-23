import React from 'react';
import { IconButton } from '@mui/material';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaGoogle } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import './styles.sass';

const Footer = () => {

    return (
        <footer>
            <div id="oval">
                <div className="links">
                    <a
                        href="https://www.linkedin.com/in/tsahi-barshavsky-frontend-developer/"
                        target="_blank"
                        rel="noreferrer"
                        title="TsahiB on Linkedin"
                        className="link"
                    >
                        <FaLinkedinIn className="icon" />
                    </a>
                    <a
                        href="https://github.com/tsahiBarshevsky"
                        target="_blank"
                        rel="noreferrer"
                        className="link"
                        title="TsahiB on GitHub"
                    >
                        <FaGithub className="icon" />
                    </a>
                    <a
                        href="mailto:tsahi.13@gmail.com"
                        className="link"
                        title="Tsahi's email"
                    >
                        <FaGoogle className="icon" />
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
                <p className="copyright">
                    Tsahi Barshavsky &copy; {new Date().getFullYear()}
                </p>
                <IconButton
                    className="button"
                    onClick={() => scroll.scrollToTop()}
                    disableRipple
                >
                    <AiOutlineArrowUp className="icon" />
                </IconButton>
            </div>
        </footer>
    )
}

export default Footer;
