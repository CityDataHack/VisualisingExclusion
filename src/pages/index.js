import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
	<article style={{overflow: 'hidden'}}>
		<Link to="/events"><img src="./images/logo.jpg" alt="come2meet logo" style={{
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)'
		}}/></Link>
	</article>
);
