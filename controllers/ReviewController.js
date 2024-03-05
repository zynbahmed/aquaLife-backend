const { Review, Activity } = require("../models")

const CreateReview = async (req, res) => {
  try {
    const review = await Review.create({ ...req.body })
    const activity = await Activity.findById(req.params.activity_id)
    activity.reviews.push(review._id)
    await (await activity.save()).populate('reviews')
    res.send(activity)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateReview
}
