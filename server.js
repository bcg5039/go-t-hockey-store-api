require('dotenv').config()
// server.js
// where your node app starts
const { map, omit } = require('ramda')
// init project
const express = require('express')
const cors = require('cors')
const app = express()
const mws = require('./get-mws')

app.use(cors({ credentials: true }))

function mapIt(obj) {
  let arr = obj.InventorySupplyList
  return arr
}

function mapItAgain(obj) {
  let arr2 = obj
  return arr2
}

function mapToCreateObj(obj) {
  return omit(
    ['Condition', 'SupplyDetail', 'FNSKU', 'ASIN', 'EarliestAvailability'],
    obj
  )
}

app.get('/', (req, res) => {
  mws()
    .then(obj =>
      map(mapIt, obj.ListInventorySupplyResponse.ListInventorySupplyResult)
    )
    .then(objA => map(mapItAgain, objA[0][0].member))
    .then(objB => map(mapToCreateObj, objB))
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})
