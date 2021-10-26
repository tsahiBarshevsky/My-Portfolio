import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/About';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';
import SocialToolbar from './components/Social Toolbar';
import ScrollToTop from './components/scrollToTop';
import './styles.sass';
import ErrorPage from './components/Error Page/ErrorPage';

const App = () => {

    const matches = useMediaQuery('@media (max-width: 625px)');

    useEffect(() => {
        document.title = "Tsahi Barshavsky | FrontEnd Developer";
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <ScrollToTop />
                    <Navbar />
                    {!matches && <SocialToolbar />}
                    <Hero />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                    <Footer />
                </Route>
                <Route exact path="/:title" component={Project} />
                <Route exact path="*" component={ErrorPage} />
            </Switch>
        </Router>
    )
}

export default App;
