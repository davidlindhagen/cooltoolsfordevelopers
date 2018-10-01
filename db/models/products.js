'use strict'

const {STRING, TEXT} = require('sequelize')

module.exports = db => db.define('things', {
  name: STRING,
  description: TEXT,
  shortDescription: TEXT,
  informationOnFounders: TEXT,
  pictureUrl: TEXT
})

module.exports.associations = () => {}