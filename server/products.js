'use strict'

const db = require('APP/db')
const Product = db.model('products')


module.exports = require('express').Router()
  .post('/',
    (req, res, next) =>
      Product.create({
        name: req.body.productName,
        description: req.body.longDescription,
        informationOnFounders: req.body.founderInfo,
        shortDescription: req.body.shortDescription
      })
      .then((product) => {
        res.send(product)
      })
      .catch(next)
  )