const express = require('express');
const authMiddleware = require("../middleware/auth.middleware")
const authMiddleware = require("../middleware/auth.middleware")
const chatController  = require("../Controller/chat.controller")
const router = express.Router();

// Example: Get all chats
router.post('/',authMiddleware,chatController)

// Example: Create a new chat
// router.post('/',)

module.exports = router;