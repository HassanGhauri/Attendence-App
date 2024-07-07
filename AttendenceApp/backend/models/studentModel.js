const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    seatNo:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    checkin:{
        type: String,
        required: true
    },
    checkout:{
        type: String,
        required: true
    },
    totalAttendence:{
        type: Number,
        required: true
    }
},{timestamps : true})

module.exports = mongoose.model('Student',studentSchema);
