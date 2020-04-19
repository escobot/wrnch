const express = require('express')
const app = express()
const path = require('path');

// serve static files
app.use(express.static('images'))

// parse application/json and form
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// in-memory object to keep track of fruit orders
const order = new Map()
order.set(0,"apple")
order.set(1,"eggplant")
order.set(2,"pear")

// index page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'))
})

// get fruit orders
app.get('/order', function (req, res) {
  res.send({"order": {0: order.get(0), 1: order.get(1), 2: order.get(2)}})
})

// update fruit orders
app.post('/order', function (req, res) {
  if (req.body) {
    order.set(0, req.body[0])
    order.set(1, req.body[1])
    order.set(2, req.body[2])
  } else {
    res.send('failure')
  }
})

app.listen(3000)
