const e = require("express")
const read=require("readline-sync")
var dupe=false
var array=[]
for(i=1;i<=10;i++){

        
    
    array[i]=read.question("enter the "+  i +" "  +"name :")
//     console.log("duplicated element")

}

    


console.log(array)
//console.log(array[1][1])
process.stdout.write("printing in acending order")
 for(i=1;i<=10;i++){
    for(j=i+1;j<=10;j++){
        a1=array[i][0]
        b1=array[j][0]
        if(a1>b1){
            var c=array[i]
            array[i]=array[j]
            array[j]=c
        }
    }

}
console.log("acsending order array:",array)

process.stdout.write("printing in acending order")
 for(i=1;i<=10;i++){
    for(j=i+1;j<=10;j++){
        a1=array[i][0]
        b1=array[j][0]
        if(a1<b1){
            var c=array[i]
            array[i]=array[j]
            array[j]=c
        }
    }

}
console.log("descending order array",array)
// console.log("spliotoing at space")
// array.forEach(e=>{
//     console.log(split())

// })
array2=[]
console.log("duplicated elements")
count=0
for(i=1;i<=10;i++){
    for(j=i+1;j<=10;j++){
        // console.log(array[i])
        // console.log(array[j])
        if(array[i]===array[j]){
            array2.push(array[j])
           

    } 
}
}
console.log(array2)

//printing length odf names
array.forEach(element => {
    console.log("length of"+ " " +element+ "="+element.length)
    
});

//spliting at space

for(i=1;i<=10;i++){
    for(j=0;j<=array[i].length;j++){
        if(array[i][j]==' '){
            console.log("elemet has a spaced charecter:",array[i])
            
        }
        
    }
}