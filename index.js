const express = require('express');
const router = express.Router()

const invoiceRouter = require('./invoice');
const emailRouter = require('./email');

router.use('/invoice', invoiceRouter);
router.use('/email', emailRouter);


module.exports = router; 