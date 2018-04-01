const router=require('express').Router();

router.get('/',(req,res)=>{
    res.send('<h1>Hello Express.js</h1>');
});

router.get('/:name/:address',(req,res)=>{
    const {name,address}=req.params;
    
    res
    .status(200)
    .json({
        name,
        address
    });
});
router.get('*',(req,res)=>{
    res.send('Page Not Found');
});

module.exports=router;