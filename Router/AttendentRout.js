const express = require('express');
const router = express.Router();
const Attendance = require('../model/AttendenceModel');

// POST /create/attendance - Save multiple attendance records
router.post('/create/attendance', async (req, res) => {
    try {
        const data = req.body;
        if (!Array.isArray(data) || data.length === 0) {
            return res.status(400).json({ error: 'No attendance data provided' });
        }
        // Use the first record to check for duplicates (all have same classId, date, teacherId)
        const { classId, date, teacherId } = data[0];
        const exists = await Attendance.findOne({ classId, date, teacherId });
        if (exists) {
            return res.status(409).json({ error: 'Attendance for this class, teacher, and date already exists' });
        }
        await Attendance.insertMany(data);
        res.status(201).json({ message: 'Attendance saved' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    
});

// GET /read/attendance - Read attendance records by class, teacher, and date
router.get('/read/attendance', async (req, res) => {
    try {
        const { classId, teacherId, date } = req.query;
        if (!classId || !teacherId || !date) {
            return res.status(400).json({ error: 'classId, teacherId, and date are required' });
        }
        // Find all attendance records for the given class, teacher, and date
        const records = await Attendance.find({ classId, teacherId, date });
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /update/attendance/:id - Update a single attendance record by ID
router.put('/update/attendance/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updated = await Attendance.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) {
            return res.status(404).json({ error: 'Attendance record not found' });
        }
        res.json({ message: 'Attendance updated', record: updated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
