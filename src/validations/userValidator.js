const {check} = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es obligatorio'),
    check('color')
    .notEmpty()
    .withMessage('debe seleccionar un color'),
    check('email')
    .notEmpty()
    .withMessage('El email es obligatorio'),
    check('age')
    .notEmpty()
    .withMessage('debes poner tu edad')
    .isInt()
    .withMessage('Tiene que ser un numero')
]