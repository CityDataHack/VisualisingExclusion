import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Nav from '../components/Nav/NavModule';

const DefaultLayout = ({location, component: Component, ...rest}) => {
	return (
		<React.Fragment>
			<header>
				<Nav />
			</header>
			<Route {...rest} render={(props) => (
				<Component {...props} {...rest} />
			)} />
		</React.Fragment>
	);
}

export default DefaultLayout;

