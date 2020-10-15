const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://ljmengis:DittyThrees@120bpm@cluster0.fwhpy.mongodb.net/Mengis_Book_List?retryWrites=true&w=majority', { useNewUrlParser: true }, console.log("connected"))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db