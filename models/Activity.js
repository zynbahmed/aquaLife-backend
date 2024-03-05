const { Schema } = require('mongoose')

const activitySchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    userQty: { type: Number }
  },
  { timestamps: true }
)

module.exports = activitySchema
