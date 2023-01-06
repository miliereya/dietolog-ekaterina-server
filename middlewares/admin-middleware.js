const ApiError = require('../exceptions/api-error')
require('dotenv').config()

module.exports = function (req, res, next) {
    try {
        const hash = req.headers.hash
        if (hash !== process.env.ADMIN_HASH) {
            return next(ApiError.UnauthorizedError())
        }
        next()
    } catch (e) {
        return next(ApiError.UnauthorizedError())
    }
}