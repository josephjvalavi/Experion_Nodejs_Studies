i=0
array=[]
const read = require('readline-sync')
while(true){
array[i]=read.question('enter the over weight')
i++
c=read.question('continue or stop')
if(c==='0'){
    var n=i
    break;
    
}

}
console.log(array)
for(i=0;i<n;i++){
    array[i]=array[i]*15 
}

console.log(array)

