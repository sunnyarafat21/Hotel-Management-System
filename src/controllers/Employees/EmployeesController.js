const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
     first_name: {
          type: String,
          required: true,
     },
     last_name: {
          type: String,
          required: true,
     },
     email: {
          type: String,
          required: true,
          unique: true,
          match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
     },
     phone: {
          type: String,
          required: true,
          match: [/^\+\d{1,3}\d{1,14}$/, 'Please use a valid phone number.'],
     },
     position: {
          type: String,
          required: true,
     },
     salary: {
          type: Number,
          required: true,
          min: 0,
     },
     hire_date: {
          type: Date,
          required: true,
     },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
