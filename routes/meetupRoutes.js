const express = require("express");
const router = express.Router();
const meetupController = require("../controllers/meetupController");
const authenticateToken = require("../middleware/authenticateToken");

router.get("/meetups", meetupController.getMeetups);
router.post("/meetups", authenticateToken, meetupController.createMeetup);
router.patch("/meetups/:id", authenticateToken, meetupController.updateMeetup);
router.delete("/meetups/:id", authenticateToken, meetupController.deleteMeetup);

module.exports = router;
