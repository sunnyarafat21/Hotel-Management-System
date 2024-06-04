const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
     guest_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Guest',
          required: true,
     },
     room_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Room',
          required: true,
     },
     check_in_date: {
          type: Date,
          required: true,
     },
     check_out_date: {
          type: Date,
          required: true,
     },
     total_price: {
          type: Number,
          required: true,
     },
     status: {
          type: String,
          enum: ['Pending', 'Confirmed', 'Cancelled'],
          default: 'Pending',
     },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
