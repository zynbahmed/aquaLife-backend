const { Schema } = require("mongoose")

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    userType: { type: String, enum: ["admin", "user"], default: "user" },
    bookings: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
    profilePic: {
      type: String,
      default:
        "https://tr.rbxcdn.com/38c6edcb50633730ff4cf39ac8859840/420/420/Hat/Png",
    },
  },
  { timestamps: true }
)

module.exports = userSchema
