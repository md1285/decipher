const express = require('express')
const router = express.Router();
const chatCtrl = require('../../controllers/chats');

router.get('/', checkAuth, chatCtrl.getAllChats);
router.post('/new', checkAuth, chatCtrl.create);
router.put('/:id', checkAuth, chatCtrl.addToDescrambled);
router.get('/:id', checkAuth, chatCtrl.getChat);

/* auth middleware */
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;