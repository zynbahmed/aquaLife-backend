const { Booking } = require('../models')

const GetBooking = async (req, res) => {
  try {
    const bookings = await Booking.find({}).populate('user', 'activities')
    res.send(bookings)
  } catch (error) {
    throw error
  }
}

const CreateBooking = async (req, res) => {
  try {
    const booking = await Booking.create({ ...req.body })
    res.send(booking)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBooking,
  CreateBooking
}
