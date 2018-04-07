import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

// Data
import { Abilities, Interests } from '../data/profile.json';

const style = {
	background: "url(./images/profile.jpg) 80% 40%",
	backgroundSize: 'cover',
	height: 150,
	width: 150,
	margin: "0 auto 1em",
	display: 'block',
};

const groupStyle = {
	backgroundColor: "#E0E0E0",
	padding: ".75em 0 .75em 1em",
	width: "100%",
	margin: "0 auto 1em",
	display: 'block',
	position: 'relative',
};

const subHeaderStyle = {
	fontWeight: 600,
	marginBottom: '-.5em'
};

const removeStyle = {
	position: 'absolute',
	right: '1em',
	marginTop: '-.5em',
	cursor: 'pointer'
};

const subHeaderStyle2 = {
	fontWeight: 600,
	marginTop: '-1.5em',
	textAlign: 'center',
	marginLeft: '-.6em'
};

const add = {
	background: '#43A047',
	bottom: '1em',
	color: '#fff',
	fontSize: '32px',
	height: 50,
	position: 'fixed',
	right: '1em',
	width: 50,
	zIndex: '2',
};

const plus = {
	left: '50%',
	position: 'absolute',
	top: '50%',
	transform: 'translate(-50%, -50%)',
}

class Profile extends React.Component {
	handleRemove(e) {
		e.target.parentElement.remove();
	}

	render() {
		return (
			<div className="container">
				<Paper style={style} zDepth={1} circle={true} />
				<Subheader style={subHeaderStyle2}>Alisson</Subheader>
				<Paper style={add} zDepth={1} circle={true}><span style={plus}>+</span></Paper>

				<Subheader style={subHeaderStyle}>Abilities:</Subheader>
				{Abilities && 
					Abilities.map((ability, index) =>
						<Paper key={ability + index} style={groupStyle} zDepth={1} rounded={false}>{ability}<span onClick={this.handleRemove.bind(this)} style={removeStyle}>_</span></Paper>
					)
				}

				<Subheader style={subHeaderStyle}>Interests:</Subheader>
				{Interests && 
					Interests.map((interest, index) =>
						<Paper key={interest + index} style={groupStyle} zDepth={1} rounded={false}>{interest}<span onClick={this.handleRemove.bind(this)} style={removeStyle}>_</span></Paper>
					)
				}
			</div>
		);
	}
}

export default Profile;
