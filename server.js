//Personal API JS Server
var port = 8888;
var messages = [{message:'hello'}];
var me = { 
		name:"George",
		location: "Provo, UT",
		hobbies: ["Soccer", "HighTech", "WebDev", "A"],
		ocuppations: "IT Admin, Network Admin, Systems Engineer",
		latestOcupation: "Sec Engineer",
		mentions: [{mention:"Hi!"}],
		friends: [{name:"Lizzie"}]
};

var express = require('express');

var app = express();

app.configure(function (){
	app.use(express.bodyParser());
	app.use(function(req, res, next){
		res.setHeader('Access-Control-Allow-Origin','*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});
});

app.get('/name', function(req, res) {
	res.type('application/json');
	//res.send(JSON.stringify(me.name));
	res.json({name: me.name});
});

app.get('/location', function(req, res) {
	res.type('application/json');
	res.json({location: me.location});
});

app.get('/hobbies', function(req, res) {
	var hobbies = [];
	res.type('application/json');

	// GET /hobbies?order=asc
	if (req.query.order =='asc') {
		hobbies = me.hobbies.sort();
	}

	if (req.query.order =='des') {
		hobbies = me.hobbies.sort().reverse();
	}
	res.json({hobbies: hobbies});
});


app.get('/ocuppations', function(req, res) {
	res.type('application/json');
	res.json({ocuppations: me.ocuppations});
});

app.get('/ocuppations/latest', function(req, res) {
	res.type('application/json');
	res.json({latestOcupation: me.latestOcupation});
});

app.post('/mentions', function(req, res) {
	me.mentions.push(req.body);
	res.send(JSON.stringify(me));
});

app.post('/friends', function(req, res) {
	me.friends.push(req.body);
	res.send(JSON.stringify(me));
});



app.listen(port);
console.log('Listening on port '+port);

