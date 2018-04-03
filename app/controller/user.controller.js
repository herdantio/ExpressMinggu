const nameAddress=(req,res)=>{
    const {name,address}=req.params;
    
    res
    .status(200)
    .json({
        name,
        address})
}

const helloWorld=(req,res)=>{
    res.send('<h1>Hello Express.js</h1>');
}

const getEmployee=(req,res)=>{
    res.status(200).json({
        name:'Test',
        id:123
    })
}

const addEmployee=(req,res)=>{
    const {name,id}=req.body
    res.status(200).json({
        name,
        id
    })
}

module.exports={
    helloWorld,
    nameAddress,
    getEmployee,
    addEmployee
}