const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/student');
const verifyAuth = require('../middleware/VerifyAuth')
router.post('/',verifyAuth,StudentController.CreateStudent);
router.get('/',verifyAuth,StudentController.getAllstudent);
router.get('/:id',verifyAuth,StudentController.getSinglestudent);
router.patch('/:id',verifyAuth,StudentController.updatestudent);
router.delete('/:id',verifyAuth,StudentController.deletestudent);

module.exports = router;