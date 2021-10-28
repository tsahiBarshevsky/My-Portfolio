import React, { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { projects } from '../../data/projects';
import Card from './Card/index';
import SectionTitle from '../Section Title';
import './styles.sass';

const useStyles = makeStyles({
    group: {
        '&&': {
            position: 'relative',
            marginBottom: 35,
            zIndex: 10
        }
    },
    button: {
        '&&': {
            color: 'white',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            fontFamily: `'Glory', sans-serif`,
            textTransform: 'capitalize',
            margin: '0 5px',
            fontSize: 19,
            width: 115,
            height: 37,
            borderRadius: 10
        }
    },
    selected: {
        '&&': {
            color: 'white !important',
            backgroundColor: '#628aeb !important'
        }
    }
});

const ProjectsSection = () => {

    const [keyword, setKeyword] = useState('');
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const projectsArray = Array.from(projects, ([key, properties]) => ({ key, properties }));

    const handleChange = (event, newKeyword) => {
        if (newKeyword || newKeyword === '')
            setKeyword(newKeyword);
    }

    const filterByKeyword = (item) => {
        return item.properties.keywords.find(element => element.includes(keyword));
    }

    return (
        <div id="projects">
            <SectionTitle title="projects" subtitle="What I've been working on lately" />
            <ToggleButtonGroup
                orientation={matches ? "vertical" : "horizontal"}
                value={keyword}
                exclusive
                onChange={handleChange}
                className={classes.group}
            >
                <ToggleButton className={classes.button} classes={{ selected: classes.selected }} value=''>All</ToggleButton>
                <ToggleButton className={classes.button} classes={{ selected: classes.selected }} value='react'>React</ToggleButton>
                <ToggleButton className={classes.button} classes={{ selected: classes.selected }} value='app'>Apps</ToggleButton>
                <ToggleButton className={classes.button} classes={{ selected: classes.selected }} value='mern'>Mern Stack</ToggleButton>
                <ToggleButton className={classes.button} classes={{ selected: classes.selected }} value='python'>Python</ToggleButton>
                <ToggleButton className={classes.button} classes={{ selected: classes.selected }} value='academic'>Academic</ToggleButton>
            </ToggleButtonGroup>
            <div className="cards">
                {projectsArray.filter(filterByKeyword).map((project) => {
                    return (
                        <Card
                            key={project.key}
                            project={project.properties}
                            identifier={project.key}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectsSection;
