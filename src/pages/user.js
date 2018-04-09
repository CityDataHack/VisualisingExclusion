import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
	height: 150,
	width: 150,
	margin: "0 auto 1em",
	overflow: 'hidden',
	textAlign: 'center',
	display: 'block',
};

const groupStyle = {
	backgroundColor: "#E91E63",
	color: 'white',
	padding: ".75em 0 .75em 1em",
	width: "100%",
	margin: "0 auto 1em",
	display: 'block',
};

const descriptionStyle = {
	padding: "0 .5em",
	marginBottom: '1em',
};

const foodCardStyle = {
	height: 100,
	width: 100,
	display: 'inline-block',
	verticalAlign: 'top',
	marginRight: '5px',
	marginBottom: '5px'
}

class User extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userData: undefined
		};
	}

	componentWillMount() {
		fetch('/public/' + this.props.match.params.user)
			.then(res => {
				if (res.status !== 200) {
					console.log('Something went wrong');
					return;
				}
				res.json().then(userData =>
					this.setState({ userData })
				);
			});
	}

	render() {
		const userData = this.state.userData;
		console.log(userData)
		return userData ? (
			<div className="container">
				<Paper style={style} zDepth={1} circle={true}>
					<img style={{maxWidth: '100%'}} src={userData.profilePic} alt="proficePic" />
				</Paper>
				<Paper style={groupStyle} zDepth={1} rounded={false}>Cooking</Paper>
				<p style={descriptionStyle}>{userData.desc}</p>
				<div style={{textAlign: 'center', marginBottom: '1em'}}>
					{userData.images.map((img, index) => (
						<Paper style={foodCardStyle} zDepth={1} rounded={false} key={img}><div style={{height: '100%', width: '100%', background: `url(${img}) center center`, backgroundSize: 'cover'}} /></Paper>
					))}
				</div>
			</div>
		) : (
			<div>Loading...</div>
		);
	}
}

export default User;
