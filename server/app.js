const app = require('express')();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vlxData');

const Event = mongoose.model('Event', {
	type: String,
	distance: String,
	fromUser: String,
	desc: String
});

const User = mongoose.model('User', {
	userName: String,
	profilePic: String,
	images: [String],
	desc: String,
	abilities: [String],
	interests: [String],
	address: {
		number: Number,
		street: String,
		town: String,
		postcode: String
	},
	location: {
		lon: String,
		lat: String
	}
});

const port = process.env.PORT || 5000;

app.post('/auth', (req, res) => {
	console.log('Login attempt');
});

app.get('/aevents', (req, res) => {
	Event.find({}, (err, data) => {
		res.setHeader('Content-type', 'application/json');
		res.json(data);
	});
});

app.get('/public/:user', (req, res) => {
	User.find({userName: req.params.user}, (err, data) => {
		res.setHeader('Content-type', 'application/json');
		res.json(data[0]);
	})
});

app.listen(port, _ => {
	console.log('Server running on port ' + port);
});
