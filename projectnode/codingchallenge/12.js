const { question } = require('readline-sync')

passengerArray=[]
destinationArray=[]
n=3
read=require('readline-sync')
for(i=0;i<n;i++){
 let name=   read.question('enter the name')
 let dest=   read.question('enter the destination')
 passengerArray[i]=name

 destinationArray[i]=dest

}
