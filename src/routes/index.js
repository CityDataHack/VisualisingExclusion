import React from 'react';
import { Switch } from 'react-router-dom';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';

// Pages
import Index from '../pages/index';
import Events from '../pages/events';
import User from '../pages/user';
import Profile from '../pages/profile';

const Routes = _ => (
	<Switch>
		<DefaultLayout exact path="/" component={Index}/>
		<DefaultLayout path="/events" component={Events}/>
		<DefaultLayout path="/user/:user" component={User}/>
		<DefaultLayout path="/profile" component={Profile}/>
		<DefaultLayout path="/:else" component={Profile}/>
	</Switch>
);

export default Routes;
