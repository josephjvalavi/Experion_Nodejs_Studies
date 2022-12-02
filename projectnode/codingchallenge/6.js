const read =require('readline-sync')
let flight={}
arrayFlight=[]

let arr = []
arr[0] = 10;
arr[0] = 20
let i=1
while(i<3){
    console.log(i+" th iteration")
flight[`destination`]=read.question('enter the destination:')
flight[`distance`]=read.question('enter the distance:')
flight[`flightFare`]=Number(read.question('enter the fare:'))




// check=read.question('exit(0) or continue(1):')
// if(check===0)
// false


// console.log(arrayFlight)
// flight.destination=read.question('enter the destination:')
// flight.distance=read.question('enter the distance:')
// flight.flightFare=Number(read.question('enter the fare:'))
// console.log(flight)


i++
arrayFlight.push({destination:`${flight.destination}`,distance:`${flight.distance}`,flightFare:`${flight.flightFare}`});
}
console.log(arrayFlight)
min=arrayFlight[0].distance
 console.log(arrayFlight[0])
console.log(min)
for(let k = 0;k<3;k++){
    for(j=k+1;j<k;j++){
    //    let a = arrayFlight[k].distance;
    //    console.log("a "+a)
        if((arrayFlight[k].distance)<(arrayFlight[j].distance)){
            min1=arrayFlight[k].distance
        }
        

    }
}
console.log("minimum distance",min)
