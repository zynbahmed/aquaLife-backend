const { Booking, User } = require('../models')

const GetBooking = async (req, res) => {
  try {
    const bookings = await Booking.find({}).populate('user', 'activities')
    res.send(bookings)
  } catch (error) {
    throw error
  }
}

const CreateBooking = async (req, res) => {
  console.log(req.body)
  try {
    let booking = []
    let totalPrice = 0
    for (let i = 0; i < req.body.cart.length; i++) {
      booking.push(req.body.cart[i]._id)
      totalPrice =
        totalPrice + req.body.cart[i].userQty * req.body.cart[i].price
    }
    const activityBooking = await Booking.create({
      activities: booking,
      totalPrice: totalPrice,
      user: req.body.user.id
    })
    await User.updateOne(
      { _id: req.body.user._id },
      { $push: { bookings: activityBooking._id } }
    )
    // const booking = await Booking.create({ ...req.body })
    // res.send(booking)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBooking,
  CreateBooking
}
