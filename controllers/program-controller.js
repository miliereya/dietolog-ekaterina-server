const programService = require('../services/program-service')

class ProgramController {
	async create(req, res, next) {
		try {
			const {
				title,
				price,
				description,
				included,
				radios,
				link,
				link_small,
				description_short,
			} = req.body
			await programService.create(
				title,
				price,
				description,
				description_short,
				included,
				radios,
				link,
				link_small
			)
			return res.status(200).json()
		} catch (e) {
			next(e)
		}
	}
	async getMany(req, res, next) {
		try {
			const programs = await programService.getMany()
			return res.json(programs)
		} catch (e) {
			next(e)
		}
	}
	async getOne(req, res, next) {
		try {
			const { _id } = req.query
			const program = await programService.getOne(_id)
			return res.json(program)
		} catch (e) {
			next(e)
		}
	}
	async delete(req, res, next) {
		try {
			const { _id } = req.query
			await programService.delete(_id)
			return res.status(200).json()
		} catch (e) {
			next(e)
		}
	}
}

module.exports = new ProgramController()
