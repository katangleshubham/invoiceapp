const mongoose = require('mongoose');



const invoiceSchema = new mongoose.Schema(
	{
		
        work: { type: String, required: false },
		hours: { type: Number, required: false },
		expenses: { type: Number, required: false },
		materials: { type: String, required: false },
		laborors: { type: Number, required: false },
        hasPaid: {type:Boolean, default:false, required:false},
		notes: { type: String, required: false },
	},
    
    {timestamps: true}
)

 mongoose.model('Invoice', invoiceSchema )

