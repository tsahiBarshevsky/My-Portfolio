import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About';
import './styles.sass';
import ProjectsSection from './components/Projects';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <Hero />
                    <AboutSection />
                    <ProjectsSection />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
