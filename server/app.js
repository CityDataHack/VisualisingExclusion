const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');

const app = express();

var URI =
	process.env.MONGODB_URI ||
	'mongodb://localhost/vlxData';

var PORT = process.env.PORT || 5000;

mongoose.connect(URI, (err, res) => {
	if (err) {
		console.log ('ERROR connecting to: ' + URI + '. ' + err);
	} else {
		console.log ('Succeeded connected to: ' + URI);
	}
});

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(expressJWT({secret: 'some secret'}).unless({path: ['/login', '/signup', '/signin', '/new']}));

const Event = mongoose.model('Event', {
	type: String,
	distance: String,
	fromUser: {
		url: String,
		id: String
	},
	desc: String,
	url: String
});

const User = mongoose.model('User', {
	userName: String,
	password: String,
	email: String
	// profilePic: String,
	// images: [String],
	// desc: String,
	// abilities: [String],
	// interests: [String],
	// events: [{
	// 	type: String,
	// 	url: String
	// }],
	// address: {
	// 	number: Number,
	// 	street: String,
	// 	town: String,
	// 	postcode: String
	// },
	// location: {
	// 	lon: String,
	// 	lat: String
	// }
});

app.post('/signin', (req, res) => {
	User.findOne({userName: req.body.userName, password: req.body.password}, (err, data) => {
		if (err || !data) {
			res.status(400).json(req.body);
		} else {
			const token = jwt.sign(data.toJSON(), 'some secret')
			res.status(200).json(token);
		}
	});
});

app.post('/signup', (req, res) => {
	res.json(req.body);
});

app.get('/events-list', (req, res) => {
	Event.find({}, (err, data) => {
		res.setHeader('Content-type', 'application/json');
		res.json(data);
	});
});

app.get('/public/:user', (req, res) => {
	User.find({userName: req.params.user},
		{ userName: 1, events: 1, images: 1, abilities: 1, interests: 1, profilePic: 1, desc: 1 },
		(err, data) => {
			res.setHeader('Content-type', 'application/json');
			res.json(data[0]);
		});
});

app.get('/private/:user', (req, res) => {
	User.find({userName: req.params.user}, (err, data) => {
		res.setHeader('Content-type', 'application/json');
		res.json(data[0]);
	});
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, _ => {
	console.log('Server running on port ' + PORT);
});
