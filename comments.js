// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

// Handle request
router.get('/', commentController.getComments);
module.exports = router;