const _ = require('lodash')
module.exports = (req, res, next) => {

    const bundle = res.locals.bundle

    const parseErros = (nodeRestfulErrors) => {
        const errors = []
        _.forIn(nodeRestfulErrors, error => errors.push(error.message))
        return errors
    }

    if (bundle.errors) {
        const errors = parseErros(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }


}