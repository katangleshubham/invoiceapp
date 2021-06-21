const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const Invoice= mongoose.model("Invoice")

// GET /   : get all
// GET /:id   : get one by id
// POST /   : add 
// PATCH /:id   : patch by id
// PUT /:id   : update by id
// DELETE /:id   : delete by id


//get the users

//  ROOT_URL/invoice/

router.get('/',async(req,res)=>{
    /*res.send("namaste router folder")
  })*/
    try{
      const invoices = await Invoice.find();
      res.json(invoices);
    }catch(err){
      res.json({message:err});
    }
  })
  
  //get invoice of whose payment is left(has paid Statusv: false)
  router.get('/notpaid',async(req,res)=>{
  
    try{
      const invoiceid = await Invoice.find({hasPaid:false});
      res.json(invoiceid);
    }catch(err){
      res.json({message:err});
    }
  })

  
   //add products
router.post('/',async(req,res)=>{
    
  const newInvoice = new Invoice({
      work: req.body.work,
      hours: Number(req.body.hours),
      expenses: Number(req.body.expenses),
      materials: req.body.materials,
      laborors: Number(req.body.laborors),
      
      notes: req.body.notes,
      hasPaid: req.body.hasPaid,
    });

    try{
      const savedInvoice = await newInvoice.save();
      res.json(savedInvoice);
    }catch(err){
        res.json({message:err});
    }
})

//update the status of the invoices
router.put('/:id',async(req,res)=>{
 // console.log("put request")
 const updateStatus= new Invoice({
     hasPaid: Boolean(req.body.hasPaid),
     work: req.body.work,
 })
 try{
  const updatedInvoice = await updateStatus.save();
  res.json(updatedInvoice);
}catch(err){
    res.json({message:err});
}
})
  




 //delete specific products
 router.delete('/:id',async (req,res)=>{
   
  // res.json({abc:"edd"});
    try{
      const deleteInvoice = await Invoice.deleteOne({_id:req.params.id});
      res.json(deleteInvoice);
    }catch(err){
      res.json({message:err})
    }
  })


 
  module.exports = router;