import React from 'react';
import { Switch } from 'react-router';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

import { Home } from './Home';
import { Users } from './Users';
import { NewUser } from './NewUser';
import { Navigation } from './Navigation';
import { Projects } from './Projects';
import { NewProject } from './NewProject';
import { Login } from './Login';
import { Timesheet } from './Timesheet';

export const Main = () => (
    <Router history={history}>
        <div>
            <Navigation />
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/user'><Users /></Route>
                <Route exact path='/user/register'><NewUser /></Route>
                <Route exact path='/project'><Projects /></Route>
                <Route exact path='/project/new'><NewProject /></Route>
                <Route exact path='/user/login'><Login /></Route>
                <Route exact path='/timesheet'><Timesheet /></Route>
            </Switch>
        </div>
    </Router>
);