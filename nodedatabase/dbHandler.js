const mysql=require('mysql2')

const dbDetails={
    host:'localhost',
    user:'root',
    password:'Valavi@18',
    database:'experion'
                    }

function getConnection(){
    return mysql.createConnection(dbDetails)
}
function executeQuery(query,parameters,callback){
    let connection=getConnection();
    connection.connect();
    connection.query(query,parameters,callback)
//calback is used as a function its not a keyword it is used to get the modukled finctionto display there
    }

module.exports.executeQuery=executeQuery;
