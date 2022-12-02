const read=require("readline-sync")
flightFare=read.question("enter the flight fare")
flightTime=read.question("enter the flight time:")
time=read.question("am or pm")
if(time=="pm"){
    flightTime=Number(flightTime)+12
    console.log(flightTime)
}
if(flightTime>=6 &flightTime<=9 & time==='am'){
    flightFare=flightFare*(10/100)+Number(flightFare)
    console.log("time is 6am to 9am",flightFare)
}

if(flightTime>=9 &flightTime<=17 ){
    flightFare=flightFare*(20/100)+Number(flightFare)
    console.log("time is 9am to 5pm",flightFare)
}
if(flightTime>=17 &flightTime<=23 ){
    flightFare=flightFare*(7/100)+Number(flightFare)
    console.log("time is 9am to 5pm",flightFare)
}
if(flightTime>=17 &flightTime<=23 ){
    flightFare=flightFare*(5/100)+Number(flightFare)
    console.log("time is 9am to 5pm",flightFare)
}


