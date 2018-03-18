import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<article>
		<p><Link to="/profile">Profile</Link></p>
		<p><Link to="/events">Events</Link></p>
		<p><Link to="/user1">User1</Link></p>
		<p><Link to="/user2">User2</Link></p>
		<p><Link to="/user3">User3</Link></p>
	</article>
);
