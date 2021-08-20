const express = require('express')
const app = express()
const port = 3001


app.use('/cache', (req, res, next) => {
  console.log('cache middleware')
  res.header('Cache-Control', 'max-age=31536000')
  next()
})

app.use('/no-cache', (req, res, next) => {
  console.log('no cache middleware')
  res.header('Cache-Control', 'no-store')
  next()
})

app.get('/cache', (req, res) => {
  console.log('get cache')
  res.sendFile(__dirname + '/public/images/mita_honten.jpg')
})

app.get('/no-cache', (req, res) => {
  console.log('get no-cache')
  res.sendFile(__dirname + '/public/images/aoshima_syokudo.jpg')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
