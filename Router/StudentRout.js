const express = require("express")

const StudentControllers = require("../controllers/StudentControllers")

const router = express.Router()

router.post("/create/student",StudentControllers.CreateStudent)
router.get("/read/Student",StudentControllers.ReadingDAta)
router.delete("/delete/Student/:id",StudentControllers.DeleteClass)
router.put("/update/Student/:id",StudentControllers.UpdateClasses)
router.get("/ReadSingleData/Student/:id",StudentControllers.ReadSingleData)

module.exports = router