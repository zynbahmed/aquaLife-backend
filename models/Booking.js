const { Schema } = require("mongoose")

const bookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    activities: [{ type: Schema.Types.ObjectId, ref: "Activity" }],
    quantity: { type: Number, default: 1 },
    totalPrice: { type: Number },
  },
  { timestamps: true }
)

module.exports = bookingSchema
