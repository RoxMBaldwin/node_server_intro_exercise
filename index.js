var express = require('express')

var server = express()

var roxy = require('./me.json')


server.get('/', function(request, response) {
  response.send('Go to /roxy to find out more about me')
})

server.get('/roxy', function(request, response) {
  response.json(roxy)
})

server.get('*', function(request, response) {
  response.status(400)
  response.send('Please enter /roxy after Localhost:3000')
})


server.listen(3000)
