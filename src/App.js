import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';
import SocialToolbar from './components/Social Toolbar';
import './styles.sass';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <SocialToolbar />
                    <Hero />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                    <Footer />
                </Route>
                <Route exact path="/:title" component={Project} />
            </Switch>
        </Router>
    )
}

export default App;
