const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/Teacher');
const verifyAuth = require('../middleware/VerifyAuth')
router.post('/',verifyAuth,TeacherController.CreateTeacher);
router.get('/',verifyAuth,TeacherController.getAllTeacher);
router.get('/:id',verifyAuth,TeacherController.getSingleTeacher);
router.patch('/:id',verifyAuth,TeacherController.updateTeacher);
router.delete('/:id',verifyAuth,TeacherController.deleteTeacher);

module.exports = router;