const mongoose=require('mongoose')
const Employee=mongoose.model('Employee')

const getEmployee=(req,res)=>Employee.find().exec((err,result)=>{
    if (err) {
        console.log(err)
        res
        .status(500)
        .json({message:'Error finding employee'})
    }else if(result.length===0){
        console.log('Data employee not found')
        res
        .status(404)
        .json({message:'Data not Found'})
    }else{
        console.log('Found employee: '+result.length)
        res
        .status(200)
        .json(result)
    }
})

module.exports={
    getEmployee
}