const express = require ('express');
const app = express();
const appRouter = require('./routes') ;
const emailRouter = require('./routes/email');


app.use(express.json());

//app.use(bodyParser.json())
app.use('/', appRouter);

module.exports =  app;
