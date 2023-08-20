const mongoose=require('mongoose');
const { mongodb } = require('./dbconfig');
const{v4:uuid}=require('uuid')
const ProductSchema=new mongoose.Schema({
   
    title:{type:'string',required:true},
    Description:{type:'string',required:true},
    Price:{type:'string',required:true},
    categoryId:{type:'string',required:true},
    ProductId:{type:'string',required:true},
    status:{type:'string',default:"Available"},
    createdAt:{type:Date,default:Date.now()},

})


const categorySchema=new mongoose.Schema({
    category:{type:'string',required:true},
    categoryId:{type:'string',required:true},
    createdAt:{type:Date,default:Date.now()}
})


const  cartSchema=new mongoose.Schema({
    title:{type:'string',required:true},
    Description:{type:'string',required:true},
    Price:{type:'string',required:true},
    categoryId:{type:'string',required:true},
    ProductId:{type:'string',required:true},
    status:{type:'string',default:"Available"},
    quantity:{type:'string',required:true},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
})



const userSchema=new mongoose.Schema({
    email:{type:'string',required:true,unique:true},
    username:{type:'string',required:true},
    password:{type:'string',required:true},
    createdAt:{type:Date ,default:Date.now()}
})


const orderSchema=new mongoose.Schema({
    orderId:{type:'string', required:true ,default: uuid()},
    title:{type:'string',required:true},
    Description:{type:'string',required:true},
    Price:{type:'string',required:true},
    categoryId:{type:'string',required:true},
    ProductId:{type:'string',required:true},
    status:{type:'string',default:"Available"},
    quantity:{type:'string',required:true},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}

})





var ProductModel=mongoose.model('product',ProductSchema);
var categoryModel=mongoose.model('category',categorySchema);
var cartModel=mongoose.model('cart',cartSchema);
var userModel=mongoose.model('users',userSchema);
var orderModel=mongoose.model('orders',orderSchema);

module.exports={ProductModel,categoryModel,cartModel,userModel,orderModel}