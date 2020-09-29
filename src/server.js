const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://adminAcademy:root@academy.3mmz5.mongodb.net/academy?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(3333)
