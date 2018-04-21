import React from 'react';
import { Switch } from 'react-router-dom';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';
import DefaultLayoutPublic from '../layouts/DefaultLayoutPublic';

// Pages
import Index from '../pages/index';
import NewAccount from '../pages/newAccount';
import Login from '../pages/login';
import Events from '../pages/events';
import User from '../pages/user';
import Profile from '../pages/profile';

const Routes = ({ token, user, handleLogin }) => (
	<Switch>
		<DefaultLayout exact path="/" component={Index} token={token} user={user}/>
		<DefaultLayoutPublic path="/new" component={NewAccount} handleLogin={handleLogin} token={token} user={user}/>
		<DefaultLayoutPublic path="/login" component={Login} handleLogin={handleLogin} token={token} user={user}/>
		<DefaultLayout path="/events" component={Events} token={token} user={user}/>
		<DefaultLayout path="/profile" component={Profile} token={token} user={user}/>
		<DefaultLayout path="/user/:user" component={User} token={token} user={user}/>
		<DefaultLayout path="/:else" component={Profile} token={token} user={user}/>
	</Switch>
);

export default Routes;
