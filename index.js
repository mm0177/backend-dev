console.log("backend dev")

require("dotenv").config() // importing .env so that its code like the port can be used
const express=require("express") //importing express
const app=express()
const port=4000
app.get("/",(req,res)=>{
    res.send("hello world!")
}) // when the app gets a request on the / i.e (main page) using req(request)  , a res (response) is sent

app.get("/twitter",(req,res)=>{
    res.send("sending twitter link")

})
app.get("/twitter/login",(req,res)=>{
    res.send("<h1> please login at my webpage<h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`exmaple app listening on port ${port}`)
})