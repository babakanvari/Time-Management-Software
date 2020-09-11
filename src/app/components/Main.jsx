import React, { useState } from 'react';
import { Switch } from 'react-router';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
import { getCurrentUser } from '../Services/authService'

import { Home } from './Home';
import { Users } from './Users';
import { NewUser } from './NewUser';
import { Navigation } from './Navigation';
import { Projects } from './Projects';
import { NewProject } from './NewProject';
import { Login } from './Login';
import { Timesheet } from './Timesheet';

export const Main = () => {
    const [user, setUser] = useState(getCurrentUser());

    return (
        <Router history={history}>
            <div>
                <Navigation user={user} setUser={setUser} />
                <Switch>
                    <Route exact path='/'><Home user={user} /></Route>
                    <Route exact path='/user'><Users /></Route>
                    <Route exact path='/user/register'><NewUser /></Route>
                    <Route exact path='/project'><Projects /></Route>
                    <Route exact path='/project/new'><NewProject /></Route>
                    <Route exact path='/user/login'><Login user={user} setUser={setUser} history={history} /></Route>
                    <Route exact path='/timesheet'><Timesheet /></Route>
                </Switch>
            </div>
        </Router>
    );
}