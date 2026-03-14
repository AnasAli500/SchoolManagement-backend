const Attendance = require('../model/AttendenceModel');

// Create one or many attendance records
exports.createAttendance = async (req, res) => {
    try {
        const data = req.body;
        const Student = require('../model/StudentModel');
        // Helper to check if a student is active
        async function isStudentActive(studentId) {
            const student = await Student.findById(studentId);
            return student && student.isActive;
        }
        // Accepts array or single object
        if (Array.isArray(data)) {
            // Check all students are active
            for (const item of data) {
                if (!(await isStudentActive(item.studentId))) {
                    return res.status(400).json({ error: 'Attendance can only be marked for active students.' });
                }
            }
            const result = await Attendance.insertMany(data);
            res.status(201).json(result);
        } else {
            if (!(await isStudentActive(data.studentId))) {
                return res.status(400).json({ error: 'Attendance can only be marked for active students.' });
            }
            const result = await Attendance.create(data);
            res.status(201).json(result);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all attendance records
exports.getAllAttendance = async (req, res) => {
    try {
        const records = await Attendance.find().populate('studentId classId teacherId');
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get attendance by ID
exports.getAttendanceById = async (req, res) => {
    try {
        const record = await Attendance.findById(req.params.id).populate('studentId classId teacherId');
        if (!record) return res.status(404).json({ message: 'Attendance not found' });
        res.json(record);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update attendance by ID
exports.updateAttendance = async (req, res) => {
    try {
        const updated = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Attendance not found' });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete attendance by ID
exports.deleteAttendance = async (req, res) => {
    try {
        const deleted = await Attendance.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Attendance not found' });
        res.json({ message: 'Attendance deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
