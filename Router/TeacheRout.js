const express = require("express")

const TeacherControllers = require("../controllers/TeacherController")

const router = express.Router()

router.post("/create/Teacher",TeacherControllers.CreateTeacher)
router.get("/read/Teacher",TeacherControllers.ReadingDAta)
router.delete("/delete/Teacher/:id",TeacherControllers.DeleteClass)
router.put("/update/Teacher/:id",TeacherControllers.UpdateClasses)
router.get("/ReadSingleData/Teacher/:id",TeacherControllers.ReadSingleData)

module.exports = router