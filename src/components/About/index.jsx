import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BiCodeAlt } from 'react-icons/bi';
import { FaLaptopCode, FaPaintBrush } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import ProgressBar from 'react-animated-progress-bar';
import { loremipsum, myStory } from '../../data/texts';
import './styles.sass';
import { skills } from '../../data/skills';

const useStyles = makeStyles(() => ({
    aboutTitle: {
        '&&': {
            fontFamily: `'Glory', sans-serif`,
            fontWeight: 'bold',
            marginBottom: 15
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
                return <Icon icon="vscode-icons:file-type-reactjs" width="30" height="30" />;
            case 'Redux':
                return <Icon icon="logos:redux" width="30" height="30" />;
            case 'JavaScript':
                return <Icon icon="logos:javascript" width="25" height="25" />;
            case 'CSS':
                return <Icon icon="vscode-icons:file-type-css" width="30" height="30" />;
            case 'SASS':
                return <Icon icon="logos:sass" width="30" height="30" />;
            case 'Material-UI':
                return <Icon icon="logos:material-ui" width="30" height="30" />;
            case 'Node.js':
                return <Icon icon="vscode-icons:file-type-node" width="30" height="30" />;
            case 'Firebase':
                return <Icon icon="logos:firebase" width="30" height="30" />
            default:
                return null;
        }
    }

    return (
        <div id="about">
            <div className="title-container">
                <h1 className="title">About Me</h1>
                <div className="divider" />
            </div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                className={classes.grid}
                style={{ marginBottom: 50 }}
            >
                <Grid item xs={12} sm={12} md={12} lg={6} xl={5}>
                    <div className="about-text p30">
                        <Typography variant="h5" className={classes.aboutTitle}>My Story</Typography>
                        {myStory.split('\n').map((paragraph, index) => {
                            return (
                                <Typography
                                    variant="h6"
                                    className={classes.paragraph}
                                    paragraph
                                    key={index}
                                >
                                    {paragraph}
                                </Typography>
                            )
                        })}
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={7}>
                    <div className="about-skills p40">
                        <Typography variant="h5" className={classes.aboutTitle}>My Top Skills</Typography>
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
                </Grid>
            </Grid>
            <Typography variant="h5" className={classes.subtitle}>Things I love</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
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
