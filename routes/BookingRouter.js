const router = require('express').Router()
const controller = require('../controllers/BookingController')
const middleware = require('../middleware')

router.get('/', controller.GetBooking)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateBooking
)

module.exports = router
