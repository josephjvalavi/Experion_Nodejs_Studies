let axios=require("axios")
let express=require("express")
let app=express()

async function getRequest() {
    let config={
        method:"get",
        url:"https://reqres.in/api/users"
    }
    let res=await axios(config)
    console.log(res.data)

}
//getRequest()

app.get("/async",async(request,response)=>{ 
    let config={
    method:"get",
    url:"https://reqres.in/api/users"
}
let res=await axios(config)
response.status(200).json(res.data.data)
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})