'use strict'

const db = require('APP/db')
const Product = db.model('products')

  module.exports = require('express').Router()
  .post('/', (req, res, next) => {
    if (req.body.longDescription && req.body.founderInfo && req.body.shortDescription && req.body.productName){
      Product.create({
        name: req.body.productName,
        description: req.body.longDescription,
        informationOnFounders: req.body.founderInfo,
        shortDescription: req.body.shortDescription,
        status: "review"
      })
      .then((product) => {
        res.send(product)
      })
      .catch(next)
    }
    else{
      console.log("not long")
      res.end()
    }
  })
  .get('/admin', (req, res, next)=>{
    Product.findAll({
      where:{
        status:"review"
      }
    }).then((inReviewProducts)=>{
      res.send(inReviewProducts)
    })
  })
  .put('/', (req, res, next)=>{
    const productId = req.body.productId
    const status = req.body.status

    Product.update({
      status
    }, {
      where: {
        id: productId
      }
    })
      .then((resp => {
        res.json(resp)
      }))
  })