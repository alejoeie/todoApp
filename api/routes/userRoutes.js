const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.route("/signup")
    .post(authController.signup);

// router.route("/:id")
//     .patch(toDoController.updateTask)
//     .delete(toDoController.deleteTask);

module.exports = router;
