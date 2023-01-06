const programsModel = require('../models/programs-model')

class ProgramService {
	async create(
		title,
		price,
		description,
		included,
		radios,
		link,
		link_small,
		description_short
	) {
		const newProgram = new programsModel({
			title,
			price,
			description,
			description_short,
			included,
			radios,
			link,
			link_small,
		})
		await newProgram.save()
	}

	async getMany() {
		const programs = await programsModel.find()
		return programs
	}

	async delete(_id) {
		await programsModel.findByIdAndDelete(_id)
	}
	async getOne(_id) {
		return await programsModel.findById(_id)
	}
}

module.exports = new ProgramService()
