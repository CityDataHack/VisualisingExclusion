import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './reset.css';
import './App.css';

// Pages
import Index from './pages/index';
import Events from './pages/events';
import User1 from './pages/userCooking';
import User2 from './pages/userPainting';
import User3 from './pages/userYoga';
import Profile from './pages/profile';

// Components
import Nav from './components/Nav/NavModule';

class App extends Component {
	render() {
		return (
			<Router>
				<MuiThemeProvider>
					<React.Fragment>
						<Nav />
						<Switch>
							<Route exact path="/" component={Index}/>
							<Route path="/events" component={Events}/>
							<Route path="/user1" component={User1}/>
							<Route path="/user2" component={User2}/>
							<Route path="/user3" component={User3}/>
							<Route path="/profile" component={Profile}/>
						</Switch>
					</React.Fragment>
				</MuiThemeProvider>
			</Router>
		);
	}
}

export default App;
