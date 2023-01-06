const reviewModel = require("../models/review-model")

class ReveiwService {
    async getManyNotApplied() {
        const reviews = await reviewModel.find({ isApplyed: false })
        return reviews
    }

    async getManyApplied() {
        const reviews = await reviewModel.find({ isApplyed: true })
        return reviews
    }

    async apply(id) {
        await reviewModel.findByIdAndUpdate(
            id,
            {
                $set: { isApplyed: true }
            }
        )
    }

    async create(name, text) {
        if (!name || text.length < 50 || text.length > 300) {
            throw e
        }
        const newReview = new reviewModel({
            name,
            text
        })
        await newReview.save()
    }

    async delete(id) {
        await reviewModel.findByIdAndDelete(id)
    }
}

module.exports = new ReveiwService()