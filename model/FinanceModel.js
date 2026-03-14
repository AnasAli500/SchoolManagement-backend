const mongoose = require("mongoose")

const FinanceSchema = mongoose.Schema({
    studentId: {
        type: Number,
        required: true,
    },
    studentName: {
        type: String,
        required: true
    },
    feeType: {
        type: String,
        enum: ['tuition', 'library', 'laboratory', 'transportation', 'examination', 'other'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    paymentDate: {
        type: Date,
        default: null
    },
    paymentStatus: {
        type: String,
        enum: ['paid', 'pending', 'overdue', 'partial'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'bank_transfer', 'check', 'online', 'card'],
        default: null
    },
    description: {
        type: String,
        default: ""
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Finance", FinanceSchema) 