//Personal API JS Server
var port = 8888;
var messages = [{message:'hello'}];
var me = { 
		name:"George",
		location: "Provo, UT",
		hobbies: "Soccer, HighTech & WebDev",
		ocuppations: "IT Admin, Network Admin, Systems Engineer",
		latestOcupattion: "Security Engineer"
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

app.listen(port);
console.log('Listening on port '+port);

