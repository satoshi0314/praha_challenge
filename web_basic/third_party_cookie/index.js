const express = require('express')
const app = express()
const port = '8080'

// ngrokで生成されたドメインを指定
const ngrokDomain = 'https://c8e254367953.ngrok.io'


app.use(function (req, res, next) {
  res.cookie('first-party-cookie', 'ramen', {
    httpOnly: true
  })
  next()
})

app.get('/', function(req, res) {
  res.send(`<h1>Hello World</h1><img src="${ngrokDomain}/images/mita_honten.jpg">`)
})

app.listen(port, () => {
  console.log(`Example app listening on ${port}`)
})

const thirdPartyApp = express()
const thirdPartyPort = '8081'

thirdPartyApp.use(function (req, res, next) {
  res.cookie('third-party-cookie', 'ramen-jiro', {
    httpOnly: true,
    secure: true,
    sameSite: 'none'
  })
  next()
})

thirdPartyApp.use(express.static('public'))

thirdPartyApp.listen(thirdPartyPort, () => {
  console.log(`third party app listening on ${thirdPartyPort}`)
})
