var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')

var usersRouter = require('./routes/users')
var cognitoAuth = require('./lib/cognitoAuth')
const appConfig = require('./config/app-config.json')

var app = express()

// Configure CORS for this service so our UI can make calls to us.
// var corsOptions = {
//   origin: [appConfig.signoutUri]
// }
// app.use(cors())
// app.options('/users', cors())
// app.options('*', cors())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const cognitoAuthMiddleware = cognitoAuth.getVerifyMiddleware()
app.use('/users', cognitoAuthMiddleware, usersRouter)

module.exports = app
