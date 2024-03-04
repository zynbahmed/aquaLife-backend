const router = require("express").Router()
const controller = require("../controllers/ReviewController")
const middleware = require("../middleware")

router.post(
  "/activities/:activity_id/review",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)


module.exports = router
