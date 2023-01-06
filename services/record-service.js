const recordModel = require("../models/record-model")

class RecordService {
    async create(name, phone, email) {
        if (!name || !phone || !email) {
            throw 'error'
        }
        const newRecord = new recordModel({
            name,
            phone,
            email
        })
        await newRecord.save()

    }

    async apply(id) {
        await recordModel.findByIdAndUpdate(
            id,
            { $set: { isApplyed: true } }
        )
        return this.getMany()

    }

    async getMany() {
        const records = await recordModel.find()
        return records
    }
}

module.exports = new RecordService()