const {check} = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre es obligatorio'),
    check('email')
    .notEmpty()
    .withMessage('El email es obligatorio'),
    check('age')
    .notEmpty()
    .withMessage('La edad es obligatoria')
]