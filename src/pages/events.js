import React from 'react';

// Components
import EventsModule from '../components/EventsModule';

// Data
import eventsData from '../data/EventsData.json';

class Events extends React.Component {
	render() {
		return (
			<div className="container">
				<EventsModule data={eventsData} />
			</div>
		);
	}
}

export default Events;
