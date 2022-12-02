const read=require('readline-sync')
fareArray=[]
num=read.question("enter the limit")
for(i=0;i<num;i++){
    fareArray[i]=Number(read.question("enter the fare"))
}
console.log(fareArray)
array1=[]
i=0
fareArray.forEach(e => {
    if(e%2==0){
        array1.push(e)
    }else{
        
        array2[num-i]=e
        i++
    }
});
console.log(array1)