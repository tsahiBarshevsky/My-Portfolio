import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero';
import './styles.sass';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Hero />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
