const reviewService = require("../services/review-service")

class ReviewController {
    async create(req, res, next) {
        try {
            const { name, text } = req.body
            await reviewService.create(name, text)
            return res.status(200).json()
        } catch (e) {
            next(e)
        }
    }

    async apply(req, res, next) {
        try {
            const { id } = req.body
            await reviewService.apply(id)
            const reviews = await reviewService.getManyNotApplied()
            return res.json(reviews)
        } catch (e) {
            next(e)
        }
    }

    async getManyNotApplied(req, res, next) {
        try {
            const reviews = await reviewService.getManyNotApplied()
            return res.json(reviews)
        } catch (e) {
            next(e)
        }
    }

    async getManyApplied(req, res, next) {
        try {
            const reviews = await reviewService.getManyApplied()
            return res.json(reviews)
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.body
            await reviewService.delete(id)
            const reviews = await reviewService.getManyNotApplied()
            return res.json(reviews)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ReviewController()