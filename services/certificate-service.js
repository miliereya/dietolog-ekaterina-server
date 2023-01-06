const certificateModel = require('../models/certificate-model')

class CertificateService {
	async create(title, link, prev_link) {
		const newCertificate = new certificateModel({
			prev_link,
			title,
			link,
		})

		await newCertificate.save()
	}

	async getMany() {
		
	}

	async delete() {}
}

module.exports = new CertificateService()
