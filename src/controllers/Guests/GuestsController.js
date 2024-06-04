const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
     street: { type: String, required: true },
     city: { type: String, required: true },
     state: { type: String, required: true },
     zip: { type: String, required: true },
     country: { type: String, required: true },
});

const LoyaltyProgramSchema = new Schema({
     membership_id: { type: String, required: true },
     points: { type: Number, required: true },
});

const GuestSchema = new Schema({
     _id: { type: String, required: true },
     first_name: { type: String, required: true },
     last_name: { type: String, required: true },
     email: { type: String, required: true },
     phone: { type: String, required: true },
     address: { type: AddressSchema, required: true },
     loyalty_program: { type: LoyaltyProgramSchema, required: true },
});

const Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;
