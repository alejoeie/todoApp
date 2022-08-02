const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, 'A task must have a name'],
        unique: true,
        trim: true
    },
    deadline: {
        type: Date,
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
        required: [true, 'A task must have a description'],
        default: 'This is a description of the task',
        trim: true
    },
    urgencyRate: {
        type: Number
    },
    startDates: [Date]


})

const Task = mongoose.model('Task', todoSchema);

module.exports = Task;