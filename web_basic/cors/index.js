const express = require('express')
const app = express()
const port = 3001

const otherOriginAppPort = 3002

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {crossOriginAppPort: otherOriginAppPort})
})

app.get('/same_origin', (req, res) => {
  console.log('same origin request')
  res.json('same_origin')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// app for cross origin
const otherOriginApp = express()

const allowCrossOrigin = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', `http://localhost:${port}`)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token, X-Custom-Header'
  )

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    console.log('received preflight request')
    res.json('preflight')
  } else {
    next()
  }
}

otherOriginApp.use(allowCrossOrigin)

otherOriginApp.get('/simple_request', (req, res) => {
  console.log('get simple request')
  res.json('simple request')
})

otherOriginApp.post('/request_with_preflight', (req, res) => {
  console.log('post request with preflight')
  res.json('request with preflight')
})

otherOriginApp.listen(otherOriginAppPort, () => {
  console.log(`cross origin app listening at http://localhost:${otherOriginAppPort}`)
})
