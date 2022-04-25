var express = require('express');
var router = express.Router();
const storeController = require('../controller/StoreController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("");
   next();
});
/* **************Here store routing ******************************** */

router.post('/adduser', storeController.createStore);
router.post('/finduser', storeController.findData);

module.exports = router;