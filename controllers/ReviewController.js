const { Review, Activity } = require('../models')

const GetReview = async (req, res) => {
  try {
    const reviews = await Review.find({})
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    req.body.user = req.user._id
    const review = await Review.create({...req.body})
    const activity = await Activity.findById(req.params.activity_id)
    activity.reviews.push(review._id)
    await (await activity.save()).populate('reviews')
    res.send(activity)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    await review.deleteOne({ _id: req.params.review_id })
    res.send({ msg: 'Review Deleted', payload: req.params.review_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReview,
  CreateReview,
  DeleteReview
}
