const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
     first_name: { type: String, require: true },
     last_name: { type: String, require: true },
     email: { type: String, require: true },
     phone: { type: String, require: true },
     password: { type: String, require: true },
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
