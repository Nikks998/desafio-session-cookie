var express = require('express');
const { index, indexCreate } = require('../controllers/indexController');
const userValidator = require('../validations/userValidator');
var router = express.Router();

/* GET home page. */
router.get('/', index);
router.post('/', userValidator, indexCreate)

module.exports = router;
