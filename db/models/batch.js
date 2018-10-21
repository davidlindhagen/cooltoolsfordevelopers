'use strict'

const {INTEGER} = require('sequelize')
console.log("one")

module.exports = db => db.define('batch', {
  batch: INTEGER,
})