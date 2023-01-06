const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProgramSchema = new Schema(
	{
		title: {
			ru: { type: String, require: true },
			ua: { type: String, require: true },
			en: { type: String, require: true },
		},
		link: {
			type: String,
			require: true,
		},
		link_small: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		description: {
			ru: { type: String, require: true },
			ua: { type: String, require: true },
			en: { type: String, require: true },
		},
		included: [
			{
				ru: { type: String, require: true },
				ua: { type: String, require: true },
				en: { type: String, require: true },
			},
		],
		radios: [
			{
				title: {
					ru: { type: String, require: true },
					ua: { type: String, require: true },
					en: { type: String, require: true },
				},
				title_short: {
					ru: { type: String, require: true },
					ua: { type: String, require: true },
					en: { type: String, require: true },
				},
				options: [
					{
						answer: {
							ru: { type: String, require: true },
							ua: { type: String, require: true },
							en: { type: String, require: true },
						},
						answer_short: {
							ru: { type: String, require: true },
							ua: { type: String, require: true },
							en: { type: String, require: true },
						},
					},
				],
			},
		],
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('programs', ProgramSchema)
