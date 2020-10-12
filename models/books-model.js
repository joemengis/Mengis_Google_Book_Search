const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new Schema(
    {
        title: { type: String, required: true },
        author: { type: [String], required: true },
        description: { type: String, required: true },
        link: { type: String, createdDate: Date.now },
        imageURL: { type: String }
    },
    { timestamps: true },
)

module.exports = mongoose.model('books', Book)