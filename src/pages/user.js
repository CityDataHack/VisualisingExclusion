import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
	background: "url(./images/user1.jpg) center center",
	backgroundSize: 'cover',
	height: 100,
	width: 100,
	margin: "0 auto",
	textAlign: 'center',
	display: 'block',
};

class User extends React.Component {
	render() {
		return (
			<div className="container">
				<Paper style={style} zDepth={1} circle={true} />
			</div>
		);
	}
}

export default User;
