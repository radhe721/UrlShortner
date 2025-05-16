import express from "express";
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello Radhe")
})
app.listen(3000, (req,res)=>{
    console.log("Server is Running on Port : http://localhost:3000");
})