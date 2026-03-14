const mongoose = require("mongoose")

const AttendanceSchema = mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    status: {
        type: String,
        enum: ['PRESENT', 'ABSENT', 'LATE'],
        required: true
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes',
        required: true
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    date: {
        type: String, // e.g., '2024-06-09'
        required: true
    }
})

module.exports = mongoose.model("Attendance", AttendanceSchema)
