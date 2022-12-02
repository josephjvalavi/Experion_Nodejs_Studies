const { Console } = require('console');
const fs= require('fs');
let point=0
var read=require('readline-sync')

date=read.question("Enter the date...");
month=read.question("Enter the month...");
year=read.question("Enter the year...");

if(year>'2012')
console.log("Kid")

else if(year<'2012' & year>'1992')
console.log("Youth")

else if(year<'1992' & year>'1962')
console.log("Adult")

else if(year<'1962')
console.log("Older")