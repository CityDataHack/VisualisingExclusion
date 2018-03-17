import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
	borderRadius: 0,
	height: "10em",
};

const style = {
	marginBottom: "1em",
}

class Events extends React.Component {
	render() {
		return (
			<div className="container">
				<Link to="/user"><RaisedButton label="Primary" fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Primary" fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Secondary" fullWidth={true} secondary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Primary" fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Secondary" fullWidth={true} secondary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Secondary" fullWidth={true} secondary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Primary" fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Secondary" fullWidth={true} secondary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Primary" fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Primary" fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Secondary" fullWidth={true} secondary={true} style={style} buttonStyle={buttonStyle} /></Link>
			</div>
		);
	}
}

export default Events;
