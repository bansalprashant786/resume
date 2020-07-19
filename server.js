const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const publicPath = path.resolve(__dirname, 'build');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'bansalprashant786@gmail.com',
		pass: 'axoxanptybuawemq'
	}
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(publicPath));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.post('/contact', (req, res) => {
	var mailOptions = {
		from: 'bansalprashant786@gmail.com	',
		to: 'bansalprashant786@gmail.com',
		subject:'SomeOne contact',
		text: JSON.stringify(req.body)
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			res.send({ status: 400, message: 'Something went wrong' });
		} else {
		 res.send({status: 200, "success":"mail sent successfully"})
		}
	});
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});
