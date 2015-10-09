var path = require('path'),
 // Carga modelo ORM
    Sequelize = require('sequelize'),
 // Instancia BBDD sequelize
    sequelize = new Sequelize(null, null, null, {
      dialect: 'sqlite',
      storage: 'lmdt.sqlite'
    }),
// Importa la definición de las tablas
    Home = sequelize.import(path.join(__dirname, 'home'));

// Exporta la definición de las tablas
exports.Home = Home;

sequelize.sync().then(function() {
  Home.count().then(function(count) {
    if ( count === 0) {
      Home.create({
        sitename: 'La máquina de Turing',
        claiming: 'Desarrollo web para seres humanos.'
      }).then(function() {
        console.log('Base de datos inicializada');
      })
    }
  });
});
