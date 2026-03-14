const express = require("express")

const classControllers = require("../controllers/clasesControllers")

const router = express.Router()

router.post("/create/class",classControllers.CreateClasses)
router.get("/read/class",classControllers.ReadingDAta)
router.delete("/delete/class/:id",classControllers.DeleteClass)
router.put("/update/class/:id",classControllers.UpdateClasses)
router.get("/ReadSingleData/class/:id",classControllers.ReadSingleData)
router.put("/toggle-status/class/:id",classControllers.ToggleActiveStatus)

module.exports = router