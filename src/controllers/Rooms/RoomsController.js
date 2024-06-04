const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
     _id: { type: String, required: true },
     room_number: { type: Number, required: true },
     type: { type: String, required: true },
     price_per_night: { type: Number, required: true },
     features: { type: [String], required: true },
     status: { type: String, required: true },
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
