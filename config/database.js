const Sequelize = require('sequelize');

var sequelize = new Sequelize('', {
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        encrypt: true
    }
});

var db = {
    sequelize: sequelize,
    Sequelize: Sequelize
};

module.exports = db;