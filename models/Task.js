const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    priority: {
        type: Boolean,
        default: false
    }
});

module.exports = Task = mongoose.model('task', TaskSchema);