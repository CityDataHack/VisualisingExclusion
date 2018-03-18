import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const style = {
	background: "url(./images/profile.jpg) 80% 40%",
	backgroundSize: 'cover',
	height: 150,
	width: 150,
	margin: "0 auto 1em",
	textAlign: 'center',
	display: 'block',
};

const groupStyle = {
	backgroundColor: "#E0E0E0",
	padding: ".75em 0 .75em 1em",
	width: "100%",
	margin: "0 auto 1em",
	display: 'block',
};

const subHeaderStyle = {
	fontWeight: 600,
	marginBottom: '-.5em'
};

const removeStyle = {
	position: 'absolute',
	right: '2em',
	marginTop: '-.5em',
	cursor: 'pointer'
};

const subHeaderStyle2 = {
	fontWeight: 600,
	marginTop: '-1.5em',
	textAlign: 'center',
	marginLeft: '-.6em'
};

class Profile extends React.Component {
	handleRemove(e) {
		e.target.parentElement.remove();
	}

	render() {
		return (
			<div className="container">
				<Paper style={style} zDepth={1} circle={true} />
				<Subheader style={subHeaderStyle2}>Alisson</Subheader>
				<Subheader style={subHeaderStyle}>Abilities:</Subheader>
				<Paper style={groupStyle} zDepth={1} rounded={false}>English<span onClick={this.handleRemove.bind(this)} style={removeStyle}>_</span></Paper>
				<Paper style={groupStyle} zDepth={1} rounded={false}>Spanish<span onClick={this.handleRemove.bind(this)} style={removeStyle}>_</span></Paper>
				<Subheader style={subHeaderStyle}>Interests:</Subheader>
				<Paper style={groupStyle} zDepth={1} rounded={false}>Cooking<span onClick={this.handleRemove.bind(this)} style={removeStyle}>_</span></Paper>
				<Paper style={groupStyle} zDepth={1} rounded={false}>Painting<span onClick={this.handleRemove.bind(this)} style={removeStyle}>_</span></Paper>
				<Paper style={groupStyle} zDepth={1} rounded={false}>Yoga<span onClick={this.handleRemove.bind(this)} style={removeStyle}>_</span></Paper>
			</div>
		);
	}
}

export default Profile;
