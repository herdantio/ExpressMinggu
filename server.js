const express=require('express');
const app=express();
const path=require('path')
const bodyParser=require('body-parser');

const routing=require('./config/routes');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'public')))

app.use('/node_modules',express.static(__dirname+'/node_modules'))

app.use('/api',routing);

app.listen(3000)