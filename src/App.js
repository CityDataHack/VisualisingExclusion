import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

// Components
import Nav from './components/Nav/NavModule';

class App extends Component {
	render() {
		return (
			<Router>
				<MuiThemeProvider>
					<React.Fragment>
						<Nav />
						<RaisedButton label="Default" />
					</React.Fragment>
				</MuiThemeProvider>
			</Router>
		);
	}
}

export default App;
