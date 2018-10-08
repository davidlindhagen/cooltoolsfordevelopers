'use strict'

const db = require('APP/db')
const Email = db.model('emails')

  module.exports = require('express').Router()
  .post('/', (req, res, next) => {
    if (req.body.email){
        Email.create({
        email: req.body.email
      })
      .then((email) => {
        res.send(email)
      })
      .catch(next)
    }
    else{
      console.log("must not be empty")
      res.end()
    }
  })
  .get('/', (req, res, next)=>{
    Email.findAll({}).then((allEmails)=>{
      res.send(allEmails)
    })
  })