import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

const drawerStyle = {
	paddingTop: "48px",
};

const closeButton = {
	position: "absolute",
	right: 0,
	top: 0
};

const barStyle = {
	marginBottom: "1em",
}

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClick() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	handleClose() {
		this.setState({
			isOpen: false
		})
	}

	render() {
		return (
			<React.Fragment>
				<AppBar
					title="V.ex"
					onTitleClick={this.handleClick}
					onLeftIconButtonClick={this.handleClick}
					style={barStyle}
				/>
				<Drawer
					open={this.state.isOpen}
					docked={false}
					containerStyle={drawerStyle}
				>
					<IconButton style={closeButton} onClick={this.handleClose}><NavigationClose /></IconButton>
					<MenuItem onClick={this.handleClose}><Link to="/">Index</Link></MenuItem>
					<MenuItem onClick={this.handleClose}><Link to="/events">Events</Link></MenuItem>
					<MenuItem onClick={this.handleClose}><Link to="/profile">Profile</Link></MenuItem>
				</Drawer>
			</React.Fragment>
		);
	}
}

export default Nav;
