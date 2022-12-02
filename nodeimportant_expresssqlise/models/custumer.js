const{Sequelize,DataTypes} = require('sequelize')

const db=require('./db')
const Customer= db.sequelize.define("Customer",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,

    },
    Firstname:{
        type:DataTypes.STRING,
        allowNull:false

    },
    Lastname:{

        type:DataTypes.STRING,
        allowNull:false


    },
    emial:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true

    },
    country:{
        type:DataTypes.STRING,
        allowNull:false,
        

    }

    })
    module.exports =Customer