module.exports = {

	/**
	 * Game variables
	 */
	games: Array(),

	/**
	 * Game classes and templates
	 */
	Game: function(id) {
		this.id = id,
		this.isPublic = true,
		this.category = "all",
		this.timeLimit = 30,
		this.players = Array();
	},

	/**
	 * Static objects holding game states and settings
	 */
	Categories: {
		ALL: "All",
		CRASS_AND_RUDE: "Crass and Rude",
		INNOCENT_AND_DELIGHTFUL: "Innocent and Delightful",
		WEIRD_AND_WONDERFUL: "Weird and Wonderful"
	},

	/**
	 * General purpose game creation and usage functions
	 */

	 /* Copy pasta from draw network */
	generateId: function(games){
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for(var i = 0; i < 6; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		var counter = 0;
		for(var i = 0; i < games.length; i++) {
			if(text === games[i].id) {
				counter++;
			}
		}
		if(counter <= 0) {
			return text;
		} else {
			generateId();
		}

	}

};