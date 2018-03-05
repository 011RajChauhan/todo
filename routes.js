import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from './components/App';
import About from './containers/about';
import RedirectRendered from './components/redirectRendering';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>\
                <Route exact path="/about" component={About}></Route>
            </Switch>
        </BrowserRouter>
    );
}