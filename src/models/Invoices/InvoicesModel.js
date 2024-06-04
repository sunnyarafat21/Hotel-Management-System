const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
     reservation_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Reservation',
          required: true,
     },
     guest_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Guest',
          required: true,
     },
     amount: {
          type: Number,
          required: true,
          min: 0,
     },
     date_issued: {
          type: Date,
          required: true,
     },
     due_date: {
          type: Date,
          required: true,
     },
     status: {
          type: String,
          enum: ['Pending', 'Paid', 'Cancelled'],
          default: 'Pending',
     },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
