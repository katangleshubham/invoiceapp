const express = require('express');
const router = express.Router()

const app = express();
const mongoose = require('mongoose');
const Invoice= mongoose.model("Invoice")
//const emailRouter = require('./email');
//router.use('/email', emailRouter);

app.use(express.static('client'))

// GET /   : get all
// GET /:id   : get one by id
// POST /   : add 
// PATCH /:id   : patch by id
// PUT /:id   : update by id
// DELETE /:id   : delete by id




//Another method just using backend
// ROOT_URL/email/send
// send email  
/*  router.post('/send',async(req,res)=>{

  
   * title: 
   * to : 
   * from : 
   * body: 
   

  {
    title: "as" 
    to : "as" 
    from : "as" 
    body: "as" 
  }
      res.json(req.body);


  })  
*/


  module.exports = router;