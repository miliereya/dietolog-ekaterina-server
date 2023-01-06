const ApiError = require('../exceptions/api-error')

require('dotenv').config()

class AdminController {
    async login(req, res, next) {
        try {
            const { login, password } = req.body
            if (login === process.env.ADMIN_LOGIN && password === process.env.ADMIN_PASSWORD) {
                const hash = process.env.ADMIN_HASH
                return res.json(hash)
            } else {
                return next(ApiError.UnauthorizedError())
            }
        } catch (e) {
            next(e)
        }
    }

    async checkAuth(req, res, next) {
        try {
            const { hash } = req.body
            if (hash === process.env.ADMIN_HASH) {
                return res.status(200).json()
            } else {
                throw ApiError.UnauthorizedError()
            }
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new AdminController()