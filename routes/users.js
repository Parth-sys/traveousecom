var express = require('express');
var router = express.Router();
const mongoose=require('mongoose');
const { dbUrl } = require('../config/dbconfig');
const {userModel} =require('../config/dbSchema');
const {genPassword} =require('../middleware/auth')
const bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
mongoose.connect(dbUrl)
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.post('/signup', async (req,res)=>{
    
  try {
    
    const { email, username,password}=req.body;
    
    let al=await userModel.findOne(req.body);
    //console.log(al)
    
    if(al){
     
         res.send({
            statuscode:400,
          message:"user exist"
         })
        }
         else{

          const hashpassword=  await genPassword(password);
          const user=await userModel.insertMany({email:req.body.email,username:req.body.username,password:hashpassword})
            
          res.send({
            statuscode:200,
            message:"Signup successful"
          })
    
    }
    
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"

    })
  }
  


});


router.post('/login', async (req,res)=>{
    
  try {
    
    const {  username,password}=req.body;

    const result= await userModel.findOne({username:username});
    
//console.log(password)

    const storedpass=result.password
   
    var isMatch=await bcrypt.compare(req.body.password,storedpass);
    
  
    
    if(!result){
      return  res.send({
          statuscode:403,
          message: "Wrong Username or Password"
      })
  }
    if(!isMatch){
      
      res.send({
        statuscode:401,  
        message:"inavalid login"
      });
    }
    else{
      const token=jwt.sign({id:result._id},process.env.SECURITY_KEY) //jwt token
      
      res.send({ 
        message:"login sucessful",
        token:token
      });
    }

} catch (error) {
 
  res.send({
    statuscode:500,
    message:"internal server error"
  })
}
  
});
    





module.exports = router;
