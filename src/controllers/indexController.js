const { validationResult } = require('express-validator')

module.exports = {
    index: (req, res) => {
        res.render('index')
    },

    indexCreate: (req, res) => {
        const errors = validationResult(req)
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
            res.render('index')
        }
    }
}