
var jwt=require('jsonwebtoken');
var bcrypt=require('bcrypt');


 const auth=(request,response,next)=>{
    try{
const token=request.header('x-auth-token');
console.log(token);
jwt.verify(token,process.env.SECURITY_KEY)
next();
    }
    catch(err){
      response.status(401);
      response.send({error:err.message})
    }
}

 const  genPassword= async(password)=>{
    const salt=await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

module.exports={genPassword,auth}