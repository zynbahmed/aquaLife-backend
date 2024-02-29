const router = require('express').Router()
const controller = require('../controllers/ActivityController')
const middleware = require('../middleware')

router.get('/', controller.GetActivities)
router.get('/:activity_id', controller.GetActivitiesDetails)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateActivity
)
router.put(
  '/:activity_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateActivity
)
router.delete(
  '/:activity_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteActivity
)

module.exports = router
