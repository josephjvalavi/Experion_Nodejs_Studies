const {Sequelize, DataTypes,Op}=require('sequelize');
const sequelize =new Sequelize('experion','root','Valavi@18',{host:'localhost',
dialect:'mysql'});

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

sequelize.authenticate()
.then(()=>{
console.log("connection ok")
})
.catch((error)=>{
    console.log("not sucses in connecting to data base",error)
})
const User =sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey:true,
        autoIncrement: true

    },

    name:{
        type: DataTypes.STRING(50),
        allowNull: false

    },
    email:{
        type: DataTypes.STRING(50),
        allowNull:false,
        unique: true
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue: 18,
        allowNull: false
    }
// country:{
//     type:DataTypes.STRING(10),
//     defaultValue:'in',
//     allowNull:false
// }
})

//User.sync({alter:true})
//sync method is used to create table if it is not already existed.
//sync{force:true} is used to simply update the coloums in table not used inproduction it will remove the data in databse
//[alter:true is used instead of teh force true

//------------inserting a row

//  User.create({name:'abi',email:"abijichai@gmail.com",age:63})
//  .then((user)=>{
//     console.log("dataseved sucsees",user.toJSON());
//  })
//  .catch((err)=>{
//     console.log("data error notsaved ",err);
//  })

//selecting all data

// User.findAll({
//     where:{
//         name:'abijichi'
//     }
// }).then((users)=>{
//     users.forEach((users)=>{
//         console.log(users.dataValues.id,users.dataValues.name)
//     })
    
// })

//find using primary key for loop is nit need since itis unique

User.findByPk(4).then(users=>console.log(users.dataValues.name));
/// arithematic operators
User.findAll({
        where:{
            id:{[Op.gte]:2}}
    }).then((users)=>{
        users.forEach((users)=>{
            console.log(users.dataValues.id,users.dataValues.name)
        })
});

