import React from 'react';
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BsArrowRightShort } from 'react-icons/bs';
import { BigHead } from '@bigheads/core';
import { Link } from 'react-scroll';
import './styles.sass';
import { about } from '../../data/texts';

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

    return (
        <div className="hero-container" id="home">
            <div id="rectangle" />
            <div id="oval">
                <h1>Tsahi Barshavsky</h1>
                <h3>a Frontend web developer</h3>
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
                        className="button btn-color btn-l-r"
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
