const express = require('express')
const app = express()
const port = '8080'

app.use(express.json())

app.listen(port)

app.get('/', function(req, res) {
  res.json({text: 'hello world'})
})

app.post('/', function(req, res) {
  if (req.is('application/json')) {
    res.status(201).json(req.body)
  } else {
    res.status(400).json({body: 'content-type is not accepted'})
  }
})
