'use strict'

const {STRING, TEXT} = require('sequelize')

module.exports = db => db.define('products', {
  name: STRING,
  description: TEXT,
  shortDescription: TEXT,
  informationOnFounders: TEXT,
  pictureUrl: TEXT,
  status: STRING
})

module.exports.associations = () => {}