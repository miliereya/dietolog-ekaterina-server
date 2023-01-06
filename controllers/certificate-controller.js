const certificateService = require('../services/certificate-service')

class CertificateController {
	async create(req, res, next) {
		try {
			const { title, link, prev_link } = req.body
			await certificateService.create(title, link, prev_link)
			return res.status(200).json()
		} catch (e) {
			next(e)
		}
	}

	async getMany(req, res, next) {
		try {
			
		} catch (e) {
			next(e)
		}
	}

	async delete(req, res, next) {
		try {

		} catch (e) {
			next(e)
		}
	}
}

module.exports = new CertificateController()
