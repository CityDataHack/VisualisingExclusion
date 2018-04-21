import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Components
import Nav from '../components/Nav/NavModule';

const DefaultLayout = ({location, component: Component, user, token, ...rest}) => {
	return (
		<React.Fragment>
			<header>
				<Nav />
			</header>
			<Route {...rest} render={props => 
				user ? (
					<Component {...props} user={user} token={token} />
				) : (
					<Redirect to={{
						pathname: '/login',
						state: {from: props.location}
					}} />
				)
			} />
		</React.Fragment>
	);
}

export default DefaultLayout;

