'use strict'

const {STRING, TEXT, INTEGER} = require('sequelize')
console.log("yo")
module.exports = db => db.define('products', {
  name: STRING,
  link: TEXT,
  description: TEXT,
  shortDescription: TEXT,
  informationOnFounders: TEXT,
  pictureUrl: TEXT,
  status: STRING,
  batch: INTEGER
})

module.exports.associations = () => {}