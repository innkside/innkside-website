'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/innkside.html')
})

app.listen(port, (e) => {
  if (e) {
    console.error('There was an error starting server', e)
    process.exit(1)
  }
  console.log(`Innkside is running at port ${port}`)
})
