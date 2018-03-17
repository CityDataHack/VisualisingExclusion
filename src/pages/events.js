import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
	borderRadius: 0,
	textAlign: "left",
	height: "10em",
	background: "linear-gradient(to right, #E91E63 50%, rgba(0, 0, 0, 0) 100%), url(./images/food1.jpg) right center",
	backgroundSize: "cover",
};

const style = {
	marginBottom: "1em",
}

const labelStyle = {
	fontSize: "2em",
}

class Events extends React.Component {
	render() {
		return (
			<div className="container">
				<Link to="/user"><RaisedButton label="Primary" labelStyle={labelStyle} fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Primary" labelStyle={labelStyle} fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Secondary" labelStyle={labelStyle} fullWidth={true} secondary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Primary" labelStyle={labelStyle} fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Secondary" labelStyle={labelStyle} fullWidth={true} secondary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Secondary" labelStyle={labelStyle} fullWidth={true} secondary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Primary" labelStyle={labelStyle} fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Secondary" labelStyle={labelStyle} fullWidth={true} secondary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Primary" labelStyle={labelStyle} fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
				<Link to="/user"><RaisedButton label="Primary" labelStyle={labelStyle} fullWidth={true} primary={true} style={style} buttonStyle={buttonStyle} /></Link>
			</div>
		);
	}
}

export default Events;
