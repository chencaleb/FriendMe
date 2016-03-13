//SERVER SIDE JAVASCRIPT

var express 	   	= require('express'),
	app 		   	= express(),
	mongoose 	   	= require('mongoose'),
	bodyParser     	= require('body-parser'),
	methodOverride 	= require('method-override'),
	hbs 		   	= require('hbs'),
	hbsutils 		= require('hbs-utils')(hbs),
	path 			= require('path'),
	logger 			= require('morgan'),
	routes 			= require('./config/routes');
	expressSession 	= require('express-session');
	cookieParser   	= require("cookie-parser");
	passport       	= require('passport');

//static files from public folder
app.use( cookieParser() );
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('__method'));
app.use(logger('dev'));

app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'hbs');

hbsutils.registerWatchedPartials(__dirname + '/views/partials');


app.use(routes);
app.listen(process.env.PORT || 5000, function() {
	console.log('server is running');
});

