const adminController = require('../controllers/admin-controller')
const certificateController = require('../controllers/certificate-controller')
const orderController = require('../controllers/order-controller')
const programController = require('../controllers/program-controller')
const recordController = require('../controllers/record-controller')
const reviewController = require('../controllers/review-controller')
const adminMiddleware = require('../middlewares/admin-middleware')

const Router = require('express').Router
const router = new Router

// ---USER QUERIES---

//Orders
router.post('/programs/order', orderController.create)

//Programs
router.get('/programs', programController.getMany)
router.get('/programs/one', programController.getOne)

//Records
router.post('/records/create', recordController.create)

//Reviews
router.get('/reviews', reviewController.getManyApplied)
router.post('/reviews/create', reviewController.create)

//Certificates
router.get('/certificates', certificateController.getMany)

// ---ADMIN QUERIES---

//Login
router.post('/admin/login', adminController.login)
router.post('/admin/check', adminController.checkAuth)

//Orders
router.get('/orders', adminMiddleware, orderController.getMany)

//Programs
router.post('/programs/create', adminMiddleware, programController.create)
router.post('/programs/delete', adminMiddleware, programController.delete)

//Certificates
router.post('/certificates/create', adminMiddleware, certificateController.create)

//Records
router.get('/records', adminMiddleware, recordController.getMany)
router.put('/records/apply', adminMiddleware, recordController.apply)

//Reviews
router.get('/reviews/not-applied', adminMiddleware, reviewController.getManyNotApplied)
router.put('/reviews/apply', adminMiddleware, reviewController.apply)
router.post('/reviews/delete', adminMiddleware, reviewController.delete)

module.exports = router