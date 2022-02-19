import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BsArrowRightShort } from 'react-icons/bs';
import { BigHead } from '@bigheads/core';
import { Link } from 'react-scroll';
import TypeAnimation from 'react-type-animation';
import { about } from '../../data/texts';
import './styles.sass';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles({
    welcome: {
        '&&': {
            fontFamily: `'Jenthill', sans-serif`,
            fontWeight: 'normal',
            marginBottom: 20
        }
    },
    paragraph: {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            textAlign: 'start',
            lineHeight: 1.2
        }
    }
});

const Hero = () => {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className="hero-container" id="home">
            <div id="rectangle" />
            <div id="oval">
                <h1>Tsahi Barshavsky</h1>
                {/* <h3>a Frontend web developer</h3> */}
                <TypeAnimation
                    cursor={true}
                    sequence={[
                        'a Frontend web developer',
                        2500,
                        'React web applications',
                        2500,
                        'Landing pages and web design',
                        2500,
                        'React Native apps',
                        2500
                    ]}
                    wrapper={matches ? "h5" : "h3"}
                    repeat={Infinity}
                />
            </div>
            <div className="bighead-wrapper">
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
                />
            </div>
            <div className="content">
                <Typography variant="h4" className={classes.welcome}>Hey there, Welcome to my portfolio!</Typography>
                {/* <TypeAnimation
                    cursor={true}
                    sequence={[
                        'React web applications',
                        2500,
                        'Landing pages and web design',
                        2500,
                        'React Native apps',
                        2500
                    ]}
                    wrapper="h1"
                    repeat={Infinity}
                /> */}
                <div className="content-bottom">
                    {about.split('\n').map((paragraph, index) => {
                        return (
                            <Typography
                                variant="h6"
                                key={index}
                                className={classes.paragraph}
                                paragraph
                            >
                                {paragraph}
                            </Typography>

                        )
                    })}
                </div>
                <Link to='about' smooth spy exact='true'>
                    <Button
                        variant="outlined"
                        className="button"
                    >
                        Explore more
                        <BsArrowRightShort className="arrow" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero;
