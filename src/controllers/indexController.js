const { validationResult } = require('express-validator')

module.exports = {
    index: (req, res) => {
        res.render('index')
    },

    indexCreate: (req, res) => {
        const errors = validationResult(req)
        /* return res.send(errors.mapped()) *///me devuelve un objeto con la propiedadades para utilizar como si fuera un metodo que tiene el nombre del atrib name="" en los forms
        if (errors.isEmpty()) {
            const name = req.body.name
            const email = req.body.email
            const age = req.body.age
            const color = req.body.color
            
            req.session.usuario = {
                name,
                email,
                age,
                color
            }
            
        } else {
            return res.render('index', {
                errors: errors.mapped()
            })
        }
    }
}