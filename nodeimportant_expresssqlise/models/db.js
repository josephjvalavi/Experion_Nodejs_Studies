const{Sequelize,DataTypes} = require('sequelize')
const sequelize= new Sequelize('custumerapp','root','Valavi@18',
{host:'localhost',dialect:'mysql'});

module.exports.sequelize=sequelize