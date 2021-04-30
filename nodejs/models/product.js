const mongoose=require('mongoose')
var Product=mongoose.model('Product',{
    name:{type:String},
    status:{type:String},
    price:{type:Number},
    brand:{type:String},
    care:{type:String},
    category:{type:String},
    colour:{type:String},
    material:{type:String},
    size:{type:Number}
   
  
})
module.exports={Product}