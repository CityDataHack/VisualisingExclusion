import React from 'react';

// Components
import EventsModule from '../components/EventsModule';

class Events extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			isLoading: true,
			data: undefined,
		};
	}

	componentDidMount() {
		fetch('/aevents')
			.then(res => {
				if (res.status !== 200) {
					console.log('Something went wrong');
					return;
				}
				res.json().then(data =>
					this.setState({ data, isLoading: false })
				);
			});
	}

	render() {
		return (
			<div className="container">
				{this.state.isLoading &&
					<div>Loading...</div>
				}
				{this.state.data &&
					<EventsModule data={this.state.data} />
				}
			</div>
		);
	}
}

export default Events;
