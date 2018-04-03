const router=require('express').Router();
const controller=require('../app/controller/user.controller')

router.get('/',controller.helloWorld);

router.get('/:name/:address',controller.nameAddress);

router
.route('/employee')
.get(controller.getEmployee)
.post(controller.addEmployee);

router.get('*',(req,res)=>{
    res.send('Page Not Found');
});



module.exports=router;