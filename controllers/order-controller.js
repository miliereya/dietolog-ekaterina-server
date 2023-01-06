const orderService = require("../services/order-service")

class OrderController {
    async create(req, res, next) {
        try {
            const { name, phone, email, params } = req.body
            await orderService.create(name, phone, email, params)
            return res.status(200).json()
        } catch (e) {
            next(e)
        }

    }

    async getMany(req, res, next) {
        try {
            const orders = await orderService.getMany()
            return res.json(orders)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new OrderController()