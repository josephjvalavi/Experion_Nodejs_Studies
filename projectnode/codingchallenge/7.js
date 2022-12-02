
const { Console } = require('console');
const fs= require('fs');
var point=0
var read=require('readline-sync')
let name=read.question("Enter the name of passenger...");
l=Number(read.question("Enter the distance travelled..."));

if(l>'10000' & l<='20000'){
    point+=10;
}
else if(l>'20000'&l<='50000'){
    point+=20;
}
else if (l>'50000'&l<='100000'){
    point+=50;
}

console.log(point)