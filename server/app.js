const app = require('express')();

const port = process.env.PORT || 5000;

app.post('/auth', (req, res) => {
	console.log('Login attempt');
});

app.listen(port, _ => {
	console.log('Server running on port ' + port);
});
