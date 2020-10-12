const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');

const db = require('./data/db')
const bookRouter = require('./routes/book-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/mengis_book_search/build')))
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', bookRouter)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/mengis_book_search/build/index.html'));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))