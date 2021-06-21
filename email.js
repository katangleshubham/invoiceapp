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
var nodemailer = require('nodemailer');
const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs')
const multer = require('multer')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(bodyParser.json())

var to;
var subject;
var body;
var path

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./images");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({
    storage: Storage
}).single("image"); //Field name and max count

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/sendemail',(req,res) => {
    upload(req,res,function(err){
        if(err){
            console.log(err)
            return res.end("Something went wrong!");
        }else{
            to = req.body.to
            subject = req.body.subject
            body = req.body.subject
            path = req.file.path
            console.log(to)
            console.log(subject)
            console.log(body)
            console.log(req.file)
            console.log(req.files)
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: '######INSERTYOUREMAILHERE#####',
                  pass: '####INSERTYOURPASSWORDHERE####'
                }
              });
              
              var mailOptions = {
                from: '######INSERTYOUREMAILHERE#########',
                to: to,
                subject:subject,
                text:body,
                attachments: [
                  {
                   path: path
                  }
               ]
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                  fs.unlink(path,function(err){
                    if(err){
                        return res.end(err)
                    }else{
                        console.log("deleted")
                        return res.redirect('/result.html')
                    }
                  })
                }
              });
        }
    })
})

app.listen(5000,() => {
    console.log("App started on Port 5000")
})
 



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
