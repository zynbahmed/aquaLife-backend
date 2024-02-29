const { Activity } = require('../models')

const GetActivities = async (req, res) => {
  try {
    const activities = await Activity.find({})
    res.send(activities)
  } catch (error) {
    throw error
  }
}

const GetActivitiesDetails = async (req, res) => {
    const activityId = req.params.activity_id
    try {
      const activity = await Activity.findById(activityId)
      res.send(activity)
    } catch (error) {
      throw(error)
    }
  }

const CreateActivity = async (req, res) => {
  try {
    const activity = await Activity.create({ ...req.body })
    res.send(activity)
  } catch (error) {
    throw error
  }
}

const UpdateActivity = async (req, res) => {
  try {
    const activity = await Activity.findByIdAndUpdate(req.params.activity_id, req.body, {new: true})
    res.send(activity)
  } catch (error) {
    throw error
  }
}

const DeleteActivity = async (req, res) => {
  try {
    await Activity.deleteOne({ _id: req.params.activity_id })
    res.send({ msg: 'Activity Deleted', payload: req.params.activity_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetActivities,
  GetActivitiesDetails,
  CreateActivity,
  UpdateActivity,
  DeleteActivity
}
