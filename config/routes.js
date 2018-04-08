const router=require('express').Router();
const userController=require('../app/controller/user.controller')
const employeeController=require('../app/controller/employee.controller')

router.get('/',userController.helloWorld);

//router.get('/:name/:address',userController.nameAddress);

router
.route('/employee')
.get(employeeController.getEmployee)
.post(userController.addEmployee);

router.get('*',(req,res)=>{
    res.send('Page Not Found');
});



module.exports=router;