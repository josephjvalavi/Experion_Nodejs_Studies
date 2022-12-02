var i=0
array=[]
const read = require('readline-sync')
while(true){
array[0]=read.question('enter the floight number')
i++
c=read.question('continue or quit')
if(c==='0'){
    process.exit(0)
}

}
console.log(array)