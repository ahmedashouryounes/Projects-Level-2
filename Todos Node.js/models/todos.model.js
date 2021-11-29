const mongoose = require('mongoose');


const todosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type:Boolean,
        default:false
    },
    createdBy: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Todos = mongoose.model('todos', todosSchema)

module.exports = { Todos }