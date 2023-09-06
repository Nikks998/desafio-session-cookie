const {check} = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es obligatorio'),
    check('email')
    .notEmpty()
    .withMessage('El email es obligatorio'),
    check('color')
    .notEmpty()
    .withMessage('debe seleccionar un color')
]