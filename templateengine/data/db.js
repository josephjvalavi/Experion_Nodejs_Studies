const mysql = require('mysql2')
const dbDetails={
    host:'localhost',
    user:'root',
    password:'Valavi@18',
    database:'experion'
}
function getConnection(){
    return mysql.createConnection(dbDetails);

}
function executeQuery(query,parameters,callback){
    let connection=getConnection()
    connection.connect()
    connection.query(query,parameters,callback)
    connection.commit()
    connection.end()
}
module.exports.executeQuery = executeQuery
