import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import AboutSection from './components/About';
import './styles.sass';
import ProjectsSection from './components/Projects';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <Hero />
                    {/* <AboutSection /> */}
                    <ProjectsSection />
                    <Footer />
                </Route>
                <Route exact path="/:title" component={Project} />
            </Switch>
        </Router>
    )
}

export default App;
