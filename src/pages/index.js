import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<article>
		<p><Link to="/profile">Profile</Link></p>
		<p><Link to="/events">Events</Link></p>
		<p><Link to="/user">User</Link></p>
	</article>
);
