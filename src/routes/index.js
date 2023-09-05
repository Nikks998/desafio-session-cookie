var express = require('express');
const { index } = require('../controllers/indexController');
const userValidator = require('../validations/userValidator');
var router = express.Router();

/* GET home page. */
router.get('/', index);
router.post('/', userValidator, index)

module.exports = router;
