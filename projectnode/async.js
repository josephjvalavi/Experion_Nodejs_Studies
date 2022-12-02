console.log(1)

function task(){
    return new Promise(function (res,rej){
        
        
        setTimeout(function(){
            rej()
        },5000)
    })
}

let fullname = "joseph valavi";
let fname = fullname.substring(0,6).toUpperCase()
console.log(fname);
// task().then(function (res){
//     console.log(res)
// })
// .catch(function (res){
//     console.log("rejected "+res)
// })
// async await
async function work(){
    try{
let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(data)
    }
catch{
    console.log("not found")
}
}
work()
console.log(console.log("fghj"))
console.log(3)
console.log(4)