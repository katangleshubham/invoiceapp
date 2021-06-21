

const mongoose = require('mongoose');

const {MONGOURI}= require('./keys') //mongouri

require('./models/invoice.model')

const app = require("./express");

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("mongodb connected succesfully")
})

mongoose.connection.on('error',(err)=>{
    
    console.log("error  connecting",err)
})





const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server started at ${port}`)
})