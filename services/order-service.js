const orderModel = require("../models/order-model")

class OrderService {
    async create(name, phone, email, params) {
        if (!name || !phone || !email) {
            throw 'error'
        }
        const newOrder = new orderModel({
            name,
            phone,
            email,
            params
        })
        await newOrder.save()

    }

    async getMany() {
        const orders = await orderModel.find()
        return orders
    }
}

module.exports = new OrderService()