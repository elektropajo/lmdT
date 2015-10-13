var models = require('../models/models');

// GET /
exports.homePage = function (req, res) {
  models.Home.findOne().then(function(home) {
    res.render('index', {
      sitename: home.sitename,
      claiming: home.claiming,
      description: home.description
    });
    console.log(home);
  });

}
