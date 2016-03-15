module.exports = function(app, game){
	app.get('/', function(req, res){
		var publicGames = Array();
		for(var i = 0; i < game.games.length; i++) {
			if(game.games[i].isPublic) {
				publicGames.push(game.games[i]);
			}
		}
		res.render('index.ejs', {
			games: publicGames
		});
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