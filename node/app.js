function get(){
    return new Promise(function(res, rej){
        console.log('This is a long running task');
        // res(5);
        rej('no network');
    });
}

get().then(r=>{
    console.log(r);
}).catch(err=>{
    console.log(err);
})