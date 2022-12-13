const express = require("express");

const app=express();
const port=process.env.PORT || 4000 ;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
   res.render("header",{
    title:"Weather App",
   });
})


app.listen(port,()=>{
    console.log(`server is up and running on port ${port}`);
})