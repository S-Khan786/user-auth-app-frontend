const express = require('express');
const { register, login } = require('../controllers/authController');
const { searchUser } = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/search/:query', authenticate, searchUser);

module.exports = router;