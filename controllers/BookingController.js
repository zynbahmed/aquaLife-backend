const { Booking } = require('../models')

const GetBooking = async (req, res) => {
  try {
    const bookings = await Booking.find({})
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

const DeleteBooking = async (req, res) => {
  try {
    await booking.deleteOne({ _id: req.params.booking_id })
    res.send({ msg: 'Booking Deleted', payload: req.params.booking_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBooking,
  CreateBooking,
  DeleteBooking
}
