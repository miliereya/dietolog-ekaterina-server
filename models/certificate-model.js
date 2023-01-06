const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CertificateSchema = new Schema({
	link: {
		type: String,
		require: true,
	},
	prev_link: {
		type: String,
		require: true,
	},
	title: {
		ru: {
			type: String,
			require: true,
		},
		ua: {
			type: String,
			require: true,
		},
		en: {
			type: String,
			require: true,
		},
	},
})

module.exports = mongoose.model('certificates', CertificateSchema)
