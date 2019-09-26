const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }
}, {
    timestamps: true
})

taskSchema.pre('save', async function(next) {
    const task = this

    console.log('be4 saving task')

    next()
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task