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

app.post('/', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'royal.v98@gmail.com',
      pass: ''
    }
  })

  let mamilOptions = {
    to: 'rvillarreal416@gmail.com', // list of receivers
    subject: `Somebody joined to innkside: ${req.body.email} `, // Subject line
    text: `EMAIL ----> ${req.body.email} `// plain text body
  }

  transporter.sendMail(mamilOptions, (err, info) => {
    if (err) {
      res.send('There was an error :( Try again please.')
    } else {
      res.send('Thank you! we will be contacting you :) ')
    }
  })
})

app.listen(port, (e) => {
  if (e) {
    console.error('There was an error starting server', e)
    process.exit(1)
  }
  console.log(`Innkside is running at port ${port}`)
})
