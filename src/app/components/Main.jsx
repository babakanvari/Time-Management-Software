import React from 'react';
import { Switch } from 'react-router';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

// import {defaultState} from '../../server/defaultState';
import { Users } from './Users';
import { NewUser } from './NewUser';
import { Navigation } from './Navigation';
import { Projects } from './Projects';
import { NewProject } from './NewProject';
import { Login } from './Login';


export const Main = () => (
    <Router history={history}>
        <div>
            <Navigation />
            <Switch>
                <Route exact path='/user'><Users /></Route>
                <Route exact path='/user/register'><NewUser /></Route>
                <Route exact path='/project'><Projects /></Route>
                <Route exact path='/newproject'><NewProject /></Route>
                <Route exact path='/user/login'><Login /></Route>
            </Switch>
        </div>
    </Router>
);