'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('emails', {
  email: STRING,
})