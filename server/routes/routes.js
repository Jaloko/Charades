module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index.html');
	});

	app.get('/public', function(req, res){
		res.render('public.html');
	});

	app.get('/create', function(req, res){
		res.render('create.html');
	});

	app.get('/game', function(req, res){
		res.render('game.html');
	});
};