const mongoose = require('mongoose')
const userSchema = require('./User')
const activitySchema = require('./Activity')
const reviewSchema = require('./Review')
const bookingSchema = require('./Booking')

const User = mongoose.model('User', userSchema)
const Activity = mongoose.model('Activity', activitySchema)
const Review = mongoose.model('Review', reviewSchema)
const Booking = mongoose.model('Booking', bookingSchema)

module.exports = {
  User,
  Activity,
  Review,
  Booking
}
