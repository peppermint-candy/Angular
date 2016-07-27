var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var path = require('path')
mongoose = require('mongoose')
var APP = express()
APP.use(bodyParser.json({extended: true}))
APP.use(express.static(path.join(__dirname, '../../client')))
APP.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
process.env.PORT = 8000
module.exports = APP
