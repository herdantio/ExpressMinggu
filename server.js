const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('<h1>Hello Express.js</h1>');
});

app.get('/:name/:address',(req,res)=>{
    const {name,address}=req.params;
    
    res
    .status(200)
    .json({
        name,
        address
    });
});
app.get('*',(req,res)=>{
    res.send('Page Not Found');
});

app.listen(3000,()=>{
    console.log('Listening from port 3000');
});