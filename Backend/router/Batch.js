const express = require('express');
const router = express.Router();
const BatchController = require('../controllers/Batch');
const verifyAuth = require('../middleware/VerifyAuth')
router.post('/',verifyAuth,BatchController.CreateBatch);
router.get('/',verifyAuth,BatchController.getAllBatch);
router.get('/:id',verifyAuth,BatchController.getSingleBatch);
router.patch('/:id',verifyAuth,BatchController.updateBatch);
router.delete('/:id',verifyAuth,BatchController.deleteBatch);

module.exports = router;