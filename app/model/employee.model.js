const mongoose=require('mongoose');

const employeeSchema=new mongoose.Schema({
    first_name  :   {
        type:String,
        required:true
    },
    last_name   :   {
        type:String,
        required:true
    },
    gender  : String,
    age : Number,
    hire_date   :   Date
});

mongoose.model('Employee',employeeSchema,'employee')