import React, { useState } from 'react';
import { AppBar, Button, Collapse, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BigHead } from '@bigheads/core';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, animateScroll as scroll } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import MenuToggle from './MenuToggle';
import './styles.sass';

const useStyles = makeStyles({
    appBar:
    {
        '&&': {
            top: 0,
            padding: '0 15px',
            color: 'white',
            boxShadow: '0 2px 3px rgba(15, 15, 15, 0.25)',
            backgroundColor: '#525e65 ',
            '@media (max-width: 600px)': { padding: '0 5px' }
        }
    },
    toolbar:
    {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            backgroundColor: '#628aeb',
            textTransform: 'capitalize',
            color: 'white',
            width: 90,
            height: 35,
            fontSize: 20,
            borderRadius: 10,
            '&:hover':
            {
                backgroundColor: '#628aebCC'
            }

        }
    }
});

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);
    const location = useLocation();
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleMenu = () => { setExpanded(false) }

    return matches ? (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <div className="logo" onClick={() => scroll.scrollToTop()}>
                    <BigHead
                        accessory="roundGlasses"
                        body="chest"
                        circleColor="blue"
                        clothing="shirt"
                        clothingColor="red"
                        eyebrows="leftLowered"
                        eyes="happy"
                        faceMask={false}
                        faceMaskColor="black"
                        facialHair="none3"
                        graphic="none"
                        hair="short"
                        hairColor="blonde"
                        hat="none2"
                        hatColor="blue"
                        lashes={false}
                        lipColor="turqoise"
                        mask
                        mouth="openSmile"
                        skinTone="light"
                        className="bighead"
                    />
                </div>
                <MenuToggle expanded={expanded} setExpanded={setExpanded} />
            </Toolbar>
            <Collapse in={expanded} timeout={500} unmountOnExit>
                {location.pathname === '/' ?
                    <div className="collapse">
                        <div className="link-item margin">
                            <Link onClick={() => toggleMenu()}
                                to='home'
                                smooth spy
                                exact='true'
                                activeClass="active"
                                className="link"
                            >
                                Home
                            </Link>
                        </div>
                        <div className="link-item margin">
                            <Link onClick={() => toggleMenu()}
                                to='about'
                                smooth spy
                                exact='true'
                                activeClass="active"
                                className="link"
                            >
                                About
                            </Link>
                        </div>
                        <div className="link-item margin">
                            <Link onClick={() => toggleMenu()}
                                to='projects'
                                smooth spy
                                exact='true'
                                activeClass="active"
                                className="link"
                            >
                                Projects
                            </Link>
                        </div>
                        <div className="link-item margin">
                            <Link onClick={() => toggleMenu()}
                                to='contact'
                                smooth spy
                                exact='true'
                                activeClass="active"
                                className="link"
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="link-item margin">
                            <a
                                href="/files/Tsahi Barshavsky CV.pdf"
                                style={{ textDecoration: 'none' }}
                                download
                            >
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                    onClick={() => toggleMenu()}
                                >
                                    Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                    :
                    <div className="collapse">
                        <li className="link-item margin">
                            <HashLink
                                to='/home'
                                className="link"
                            >
                                Home
                            </HashLink>
                        </li>
                        <li className="link-item margin">
                            <HashLink
                                to='/#about'
                                className="link"
                            >
                                About
                            </HashLink>
                        </li>
                        <li className="link-item margin">
                            <HashLink
                                to='/#projects'
                                className="link"
                            >
                                Projects
                            </HashLink>
                        </li>
                        <li className="link-item margin">
                            <HashLink
                                to='/#contact'
                                className="link"
                            >
                                Contact
                            </HashLink>
                        </li>
                        <div className="link-item margin">
                            <a
                                href="/files/Tsahi Barshavsky CV.pdf"
                                style={{ textDecoration: 'none' }}
                                download
                            >
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                    onClick={() => toggleMenu()}
                                >
                                    Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                }
            </Collapse>
        </AppBar >
    ) : (
        <div className="navbar-container">
            <div className="logo" onClick={() => scroll.scrollToTop()}>
                <BigHead
                    accessory="roundGlasses"
                    body="chest"
                    circleColor="blue"
                    clothing="shirt"
                    clothingColor="red"
                    eyebrows="leftLowered"
                    eyes="happy"
                    faceMask={false}
                    faceMaskColor="black"
                    facialHair="none3"
                    graphic="none"
                    hair="short"
                    hairColor="blonde"
                    hat="none2"
                    hatColor="blue"
                    lashes={false}
                    lipColor="turqoise"
                    mask
                    mouth="openSmile"
                    skinTone="light"
                    className="bighead"
                />
            </div>
            <div className="navlinks-container">
                {location.pathname === '/' ?
                    <ul className="links-wrapper">
                        <li className="link-item">
                            <Link
                                to='home'
                                smooth spy
                                exact='true'
                                activeClass="active"
                                className="link"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link
                                to='about'
                                smooth spy
                                exact='true'
                                activeClass="active"
                                className="link"
                            >
                                About
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link
                                to='projects'
                                smooth spy
                                exact='true'
                                activeClass="active"
                                className="link"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="link-item">
                            <Link
                                to='contact'
                                smooth spy
                                exact='true'
                                activeClass="active"
                                className="link"
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="link-item">
                            <a
                                href="/files/Tsahi Barshavsky CV.pdf"
                                style={{ textDecoration: 'none' }}
                                download
                            >
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                >
                                    Resume
                                </Button>
                            </a>
                        </li>
                    </ul>
                    :
                    <ul className="links-wrapper">
                        <li className="link-item">
                            <HashLink
                                to='/home'
                                className="link"
                            >
                                Home
                            </HashLink>
                        </li>
                        <li className="link-item">
                            <HashLink
                                to='/#about'
                                className="link"
                            >
                                About
                            </HashLink>
                        </li>
                        <li className="link-item">
                            <HashLink
                                to='/#projects'
                                className="link"
                            >
                                Projects
                            </HashLink>
                        </li>
                        <li className="link-item">
                            <HashLink
                                to='/#contact'
                                className="link"
                            >
                                Contact
                            </HashLink>
                        </li>
                        <li className="link-item">
                            <a
                                href="/files/Tsahi Barshavsky CV.pdf"
                                style={{ textDecoration: 'none' }}
                                download
                            >
                                <Button
                                    variant="contained"
                                    className={classes.button}
                                >
                                    Resume
                                </Button>
                            </a>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default Navbar;
