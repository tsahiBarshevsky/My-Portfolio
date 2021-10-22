import React from 'react';
import { BigHead } from '@bigheads/core';
import './styles.sass';

const Hero = () => {

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
        </div>
    )
}

export default Hero;
