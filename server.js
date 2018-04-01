const express=require('express');
const app=express();

const routing=require('./config/routes');

app.use('/',routing);

app.listen(3000,()=>{
    console.log('Listening from port 3000');
});