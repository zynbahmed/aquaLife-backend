const { Booking, User } = require("../models")

const GetBooking = async (req, res) => {
  try {
    const bookings = await Booking.find({}).populate("user", "activities")
    res.send(bookings)
  } catch (error) {
    throw error
  }
}

const CreateBooking = async (req, res) => {
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
      user: req.body.user.id,
    })
    await User.updateOne(
      { _id: req.body.user.id },
      { $push: { bookings: activityBooking._id } }
    )
    res.send(booking)
  } catch (error) {
    throw error
    // res.json({ error: error.massage })
  }
}

module.exports = {
  GetBooking,
  CreateBooking,
}
