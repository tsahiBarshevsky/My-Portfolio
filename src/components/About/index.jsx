import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import image from '../../assets/profile.jpg';
import { skills } from '../../data/skills';
import SkillBar from './SkillBar';
import './styles.sass';

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const AboutSection = () => {

    const classes = useStyles();

    return (
        <div id="about">
            <div className="title-container">
                <h1 className="title">About Me</h1>
                <div className="divider" />
            </div>
            <div className="grid-container">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className={classes.item}>
                        <div className="about">
                            <img src={image} alt="Oops! It was supposed to be me" className="profile-image" />
                            <h1 className="subtitle">How am I?</h1>
                            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis, ipsum sed posuere sollicitudin, orci augue egestas dui, vitae consectetur magna mauris vitae massa. Praesent ullamcorper vitae nisi id ullamcorper. Quisque urna velit, auctor at diam fringilla, congue feugiat est. Integer ante nibh, dictum tincidunt euismod et, accumsan a enim. Sed fermentum nec purus at posuere. Maecenas scelerisque vestibulum faucibus. Nulla tristique vestibulum velit vel dictum.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className={classes.item}>
                        <div className="skills">
                            <h1 className="subtitle">Top Skills</h1>
                            {skills.map((skill, index) => {
                                return (
                                    <SkillBar key={index} type={skill.type} level={skill.level} />
                                )
                            })}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default AboutSection;
