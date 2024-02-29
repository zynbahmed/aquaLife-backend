const { Schema } = require('mongoose')

const bookingSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    activity: [{ type: Schema.Types.ObjectId, ref: 'Activity' }]
  },
  { timestamps: true }
)

module.exports = bookingSchema
