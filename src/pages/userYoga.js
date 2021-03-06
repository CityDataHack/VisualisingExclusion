import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
	background: "url(./images/user3.jpg) 70% center",
	backgroundSize: 'cover',
	height: 150,
	width: 150,
	margin: "0 auto 1em",
	textAlign: 'center',
	display: 'block',
};

const groupStyle = {
	backgroundColor: "#43A047",
	color: 'white',
	padding: ".75em 0 .75em 1em",
	width: "100%",
	margin: "0 auto 1em",
	display: 'block',
};

const descriptionStyle = {
	padding: "0 .5em",
	marginBottom: '1em',
};

const foodImages = [
	'./images/yoga1.jpg',
	'./images/yoga2.jpg',
	'./images/yoga3.jpg',
	'./images/yoga4.jpg',
];

const foodCardStyle = {
	height: 100,
	width: 100,
	display: 'inline-block',
	verticalAlign: 'top',
	marginRight: '5px',
	marginBottom: '5px'
}

class User extends React.Component {
	render() {
		return (
			<div className="container">
				<Paper style={style} zDepth={1} circle={true} />
				<Paper style={groupStyle} zDepth={1} rounded={false}>Yoga</Paper>
				<p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<p style={descriptionStyle}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<div style={{textAlign: 'center', marginBottom: '1em'}}>
					{foodImages.map((img, index) => (
						<Paper style={foodCardStyle} zDepth={1} rounded={false} key={img}><div style={{height: '100%', width: '100%', background: `url(${img}) center center`, backgroundSize: 'cover'}} /></Paper>
					))}
				</div>
			</div>
		);
	}
}

export default User;
