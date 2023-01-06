const recordService = require("../services/record-service")

class RecordController {
    async create(req, res, next) {
        try {
            const { name, phone, email } = req.body
            await recordService.create(name, phone, email)
            return res.status(200).json()
        } catch (e) {
            next(e)
        }

    }

    async getMany(req, res, next) {
        try {
            const records = await recordService.getMany()
            return res.json(records)
        } catch (e) {
            next(e)
        }
    }

    async apply(req, res, next) {
        try {
            const { id } = req.body
            const records = await recordService.apply(id)
            return res.json(records)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new RecordController()