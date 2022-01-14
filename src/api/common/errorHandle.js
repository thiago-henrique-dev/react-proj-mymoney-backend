const _= require("lodash")

module.exports = (req, res, next) => {
    const bundle = res.locals.
    
    if(bundle.errors){
        const errors = parseErrors(bundle.errors)
    }
}