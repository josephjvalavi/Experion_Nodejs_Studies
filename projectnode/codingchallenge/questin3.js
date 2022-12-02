const read=require("readline-sync")
// data=Number(read.question("enter "))
// console.log( data)
// console.log( typeof(data))
arrayFare=[]
num=read.question("enter the number of entries")
for(i=0;i<num;i++){
    fare= read.question("enter the fare")
    arrayFare[i]=Number(fare)
}

for(i=0;i<num;i++){

    for(j=0;j<num;j++){
        
        if(arrayFare[i]>arrayFare[j]){
            var sub=arrayFare[i]
            arrayFare[i]=arrayFare[j]
            arrayFare[j]=sub
        }

}

}
console.log('ascending order',arrayFare)
for(i=0;i<num;i++){

    for(j=0;j<num;j++){
        
        if(arrayFare[i]<arrayFare[j]){
            var sub=arrayFare[i]
            arrayFare[i]=arrayFare[j]
            arrayFare[j]=sub
        }

}

}
console.log("Descending order",arrayFare)
//search elemet in array
isValid=false
searchElement=Number (read.question("enter the element to search"))
for(i=0;i<num;i++){
        
        if(arrayFare[i]===searchElement){
            var isValid=true
            
        }

}
if(isValid){
    console.log("elemnt"+searchElement+"is presentr in"+Number(i+1)+ "posisition" )
}else{
    console.log("no such element")
}
/// max and min elements
max=arrayFare[0]
for(i=0;i<num;i++){

    for(j=0;j<num;j++){
        
        if(arrayFare[i]>max){
            max=arrayFare[i]
        }

}

}
console.log("maximum element in array ",max)

//min element

min=arrayFare[0]
for(i=0;i<num;i++){

    for(j=0;j<num;j++){
        
        if(arrayFare[i]<min){
            min=arrayFare[i]
        }

}

}
console.log("minimumelement in array ",min)

//printing duplicate elemets
var array2=[]
for(i=0;i<num;i++){

    for(j=i+1;j<num;j++){
        
        if(arrayFare[i]==arrayFare[j]){
            array2.push(arrayFare[i])
            if(array2[i]==array2[j]){
                array2[j]=" "
            }
        }

}

}
console.log(array2)
