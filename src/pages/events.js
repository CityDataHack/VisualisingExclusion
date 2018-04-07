import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	marginBottom: "1em",
}

const labelStyle = {
	fontSize: "2em",
}

const list = [
	'Cooking',
	'Painting',
	'Cooking',
	'Yoga',
	'Painting'
];

const events = {
	cooking: {
		color: '#EF5350',
		backgroundImage: './images/food1.jpg',
	},
	painting: {
		color: '#AB47BC',
		backgroundImage: './images/painting.jpg',
	},
	yoga: {
		color: '#43A047',
		backgroundImage: './images/yoga.jpg',
	},
};

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

const desc = [
	'Mediteranean food',
	'Landscape painting',
	'Mediteranean food',
	'Bikram yoga',
	'Landscape painting',
];

const distances = [
	'0.7 mi',
	'0.9 mi',
	'0.7 mi',
	'1.1 mi',
	'1.6 mi',
];

const route = {
	cooking: '/user1',
	painting: '/user2',
	yoga: '/user3',
}

class Events extends React.Component {
	render() {
		return (
			<div className="container">
				{list.map((item, index) => (
					<Link to={route[item.toLowerCase()]} key={item.toLowerCase() + index}><RaisedButton label={item} labelStyle={labelStyle} fullWidth={true} primary={true} style={style} buttonStyle={{
						borderRadius: 0,
						color: '#fff',
						textAlign: "left",
						height: "10em",
						background: `linear-gradient(to right, ${events[item.toLowerCase()].color} 50%, rgba(0, 0, 0, 0) 100%), url(${events[item.toLowerCase()].backgroundImage}) right center`,
						backgroundSize: "cover",
					}}><span style={distanceStyle}>{distances[index]}</span><span style={descStyle}>{desc[index]}</span></RaisedButton></Link>
				))}
			</div>
		);
	}
}

export default Events;
