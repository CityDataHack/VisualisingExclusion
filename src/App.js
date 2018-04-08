import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './reset.css';
import './App.css';

// Routes
import Routes from './routes';

class App extends Component {
	render() {
		return (
			<Router>
				<MuiThemeProvider>
					<Routes />
				</MuiThemeProvider>
			</Router>
		);
	}
}

export default App;
