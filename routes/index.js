var mainCtrl = require('../app_server/controllers/main');

module.exports = function (app) {
	app.get('/', mainCtrl.index);
};