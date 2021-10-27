import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BiCodeAlt } from 'react-icons/bi';
import { FaLaptopCode, FaPaintBrush } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import ProgressBar from 'react-animated-progress-bar';
import { coding, frontend, myStory, webAndApps } from '../../data/texts';
import image from '../../assets/profile.jpg';
import { skills } from '../../data/skills';
import SectionTitle from '../Section Title';
import './styles.sass';

const useStyles = makeStyles(() => ({
    aboutTitle: {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            fontWeight: 'bold',
            marginBottom: 15
        }
    },
    aboutText: {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            textAlign: 'start',
            '@media (max-width: 700px)': {
                textAlign: 'center'
            }
        }
    },
    paragraph: {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            textAlign: 'start'
        }
    },
    type: {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            marginLeft: 10,
        }
    },
    subtitle: {
        '&&': {
            fontFamily: `'Josefin Sans', sans-serif`,
            fontWeight: 'bold',
            marginBottom: 20
        }
    },
    grid: {
        padding: '0 130px',
        // '@media (max-width: 1400px)': {
        //     padding: 0
        // }
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

    const renderIcon = (type) => {
        switch (type) {
            case 'React':
            case 'React Native':
                return <Icon icon="vscode-icons:file-type-reactjs" width="25" height="25" />;
            case 'Redux':
                return <Icon icon="logos:redux" width="25" height="25" />;
            case 'JavaScript':
                return <Icon icon="logos:javascript" width="20" height="20" />;
            case 'CSS':
                return <Icon icon="vscode-icons:file-type-css" width="25" height="25" />;
            case 'SASS':
                return <Icon icon="logos:sass" width="25" height="25" />;
            case 'Material-UI':
                return <Icon icon="logos:material-ui" width="25" height="25" />;
            case 'Node.js':
                return <Icon icon="vscode-icons:file-type-node" width="25" height="25" />;
            case 'MongoDB':
                return <Icon icon="vscode-icons:file-type-mongo" width="25" height="25" />;
            case 'Firebase':
                return <Icon icon="logos:firebase" width="25" height="25" />
            default:
                return null;
        }
    }

    return (
        <div id="about">
            <SectionTitle title="about me" subtitle="Let me introduce myself" />
            <div className="about-text">
                <img src={image} alt="" className="image mobile-image" />
                <Typography variant="h6" className={classes.aboutText}>
                    <img src={image} alt="Oops! It was supposed to be me" className="image" />
                    {myStory.split('\n').map((paragraph, index) => {
                        return (
                            <Typography
                                variant="h6"
                                paragraph
                                key={index}
                                className={classes.aboutText}
                            >
                                {paragraph}
                            </Typography>
                        )
                    })}
                </Typography>
            </div>
            <Typography variant="h5" className={classes.subtitle}>Top Skills</Typography>
            <div className="about-skills">
                {skills.map((skill) => {
                    return (
                        <div className="skillbar" key={skill.id}>
                            <ProgressBar
                                width="250"
                                trackWidth="13"
                                percentage={skill.level}
                                defColor={{
                                    fair: '#628aeb',
                                    good: '#628aeb',
                                    excellent: '#628aeb',
                                    poor: '#628aeb',
                                }}
                            />
                            <div className="type">
                                {renderIcon(skill.type)}
                                <Typography variant="h6" className={classes.type}>
                                    {skill.type}
                                </Typography>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="about-skills-mobile">
                {skills.map((skill, index) => {
                    return (
                        <div className="skillbar" key={index}>
                            <div className="type">
                                {renderIcon(skill.type)}
                                <Typography variant="h6" className={classes.type}>
                                    {skill.type}
                                </Typography>
                            </div>
                            <ProgressBar
                                width="100%"
                                height="10px"
                                rect
                                fontColor="white"
                                percentage={skill.level}
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="transparent"
                                defColor={{
                                    fair: '#628aeb',
                                    good: '#628aeb',
                                    excellent: '#628aeb',
                                    poor: '#628aeb',
                                }}
                            />
                        </div>
                    )
                })}
            </div>
            <Typography variant="h5" className={classes.subtitle}>Things I love</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs="auto" sm={6} md={4} lg={4} xl={4} className={classes.item}>
                    <div className="about-card">
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
                            {frontend}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs="auto" sm={6} md={4} lg={4} xl={4} className={classes.item}>
                    <div className="about-card">
                        <div className="icon-wrapper">
                            <FaLaptopCode className="icon" />
                        </div>
                        <Typography
                            variant="h5"
                            className={classes.cardTitle}
                        >
                            Web and Apps
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            className={classes.cardSubtitle}
                        >
                            {webAndApps}
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs="auto" sm={12} md={12} lg={4} xl={4} className={classes.item}>
                    <div className="about-card">
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
                            {coding}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutSection;
