import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BiCodeAlt } from 'react-icons/bi';
import { FaLaptopCode, FaPaintBrush } from 'react-icons/fa';
// import image from '../../assets/profile.jpg';
import { loremipsum } from '../../data/texts';
import './styles.sass';

const useStyles = makeStyles(() => ({
    subtitle: {
        '&&': {
            fontFamily: `'Josefin Sans', sans-serif`,
            fontWeight: 'bold',
            marginBottom: 20
        }
    },
    grid: {
        padding: '0 30px'
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardTitle: {
        "&&": {
            fontFamily: `'Josefin Sans', sasn-serif`,
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: 1,
            margin: '10px 0'
        }
    },
    cardSubtitle: {
        "&&": {
            fontFamily: `'Glory', sasn-serif`,
            color: 'white',
            lineHeight: 1.2,
            fontSize: 18
        }
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
            {/* <div className="grid-container">
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
            </div> */}
            <Typography variant="h5" className={classes.subtitle}>Things I love</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.grid}
            >
                <Grid item xs="auto" sm={6} md={4} lg={4} xl={4} className={classes.item}>
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <BiCodeAlt className="icon" />
                        </div>
                        <Typography
                            variant="h5"
                            className={classes.cardTitle}
                        >
                            FrontEnd
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={classes.cardSubtitle}
                        >
                            {loremipsum}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs="auto" sm={6} md={4} lg={4} xl={4} className={classes.item}>
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FaLaptopCode className="icon" />
                        </div>
                        <Typography
                            variant="h5"
                            className={classes.cardTitle}
                        >
                            Webs and apps
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={classes.cardSubtitle}
                        >
                            {loremipsum}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs="auto" sm={12} md={12} lg={4} xl={4} className={classes.item}>
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <FaPaintBrush className="icon" />
                        </div>
                        <Typography
                            variant="h5"
                            className={classes.cardTitle}
                        >
                            Creative Coding
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={classes.cardSubtitle}
                        >
                            {loremipsum}
                        </Typography>
                    </div>
                </Grid>
            </Grid>




        </div>
    )
}

export default AboutSection;
