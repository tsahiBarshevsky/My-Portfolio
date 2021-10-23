import React, { useEffect } from 'react';
import { Button, Divider, Typography, Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { projects } from '../../data/projects';
import useStyles from './styles';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './styles.sass';

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: `'Glory', sans-serif`,
        },
        h2: {
            fontFamily: `'Josefin Sans', sans-serif`,
            color: '#cacaca',
            textShadow: '1px 2px 1px #000000CC',
            fontWeight: 'bold',
            letterSpacing: 1.5,
            lineHeight: 1
        },
        h4: {
            color: '#cacaca',
            lineHeight: 1,
            marginBottom: 10
        },
        body1: {
            lineHeight: 1.2,
            fontSize: 22
        }
    }
})

const Project = (props) => {
    const title = props.match.params.title;
    const project = projects.get(title);
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        if (project === undefined)
            history.push('/');
        else
            document.title = `Tsahi Barshavsky | ${project.title}`;
    }, [project, history]);

    return project !== undefined && (
        <>
            <Navbar />
            <ThemeProvider theme={theme}>
                <div className="project-container">
                    <div className="header">
                        <Typography variant="h2">{project.title}</Typography>
                        <Typography variant="subtitle1" className={classes.ml12}>
                            {project.date.toLocaleDateString("en-GB")}
                        </Typography>
                    </div>
                    <Typography variant="h6" className={classes.text}>{project.subtitle}</Typography>
                    <div style={!project.web ? { margin: '20px 0' } : { margin: '35px 0 50px' }}>
                        {project.web &&
                            <a href={project.links[0].url} target="_blank" rel="noreferrer">
                                <Button
                                    className={classes.website}
                                    variant="contained"
                                    startIcon={<BsBoxArrowUpRight />}>
                                    Visit this website
                                </Button>
                            </a>}
                    </div>
                    {project.images &&
                        <div className="gallery">
                            <ImageGallery items={project.images} showIndex showThumbnails={false} showPlayButton={false} />
                        </div>}
                    <div className="subtitle-container">
                        <Typography variant="h4" className={classes.subtitle}>About this project</Typography>
                        <Divider className={classes.divider} />
                    </div>
                    <div className="description">
                        {project.description.split("\n").map((paragraph, index) => {
                            return (
                                <Typography
                                    key={index}
                                    paragraph={(project.description.split("\n").length - 1) === index ? false : true}
                                >
                                    {paragraph}
                                </Typography>
                            )
                        })}
                    </div>
                    <div className="subtitle-container pt20">
                        <Typography variant="h4" className={classes.subtitle}>Related links</Typography>
                        <Divider className={classes.divider} />
                    </div>
                    <ol className="links pb15">
                        {project.links.map((link) => {
                            return (
                                <li key={link.id} className="link">
                                    <a href={link.url} target="_blank" rel="noreferrer">{link.caption}</a>
                                </li>
                            )
                        })}
                    </ol>
                    <div className="subtitle-container pt20">
                        <Typography variant="h4" className={classes.subtitle}>Project stack</Typography>
                        <Divider className={classes.divider} />
                    </div>
                    <ul className="stack-list circle">
                        {project.stack.map((item, index) => {
                            return (
                                typeof item === 'string' ?
                                    <li key={index} className="stack-item">{item}</li>
                                    :
                                    typeof item === 'object' &&
                                    <ul className="packages-list">
                                        {item.map((packageName, index) => {
                                            return (
                                                <li className="package pl30" key={index}>{packageName}</li>
                                            )
                                        })}
                                    </ul>
                            )
                        })}
                    </ul>
                    {project.otherCreators.length > 0 ?
                        <div style={{ width: '100%', paddingTop: 20 }}>
                            {project.otherCreators.length === 1 ?
                                <div className="subtitle-container">
                                    <Typography variant="h4" className={classes.subtitle}>Other creator</Typography>
                                    <Divider className={classes.divider} />
                                </div>
                                :
                                <div className="subtitle-container">
                                    <Typography variant="h4" className={classes.subtitle}>Other creators</Typography>
                                    <Divider className={classes.divider} />
                                </div>}
                            <div className="creators">
                                {project.otherCreators.map((creator) =>
                                    <div key={creator.id}>
                                        <a href={creator.url} target="_blank" rel="noreferrer">
                                            <Avatar className={classes.avatar} src={creator.photo}>
                                                {creator.caption}
                                            </Avatar>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div> : null}
                    {project.youtube &&
                        <div className="video-container">
                            <iframe title="video"
                                className="video"
                                src={project.youtube}
                                width="550" height="400"
                                frameBorder="0"
                                allowFullScreen
                                allow="accelerometer; 
                        autoplay; encrypted-media; 
                        gyroscope; picture-in-picture" />
                        </div>}
                </div>
            </ThemeProvider>
            <Footer />
        </>
    )
}

export default Project;
