var express = require('express');
var router = express.Router();
const {mongodb,dbUrl} =require('../config/dbconfig')
const mongoose=require('mongoose')
const {ProductModel,categoryModel,cartModel,orderModel}=require('../config/dbSchema');

 const{auth} =require('../middleware/auth')

 mongoose.connect(dbUrl);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//create new  Product

router.post('/addProduct',async(req,res)=>{
  try {
   let p= await ProductModel.insertMany(req.body)
    console.log(p)
    res.send({
      statuscode:200,
      message:"Product created successfully"
    })
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
})

// add new category
router.post('/addCategory',async(req,res)=>{
  try {
 
    let al=await categoryModel.exists(req.body);
     
    
    if(!al){
          let p= await categoryModel.insertMany(req.body)
          res.send({
            statuscode:200,
            message:"category added",
          })
        }
else{

  res.send({
    statuscode:400,
    message:"Category exist"
  })
}
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
})



router.get('/category',async(req,res)=>{
  try {
 
    let all=await categoryModel.find({});
    res.send({
      statuscode:200,
      data:all
    }) 
    
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
})












//get product by categoryid
router.get('/Product/:categoryId',async(req,res)=>{
  try {
   const {categoryId}=req.body;
   let p= await ProductModel.find({categoryId:categoryId})
    
    res.send({
      statuscode:200,
      data:p
    })
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
})


//get prodct by productid
router.get('/Product/:ProductId',async(req,res)=>{
  try {

  const {ProductId}=req.body;
   let p= await ProductModel.find({ ProductId:ProductId})
    
    res.send({
      statuscode:200,
      data:p
    })
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
})

//get orders by orderid
router.get('/order/:orderId',async(req,res)=>{
  try {

  const {orderId}=req.body;
   let p= await orderModel.find({ orderId:orderId})
    
    res.send({
      statuscode:200,
      data:p
    })
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
})




//add to cart
router.post('/addtocart',auth,async(req,res)=>{

  try {
   let p= await cartModel.insertMany(req.body)
    console.log(p)
    res.send({
      statuscode:200,
      message:"Product  added to the  cart successfully"
    })
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
})


// View cart items 
router.get('/cart', auth,async(req,res)=>{

  try {
   let p= await cartModel.find({})
    
    res.send({
      statuscode:200,
      data:p
    })
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
})




// delete item from cart
router.delete('/cart/:_id',auth,async(req,res)=>{
  try {
    const{ _id}=req.body
   let p= await cartModel.findOneAndDelete({_id:_id})
    console.log(p)
    res.send({
      statuscode:200,
      message:"Product  deleted from  cart successfully"
    })
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
}
)


//update quantities
router.put('/cart/:_id',auth,async(req,res)=>{
  try {
    const{ _id}=req.body
   
   let p= await cartModel.findOneAndUpdate({_id:_id})
//console.log(p)
    if(p){
      p.quantity=req.body.quantity;
      await p.save();
    }

    
    res.send({
      statuscode:200,
      message:"quantities updated  successfully"
    })
  } catch (error) {
    res.send({
      statuscode:400,
      message:"Not Found"
    })
    console.log(error)
  }
}
)


//place order

router.post('/order',auth,async(req,res)=>{

  try {

   let p= await orderModel.insertMany(req.body)
    //console.log(p)
    res.send({
      statuscode:200,
     data:"order placed successfully"
    })
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
})



router.get('/orderH',auth,async(req,res)=>{

  try {

   let orders= await orderModel.find({})
   
    res.send({
      statuscode:200,
      data:orders
    })
  } catch (error) {
    res.send({
      statuscode:500,
      message:"internal server error"
    })
    console.log(error)
  }
})



module.exports = router;
