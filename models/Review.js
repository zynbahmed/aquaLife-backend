const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    content: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

module.exports = reviewSchema
