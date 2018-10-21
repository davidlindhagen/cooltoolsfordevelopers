'use strict'

const db = require('APP/db')
const Email = db.model('emails')
var validator = require("email-validator")

  module.exports = require('express').Router()
  .post('/', (req, res, next) => {
    console.log("result", validator.validate(req.body.email))
    console.log("good", validator.validate('jonah.livingston@queensu.ca'))
    if (req.body.email && validator.validate(req.body.email)){
      console.log("how here", validator.validate(req.body.email))
        Email.create({
        email: req.body.email
      })
      .then((email) => {
        res.send(email)
      })
      .catch(next)
    }
    else{
      res.send('bad email')
      res.end()
    }
  })
  .get('/', (req, res, next)=>{
    Email.findAll({}).then((allEmails)=>{
      res.send(allEmails)
    })
  })