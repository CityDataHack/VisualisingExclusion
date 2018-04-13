import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	marginBottom: "1em",
}

const labelStyle = {
	fontSize: "2em",
}

const descStyle = {
	position: 'absolute',
	fontSize: '.75em',
	height: '1em',
	left: 'calc(1rem + 2px)',
	top: 'calc(50% + 5px)',
};

const distanceStyle = {
	position: 'absolute',
	fontSize: '.75em',
	height: '1em',
	left: 'calc(1rem + 2px)',
	top: '10%',
};

const EventsModule = props => {
	const events = props.data;
	
	return events.map((event, index) => (
		<Link to={event.fromUser.url} key={event._id}>
			<RaisedButton label={event.type} labelStyle={labelStyle} fullWidth={true} primary={true} style={style} buttonStyle={{
				borderRadius: 0,
				color: '#fff',
				textAlign: "left",
				height: "10em",
				background: `linear-gradient(to right, ${event.color} 50%, rgba(0, 0, 0, 0) 100%), url(${event.backgroundImage}) right center`,
				backgroundSize: "cover",
			}}>
				<span style={distanceStyle}>{event.distance}</span>
				<span style={descStyle}>{event.desc}</span>
			</RaisedButton>
		</Link>
	));
};

export default EventsModule;
