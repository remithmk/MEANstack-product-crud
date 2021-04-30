const express= require('express')
var router=express.Router()
var objectId=require('mongoose').Types.ObjectId
var {Product}=require('../models/product')

router.get('/',function(req,res){
    Product.find(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log("error in display data")
        }
    })
})

router.post('/',function(req,res){
    var emp=new Product({
        name:req.body.name,
        status:req.body.status,
        price:req.body.price,
        brand:req.body.brand,       
        care:req.body.care,
        category:req.body.category,
        colour:req.body.colour,
        material:req.body.material,    
        size:req.body.size,  
       
    })
    emp.save(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log("error in insert data")
        }
    })
})


router.get('/:id',function(req,res){
    if(!objectId.isValid(req.params.id))
    {
        res.send("No such record")
    }
    Product.findById(req.params.id,function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            console.log(err)
        }
    })
})

router.put('/:id', (req, res) => {
    if(!objectId.isValid(req.params.id))
        res.send('No record');

    var emp = {
        name:req.body.name,
        status:req.body.status,
        price:req.body.price,
        brand:req.body.brand,       
        care:req.body.care,
        category:req.body.category,
        colour:req.body.colour,
        material:req.body.material,
        size:req.body.size,
     
    };
    Product.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Update :' + JSON.stringify(err)); }
    });
});
router.delete('/:id',function(req,res){
    if (!objectId.isValid(req.params.id))
        res.send('No record');
    Product.findByIdAndRemove(req.params.id,function(err,doc){
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Update :' + JSON.stringify(err)); }
    })
})
module.exports=router