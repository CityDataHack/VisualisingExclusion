import React from 'react';
import { Switch } from 'react-router-dom';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';

// Pages
import Index from '../pages/index';
import NewAccount from '../pages/newAccount';
import Login from '../pages/login';
import Events from '../pages/events';
import User from '../pages/user';
import Profile from '../pages/profile';

const Routes = _ => (
	<Switch>
		<DefaultLayout exact path="/" component={Index}/>
		<DefaultLayout path="/new" component={NewAccount}/>
		<DefaultLayout path="/login" component={Login}/>
		<DefaultLayout path="/events" component={Events}/>
		<DefaultLayout path="/profile" component={Profile}/>
		<DefaultLayout path="/user/:user" component={User}/>
		<DefaultLayout path="/:else" component={Profile}/>
	</Switch>
);

export default Routes;
