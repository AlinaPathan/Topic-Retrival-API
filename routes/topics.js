const express = require('express');
const router = express.Router();
const { getTopics } = require('../controller/topicController.js');

router.get('/', getTopics);

module.exports = router;
