import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BigHead } from '@bigheads/core';
import './styles.sass';

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
                    <Typography variant="h6" className={classes.paragraph} paragraph>
                        I'm Tsahi, a web developer with a design background.
                    </Typography>
                    <Typography variant="h6" className={classes.paragraph} paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere lectus. Phasellus egestas magna sed elementum euismod. Duis consequat tellus turpis. Quisque non accumsan neque. Proin nec leo metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam mi nunc, lacinia quis ultrices sit amet, blandit in ex.
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Hero;
