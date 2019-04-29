const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users')

router.post('/', usersCtrl.login);
router.post('/new', usersCtrl.signup);

module.exports = router;