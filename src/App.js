import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './reset.css';
import './App.css';

// Routes
import Routes from './routes';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			token: undefined,
			user: undefined
		};
	}

	componentWillMount() {
		const cookie = document.cookie.split(';').filter(item => item.indexOf('user64=') >= 0).map(s => s.trim())[0];

		if (cookie !== undefined) {
			const token = cookie.split('=')[1];
			const user = JSON.parse(window.atob(token.split('.')[1]))
			this.setState({ user, token });
		}
	}

	handleLogin = (user, token) => {
		this.setState({ user, token });
	}

	render() {
		return (
			<Router>
				<MuiThemeProvider>
					<Routes user={this.state.user} token={this.state.token} handleLogin={this.handleLogin} />
				</MuiThemeProvider>
			</Router>
		);
	}
}

export default App;
