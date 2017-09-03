const express = require('express')
const fs = require('fs')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.get('/list', (req, res) => {
    let list = fs.readFileSync(__dirname + '/list.json')
    list = JSON.parse(list.toString('utf-8'))
    res.json(list)
})

app.listen(4000, function () {
    console.log('listening on 4000')
})
