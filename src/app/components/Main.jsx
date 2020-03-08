import React from 'react';
import {Switch} from 'react-router';
import {Router, Route} from 'react-router-dom';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

import {defaultState} from '../../server/defaultState';
import { Users } from './Users';
import { NewUser } from './NewUser';
import { Navigation } from './Navigation';
import { Projects } from './Projects';
import { NewProject } from './NewProject';

export const Main = ()=>(
    <Router history={history}>
        <div>
            <Navigation/>
            <Switch>
                <Route exact path='/Users'><Users userInformation={defaultState}/></Route>
                <Route exact path='/NewUser'><NewUser/></Route>
                <Route exact path='/Projects'><Projects projectInformation={defaultState}/></Route>
                <Route exact path='/NewProject'><NewProject projectInformation={defaultState}/></Route>
            </Switch>
        </div>
    </Router>
);