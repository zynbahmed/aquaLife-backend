const router = require("express").Router()
const controller = require("../controllers/ReviewController")
const middleware = require("../middleware")

router.get("/", controller.GetReview)
router.post(
  "/activities/:activity_id/review",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)
router.delete(
  "/:review_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

module.exports = router
