const express = require('express')
const router = express.Router();
const chatCtrl = require('../../controllers/chats');

router.post('/create', checkAuth, chatCtrl.create);
router.get('/getallmessages/:id', checkAuth, chatCtrl.getAllMessages);

/* auth middleware */
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;