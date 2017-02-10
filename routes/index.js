var bigreen = require('./greenopiaHandler');
	module.exports = exports = function(app, db) {

	var green = new bigreen(db);

	app.post('/backend/sendNewUser', green.insertUser);
}
