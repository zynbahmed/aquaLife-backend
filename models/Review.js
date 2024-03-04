const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    content: { type: String }
  },
  { timestamps: true }
)

module.exports = reviewSchema
