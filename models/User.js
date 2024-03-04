const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    userType: {type:String , enum:["admin","user"] ,default:"user"},
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
  },
  { timestamps: true }
)

module.exports = userSchema
