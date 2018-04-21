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

	componentWillMount() {
		fetch('/events-list', {
			method: 'GET',
			headers: {
				'authorization': 'Bearer ' + this.props.token,
			}
		})
			.then(res => {
				if (res.status !== 200) {
					console.log('Something went wrong');
					return;
				}
				res.json().then(data => {
					this.setState({ data, isLoading: false });
				}).catch(err => {
					console.log('err: ', err);
				});
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
