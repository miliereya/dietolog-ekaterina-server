const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		phone: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
		},
		params: [
			{
				title: {
					type: String,
					require: true,
				},
				answer: {
					type: String,
					require: true,
				},
			},
		],
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('orders', OrderSchema)