const express = require('express')
const app = express();
const PORT = 3000;

app.get('/',(req,res,next)=>{
    try{
        throw new Error("Something went wrong");

    }catch(error){
        // res.status(500).json({success:false, message:"something went wrong"});
        next(error);
    }
})

app.get("/:id",(req,res,next)=>{
    const id=req.params.id;
    try{
        if(id==="1234"){
            res.send("Valid Id");

        }else{
            throw new Error("invalid id")
        }
    }catch (error){
        // res.status(400).json({success:false, message: "invalid id"});
        next(error);
    }
});

app.use((err,req,res,next)=>{
    res.status(404).json({success:false, message:"Page Not Found"})
})

app.listen(PORT,()=> console.log('Server is running'));